import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import axios from "axios";
import { saveToFirestore } from "./firebase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // Save to PostgreSQL
      await storage.createContactSubmission(input);

      // Save to Firestore (awaited but errors are caught — won't block user response)
      try {
        await saveToFirestore("contact_submissions", {
          name: input.name,
          email: input.email,
          phone: input.phone ?? "",
          company: input.company ?? "",
          service: input.service,
          budget: input.budget,
          message: input.message,
        });
      } catch (err: any) {
        console.error("Firestore save failed:", err.message ?? err);
      }

      // Handle external integrations (Brevo & Podio)
      // We wrap these in try-catch blocks so they don't block the user response if they fail configuration
      
      const errors: string[] = [];

      // Brevo Integration
      if (process.env.BREVO_API_KEY) {
        try {
          await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
              sender: { name: "Agency Website", email: "no-reply@agency.com" }, // Ideally configured env var
              to: [{ email: "team@agency.com", name: "Agency Team" }], // Ideally configured env var
              subject: `New Lead: ${input.service}`,
              htmlContent: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${input.name}</p>
                <p><strong>Email:</strong> ${input.email}</p>
                <p><strong>Phone:</strong> ${input.phone || "N/A"}</p>
                <p><strong>Company:</strong> ${input.company || "N/A"}</p>
                <p><strong>Service:</strong> ${input.service}</p>
                <p><strong>Budget:</strong> ${input.budget}</p>
                <p><strong>Message:</strong></p>
                <p>${input.message}</p>
              `,
            },
            {
              headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error: any) {
          console.error("Brevo Error:", error.response?.data || error.message);
          errors.push("Failed to send email notification");
        }
      } else {
        console.warn("Skipping Brevo: BREVO_API_KEY not set");
      }

      // Podio Integration
      if (process.env.PODIO_CLIENT_ID && process.env.PODIO_APP_ID) {
         // Podio implementation is complex (OAuth flow usually required for app access)
         // For server-to-server, we often use app authentication.
         // This is a placeholder for the logic.
         console.log("Podio integration would trigger here with:", input);
      } else {
         console.warn("Skipping Podio: Missing Podio credentials");
      }

      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}

"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "flutterflow", label: "FlutterFlow App" },
  { value: "podio", label: "Podio Solutions" },
  { value: "retool", label: "Retool Development" },
  { value: "lovable", label: "Lovable Builds" },
  { value: "replit", label: "Replit Development" },
  { value: "custom-api", label: "Custom API Integration" },
  { value: "other", label: "Other / Not Sure" },
];

const BUDGET_OPTIONS = [
  { value: "<5k", label: "Less than $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "10k-25k", label: "$10k – $25k" },
  { value: "25k+", label: "$25k+" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  background: "#12161F",
  border: "1px solid #232A36",
  borderRadius: "6px",
  color: "#E9EBEF",
  padding: "0 14px",
  fontSize: "14px",
  fontFamily: "var(--font-body)",
  outline: "none",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "100px",
  background: "#12161F",
  border: "1px solid #232A36",
  borderRadius: "6px",
  color: "#E9EBEF",
  padding: "12px 14px",
  fontSize: "14px",
  fontFamily: "var(--font-body)",
  outline: "none",
  resize: "vertical",
};

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService ?? "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.budget || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Submission failed");
      }
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", service: defaultService ?? "", budget: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle className="w-12 h-12" style={{ color: "#4A5FBD" }} />
        <h3 className="text-xl font-semibold" style={{ color: "#E9EBEF" }}>Message received!</h3>
        <p style={{ color: "#8A93A3" }}>We'll be in touch within one business day.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm underline"
          style={{ color: "#4A5FBD" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          data-testid="input-name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          data-testid="input-email"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          data-testid="input-phone"
        />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          style={inputStyle}
          data-testid="input-company"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={selectStyle}
          data-testid="select-service"
        >
          <option value="" disabled>Service *</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          style={selectStyle}
          data-testid="select-budget"
        >
          <option value="" disabled>Budget *</option>
          {BUDGET_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your project *"
        value={formData.message}
        onChange={handleChange}
        style={textareaStyle}
        data-testid="textarea-message"
      />
      {errorMsg && (
        <p className="text-sm" style={{ color: "#E53935" }}>{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        data-testid="button-submit-contact"
        className="w-full h-11 flex items-center justify-center gap-2 font-semibold text-sm transition-colors"
        style={{
          background: status === "loading" ? "#3A4FAD" : "#4A5FBD",
          color: "#E9EBEF",
          borderRadius: "6px",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}

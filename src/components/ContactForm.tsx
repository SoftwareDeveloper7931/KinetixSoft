"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle, Sparkles } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "flutterflow", label: "FlutterFlow App Development" },
  { value: "lovable", label: "Lovable AI Web App" },
  { value: "retool", label: "Retool Internal Tools & Dashboards" },
  { value: "podio", label: "Podio CRM & Workflow Systems" },
  { value: "replit", label: "Replit Full-Stack AI Development" },
  { value: "bubble", label: "Bubble No-Code Web App" },
  { value: "custom-api", label: "Custom API & Cloud Integration" },
  { value: "other", label: "Other / Custom Software Build" },
];

const BUDGET_OPTIONS = [
  { value: "<5k", label: "Less than $5,000" },
  { value: "5k-10k", label: "$5,000 – $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k+", label: "$25,000+" },
];

const inputClass =
  "w-full h-11 px-4 text-sm rounded-lg bg-[#111215] border border-[#222630] text-[#F3F4F6] placeholder-gray-500 focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/20 outline-none transition-all";

const selectClass =
  "w-full h-11 px-4 text-sm rounded-lg bg-[#111215] border border-[#222630] text-[#F3F4F6] focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/20 outline-none transition-all cursor-pointer";

const textareaClass =
  "w-full min-h-[110px] p-4 text-sm rounded-lg bg-[#111215] border border-[#222630] text-[#F3F4F6] placeholder-gray-500 focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/20 outline-none transition-all resize-y";

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
      setErrorMsg("Please fill in all required fields marked with *.");
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: defaultService ?? "",
        budget: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message ?? "Something went wrong. Please reach us at info@kinetixsoft.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-xl glass-card border border-[#007BA7]/40 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2D95]/10 rounded-full blur-2xl" />
        <div className="w-14 h-14 mx-auto rounded-full bg-[#007BA7]/20 border border-[#007BA7]/40 flex items-center justify-center text-[#00A3DE] mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Thank you for reaching out. A senior engineer from our team will review your requirements and respond within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2 rounded-lg text-sm font-semibold bg-[#111215] border border-white/10 hover:border-[#007BA7] text-white transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Your Name <span className="text-[#FF2D95]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Work Email <span className="text-[#FF2D95]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">Company / Project Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Ventures"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Primary Service Needed <span className="text-[#FF2D95]">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>Select platform / service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#111215]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Estimated Budget <span className="text-[#FF2D95]">*</span>
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>Select budget bracket</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#111215]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1.5">
          Project Summary & Requirements <span className="text-[#FF2D95]">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us about the user flows, target timeline, features, or integrations needed..."
          required
          className={textareaClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        data-testid="contact-form-submit"
        className="w-full btn-duo py-3.5 text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(255,45,149,0.45)]"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Brief</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-muted-foreground mt-2">
        🔒 Confidential scoping · Direct senior engineer response in &lt; 24h
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-wrap">
      <h3 className="contact-form-title">Let&apos;s build something great</h3>
      <p className="contact-form-sub">
        Have a project in mind? Send me a message and I&apos;ll get back to you
        soon!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="form-input"
              placeholder="Suriya B"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="form-input"
              placeholder="hello@example.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="form-input"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="form-submit"
        >
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p className="form-success">
            ✓ Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-error">
            ✗ Failed to send. Please check your setup and try again.
          </p>
        )}
      </form>
    </div>
  );
}

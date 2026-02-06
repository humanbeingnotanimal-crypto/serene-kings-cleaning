import React, { useState } from "react";

// MAIN APP
export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.status >= 400) throw new Error("Submission failed");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Sorry — something went wrong. Please call or WhatsApp us and we’ll get back to you quickly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#f0fdf4",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
<header style={{ textAlign: "center", padding: "40px 20px" }}>
  <img src="/logo.svg" alt="Serene Kings Cleaning" style={{ height: "70px", marginBottom: "10px" }} />
        <h1 style={{ fontSize: "36px", color: "#065f46" }}>
          Serene Kings Cleaning Services Ltd
        </h1>
        <p style={{ fontSize: "18px", color: "#065f46" }}>
          Professional Cleaning Services for Homes & Offices in London & Surrounding
          Areas
        </p>

        <a
          href="tel:02045136327"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#059669",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Call Now
        </a>
      </header>

      {/* CONTACT FORM */}
      <section
        style={{
          maxWidth: "500px",
          margin: "0 auto 60px",
          padding: "0 20px",
        }}
      >
        {submitted && (
          <p
            style={{
              background: "#dcfce7",
              color: "#065f46",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Thank you — your message has been sent successfully.
          </p>
        )}
        {error && (
          <p
            style={{
              background: "#fee2e2",
              color: "#7f1d1d",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            {error}
          </p>
        )}


        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="bot-field" style={{ display: "none" }} />

          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
            }}
          ></textarea>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#059669",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* WHATSAPP BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <a
          href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#22c55e",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      {/* GOOGLE MAPS */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <a
          href="https://www.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London,+WC2H+9JQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#059669",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          View on Google Maps
        </a>
      </section>
    </div>
  );
}

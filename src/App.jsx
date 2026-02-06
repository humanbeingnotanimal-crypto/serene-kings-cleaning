import React from "react";

// MAIN APP
export default function App() {
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
        <img
          src="/logo.svg"
          alt="Serene Kings Cleaning"
          style={{ height: "70px", marginBottom: "10px" }}
        />
        <h1 style={{ fontSize: "36px", color: "#065f46" }}>
          Serene Kings Cleaning Services Ltd
        </h1>
        <p style={{ fontSize: "18px", color: "#065f46" }}>
          Professional Cleaning Services for Homes & Offices in London &
          Surrounding Areas
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
<section style={{ padding: "10px 20px 40px", textAlign: "center" }}>
  <h2 style={{ color: "#065f46", fontSize: "26px", marginBottom: "16px" }}>
    Our Cleaning Work
  </h2>

  <div
    style={{
      display: "flex",
      gap: "18px",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    <img
      src="/cleaning-1.jpg"
      alt="Professional cleaning service"
      style={{
        width: "320px",
        maxWidth: "95%",
        borderRadius: "14px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    />
    <img
      src="/cleaning-2.jpg"
      alt="Home cleaning service"
      style={{
        width: "320px",
        maxWidth: "95%",
        borderRadius: "14px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    />
    <img
      src="/cleaning-3.jpg"
      alt="Commercial cleaning service"
      style={{
        width: "320px",
        maxWidth: "95%",
        borderRadius: "14px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    />
  </div>
</section>

      {/* CONTACT FORM */}
      <section
        style={{
          maxWidth: "500px",
          margin: "0 auto 60px",
          padding: "0 20px",
        }}
      >
        <form
          name="contact"
          method="POST"
          action="/thanks.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* Netlify honeypot (ONLY ONE) */}
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
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#059669",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
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

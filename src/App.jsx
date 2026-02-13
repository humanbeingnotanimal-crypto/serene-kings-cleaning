import React from "react";

// Google-style stars
function Stars({ value = 5, size = 16 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span aria-label={`${full} out of 5 stars`} title={`${full} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            color: i < full ? "#f59e0b" : "#d1d5db",
            fontSize: `${size}px`,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

// Review slider (data passed in)
function ReviewSlider({ softCard, reviews }) {
  const [i, setI] = React.useState(0);

  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setI((v) => (v + 1) % reviews.length);

  const r = reviews[i];

  return (
    <div style={{ ...softCard, padding: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: 950, color: "#065f46", fontSize: "16px" }}>{r.name}</div>
          <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Stars value={r.rating} />
            <span style={{ color: "#0f5132", fontWeight: 800, fontSize: "13px" }}>{r.role}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="button"
            onClick={prev}
            style={{
              border: "1px solid rgba(6,95,70,0.18)",
              background: "#fff",
              borderRadius: "12px",
              padding: "10px 14px",
              fontWeight: 900,
              cursor: "pointer",
              color: "#065f46",
              minWidth: "48px",
            }}
            aria-label="Previous review"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            style={{
              border: "1px solid rgba(6,95,70,0.18)",
              background: "#fff",
              borderRadius: "12px",
              padding: "10px 14px",
              fontWeight: 900,
              cursor: "pointer",
              color: "#065f46",
              minWidth: "48px",
            }}
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>

      <div style={{ marginTop: "14px", color: "#0f5132", lineHeight: 1.8, fontSize: "14px" }}>
        “{r.text}”
      </div>

      <div style={{ marginTop: "14px", color: "#065f46", fontWeight: 900, fontSize: "12px" }}>
        {i + 1} / {reviews.length}
      </div>
    </div>
  );
}

export default function App() {
  const container = {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    background: "#f0fdf4",
    minHeight: "100vh",
    color: "#064e3b",
  };

  const maxWrap = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const section = {
    padding: "44px 0",
  };

  const softCard = {
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid rgba(6,95,70,0.10)",
  };

  const cardShadow = "0 20px 50px rgba(0,0,0,0.18)";

  const primaryBtn = {
    display: "inline-block",
    padding: "14px 26px",
    backgroundColor: "#059669",
    color: "#fff",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 800,
    boxShadow: "0 10px 22px rgba(0,0,0,0.22)",
  };

  const secondaryBtn = {
    display: "inline-block",
    padding: "14px 26px",
    backgroundColor: "rgba(255,255,255,0.92)",
    color: "#065f46",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 900,
    border: "1px solid rgba(6,95,70,0.18)",
    boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
  };

  const chips = [
    "Domestic & commercial cleaning",
    "High attention to detail",
    "Flexible bookings",
    "Fast quotes by phone or WhatsApp",
    "Professional & reliable",
  ];

  const services = [
    { title: "Domestic Cleaning", desc: "Regular or one-off home cleaning tailored to your routine and priorities." },
    { title: "Deep Cleaning", desc: "A top-to-bottom clean for kitchens, bathrooms, floors and hidden build-up." },
    { title: "End of Tenancy", desc: "Move-in / move-out cleaning designed to meet landlord and agency standards." },
    { title: "Office & Commercial", desc: "Clean, hygienic workspaces — reliable scheduling available." },
  ];

  // Placeholder reviews (use until you have permission for real names)
  const reviews = [
    {
      name: "Local Client",
      role: "Deep Clean",
      rating: 5,
      text: "Booked a deep clean and was genuinely impressed. The team arrived on time, worked efficiently and left the place looking and smelling fresh. Very professional and easy to communicate with.",
    },
    {
      name: "Homeowner – London",
      role: "Regular Cleaning",
      rating: 5,
      text: "Reliable and respectful service. Attention to detail was excellent and they took real care with the property. Will definitely be using Serene Kings Cleaning regularly.",
    },
    {
      name: "Office Client",
      role: "Commercial Cleaning",
      rating: 5,
      text: "We needed a dependable office cleaner and they delivered exactly that. Consistent, thorough and flexible with scheduling. The workspace feels much better maintained now.",
    },
  ];

  return (
    <div style={container}>
      {/* TOP HEADER */}
      <header style={{ textAlign: "center", padding: "34px 20px 10px" }}>
        <img src="/logo.svg" alt="Serene Kings Cleaning" style={{ height: "96px", marginBottom: "10px" }} />
        <h1 style={{ fontSize: "40px", color: "#065f46", margin: "0 0 8px", fontWeight: 900 }}>
          Serene Kings Cleaning Services Ltd
        </h1>
        {/* SEO line: London + surrounding areas + services */}
        <p style={{ fontSize: "18px", color: "#065f46", margin: "0 auto", maxWidth: "860px", lineHeight: 1.55 }}>
          Domestic, deep clean, end of tenancy and office cleaning across London & surrounding areas.
        </p>
      </header>

      {/* PREMIUM HERO BANNER (office background) */}
      <section style={{ padding: "16px 0 10px" }}>
        <div
          style={{
            ...maxWrap,
            borderRadius: "22px",
            overflow: "hidden",
            boxShadow: cardShadow,
            position: "relative",
            backgroundImage: "url(/cleaning-3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "380px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(6,95,70,0.92) 0%, rgba(6,95,70,0.62) 42%, rgba(6,95,70,0.18) 100%)",
            }}
          />

          <div style={{ position: "relative", padding: "62px 30px", maxWidth: "650px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.92)",
                fontWeight: 800,
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Luxury-level cleaning standards
            </div>

            <h2 style={{ color: "#fff", fontSize: "40px", lineHeight: 1.15, margin: "14px 0 10px", fontWeight: 950 }}>
              A spotless space, every time.
            </h2>

            <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "17px", lineHeight: 1.7, margin: 0 }}>
              Domestic and commercial cleaning delivered with care, consistency, and attention to detail.
              Fast quotes by phone, WhatsApp, or the contact form below.
            </p>

            <p style={{ color: "#bbf7d0", fontSize: "16px", fontStyle: "italic", margin: "16px 0 22px" }}>
              Rendering Royal Standard, Calm Home Services with smile.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
  href="tel:02045136327"
  onClick={() => gtag_report_conversion('tel:02045136327')}
>

                Call Now
              </a>
              <a
                href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
                target="_blank"
                rel="noopener noreferrer"
                style={secondaryBtn}
              >
                WhatsApp Quote
              </a>
            </div>
            <div style={{ marginTop: "14px", color: "#bbf7d0", fontWeight: 700 }}>
✓ Reliable  
✓ Trusted  
✓ London & Surrounding Areas
</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <div style={maxWrap}>
          <div style={{ textAlign: "center", marginBottom: "18px" }}>
            <h2 style={{ color: "#065f46", fontSize: "30px", margin: 0, fontWeight: 950 }}>Our Services</h2>
            <p style={{ margin: "10px auto 0", maxWidth: "820px", color: "#065f46", lineHeight: 1.6 }}>
              Choose a service that suits your space — we’ll tailor the clean to your needs and standards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {services.map((s) => (
              <div key={s.title} style={{ ...softCard, padding: "18px" }}>
                <div style={{ color: "#065f46", fontWeight: 950, fontSize: "18px" }}>{s.title}</div>
                <div style={{ marginTop: "8px", color: "#0f5132", lineHeight: 1.65, fontSize: "14px" }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "18px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {chips.map((item) => (
              <span
                key={item}
                style={{
                  background: "#dcfce7",
                  color: "#065f46",
                  padding: "10px 12px",
                  borderRadius: "999px",
                  fontWeight: 900,
                  fontSize: "13px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section style={{ ...section, paddingTop: "0" }}>
        <div style={maxWrap}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <h2 style={{ color: "#065f46", fontSize: "30px", margin: 0, fontWeight: 950 }}>Our Cleaning Work</h2>
            <p style={{ margin: "10px auto 0", maxWidth: "820px", color: "#065f46", lineHeight: 1.6 }}>
              A few examples of the standard we aim for — clean, fresh, and welcoming.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
            {[
              { src: "/cleaning-1.jpg", alt: "Professional cleaning service" },
              { src: "/cleaning-2.jpg", alt: "Family home cleaning service" },
              { src: "/cleaning-3.jpg", alt: "Office & commercial cleaning service" },
            ].map((img) => (
              <div key={img.src} style={{ ...softCard, overflow: "hidden" }}>
                <div style={{ height: "240px", background: "#e8f5ef" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ fontWeight: 950, color: "#065f46" }}>{img.alt}</div>
                  <div style={{ marginTop: "6px", color: "#0f5132", fontSize: "14px", lineHeight: 1.6 }}>
                    Clean, detailed, and finished to a high standard.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section style={{ ...section, paddingTop: "0" }}>
  <div style={maxWrap}>
    <div style={{ ...softCard, padding: "22px" }}>
      <h2 style={{ color: "#065f46", fontSize: "30px", margin: "0 0 10px", fontWeight: 950 }}>
        About Serene Kings Cleaning
      </h2>

      <p style={{ fontSize: "16px", lineHeight: 1.8, margin: "0 0 12px" }}>
Serene Kings Cleaning Services Ltd provides reliable domestic and commercial cleaning across London and surrounding areas including Central London, Croydon, Stratford, Wembley, Greenwich, Hackney, Canary Wharf, Islington, Chelsea, Clapham and more.      </p>

      <p style={{ fontSize: "16px", lineHeight: 1.8, margin: "0 0 14px" }}>
        We focus on quality, consistency, and clear communication — arriving on time and leaving your space spotless, fresh, and welcoming.
      </p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {chips.map((item) => (
          <span
            key={item}
            style={{
              background: "#dcfce7",
              color: "#065f46",
              padding: "10px 12px",
              borderRadius: "999px",
              fontWeight: 900,
              fontSize: "13px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* REVIEWS */}
      <section style={{ padding: "0 0 44px" }}>
        <div style={maxWrap}>
          <div
            style={{
              ...softCard,
              padding: "18px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              <div style={{ fontWeight: 950, color: "#065f46", fontSize: "18px" }}>Excellent</div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <Stars value={5} />
                <span style={{ fontWeight: 900, color: "#065f46" }}>5.0</span>
                <span style={{ color: "#0f5132" }}>(placeholder reviews)</span>
              </div>
            </div>

            <a
              href="#contact"
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                background: "#059669",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              Get a Quote
            </a>
          </div>

          <ReviewSlider softCard={softCard} reviews={reviews} />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" style={{ padding: "10px 0 60px" }}>
        <div style={{ ...maxWrap, maxWidth: "640px" }}>
          <div style={{ ...softCard, padding: "18px" }}>
            <h2 style={{ margin: "6px 0 14px", color: "#065f46", textAlign: "center", fontWeight: 950 }}>
              Get a Fast Quote
            </h2>

            <form name="contact" method="POST" action="/thanks.html" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />

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
                  borderRadius: "12px",
                  border: "1px solid rgba(6,95,70,0.20)",
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
                  borderRadius: "12px",
                  border: "1px solid rgba(6,95,70,0.20)",
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
                  borderRadius: "12px",
                  border: "1px solid rgba(6,95,70,0.20)",
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
                  borderRadius: "12px",
                  border: "1px solid rgba(6,95,70,0.20)",
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
                  borderRadius: "12px",
                  fontWeight: 950,
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <a
                href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 900,
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "14px" }}>
              <a href="tel:02045136327" style={{ color: "#059669", fontWeight: 900, textDecoration: "none" }}>
                Or call: 020 4513 6327
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section style={{ textAlign: "center", paddingBottom: "60px" }}>
        <a
          href="https://www.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London,+WC2H+9JQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#059669", fontWeight: 900, textDecoration: "underline" }}
        >
          View on Google Maps
        </a>
      </section>
      <a
  href="https://wa.me/447757789668?text=Hello%20I%20would%20like%20a%20cleaning%20quote"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "#fff",
    padding: "14px 16px",
    borderRadius: "50px",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    zIndex: 999,
  }}
>
💬 WhatsApp
</a>
    </div>
  );
}

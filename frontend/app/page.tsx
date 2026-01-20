import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: "80px 32px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 600, lineHeight: 1.2, marginBottom: "24px" }}>
          Marketing that runs without you pretending to enjoy it
        </h1>
        <p style={{ fontSize: "20px", color: "#666", marginBottom: "40px" }}>
          Social media handled quietly in the background, so you can work on what actually matters.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/signup" style={{
            backgroundColor: "#111",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 500
          }}>Start Free</Link>
          <Link href="/pricing" style={{
            backgroundColor: "#fff",
            color: "#111",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 500,
            border: "1px solid #ddd"
          }}>View Pricing</Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fafafa" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 600, textAlign: "center", marginBottom: "48px" }}>
          What This Handles For You
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>Posts are written without you</h3>
            <p style={{ color: "#666" }}>AI generates content based on your brand. You approve or let it run.</p>
          </div>
          <div style={{ textAlign: "center", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>Your social presence continues while you work</h3>
            <p style={{ color: "#666" }}>Scheduled posts keep your brand visible without daily effort.</p>
          </div>
          <div style={{ textAlign: "center", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>The cycle keeps going</h3>
            <p style={{ color: "#666" }}>Set it once. Content flows automatically. Adjust when needed.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: "60px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", color: "#666" }}>500+ founders have taken this off their plate</p>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px 32px", textAlign: "center", backgroundColor: "#111", color: "#fff" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px" }}>One less thing to manage</h2>
        <p style={{ color: "#aaa", marginBottom: "32px" }}>Start free. No credit card required.</p>
        <Link href="/signup" style={{
          backgroundColor: "#fff",
          color: "#111",
          padding: "14px 28px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 500
        }}>Start Free</Link>
      </section>

      <Footer />
    </div>
  );
}

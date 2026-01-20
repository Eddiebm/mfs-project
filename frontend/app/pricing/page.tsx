"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    features: ["1 campaign", "5 posts per month", "1 social account", "Basic AI content"],
    cta: "Start Free"
  },
  {
    name: "Starter",
    monthly: 29,
    annual: 24,
    features: ["3 campaigns", "30 posts per month", "3 social accounts", "Advanced AI content", "Analytics dashboard"],
    cta: "Get Started"
  },
  {
    name: "Pro",
    monthly: 79,
    annual: 66,
    popular: true,
    features: ["10 campaigns", "Unlimited posts", "10 social accounts", "Premium AI content", "Advanced analytics", "Priority support", "Custom scheduling"],
    cta: "Get Started"
  },
  {
    name: "Agency",
    monthly: 199,
    annual: 165,
    features: ["Unlimited campaigns", "Unlimited posts", "Unlimited accounts", "White-label option", "Team collaboration", "Dedicated support", "API access", "Custom integrations"],
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />
      
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 600, marginBottom: "24px" }}>Simple Pricing</h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "32px" }}>Start free. Scale as you grow.</p>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "48px" }}>
          <span style={{ color: annual ? "#999" : "#111" }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            style={{
              width: "56px",
              height: "28px",
              backgroundColor: annual ? "#111" : "#ddd",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              position: "relative"
            }}
          >
            <div style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "2px",
              left: annual ? "30px" : "2px",
              transition: "left 0.2s"
            }} />
          </button>
          <span style={{ color: annual ? "#111" : "#999" }}>Annual</span>
          <span style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>Save 17%</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              padding: "32px 24px",
              backgroundColor: plan.popular ? "#111" : "#fff",
              color: plan.popular ? "#fff" : "#111",
              borderRadius: "12px",
              border: plan.popular ? "none" : "1px solid #eee",
              position: "relative"
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: 500
                }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>{plan.name}</h3>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "48px", fontWeight: 600 }}>${annual ? plan.annual : plan.monthly}</span>
                <span style={{ color: plan.popular ? "#aaa" : "#666" }}>/mo</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px", textAlign: "left" }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ padding: "8px 0", color: plan.popular ? "#ccc" : "#666", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: plan.popular ? "#4caf50" : "#111" }}>-</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" style={{
                display: "block",
                textAlign: "center",
                padding: "12px 24px",
                backgroundColor: plan.popular ? "#fff" : "#111",
                color: plan.popular ? "#111" : "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 500
              }}>{plan.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

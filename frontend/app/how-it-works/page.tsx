import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    { title: "Sign up", time: "30 seconds", desc: "Create your account with just an email." },
    { title: "Create campaign", time: "2 minutes", desc: "Define your brand voice and target audience." },
    { title: "Generate posts with AI", time: "Instant", desc: "Our AI creates content that matches your brand." },
    { title: "Connect and let it run", time: "Set once", desc: "Link your social accounts and watch it work." }
  ];

  const campaignSteps = [
    { num: 1, title: "Name your campaign", desc: "Give it a clear name so you can track it later." },
    { num: 2, title: "Define your audience", desc: "Who are you trying to reach? Be specific." },
    { num: 3, title: "Set your tone", desc: "Professional? Casual? Let the AI match your voice." },
    { num: 4, title: "Choose platforms", desc: "Select which social networks to post on." },
    { num: 5, title: "Set frequency", desc: "How often should we post? Daily, weekly, custom." },
    { num: 6, title: "Review and launch", desc: "Check the first batch and approve. Then it runs." }
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />
      
      <section style={{ padding: "80px 32px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 600, marginBottom: "24px" }}>How It Works</h1>
        <p style={{ fontSize: "18px", color: "#666" }}>Four steps to automated marketing</p>
      </section>

      <section style={{ padding: "40px 32px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", marginBottom: "80px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center", padding: "24px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <div style={{ fontSize: "14px", color: "#999", marginBottom: "8px" }}>{step.time}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>{step.title}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "40px", textAlign: "center" }}>
          Creating Your First Campaign
        </h2>
        <div style={{ display: "grid", gap: "24px" }}>
          {campaignSteps.map((step) => (
            <div key={step.num} style={{ display: "flex", gap: "24px", alignItems: "flex-start", padding: "24px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <div style={{ width: "40px", height: "40px", backgroundColor: "#111", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, flexShrink: 0 }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ color: "#666" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 32px", textAlign: "center", backgroundColor: "#111", color: "#fff" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "24px" }}>Ready to start?</h2>
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

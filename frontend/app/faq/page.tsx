"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const faqs = [
  { q: "Is this just another marketing tool?", a: "No. This is about removing marketing from your to-do list. It runs in the background so you can focus on building." },
  { q: "Why does repetition matter?", a: "People are busy. They see things multiple times before they register. Repetition is not annoying - it is how memory works." },
  { q: "Do I need to be good at marketing?", a: "No. You need to be visible. The AI handles the content. You just need to show up consistently." },
  { q: "How is this different from scheduling tools?", a: "Scheduling tools require you to write content. This writes it for you, based on your brand and audience." },
  { q: "What if I do not like the posts?", a: "You can edit, approve, or regenerate any post before it goes live. You stay in control." },
  { q: "How long before I see results?", a: "Most people stop right before it starts working. Give it 90 days of consistent presence. That is when things shift." },
  { q: "Is marketing really this simple?", a: "The concept is simple. Execution is where people fail. This handles the execution." },
  { q: "What platforms do you support?", a: "Twitter/X, LinkedIn, Facebook, and Instagram. More coming based on demand." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts. Cancel whenever you want." },
  { q: "What is the philosophy behind this?", a: "Your work deserves to be seen. Marketing is not manipulation - it is letting people know something exists. We automate that." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />
      
      <section style={{ padding: "80px 32px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 600, marginBottom: "24px" }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: "18px", color: "#666" }}>Answers to common questions about our approach</p>
      </section>

      <section style={{ padding: "0 32px 80px", maxWidth: "700px", margin: "0 auto", width: "100%" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #eee" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                padding: "24px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 500 }}>{faq.q}</span>
              <span style={{ fontSize: "24px", color: "#999" }}>{open === i ? "-" : "+"}</span>
            </button>
            {open === i && (
              <p style={{ padding: "0 0 24px", color: "#666", lineHeight: 1.6 }}>{faq.a}</p>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

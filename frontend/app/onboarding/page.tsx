"use client";
import { useState } from "react";
import { apiPost } from "../../lib/api";

export default function Onboarding() {
  const [goal, setGoal] = useState("Build authority");
  async function activate() {
    await apiPost("/campaigns", { objective: goal });
    window.location.href = "/dashboard";
  }
  return (
    <main style={{ padding:40 }}>
      <select value={goal} onChange={e=>setGoal(e.target.value)}>
        <option>Get traffic</option>
        <option>Capture leads</option>
        <option>Sell products</option>
        <option>Build authority</option>
      </select>
      <button onClick={activate}>Activate Autopilot</button>
    </main>
  );
}

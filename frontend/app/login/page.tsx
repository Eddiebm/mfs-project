"use client";
import { useState } from "react";
import { apiPost } from "../../lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  async function login() {
    await apiPost("/auth/login", { email });
    window.location.href = "/onboarding";
  }
  return (
    <main style={{ padding:40 }}>
      <input value={email} onChange={e=>setEmail(e.target.value)} />
      <button onClick={login}>Continue</button>
    </main>
  );
}

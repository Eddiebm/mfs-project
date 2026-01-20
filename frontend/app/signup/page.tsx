"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../components/Navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!terms) {
      setError("Please accept the terms and privacy policy");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
      } else if (data.user) {
        setSuccess(true);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navigation />
        <section style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
          <div style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "16px" }}>Check your email</h1>
            <p style={{ color: "#666", marginBottom: "24px" }}>
              We sent a confirmation link to {email}. Click the link to complete your registration.
            </p>
            <Link href="/login" style={{ color: "#111", fontWeight: 500 }}>Back to Login</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />
      
      <section style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "8px", textAlign: "center" }}>Create your account</h1>
          <p style={{ color: "#666", marginBottom: "32px", textAlign: "center" }}>Start free. No credit card required.</p>
          
          {error && (
            <div style={{ backgroundColor: "#fee", color: "#c00", padding: "12px", borderRadius: "6px", marginBottom: "20px", textAlign: "center" }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box"
                }}
                placeholder="you@example.com"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box"
                }}
                placeholder="Create a password (min 6 characters)"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box"
                }}
                placeholder="Confirm your password"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  style={{ width: "18px", height: "18px" }}
                />
                <span style={{ color: "#666", fontSize: "14px" }}>
                  I agree to the <Link href="/terms" style={{ color: "#111" }}>Terms</Link> and <Link href="/privacy" style={{ color: "#111" }}>Privacy Policy</Link>
                </span>
              </label>
            </div>
            <button type="submit" disabled={loading} style={{
              width: "100%",
              padding: "14px",
              backgroundColor: loading ? "#666" : "#111",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer"
            }}>{loading ? "Creating account..." : "Create Account"}</button>
          </form>
          
          <p style={{ textAlign: "center", marginTop: "24px", color: "#666" }}>
            Already have an account? <Link href="/login" style={{ color: "#111", fontWeight: 500 }}>Log in</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

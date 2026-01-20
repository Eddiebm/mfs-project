import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      padding: "40px 32px",
      borderTop: "1px solid #eee",
      textAlign: "center",
      backgroundColor: "#fafafa"
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
        <Link href="/free-book" style={{ color: "#666", textDecoration: "none" }}>How Things Get Noticed</Link>
        <Link href="/privacy" style={{ color: "#666", textDecoration: "none" }}>Privacy</Link>
        <Link href="/terms" style={{ color: "#666", textDecoration: "none" }}>Terms</Link>
      </div>
      <p style={{ color: "#999", fontSize: "14px" }}>MFS Autopilot</p>
    </footer>
  );
}

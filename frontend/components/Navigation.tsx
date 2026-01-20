"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const bgColor = dark ? "#000" : "#fff";
  const textColor = dark ? "#fff" : "#111";
  const linkColor = dark ? "#aaa" : "#666";
  const borderColor = dark ? "#222" : "#eee";

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      borderBottom: `1px solid ${borderColor}`,
      backgroundColor: bgColor,
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <Link href="/" style={{ color: textColor, textDecoration: "none", fontWeight: 600, fontSize: "18px" }}>
        MFS Autopilot
      </Link>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link href="/how-it-works" style={{ color: pathname === "/how-it-works" ? textColor : linkColor, textDecoration: "none" }}>How It Works</Link>
        <Link href="/faq" style={{ color: pathname === "/faq" ? textColor : linkColor, textDecoration: "none" }}>FAQ</Link>
        <Link href="/pricing" style={{ color: pathname === "/pricing" ? textColor : linkColor, textDecoration: "none" }}>Pricing</Link>
        <Link href="/free-book" style={{ color: pathname === "/free-book" ? textColor : linkColor, textDecoration: "none" }}>Free Book</Link>
        <Link href="/login" style={{ color: pathname === "/login" ? textColor : linkColor, textDecoration: "none" }}>Login</Link>
        <Link href="/signup" style={{
          color: dark ? "#fff" : "#fff",
          textDecoration: "none",
          backgroundColor: dark ? "#333" : "#111",
          padding: "8px 16px",
          borderRadius: "4px"
        }}>Start Free</Link>
      </div>
    </nav>
  );
}

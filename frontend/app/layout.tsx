import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MFS Autopilot - Marketing that runs without you",
  description: "Social media handled quietly in the background, so you can work on what actually matters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

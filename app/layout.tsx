import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Kim — Full-stack Engineer",
  description: "Portfolio of Alex Kim, a full-stack engineer building products that scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

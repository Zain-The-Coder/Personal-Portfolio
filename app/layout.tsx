import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Ur Rehman / MERN Stack Developer",
  description: "Portfolio of Zain Ur Rehman, a full-stack engineer building products that scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

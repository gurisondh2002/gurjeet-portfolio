import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurjeet Kaur | Software Development Engineer",
  description:
    "Portfolio of Gurjeet Kaur — SDE at BlackRock. React, Java, Node.js, Spring Boot, AWS.",
  openGraph: {
    title: "Gurjeet Kaur | SDE @ BlackRock",
    description: "Full-stack engineer building scalable enterprise applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

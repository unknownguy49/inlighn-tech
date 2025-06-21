import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InlighnTech - Immersive Tech Education",
  description:
    "Master tomorrow's technologies with our immersive internship programs in Cybersecurity, Full Stack Development, Data Science, and Data Analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/inlighn-tech-logo.png"
          type="image/png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

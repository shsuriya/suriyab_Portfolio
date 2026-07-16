import type { Metadata } from "next";
import "./globals.css";
import ClientThreeBackgroundWrapper from "@/components/ClientThreeBackgroundWrapper";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Suriya B | React Front-End Developer",
  description:
    "Portfolio of Suriya B, a React Front-End Developer with 3+ years of experience building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <ClientThreeBackgroundWrapper />
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}

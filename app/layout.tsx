import type { Metadata } from "next";
import "./globals.css";
import { DOMAIN_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${DOMAIN_NAME} — Premium AI Domain For Sale`,
  description: `${DOMAIN_NAME} is a premium, brandable domain name for AI startups, industrial automation, and intelligent systems. Available for purchase.`,
  openGraph: {
    title: `${DOMAIN_NAME} — Premium AI Domain For Sale`,
    description: `A category-defining AI domain. Perfect for workflow automation, manufacturing intelligence, and AI deployment platforms.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

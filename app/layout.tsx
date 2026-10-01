import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://queridopaulo.github.io/personal-portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paulo Querido — Backend Software Engineer",
  description:
    "Backend engineer working across distributed systems, microservices and production infrastructure, moving toward AI and LLM platform engineering.",
  icons: { icon: "favicon.png", shortcut: "favicon.png" },
  openGraph: {
    title: "Paulo Querido — Backend Software Engineer",
    description: "Building the systems behind production AI.",
    type: "website",
    url: siteUrl,
    images: [{ url: "og.png", width: 1200, height: 630, alt: "Paulo Querido — Backend Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Querido — Backend Software Engineer",
    description: "Building the systems behind production AI.",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

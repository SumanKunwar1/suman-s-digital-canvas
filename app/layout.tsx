import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { site, person } from "@/content/site";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${person.name}` },
  description: site.description,
  authors: [{ name: person.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: person.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${person.name}, full stack developer` }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

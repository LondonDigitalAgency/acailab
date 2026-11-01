import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const siteUrl = "https://acailab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "açaílab — coming soon",
  description: "açaílab is on the way.",
  openGraph: {
    title: "açaílab — coming soon",
    description: "açaílab is on the way.",
    url: siteUrl,
    siteName: "açaílab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "açaílab — coming soon",
    description: "açaílab is on the way.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

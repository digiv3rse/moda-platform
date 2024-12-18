import "@/styles/globals.css";
import { cal, inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const title = "DiGi Moda – Digital Fashion Magazine.";
const description =
  "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!";
const image = "https://digimoda.xyz/thumbnail.png";

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://digimoda.xyz/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@vercel",
  },
  metadataBase: new URL("https://digimoda.xyz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

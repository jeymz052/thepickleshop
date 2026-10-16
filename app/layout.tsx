import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://the-pickle-shop-taytay.indigogoose3.chatgpt.site"),
  title: "The Pickle Shop | Private Pickleball Court in Taytay",
  description: "Reserve The Pickle Shop's private indoor pickleball court in Taytay, Rizal for ₱400 per hour.",
  icons: {
    icon: "/images/thepickleshopfavicon.png",
    shortcut: "/images/thepickleshopfavicon.png",
    apple: "/images/thepickleshopfavicon.png",
  },
  openGraph: {
    title: "The Pickle Shop | One Court. All Yours.",
    description: "Private indoor pickleball in Taytay, Rizal. Reserve Court 01 for ₱400 per hour.",
    images: [{ url: "/images/thepickleshopfavicon.png", width: 1200, height: 900, alt: "The Pickle Shop Private Court" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pickle Shop | One Court. All Yours.",
    description: "Private indoor pickleball in Taytay, Rizal. Reserve Court 01 for ₱400 per hour.",
    images: ["/images/thepickleshopfavicon.png"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

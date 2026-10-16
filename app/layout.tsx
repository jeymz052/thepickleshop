import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "The Pickle Shop | Private Pickleball Court in Taytay", description: "Reserve The Pickle Shop's private indoor pickleball court in Taytay, Rizal for ₱400 per hour." };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }

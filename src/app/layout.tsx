import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.islandgreenhousesales.ca"),
  title: {
    default: "Island Greenhouse Sales | Vancouver Island Greenhouses",
    template: "%s | Island Greenhouse Sales",
  },
  description:
    "Vancouver Island's #1 Planta Greenhouse dealer. Premium European-manufactured greenhouses built for the Canadian climate. Serving Vancouver Island and all of BC.",
  keywords: [
    "greenhouse",
    "greenhouses",
    "Vancouver Island",
    "BC",
    "British Columbia",
    "Planta",
    "Sungrow",
    "Sigma",
    "polycarbonate greenhouse",
    "backyard greenhouse",
  ],
  openGraph: {
    title: "Island Greenhouse Sales",
    description: "Vancouver Island's #1 Planta Greenhouse dealer. Premium European greenhouses for the Canadian climate.",
    type: "website",
    locale: "en_CA",
    siteName: "Island Greenhouse Sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

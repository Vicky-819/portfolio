import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vicky — Research · Growth · Digital",
  description:
    "Personal portfolio of Vicky (ShaoWen Sun) — research, growth, and digital practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <Providers>
          <Navbar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}

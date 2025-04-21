import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NavbarComponent } from "@/components/Navbar/NavbarComponent";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tunisiska - Transport",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "Tunisiska - Transport is a transport company that provides transportation services for goods and people.",
  keywords: [
    "Tunisia",
    "transport",
    "transportation",
    "logistics",
    "shipping",
    "freight",
    "delivery",
    "cargo",
    "Tunisia transport",
    "Tunisia logistics",
    "Tunisia shipping",
    "Tunisia freight",
    "Tunisia delivery",
    "Tunisia cargo",
    "Tunisia transport company",
    "Tunisia logistics company",
    "Tunisia shipping company",
    "Tunisia freight company",
    "Tunisia delivery company",
    "Tunisia cargo company",
    "Tunisia transport services",
    "Tunisia logistics services",
    "Tunisia shipping services",
    "Tunisia freight services",
    "Tunisia delivery services",
    "Tunisia cargo services",
    "Tunisia transport solutions",
    "Tunisia logistics solutions",
    "Tunisia shipping solutions",
    "Tunisia freight solutions",
    "Tunisia delivery solutions",
    "Tunisia cargo solutions",
    "Tunisia transport industry",
    "Tunisia logistics industry",
    "Tunisia shipping industry",
    "Tunisia freight industry",
    "Tunisia delivery industry",
    "Tunisia cargo industry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarComponent />
          {children}
          <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  );
}

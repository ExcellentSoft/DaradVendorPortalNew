import type { Metadata } from "next";
import "./globals.css";
import { Urbanist, Inter } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-urbanist',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Darad Vendor Portal New",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
    lang="en"
    className={`${urbanist.variable} ${inter.variable}`}
    suppressHydrationWarning={true}
  >
  

      <head>
        <title>Darad Vendor Portal New</title>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body >{children}</body> 
    </html>
  );
}

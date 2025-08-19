import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { URLS } from "@/constants/urls"
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "DeDevs Club",
    template: "%s | DeDevs Club"
  },
  description: "A community for blockchain and AI engineers and enthusiasts",
  keywords: [
    "DeDevs",
    "DeDevs Club",
    "Next.js"
  ],
  authors: [{ name: "DeDevsClub", url: "https://github.com/DeDevsClub" }],
  creator: "DeDevsClub",
  publisher: "DeDevsClub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(URLS.MAIN),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeDevs Club",
    description: "A community for blockchain and AI engineers and enthusiasts",
    url: URLS.MAIN,
    siteName: "DeDevs Club",
    images: [
      {
        url: new URL("/images/og-image.png", URLS.MAIN),
        width: 1200,
        height: 630,
        alt: "DeDevs Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeDevs Club",
    description: "A community for blockchain and AI engineers and enthusiasts",
    creator: "@DeDevsClub",
    images: [new URL("/images/og-image.png", URLS.MAIN)],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Technology",
  manifest: new URL("/site.webmanifest", URLS.MAIN),
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background ${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

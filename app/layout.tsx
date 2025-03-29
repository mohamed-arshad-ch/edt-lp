import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EDT - Healthcare Digital Solutions & Medical Technology Services",
  description: "Expert digital healthcare solutions for medical providers: EHR integration, HIPAA-compliant websites, patient engagement platforms, and healthcare IT services. Transform your medical practice with EDT.",
  keywords: "healthcare digital solutions, medical technology services, HIPAA compliant websites, healthcare IT services, medical practice management, patient engagement platforms, healthcare digital transformation, medical software solutions, healthcare web development, medical practice optimization",
  openGraph: {
    title: "EDT - Healthcare Digital Solutions & Medical Technology Services",
    description: "Transform your healthcare practice with EDT's comprehensive digital solutions. HIPAA-compliant, patient-centered technology services for modern medical providers.",
    type: "website",
    locale: "en_US",
    siteName: "EDT Healthcare Solutions",
    images: [
      {
        url: "/edt-logo.png",
        width: 1200,
        height: 630,
        alt: "EDT Healthcare Digital Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EDT - Healthcare Digital Solutions",
    description: "Innovative digital solutions for modern healthcare providers. HIPAA-compliant technology services.",
    images: ["/edt-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/edt-logo.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
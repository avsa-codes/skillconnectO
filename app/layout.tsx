import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for InstaTask SkillConnect
export const metadata: Metadata = {
  title: "InstaTask SkillConnect - Hire Pre-screened Student Talent Instantly",
  description:
    "Fast, verified, and risk-free short-term student engagement for projects, backlogs, and events. Connect with pre-screened student talent today.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

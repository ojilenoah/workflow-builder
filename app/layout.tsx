import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workflow_builder',
  description: 'Created by Noah Ojile',
  generator: 'Noah Ojile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

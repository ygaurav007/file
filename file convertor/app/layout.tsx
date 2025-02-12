import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Conversion App',
  description: 'Convert the files you need to the format you want',
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

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מערכת ניהול חדרים',
  description: 'מערכת לניהול הזמנת חדרים בבית ספר',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

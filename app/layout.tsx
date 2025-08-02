import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OrzuTech - Интернет-магазин электроники в Узбекистане',
  description: 'Лучший магазин смартфонов, ноутбуков, планшетов и электроники в Узбекистане. Официальная гарантия, быстрая доставка, рассрочка 0%',
  keywords: 'электроника, смартфоны, ноутбуки, планшеты, iPhone, Samsung, Узбекистан, Ташкент',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

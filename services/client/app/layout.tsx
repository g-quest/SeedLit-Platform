import { Metadata } from 'next'
import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NavBar from '@/components/navigation/NavBar'
import Footer from '@/components/navigation/Footer'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'SeedLit',
  description: 'Planting Seeds for Lifelong Learning through Storytelling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background">
        <NavBar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Live Skaar Skogesal - Billedvev | Kunstner Bergen",
  description:
    "Nyutdannet kunstner fra kunsthøgskolen i Bergen som arbeider med billedvev og kunsthåndverk. Håndvevde billedtepper med plantefarget garn og historiske teknikker.",
  keywords:
    "billedvev, kunsthåndverk, Bergen, kunstner, plantefarging, håndvev, tekstilkunst, Live Skaar Skogesal, tapestry, weaving",
  authors: [{ name: "Live Skaar Skogesal" }],
  creator: "Live Skaar Skogesal",
  publisher: "Live Skaar Skogesal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://liveskogesal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Live Skaar Skogesal - Billedvev | Kunstner Bergen",
    description:
      "Nyutdannet kunstner fra kunsthøgskolen i Bergen som arbeider med billedvev og kunsthåndverk. Håndvevde billedtepper med plantefarget garn og historiske teknikker.",
    url: "https://liveskogesal.com",
    siteName: "Live Skaar Skogesal",
    images: [
      {
        url: "/images/portrett-live.jpeg",
        width: 1200,
        height: 1200,
        alt: "Live Skaar Skogesal - Billedvever og kunstner",
      },
    ],
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Skaar Skogesal - Billedvev | Kunstner Bergen",
    description: "Nyutdannet kunstner fra kunsthøgskolen i Bergen som arbeider med billedvev og kunsthåndverk.",
    images: ["/images/portrett-live.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-180.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Live Skogesal" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Live Skaar Skogesal",
              jobTitle: "Billedvever og Kunstner",
              description:
                "Nyutdannet kunstner fra kunsthøgskolen i Bergen som arbeider med billedvev og kunsthåndverk",
              url: "https://liveskogesal.com",
              image: "https://liveskogesal.com/images/portrett-live.jpeg",
              sameAs: ["https://instagram.com/liveskogesal"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bergen",
                addressCountry: "NO",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universitetet i Bergen",
              },
              knowsAbout: ["Billedvev", "Kunsthåndverk", "Plantefarging", "Tekstilkunst", "Håndvev"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

// ✅ Use real fonts from Google
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arslan Edit'z - Professional Video Editing Services",
  description: "Professional video editing services by Arslan Khizar. Transform your raw footage into cinematic masterpieces with our expert editing, motion graphics, and post-production services.",
  keywords: "video editing, cinematic editing, motion graphics, post-production, video effects, professional editing, Arslan Edit'z",
  authors: [{ name: "Arslan Khizar" }],
  creator: "Arslan Khizar",
  publisher: "Arslan Edit'z",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arslan-editz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arslan Edit'z - Professional Video Editing Services",
    description: "Transform your raw footage into cinematic masterpieces with our expert video editing services.",
    url: "https://arslan-editz.com",
    siteName: "Arslan Edit'z",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arslan Edit'z - Professional Video Editing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Edit'z - Professional Video Editing Services",
    description: "Transform your raw footage into cinematic masterpieces with our expert video editing services.",
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e0c840" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

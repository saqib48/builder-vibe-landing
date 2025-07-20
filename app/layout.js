import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

// Modern fonts for video editing portfolio
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Alex Chen - Video Editor & Motion Designer",
  description: "Professional video editing and motion design services. Specializing in YouTube content, social media reels, commercials, and cinematic storytelling.",
  keywords: "video editing, motion graphics, YouTube editing, social media content, cinematic editing, freelance video editor",
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  publisher: "Alex Chen Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alexchen-video.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Chen - Video Editor & Motion Designer",
    description: "Professional video editing and motion design services for creators and brands.",
    url: "https://alexchen-video.com",
    siteName: "Alex Chen Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Chen - Video Editor Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - Video Editor & Motion Designer",
    description: "Professional video editing and motion design services for creators and brands.",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8A2BE2" />
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

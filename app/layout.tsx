import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import { personal } from "@/data/personal";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://leanverse.in"),
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "full-stack engineer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    personal.name,
  ],
  authors: [{ name: personal.name, url: "https://alexchen.dev" }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leanverse.in",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    siteName: personal.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} — Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    images: ["/og-image.png"],
    creator: "@saikumar90143",
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
    google: "your-google-verification-token",
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[var(--bg)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

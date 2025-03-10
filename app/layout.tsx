import type { Metadata } from "next";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://super-sonic-eta.vercel.app/"),
  title: "SuperSonic",
  description: "AI powered arbitrage platform built on SONIC",
  // change the logo here
  icons: "/images/sonic.svg",
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const marvinVisionsBig = localFont({
  src: [
    {
      path: "../public/fonts/MarvinVisionsBig-Bold.woff2",
      weight: "400", // adjust if you have other weights
      style: "normal",
    },
  ],
  variable: "--font-marvin", // creates a CSS variable for the font
});

const LIGHT_THEME_COLOR = "hsl(0 0% 100%)";
const DARK_THEME_COLOR = "hsl(240deg 10% 3.92%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marvinVisionsBig.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

// app/layout.js
import "./globals.css";
import localFont from "next/font/local";

const iranianSans = localFont({
  src: "./fonts/IranianSans.woff2",
  display: "swap",
  preload: false,
  variable: "--font-iranian-sans",
});

export const metadata = {
  metadataBase: new URL("https://hezaragency.com"),
  title: "هزار - آژانس طراحی سایت",
  description:
    "آژانس تخصصی طراحی سایت، توسعه و سئو با ارائه خدمات حرفه‌ای برای رشد کسب‌وکار شما",

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "هزار - آژانس طراحی سایت",
    url: "https://hezaragency.com/",
    images: [
      {
        url: "https://hezaragency.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "هزار - آژانس طراحی سایت",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://hezaragency.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={iranianSans.variable}
      suppressHydrationWarning
    >
      <body className={`${iranianSans.className} min-h-screen flex flex-col`}>
        
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}
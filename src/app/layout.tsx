import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/landing/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Artistly",
  description: "Book top-performing artists for your next big event.",
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f1112] text-white min-w-full`}
      >
        <div className="pb-10">
          <Header />
          <div className="px-4 sm:px-10 lg:px-20">{children}</div>
        </div>
      </body>
    </html>
  );
}

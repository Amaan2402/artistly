import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/landing/Header";
import { ThemeProvider } from "@/components/ThemeToggle/ThemeProvider";
import Footer from "@/components/footer/Footer";
import { ModeToggle } from "@/components/ThemeToggle/ModeToggle";
import { Toaster } from "react-hot-toast";
import ArtistModal from "@/modals/ArtistModal";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pb-10">
            <Header />
            <div className="px-4 sm:px-10 lg:px-20">{children}</div>
            <div className="fixed bottom-5 right-4 z-50 sm:hidden rounded-full bg-background shadow-xl ring-1 ring-border p-2">
              <ModeToggle />
            </div>

            <Footer />
          </div>
          <ArtistModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

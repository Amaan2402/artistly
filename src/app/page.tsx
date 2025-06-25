// app/page.tsx
// app/page.tsx
export const metadata = {
  title: "Artistly – Book Top Performing Artists for Events",
  description:
    "Discover, shortlist, and book talented performers including singers, dancers, DJs, and speakers with Artistly — the platform connecting event planners and artists.",
  keywords: [
    "artist booking",
    "event planning",
    "hire performers",
    "live entertainment",
    "singers",
    "dancers",
    "DJs",
    "speakers",
  ],
  openGraph: {
    title: "Artistly – Book Top Performing Artists for Events",
    description:
      "Discover and connect with top performing artists for your next event. Simple, seamless, and smart.",
    url: "https://artistly.amaan24.tech",
    siteName: "Artistly",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Artistly - Connect With Performing Artists",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly – Book Top Performing Artists",
    description:
      "Discover and connect with top performing artists for your next event.",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://artistly.amaan24.tech"),
};

import { MotionFadeUp } from "@/components/common/MotionWrapper";
import CategorySection from "@/components/landing/CategorySection";
import Hero from "@/components/landing/Hero";

export default function HomePage() {
  return (
    <>
      <MotionFadeUp>
        <Hero />
        <CategorySection />
      </MotionFadeUp>
    </>
  );
}

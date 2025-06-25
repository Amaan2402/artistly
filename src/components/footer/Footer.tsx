// components/landing/Footer.tsx
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-10 text-center text-muted-foreground">
      <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
        Artistly
      </div>
      <p className="text-sm mb-2">© {new Date().getFullYear()} Artistly. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-sm">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <a href="mailto:contact@artistly.amaan24.tech" className="hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;

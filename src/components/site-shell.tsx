import { Link, useRouterState } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import logoAsset from "@/assets/eduhub42-gradient-word-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Pillars", to: "/pillars" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/EduHub42", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eduhub42/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/eduhub42_/", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/message/5SGGTDLAA3UWE1", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com/@eduhub42", icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/@tutorhub42", icon: Music2 },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [compact, setCompact] = useState(pathname !== "/");

  useEffect(() => {
    const onScroll = () => setCompact(pathname !== "/" || window.scrollY > 110);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
        <div className="site-header-inner">
          <Link to="/" aria-label="EduHub42 home" className="brand-link">
            <img src={logoAsset.url} alt="EduHub42 — Learn, Grow, Succeed" className="brand-logo" />
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link"
                activeProps={{ className: "nav-link nav-link-active" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="banner" size="lg" className="ml-3">
              <Link to="/book">Book a Session</Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="bannerGhost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background pt-16 sm:max-w-sm">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">Navigate the EduHub42 website.</SheetDescription>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose key={item.to} asChild>
                    <Link to={item.to} className="mobile-nav-link">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild size="lg" className="mt-3 w-full">
                    <Link to="/book">Book a Session</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
      <a
        href="https://whatsapp.com/channel/0029VbCIRQhFsn0gJ1MDxo1y"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Join the EduHub42 WhatsApp Channel"
      >
        <MessageCircle className="size-5 fill-current" />
        <span className="hidden sm:inline">Join our WhatsApp Channel</span>
      </a>
    </div>
  );
}

export function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="EduHub42 social media">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={light ? "social-link social-link-light" : "social-link"}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="page-container grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src={logoAsset.url} alt="EduHub42" className="h-auto w-52 brightness-0 invert" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-footer-muted">
            An Education Development Enterprise creating pathways across learning, education access and career readiness.
          </p>
          <p className="mt-4 text-xs font-bold tracking-[0.22em] text-accent">LEARN • GROW • SUCCEED</p>
        </div>
        <div>
          <h2 className="footer-heading">Quick links</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-footer-muted">
            {[...navItems, { label: "Book a Session", to: "/book" as const }, { label: "Resources", to: "/resources" as const }].map((item) => (
              <Link key={item.label} to={item.to} className="transition-colors hover:text-footer-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Let’s connect</h2>
          <div className="mt-4 space-y-2 text-sm text-footer-muted">
            <a className="block hover:text-footer-foreground" href="mailto:info@eduhub42.co.za">info@eduhub42.co.za</a>
            <a className="block hover:text-footer-foreground" href="tel:+27671657897">067 165 7897</a>
            <a className="block hover:text-footer-foreground" href="https://www.eduhub42.co.za">www.eduhub42.co.za</a>
          </div>
          <div className="mt-5"><SocialLinks light /></div>
        </div>
      </div>
      <div className="border-t border-footer-border">
        <div className="page-container py-5 text-xs text-footer-muted">© 2026 EduHub42. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

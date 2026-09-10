"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Phone from "@/components/Phone";

const links = [
  { href: "/who-we-are", label: "Our Church" },
  { href: "/our-pastor", label: "Our Pastor" },
  { href: "/beliefs", label: "What We Believe" },
  { href: "/sermons", label: "Sermons" },
  { href: "/visit", label: "Plan a Visit" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      {/* Service times sit above everything — it is the thing visitors want. */}
      <div className="hidden bg-ink text-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 lg:px-10">
          <p className="caps text-[0.63rem] font-semibold text-gold-pale/85 xl:text-[0.7rem]">
            Sunday School 10:00
            <span className="mx-2 text-gold/50">&#9670;</span>
            Worship 11:00
            <span className="mx-2 text-gold/50">&#9670;</span>
            Sunday Evening 6:00
            <span className="mx-2 text-gold/50">&#9670;</span>
            Wednesday 7:00
          </p>
          <p className="caps text-[0.63rem] font-semibold text-gold-pale/85 xl:text-[0.7rem]">
            Port Washington, Ohio
            <span className="mx-2 text-gold/50">&#9670;</span>
            <Phone className="transition hover:text-gold-light" />
          </p>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-linen bg-cream shadow-[0_8px_30px_rgba(34,30,23,0.07)]"
            : "border-transparent bg-cream"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10 lg:py-5">
          <Link
            href="/"
            className="focus-ring shrink-0 py-1"
            aria-label="Countryside Baptist Church — home"
          >
            <Logo alt="" className="w-[11rem] sm:w-[12.5rem]" />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring caps whitespace-nowrap rounded-sm px-3 py-2 text-[0.78rem] font-semibold transition ${
                  isActive(link.href)
                    ? "text-oak-dark"
                    : "text-ink-soft hover:text-oak"
                }`}
              >
                {link.label}
                <span
                  className={`mx-auto mt-1 block h-px transition-all ${
                    isActive(link.href) ? "w-full bg-gold" : "w-0 bg-transparent"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/salvation"
              className="focus-ring caps ml-2 whitespace-nowrap rounded-sm border border-gold/45 bg-gold-pale/35 px-3.5 py-2 text-[0.76rem] font-semibold text-oak-dark transition hover:border-gold hover:bg-gold-pale/70"
            >
              Eternal Life
            </Link>
            <Link
              href="/contact"
              className="focus-ring caps ml-2 whitespace-nowrap rounded-sm bg-ink px-4 py-2.5 text-[0.76rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring -mr-2 flex h-11 w-11 items-center justify-center rounded-sm text-ink xl:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-b border-linen bg-cream transition-[max-height] duration-400 xl:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 pb-7 pt-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring block border-b border-linen/70 py-3.5 text-lg transition ${
                isActive(link.href) ? "text-oak-dark" : "text-ink"
              }`}
            >
              <span className="display">{link.label}</span>
            </Link>
          ))}
          <Link
            href="/salvation"
            className="focus-ring block border-b border-linen/70 py-3.5 text-lg text-oak-dark"
          >
            <span className="display">How to Have Eternal Life</span>
          </Link>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="focus-ring caps rounded-sm bg-ink px-5 py-3.5 text-center text-[0.78rem] font-semibold text-cream"
            >
              Contact Us
            </Link>
            <Phone
              showIcon
              className="caps rounded-sm border border-linen-dark px-5 py-3.5 text-center text-[0.78rem] font-semibold text-ink-soft"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

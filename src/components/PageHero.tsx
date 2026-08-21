import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The header every subpage opens with: a warm ink band with a hairline gold
 * rule, an eyebrow, the title, and a short standfirst.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { href: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* faint stone-coloured wash, echoing the sanctuary wall */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 90% at 20% -10%, rgba(188,143,47,0.22), transparent 70%), radial-gradient(ellipse 60% 80% at 90% 110%, rgba(76,87,96,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pb-20 lg:pt-16">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] text-cream/45">
              <li>
                <Link
                  href="/"
                  className="focus-ring caps transition hover:text-gold-light"
                >
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-gold/40">
                    /
                  </span>
                  <Link
                    href={crumb.href}
                    className="focus-ring caps transition hover:text-gold-light"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="eyebrow text-gold-light/85">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-[clamp(2.4rem,5.6vw,4.1rem)] text-cream">
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mt-7 h-px w-24 bg-gradient-to-r from-gold to-transparent"
        />
        {lede && (
          <p className="mt-7 max-w-2xl text-[1.06rem] leading-relaxed text-cream/70">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

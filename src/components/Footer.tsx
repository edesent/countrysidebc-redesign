import Link from "next/link";
import Logo from "@/components/Logo";
import Phone from "@/components/Phone";
import { serviceTimes, site } from "@/lib/site";

const columns = [
  {
    heading: "Our Church",
    links: [
      { href: "/who-we-are", label: "Who We Are" },
      { href: "/our-pastor", label: "Our Pastor" },
      { href: "/beliefs", label: "What We Believe" },
      { href: "/visit", label: "Plan a Visit" },
    ],
  },
  {
    heading: "Listen & Learn",
    links: [
      { href: "/sermons", label: "Sermons" },
      { href: "/salvation", label: "How to Have Eternal Life" },
      { href: "/contact", label: "Contact Us" },
      { href: "/transparency", label: "Transparency & Legal" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="cream" className="w-[13rem]" />
            <p className="display mt-6 text-xl italic text-gold-light/90">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              {site.descriptor} in {site.address.city},{" "}
              {site.address.regionName}. Preaching from this corner of{" "}
              {site.address.county} since {site.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Countryside Baptist Church on Facebook"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream/75 transition hover:border-gold hover:text-gold-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
                </svg>
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="Countryside Baptist Church on YouTube"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream/75 transition hover:border-gold hover:text-gold-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M21.6 7.4a2.5 2.5 0 0 0-1.8-1.8C18.2 5.2 12 5.2 12 5.2s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.4C2 9 2 12 2 12s0 3 .4 4.6a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15 22 12 22 12s0-3-.4-4.6ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="caps text-[0.66rem] font-semibold text-gold-light/80">
                {column.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring text-sm text-cream/70 transition hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="caps text-[0.66rem] font-semibold text-gold-light/80">
              Find Us
            </h2>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream/70">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </address>
            <Phone
              showIcon
              className="mt-4 block text-sm text-cream/70 transition hover:text-gold-light"
            />
            <Link
              href="/contact"
              className="focus-ring mt-2 block text-sm text-cream/70 transition hover:text-gold-light"
            >
              Send us a message
            </Link>

            <dl className="mt-6 space-y-1.5 text-[0.8rem] text-cream/60">
              {serviceTimes.map((service) => (
                <div key={service.title} className="flex justify-between gap-4">
                  <dt>{service.title}</dt>
                  <dd className="shrink-0 tabular-nums text-cream/80">
                    {service.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/12 pt-6 text-[0.76rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. {site.legal.orgType}.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              href="/transparency"
              className="focus-ring transition hover:text-gold-light"
            >
              Transparency &amp; Legal Information
            </Link>
            <span className="hidden sm:inline">
              EIN {site.legal.ein}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

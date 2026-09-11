import Link from "next/link";
import { serviceTimes, site } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">When we gather</p>
          <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
            Four services a week, and none of them require an invitation.
          </h2>
          <p className="mt-6 leading-relaxed text-text-light">
            Sunday morning is the easiest place to start. Sunday evening is the
            one people tend to fall in love with. Come to whichever one your week
            allows.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark sm:grid-cols-2 lg:grid-cols-4">
          {serviceTimes.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col bg-cream p-7 transition-colors hover:bg-parchment lg:p-8"
            >
              <span className="display text-[0.95rem] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="caps mt-5 text-[0.6rem] font-semibold text-text-muted">
                {service.day}
              </p>
              <h3 className="display mt-2 text-[1.42rem] leading-tight text-ink">
                {service.title}
              </h3>
              <p className="display mt-3 text-xl text-oak-dark">
                {service.time}
              </p>
              <span
                aria-hidden="true"
                className="mt-6 h-px w-8 bg-gold/50 transition-all group-hover:w-14"
              />
              <p className="mt-5 text-[0.88rem] leading-relaxed text-text-light">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 border-t border-linen pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9rem] text-text-light">
            {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode} &mdash; just off US-36 in{" "}
            {site.address.county}.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-5 py-3 text-[0.66rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
            >
              Get Directions
            </a>
            <Link
              href="/visit"
              className="focus-ring caps rounded-sm bg-ink px-5 py-3 text-[0.66rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              What to Expect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

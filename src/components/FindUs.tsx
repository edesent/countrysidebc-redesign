import Image from "next/image";
import Link from "next/link";
import Phone from "@/components/Phone";
import { site } from "@/lib/site";

export default function FindUs() {
  return (
    <section id="visit" className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Come and see</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,3.3rem)] text-ink">
              You will not have to figure it out on your own.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Nobody will ask you to stand up, introduce yourself, or fill
              anything out. Park off Shoemaker Road, come in the main entrance,
              and somebody will point you where you need to go. Come as you are
              able &mdash; you will see suits and you will see shirtsleeves.
            </p>

            <dl className="mt-10 space-y-5 border-t border-linen pt-8">
              <div>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  Address
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </dd>
              </div>
              <div>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  By phone
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">
                  <Phone className="transition hover:text-oak-dark" />
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
              >
                Get Directions
              </a>
              <Link
                href="/contact"
                className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
              >
                Send a Message
              </Link>
            </div>

            <Link
              href="/visit"
              className="focus-ring caps group mt-8 inline-flex items-center gap-2.5 text-[0.66rem] font-semibold text-oak-dark"
            >
              Questions a first-time visitor asks
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* A map instead of the service times, which already appear in the
              top bar, the hero, the Services section and the footer. It links
              straight out to driving directions rather than embedding an
              interactive map, which would eat the page's scroll. */}
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring group block overflow-hidden rounded-sm border border-linen-dark bg-cream transition-shadow hover:shadow-[0_26px_55px_-32px_rgba(34,30,23,0.45)]"
          >
            <span className="relative block aspect-[4/3] overflow-hidden">
              <Image
                src="/csbc/map-shoemaker-road.jpg"
                alt="A map of the church's location on Shoemaker Road SW, just off US-36 between Interstate 77 and Port Washington, Ohio, with the Tuscarawas River to the east."
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </span>
            <span className="flex items-center justify-between gap-6 border-t border-linen bg-parchment px-7 py-6">
              <span>
                <span className="display block text-xl text-ink">
                  Just off US&#8209;36
                </span>
                <span className="mt-1 block text-[0.85rem] text-text-light">
                  {site.address.street}, {site.address.city}
                </span>
              </span>
              <span className="caps shrink-0 text-[0.66rem] font-semibold text-oak-dark">
                Open in Maps
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="ml-2 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Phone from "@/components/Phone";
import { site } from "@/lib/site";

/**
 * The strip under the hero, built on the brand guide's own icons.
 *
 * The guide draws this exact row on its bulletin cover and church invitation —
 * icon above a short fact — so the band follows that pattern rather than
 * inventing one. The icons are lifted from the guide's icon sheet and keyed off
 * its cream ground, which is why this band sits on a light ground: their white
 * interiors are opaque, so they need paper behind them, not ink.
 *
 * Service times are deliberately not one of the three. They already appear in
 * the top bar, the hero and the footer, and a fourth listing was the thing that
 * made the old "Come and see" panel redundant.
 */

const FACTS = [
  {
    icon: "/csbc/icons/address.png",
    width: 108,
    height: 145,
    alt: "",
    sizeClass: "h-auto max-h-12 w-auto",
    label: "Where we are",
    body: (
      <>
        {site.address.street}
        <br />
        {site.address.city}, {site.address.regionName}
      </>
    ),
  },
  {
    icon: "/csbc/icons/phone.png",
    width: 112,
    height: 148,
    alt: "",
    sizeClass: "h-auto max-h-12 w-auto",
    label: "Call the church",
    body: <Phone className="transition hover:text-oak" />,
  },
  {
    icon: "/csbc/icons/scripture.png",
    width: 255,
    height: 39,
    alt: "",
    sizeClass: "h-auto w-[9.5rem]",
    label: "What you will hear",
    body: <>Preaching straight from the King&nbsp;James Bible</>,
  },
] as const;

export default function QuickFacts() {
  return (
    <section className="border-y border-linen bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-3 sm:gap-8 lg:px-10 lg:py-14">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col items-center gap-4 text-center"
          >
            {/* A fixed box so the wide open-Bible sits on the same baseline as
                the two upright icons instead of setting its own height. */}
            <span className="flex h-14 items-center justify-center">
              <Image
                src={fact.icon}
                alt={fact.alt}
                width={fact.width}
                height={fact.height}
                sizes="140px"
                className={fact.sizeClass}
              />
            </span>
            <span className="caps text-[0.62rem] font-semibold text-text-muted">
              {fact.label}
            </span>
            <p className="display max-w-[22ch] text-[1.05rem] leading-snug text-ink">
              {fact.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

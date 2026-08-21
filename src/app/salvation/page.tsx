import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import { tractSections, tractSubtitle, tractTitle } from "@/lib/content";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Have Eternal Life — Guaranteed",
  description:
    "The most crucial decision you will make in your lifetime, laid out entirely from Scripture: where eternal life is found, why you can trust the Bible, how guilty you are, and what you must do.",
  alternates: { canonical: "/salvation" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonical("/salvation#article"),
  headline: tractTitle,
  description: tractSubtitle,
  isPartOf: { "@id": canonical("/#website") },
  publisher: { "@id": canonical("/#church") },
  about: "The Gospel of Jesus Christ",
  inLanguage: "en-US",
};

export default function SalvationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Salvation"
          title={tractTitle}
          lede={`${tractSubtitle} Every answer below comes from Scripture rather than from us — read it straight through, or use the questions to find the one you are asking.`}
          breadcrumb={[{ href: "/salvation", label: "Salvation" }]}
        />

        <div className="paper">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-[16rem_1fr] lg:gap-20">
              {/* Nine questions — a contents list makes a long tract usable. */}
              <nav
                aria-label="Sections on this page"
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <p className="eyebrow">The questions</p>
                <ol className="mt-5 space-y-3">
                  {tractSections.map((section, index) => (
                    <li key={section.id} className="flex gap-3">
                      <span className="display shrink-0 text-[0.8rem] italic text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${section.id}`}
                        className="focus-ring text-[0.88rem] leading-snug text-text-light transition hover:text-oak-dark"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div>
                {tractSections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={
                      index === 0
                        ? "scroll-mt-32"
                        : "mt-16 scroll-mt-32 border-t border-linen pt-16"
                    }
                  >
                    <p className="display text-[0.95rem] italic text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display mt-3 text-[clamp(1.85rem,3.6vw,2.6rem)] leading-tight text-ink">
                      {section.heading}
                    </h2>
                    <div className="mt-8">
                      <Prose blocks={section.blocks} />
                    </div>
                  </section>
                ))}

                <div className="mt-16 rounded-sm border border-gold/40 bg-cream p-8 sm:p-10">
                  <h2 className="display text-[clamp(1.7rem,3.2vw,2.3rem)] text-ink">
                    If you made that decision today, we would love to hear it.
                  </h2>
                  <p className="mt-5 leading-relaxed text-text-light">
                    Your story is a source of joy for all of us. Tell your
                    decision to someone who cares for your soul, and find a
                    Bible-believing church you can fellowship with and learn
                    more in. If that could be us, the door is open at every
                    service.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                    >
                      Tell us about it
                    </Link>
                    <Link
                      href="/visit"
                      className="focus-ring caps rounded-sm border border-linen-dark bg-parchment px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                    >
                      Plan a visit
                    </Link>
                  </div>
                  <p className="ref mt-7">
                    {site.name} &mdash; {site.address.street},{" "}
                    {site.address.city}, {site.address.region}{" "}
                    {site.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

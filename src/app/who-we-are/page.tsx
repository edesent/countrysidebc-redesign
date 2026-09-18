import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EternalLifeCta from "@/components/EternalLifeCta";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScriptureBanner from "@/components/ScriptureBanner";
import StillThatChurch from "@/components/StillThatChurch";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "An Independent, old-fashioned Baptist church in Port Washington, Ohio, incorporated in 1975 — King James Bible preaching, classic hymns, and our mission to glorify, evangelize and edify.",
  alternates: { canonical: "/who-we-are" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": canonical("/who-we-are#page"),
  name: "Who We Are",
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

const facts = [
  { label: "Incorporated in Ohio", value: "August 25, 1975" },
  { label: "Affiliation", value: "Independent Baptist" },
  { label: "Bible", value: "King James (Authorized Version)" },
  { label: "County", value: site.address.county },
];

export default function WhoWeArePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Who we are"
          title="A country church that never went looking for a new identity."
          lede="Countryside Baptist Church was incorporated in Ohio in 1975 and has been meeting on Shoemaker Road ever since. What you find here on a Sunday is close to what you would have found here fifty years ago — and that is on purpose."
          breadcrumb={[{ href: "/who-we-are", label: "Our Church" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <div>
                <p className="eyebrow">What we believe, in short</p>
                <h2 className="display mt-4 text-[clamp(1.52rem,3.04vw,2.20rem)] text-ink">
                  Independent, Baptist, and unembarrassed about both.
                </h2>
                <div className="mt-8 space-y-6 text-[1.03rem] leading-[1.75] text-text-body">
                  <p>
                    Countryside Baptist Church is an Independent Baptist church
                    that believes in the King James Bible and values the timeless
                    truths of God&rsquo;s Word. Rather than following modern
                    trends, we remain committed to traditional Bible preaching
                    and teaching. Our worship features classic style hymns that
                    honor our Saviour.
                  </p>
                  <p>
                    We warmly invite you to join us as we grow together in grace
                    and in the knowledge of our Lord and Saviour, Jesus Christ.
                  </p>
                  <p>
                    Independent means there is no denominational headquarters
                    setting our direction and no board in another state to
                    answer to. This is a local New Testament church governing
                    itself under one Head &mdash; Christ &mdash; with two
                    biblical offices, pastor and deacon.
                  </p>
                </div>

                <dl className="mt-12 grid gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-cream p-6">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        {fact.label}
                      </dt>
                      <dd className="display mt-2 text-[1.28rem] leading-snug text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/beliefs"
                    className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                  >
                    Full Statement of Faith
                  </Link>
                  <Link
                    href="/our-pastor"
                    className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                  >
                    Meet our pastor
                  </Link>
                </div>
              </div>

              <div className="space-y-8">
                <figure>
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/csbc/exterior-sunny.jpg"
                      alt="Countryside Baptist Church seen from the road on a summer afternoon: a white brick gable carrying a tall cross and the words COUNTRYSIDE BAPTIST, a white steeple over the low entrance wing, an American flag on the pole, and a wooded hillside rising behind the building."
                      width={2000}
                      height={1333}
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    The building on Shoemaker Road, with the hill behind it.
                  </figcaption>
                </figure>

                <figure>
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/csbc/sanctuary-wide.jpg"
                      alt="The auditorium at Countryside Baptist Church seen from the back pews, with the communion table in the foreground reading 'This do in remembrance of me'."
                      width={1280}
                      height={720}
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    Honey-oak pews, a stacked-stone wall behind the platform, and
                    a communion table that reads{" "}
                    <span className="italic">
                      This do in remembrance of me
                    </span>
                    .
                  </figcaption>
                </figure>

                <figure>
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/csbc/preaching-3.jpg"
                      alt="A guest speaker preaching at Countryside Baptist Church while Pastor Harvey listens from the platform bench with an open Bible."
                      width={1280}
                      height={720}
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    Men of the church and visiting preachers both take the pulpit
                    through the year.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <Mission />
        <ScriptureBanner />
        <StillThatChurch />
        <EternalLifeCta />
      </main>
      <Footer />
    </>
  );
}

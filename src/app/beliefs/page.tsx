import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import { faithArticles } from "@/lib/content";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Believe — Statement of Faith",
  description:
    "The full statement of faith of Countryside Baptist Church: the King James Bible, the Trinity, the Lord Jesus Christ, salvation by grace through faith, the family, the second coming, and the local church.",
  alternates: { canonical: "/beliefs" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": canonical("/beliefs#page"),
  name: "What We Believe — Statement of Faith",
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

export default function BeliefsPage() {
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
          eyebrow="Our beliefs"
          title="What we believe"
          lede="Countryside Baptist Church is an Independent Baptist church that believes in the King James Bible and values the timeless truths of God's Word. Rather than following modern trends, we remain committed to traditional Bible preaching and teaching. Below is our statement of faith in full, article by article."
          breadcrumb={[
            { href: "/who-we-are", label: "Our Church" },
            { href: "/beliefs", label: "What We Believe" },
          ]}
        />

        <div className="paper">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-[15rem_1fr] lg:gap-20">
              <nav
                aria-label="Articles of faith"
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <p className="eyebrow">Articles</p>
                <ol className="mt-5 space-y-2.5">
                  {faithArticles.map((article, index) => (
                    <li key={article.id} className="flex gap-3">
                      <span className="display shrink-0 text-[0.78rem] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${article.id}`}
                        className="focus-ring text-[0.9rem] leading-snug text-text-light transition hover:text-oak-dark"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div>
                {faithArticles.map((article, index) => (
                  <section
                    key={article.id}
                    id={article.id}
                    className={
                      index === 0
                        ? "scroll-mt-32"
                        : "mt-14 scroll-mt-32 border-t border-linen pt-14"
                    }
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="display text-[0.9rem] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display text-[clamp(1.37rem,2.58vw,1.82rem)] leading-tight text-ink">
                        {article.title}
                      </h2>
                    </div>
                    <div className="mt-7">
                      <Prose blocks={article.blocks} />
                    </div>
                  </section>
                ))}

                <div className="mt-16 rounded-sm border border-linen-dark bg-parchment p-8 sm:p-10">
                  <h2 className="display text-[clamp(1.22rem,2.28vw,1.60rem)] text-ink">
                    Questions about any of this?
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-light">
                    A statement of faith on a page is no substitute for a
                    conversation. Pastor Harvey is glad to sit down with anyone
                    who wants to work through what we hold and why.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                    >
                      Ask the pastor
                    </Link>
                    <Link
                      href="/salvation"
                      className="focus-ring caps rounded-sm border border-gold/45 bg-gold-pale/30 px-6 py-4 text-[0.68rem] font-semibold text-oak-dark transition hover:border-gold hover:bg-gold-pale/60"
                    >
                      How to have eternal life
                    </Link>
                  </div>
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

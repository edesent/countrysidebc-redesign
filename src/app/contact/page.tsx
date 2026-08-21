import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Phone";
import { canonical, serviceTimes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Countryside Baptist Church, 4283 Shoemaker Road SW, Port Washington, Ohio. Service times, directions, and a message form that reaches the church directly.",
  alternates: { canonical: "/contact" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": canonical("/contact#page"),
  name: `Contact ${site.name}`,
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

export default function ContactPage() {
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
          eyebrow="Contact us"
          title="Come visit and worship with us."
          lede="We welcome you to grow with us in the grace and knowledge of our Lord and Saviour Jesus Christ. We look forward to connecting with you and answering any questions you may have."
          breadcrumb={[{ href: "/contact", label: "Contact" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
              <div>
                <p className="eyebrow">Send a message</p>
                <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.6rem)] text-ink">
                  Share your details and a member of our staff will reach out.
                </h2>
                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>

              <div className="space-y-8">
                <div className="overflow-hidden rounded-sm border border-linen-dark bg-cream">
                  <div className="border-b border-linen bg-parchment px-7 py-6">
                    <h2 className="display text-2xl text-ink">Find us</h2>
                  </div>
                  <dl className="divide-y divide-linen">
                    <div className="px-7 py-6">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        Address
                      </dt>
                      <dd className="display mt-2 text-[1.28rem] leading-snug text-ink">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.region}{" "}
                        {site.address.postalCode}
                      </dd>
                      <dd className="mt-4">
                        <a
                          href={site.directionsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring caps text-[0.64rem] font-semibold text-oak-dark"
                        >
                          Get directions &rarr;
                        </a>
                      </dd>
                    </div>
                    <div className="px-7 py-6">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        Phone
                      </dt>
                      <dd className="display mt-2 text-[1.28rem] text-ink">
                        <Phone className="transition hover:text-oak-dark" />
                      </dd>
                    </div>
                    <div className="px-7 py-6">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        Online
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem]">
                        <a
                          href={site.social.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
                        >
                          Facebook
                        </a>
                        <a
                          href={site.social.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
                        >
                          YouTube
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="overflow-hidden rounded-sm border border-linen-dark bg-cream">
                  <div className="border-b border-linen bg-parchment px-7 py-6">
                    <h2 className="display text-2xl text-ink">Service times</h2>
                  </div>
                  <ul className="divide-y divide-linen">
                    {serviceTimes.map((service) => (
                      <li
                        key={service.title}
                        className="flex items-baseline justify-between gap-6 px-7 py-4"
                      >
                        <span className="text-[0.98rem] text-ink">
                          {service.title}
                        </span>
                        <span className="display shrink-0 text-[1.15rem] italic tabular-nums text-oak-dark">
                          {service.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm border border-gold/40 bg-gold-pale/25 p-7">
                  <p className="display text-[1.35rem] leading-snug text-ink">
                    First time visiting?
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-text-light">
                    We wrote down exactly what a first Sunday here is like so
                    you do not have to guess.
                  </p>
                  <Link
                    href="/visit"
                    className="focus-ring caps mt-5 inline-block text-[0.64rem] font-semibold text-oak-dark"
                  >
                    Plan a visit &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

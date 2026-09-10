import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { canonical, pastor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Pastor — Paul Harvey",
  description:
    "Pastor Paul Harvey has served Countryside Baptist Church since 2013 and as Senior Pastor since October 2018, with over 30 years in pastoral ministry and Christian education.",
  alternates: { canonical: "/our-pastor" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": canonical("/our-pastor#pastor"),
  name: pastor.name,
  jobTitle: `${pastor.title}, ${site.name}`,
  worksFor: { "@id": canonical("/#church") },
  image: canonical(pastor.photo),
  alumniOf: pastor.education.map((entry) => ({
    "@type": "EducationalOrganization",
    name: entry.school,
  })),
  spouse: { "@type": "Person", name: `${pastor.wife} Harvey` },
  inLanguage: "en-US",
};

export default function OurPastorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Our pastor"
          title="Paul Harvey"
          lede={`${pastor.title} of Countryside Baptist Church. A devoted servant of Christ with ${pastor.yearsInMinistry} in pastoral ministry and Christian education — a good deal of it in a classroom, which tells you something about how he preaches.`}
          breadcrumb={[
            { href: "/who-we-are", label: "Our Church" },
            { href: "/our-pastor", label: "Our Pastor" },
          ]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <figure className="mx-auto w-full max-w-[480px] lg:mx-0">
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_30px_65px_-32px_rgba(34,30,23,0.45)]">
                    <Image
                      src={pastor.familyPhoto}
                      alt={`Pastor Paul Harvey and his wife ${pastor.wife} standing together outdoors.`}
                      width={1200}
                      height={1800}
                      preload
                      quality={90}
                      sizes="(max-width: 528px) calc(100vw - 48px), (max-width: 1023px) 480px, (max-width: 1152px) calc((100vw - 160px) * 0.4595), 456px"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    Pastor Harvey and {pastor.wife}, married since{" "}
                    {pastor.married}.
                  </figcaption>
                </figure>

                <dl className="mt-8 space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
                  {[
                    ["Ordained", `${pastor.ordained}`],
                    ["Came to Countryside", pastor.arrived],
                    ["Senior Pastor since", pastor.seniorPastorSince],
                    ["Family", `${pastor.wife}; ${pastor.children.join(", ")}`],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-cream px-6 py-4">
                      <dt className="caps text-[0.57rem] font-semibold text-text-muted">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-[0.95rem] leading-snug text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="eyebrow">His story</p>
                <div className="mt-6 space-y-6 text-[1.03rem] leading-[1.75] text-text-body">
                  <p>
                    Pastor Paul Harvey is a devoted servant of Christ with{" "}
                    {pastor.yearsInMinistry} of experience in pastoral ministry
                    and Christian education. His journey in ministry began with a
                    strong foundation in biblical studies, and he was ordained on{" "}
                    {pastor.ordained} at {pastor.ordainedAt}.
                  </p>
                  <p>
                    In {pastor.arrived}, Pastor Harvey joined Countryside Baptist
                    Church in {site.address.city}, Ohio. He served as Assistant
                    Pastor until May 2018, then as Intern Pastor until{" "}
                    {pastor.seniorPastorSince}, when he was called to serve as
                    Senior Pastor. Under his leadership the church has continued
                    to grow in faith and fellowship, with a strong emphasis on
                    biblical teaching and community outreach.
                  </p>
                  <p>
                    Pastor Harvey married {pastor.wife} in {pastor.married}, and
                    together they are blessed with three children:{" "}
                    {pastor.children.join(", ")}. His ministry is marked by a
                    deep commitment to biblical teaching, pastoral care, and
                    Christian education.
                  </p>
                </div>

                <h2 className="display mt-14 text-[clamp(1.7rem,3.2vw,2.3rem)] text-ink">
                  Education
                </h2>
                <ul className="mt-7 space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
                  {pastor.education.map((entry) => (
                    <li key={entry.credential} className="bg-cream p-6">
                      <p className="display text-[1.25rem] leading-snug text-ink">
                        {entry.credential}
                      </p>
                      <p className="mt-2 text-[0.92rem] text-text-light">
                        {entry.school} &mdash; {entry.place}
                      </p>
                      <p className="ref mt-1.5">{entry.year}</p>
                    </li>
                  ))}
                </ul>

                <h2 className="display mt-14 text-[clamp(1.7rem,3.2vw,2.3rem)] text-ink">
                  Thirty years of service
                </h2>
                <ol className="mt-8 space-y-8 border-l border-linen pl-7">
                  {pastor.service.map((entry) => (
                    <li key={entry.years} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[calc(1.75rem+4.5px)] top-2 h-2 w-2 rounded-full bg-gold ring-4 ring-cream"
                      />
                      <p className="caps text-[0.6rem] font-semibold text-oak">
                        {entry.years}
                      </p>
                      <p className="display mt-2 text-[1.35rem] leading-snug text-ink">
                        {entry.role}
                      </p>
                      <p className="mt-1.5 text-[0.94rem] text-text-light">
                        {entry.place}
                      </p>
                      <p className="mt-3 text-[0.94rem] leading-relaxed text-text-light">
                        {entry.detail}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-14 rounded-sm border border-linen-dark bg-parchment p-8 sm:p-10">
                  <h2 className="display text-[clamp(1.6rem,3vw,2.1rem)] text-ink">
                    He would be glad to hear from you.
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-light">
                    Whether it is a question about the church, something you are
                    working through, or you would simply like to know what to
                    expect on a Sunday &mdash; get in touch.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                    >
                      Contact Pastor Harvey
                    </Link>
                    <Link
                      href="/sermons"
                      className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                    >
                      Hear him preach
                    </Link>
                  </div>
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

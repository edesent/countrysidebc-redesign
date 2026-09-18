import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Phone";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparency & Legal Information",
  description:
    "Nonprofit registration, corporate standing and federal tax-exempt information for Countryside Baptist Church, a 501(c)(3) religious organization in Port Washington, Ohio.",
  alternates: { canonical: "/transparency" },
};

const stateRows = [
  ["Legal name", site.legal.legalName],
  ["Charter / license number", site.legal.charterNumber],
  ["Document type", site.legal.documentType],
  ["Document ID", site.legal.documentId],
  ["Effective date", site.legal.effectiveDate],
  ["Date of incorporation", site.legal.incorporated],
  ["State of incorporation", site.legal.stateOfIncorporation],
  ["Principal office", site.legal.principalOffice],
  ["Statutory agent address", site.legal.statutoryAgentAddress],
];

const federalRows = [["Organization type", site.legal.orgType]];

function Table({ rows }: { rows: string[][] }) {
  return (
    <dl className="overflow-hidden rounded-sm border border-linen-dark bg-cream">
      {rows.map(([label, value], index) => (
        <div
          key={label}
          className={`grid gap-1 px-6 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-7 ${
            index > 0 ? "border-t border-linen" : ""
          }`}
        >
          <dt className="caps text-[0.58rem] font-semibold text-text-muted sm:pt-1">
            {label}
          </dt>
          <dd className="text-[1rem] leading-snug text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function TransparencyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Transparency"
          title="Transparency & legal information"
          lede={`${site.name} owns and operates the domain countrysidebc.com as the official website of our nonprofit religious organization. Our registration and standing are published here in full.`}
          breadcrumb={[{ href: "/transparency", label: "Transparency" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="rounded-sm border border-linen-dark bg-parchment p-7 sm:p-9">
              <p className="display text-[1.5rem] leading-snug text-ink">
                {site.legal.legalName}
              </p>
              <address className="mt-3 not-italic leading-relaxed text-text-light">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </address>
              <p className="mt-3 text-text-light">
                <Phone className="transition hover:text-oak-dark" />
                <span className="mx-2 text-gold/60">&#9670;</span>
                <a
                  href="/contact"
                  className="focus-ring text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
                >
                  Send us a message
                </a>
              </p>
            </div>

            <h2 className="display mt-14 text-[clamp(1.33rem,2.58vw,1.82rem)] text-ink">
              Official nonprofit registration
              <span className="block text-text-muted">(State of Ohio)</span>
            </h2>
            <div className="mt-8">
              <Table rows={stateRows} />
            </div>
            <p className="mt-6 leading-relaxed text-text-light">
              {site.name} is an active nonprofit corporation registered with the
              Ohio Secretary of State. The Certificate of Continued Existence
              confirms that the organization is currently exercising its
              corporate privileges and remains in good standing.
            </p>

            <h2 className="display mt-14 text-[clamp(1.33rem,2.58vw,1.82rem)] text-ink">
              Federal nonprofit identification
            </h2>
            <div className="mt-8">
              <Table rows={federalRows} />
            </div>
            <p className="mt-6 leading-relaxed text-text-light">
              {site.name} is a tax&#8209;exempt religious organization under
              section 501(c)(3) of the Internal Revenue Code.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MessagesLibrary from "@/components/MessagesLibrary";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getMessages } from "@/lib/messages";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Listen to services from Countryside Baptist Church in Port Washington, Ohio. Sunday morning, Sunday evening and Wednesday evening messages, preached from the King James Bible.",
  alternates: { canonical: "/sermons" },
};

/** The feed is re-read every half hour, so this page follows their uploads. */
export const revalidate = 1800;

export default async function SermonsPage() {
  const messages = await getMessages(24);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonical("/sermons#page"),
    name: `Sermons — ${site.name}`,
    isPartOf: { "@id": canonical("/#website") },
    about: { "@id": canonical("/#church") },
    inLanguage: "en-US",
    hasPart: messages.slice(0, 12).map((message) => ({
      "@type": "VideoObject",
      name: [message.title, message.serviceDate].filter(Boolean).join(" — "),
      url: message.url,
      thumbnailUrl: message.thumbnail,
      uploadDate: message.isoDate,
      ...(message.speaker
        ? { author: { "@type": "Person", name: message.speaker } }
        : {}),
    })),
  };

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
          eyebrow="Sermons"
          title="Every service, preached and posted."
          lede="Sunday morning, Sunday evening and Wednesday night are all recorded and go up on our channel. This page updates itself as each one is posted, so the newest message is always at the top."
          breadcrumb={[{ href: "/sermons", label: "Sermons" }]}
        >
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm bg-gold-pale px-6 py-4 text-[0.68rem] font-semibold text-ink transition hover:bg-gold-light"
            >
              Subscribe on YouTube
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm border border-cream/25 px-6 py-4 text-[0.68rem] font-semibold text-cream/85 transition hover:border-gold-light hover:text-gold-light"
            >
              Follow on Facebook
            </a>
          </div>
        </PageHero>

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <MessagesLibrary messages={messages} />

            {messages.length > 0 && (
              <p className="mt-14 border-t border-linen pt-8 text-[0.85rem] leading-relaxed text-text-muted">
                Showing the {messages.length} most recent services. Older
                messages are on{" "}
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
                >
                  the church&rsquo;s YouTube channel
                </a>
                .
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

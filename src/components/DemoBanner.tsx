import { site } from "@/lib/site";

/**
 * This build is a design proposal, not the church's live site. The banner says
 * so plainly and links back to countrysidebc.com. Delete this component (and
 * its call in layout.tsx) on the day it goes live on their own domain.
 */
export default function DemoBanner() {
  return (
    <div className="bg-oak-dark text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center text-[0.72rem] leading-relaxed lg:px-10">
        <span className="caps font-semibold text-gold-light">
          Design proposal
        </span>
        <span className="text-cream/85">
          A concept for Countryside Baptist Church, not an official church page.
        </span>
        <a
          href={site.social.currentSite}
          className="focus-ring underline decoration-gold-light/60 underline-offset-4 transition hover:decoration-gold-light"
        >
          Visit the church&rsquo;s current site
        </a>
      </div>
    </div>
  );
}

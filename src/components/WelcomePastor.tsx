import Image from "next/image";
import Link from "next/link";
import { pastor } from "@/lib/site";

export default function WelcomePastor() {
  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.78fr_1fr] lg:gap-20 lg:px-10">
        <figure className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-28px_rgba(34,30,23,0.45)]">
            <Image
              src={pastor.photo}
              alt={`Pastor ${pastor.name} of Countryside Baptist Church, standing outdoors in a dark suit and flag-patterned tie.`}
              width={673}
              height={1350}
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="h-auto w-full"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-sm border border-gold/40"
          />
        </figure>

        <div>
          <p className="eyebrow">A word from our pastor</p>
          <blockquote className="display mt-6 text-[clamp(1.65rem,3.1vw,2.4rem)] leading-[1.24] text-ink">
            <span aria-hidden="true" className="text-gold">
              &ldquo;
            </span>
            {pastor.welcomeQuote}
            <span aria-hidden="true" className="text-gold">
              &rdquo;
            </span>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            <div>
              <p className="display text-xl italic text-oak-dark">
                {pastor.name}
              </p>
              <p className="caps mt-1 text-[0.63rem] font-semibold text-text-muted">
                {pastor.title} since {pastor.seniorPastorSince}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl leading-relaxed text-text-light">
            Pastor Harvey came to Countryside in {pastor.arrived} as Assistant
            Pastor and was called to serve as Senior Pastor in{" "}
            {pastor.seniorPastorSince}. He and {pastor.wife} have been married
            since {pastor.married} and have three children —{" "}
            {pastor.children.join(", ")}. Between the pulpit and the classroom he
            has spent {pastor.yearsInMinistry} in ministry.
          </p>

          <Link
            href="/our-pastor"
            className="focus-ring caps group mt-8 inline-flex items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            Read his full story
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
      </div>
    </section>
  );
}

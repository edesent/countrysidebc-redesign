import Image from "next/image";
import Link from "next/link";

const marks = [
  {
    title: "The King James Bible",
    body: "Preached from, read from, and memorized out of — every service. We hold it to be the verbally inspired Word of God and the sole authority for faith and practice. If you do not own one, we will put one in your hands.",
    ref: "Psalm 12:6-7 · 2 Timothy 3:16",
  },
  {
    title: "Hymns out of the hymnal",
    body: "Classic hymns that honor our Saviour, sung by the whole congregation. There is no band and there are no screens — just a piano, a hymn number, and everybody singing the same words.",
    ref: "Ephesians 5:19",
  },
  {
    title: "Preaching, not performing",
    body: "Rather than following modern trends we have stayed with traditional Bible preaching and teaching. You will hear a passage explained and applied, not a talk built around a video clip.",
    ref: "2 Timothy 4:2",
  },
  {
    title: "An independent local church",
    body: "No denominational headquarters, no board upstate. A local New Testament church governing itself under one Head — Christ — with two offices, pastor and deacon.",
    ref: "Colossians 1:18 · 1 Timothy 3:1-13",
  },
];

export default function StillThatChurch() {
  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">What that actually means</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,3.3rem)] text-ink">
              &ldquo;The way it used to be&rdquo; is not nostalgia. It is four
              decisions.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Plenty of churches say they are old-fashioned. Here is exactly what
              we mean by it, so you know what Sunday will be like before you ever
              walk through the door.
            </p>

            <figure className="mt-10">
              <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_26px_60px_-30px_rgba(34,30,23,0.4)]">
                <Image
                  src="/csbc/preaching-1.jpg"
                  alt="Pastor Paul Harvey preaching from the oak pulpit at Countryside Baptist Church, with the stacked-stone wall behind him."
                  width={1280}
                  height={720}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-[0.78rem] leading-relaxed text-text-muted">
                Every service is recorded and posted. You can{" "}
                <Link
                  href="/sermons"
                  className="focus-ring text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
                >
                  listen to last Sunday
                </Link>{" "}
                before you decide to come.
              </figcaption>
            </figure>
          </div>

          <ol className="space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
            {marks.map((mark, index) => (
              <li key={mark.title} className="bg-cream p-7 lg:p-9">
                <div className="flex items-baseline gap-4">
                  <span className="display text-[0.95rem] italic text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[1.6rem] leading-tight text-ink">
                    {mark.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-text-light">
                  {mark.body}
                </p>
                <p className="ref mt-4">{mark.ref}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/beliefs"
            className="focus-ring caps group inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
          >
            Read our full Statement of Faith
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

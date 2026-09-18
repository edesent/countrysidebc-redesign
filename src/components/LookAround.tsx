import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Three photographs of the church itself, on the homepage.
 *
 * All three are landscape frames from the church's own 2019 shoot, held at a
 * single 3:2 so the row reads as one band. The entrance photograph is portrait
 * and would have to be cropped through the steeple to sit here, so it stays
 * uncropped on /visit where it does more good anyway.
 */

const shots = [
  {
    src: "/csbc/exterior-sunny.jpg",
    alt: "Countryside Baptist Church from the road on a summer afternoon: a white brick gable carrying a tall cross and the words COUNTRYSIDE BAPTIST, a white steeple over the entrance wing, and a wooded hillside rising behind the building.",
    caption: "From Shoemaker Road, with the hill behind it.",
  },
  {
    src: "/csbc/sign-cross.jpg",
    alt: "A low view along the brick gable wall of Countryside Baptist Church, with the raised lettering COUNTRYSIDE BAPTIST and a cross laid into the brickwork above it.",
    caption: "The name and the cross, laid into the brick.",
  },
  {
    src: "/csbc/pulpit-cross.jpg",
    alt: "A cross carved into the honey-oak panelling of the pulpit at Countryside Baptist Church, with an arrangement of pink flowers on the communion table in front of it.",
    caption: "The cross on the pulpit.",
  },
];

export default function LookAround() {
  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">A look around</p>
          <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
            Where we meet.
          </h2>
          <p className="mt-6 leading-relaxed text-text-light">
            A white brick building with a steeple, set against the hill on
            Shoemaker Road, a few minutes off US&#8209;36. An Independent
            Baptist church that has been meeting in this corner of Tuscarawas
            County since {site.founded}.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <li key={shot.src}>
              <figure>
                <div className="overflow-hidden rounded-sm border border-linen-dark bg-linen shadow-[0_26px_55px_-32px_rgba(34,30,23,0.45)]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={2000}
                    height={1333}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                    className="aspect-[3/2] h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-start gap-3 text-[0.79rem] leading-relaxed text-text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-px w-6 shrink-0 bg-gold/60"
                  />
                  {shot.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

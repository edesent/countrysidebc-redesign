import type { Block } from "@/lib/content";

/**
 * Renders the church's own blocks. Scripture is set in the display serif and
 * indented behind a gold rule; their prose stays in the body sans; reference
 * clusters sit small and quiet underneath.
 */
export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.kind === "verse") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-gold/55 pl-5 sm:pl-6"
            >
              <p className="display text-[1.22rem] leading-[1.5] text-ink sm:text-[1.32rem]">
                &ldquo;{block.text}&rdquo;
              </p>
              <cite className="ref mt-2 block not-italic">{block.ref}</cite>
            </blockquote>
          );
        }

        if (block.kind === "prayer") {
          return (
            <div
              key={index}
              className="rounded-sm border border-gold/40 bg-gold-pale/25 p-6 sm:p-8"
            >
              <p className="caps text-[0.6rem] font-semibold text-oak">
                A prayer, if you mean it
              </p>
              <p className="display mt-4 text-[1.35rem] leading-[1.45] text-ink sm:text-[1.5rem]">
                {block.text}
              </p>
            </div>
          );
        }

        if (block.kind === "refs") {
          return (
            <p key={index} className="ref">
              ({block.text})
            </p>
          );
        }

        return (
          <p
            key={index}
            className="text-[1.02rem] leading-[1.75] text-text-body"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

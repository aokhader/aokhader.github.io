import { site } from "@/data";

/**
 * Seamless marquee. Two identical groups sit side by side and the track slides
 * by exactly -50% — one whole group — so when it snaps back, group 2 is sitting
 * precisely where group 1 started and the reset is invisible.
 *
 * Two rules keep that math exact:
 *  - no `gap` between the groups (spacing lives in each span's padding), since a
 *    gap makes -50% land short of one group's width;
 *  - each group repeats the phrase enough times to overflow the widest viewport,
 *    otherwise the band drains before the loop comes around.
 */
const REPEATS = 4;

function Group() {
  return (
    <div className="flex shrink-0">
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span key={i} className="whitespace-nowrap px-7 font-mono text-sm tracking-[0.1em]">
          {site.marquee}
        </span>
      ))}
    </div>
  );
}

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-ink py-3 text-cream">
      <span className="sr-only">{site.marquee}</span>
      <div className="marq flex w-max" aria-hidden="true">
        <Group />
        <Group />
      </div>
    </div>
  );
};

export default Marquee;

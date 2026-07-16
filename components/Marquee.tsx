import { site } from "@/data";

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-ink py-3 text-cream">
      <div className="marq flex w-max gap-14 font-mono text-sm tracking-[0.1em]">
        <span>{site.marquee}</span>
        <span aria-hidden="true">{site.marquee}</span>
      </div>
    </div>
  );
};

export default Marquee;

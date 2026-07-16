import { navLinks, site } from "@/data";

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-6 gap-y-3 px-5 py-6 font-mono text-[13px] sm:px-14">
      <a href="#top" className="mr-auto font-display text-xl font-extrabold text-ink no-underline">
        AK<span className="blink text-orange">_</span>
      </a>

      <div className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-ink no-underline hover:text-orange-ink">
            {link.name}
          </a>
        ))}
      </div>

      <a
        href={site.resumeUrl}
        download
        className="nb-btn nb-press bg-card px-3.5 py-2 text-ink no-underline"
      >
        RESUME.PDF ↓
      </a>
    </nav>
  );
};

export default Nav;

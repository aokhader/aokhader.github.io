import { FiDownload } from "react-icons/fi";
import { ScrambleText } from "./ui/scramble-text";
import { ScrollProgress } from "./ui/scroll-progress";
import { navLinks, site } from "@/data";

const Nav = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm text-fg">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <ScrambleText text="aokhader" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={site.resumeUrl}
          download
          className="group relative inline-flex overflow-hidden rounded-md p-px"
        >
          <span
            aria-hidden="true"
            className="animate-border-spin absolute inset-[-1000%]
            bg-[conic-gradient(from_90deg_at_50%_50%,#232d42_0%,#e7b44c_50%,#232d42_100%)]"
          />
          <span
            className="relative inline-flex items-center gap-2 rounded-[5px] bg-ink px-3.5
            py-1.5 text-sm font-medium text-accent transition-colors group-hover:bg-raised"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </span>
        </a>
      </nav>
      <ScrollProgress />
    </header>
  );
};

export default Nav;

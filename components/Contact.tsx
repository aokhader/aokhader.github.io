import { BlurFade } from "./ui/blur-fade";
import { CopyEmail } from "./ui/copy-email";
import { contact, site } from "@/data";

const darkBtn =
  "inline-flex items-center rounded-[10px] border-2 border-cream px-[18px] py-[11px] font-mono text-[13px] font-semibold text-cream no-underline transition-colors hover:bg-cream/[0.12]";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 pb-16 pt-16 sm:px-14">
      <BlurFade inView>
        <div className="relative overflow-hidden rounded-[18px] bg-ink px-8 py-[52px] text-cream sm:px-12">
          <div className="mb-2.5 font-mono text-[13px] text-peach-ink">{contact.eyebrow}</div>
          <h2 className="mb-2.5 max-w-[620px] font-display text-[40px] font-extrabold sm:text-[52px]">
            {contact.heading}
          </h2>
          <p className="mb-[22px] max-w-[520px] text-base text-cream/80">{contact.copy}</p>
          <a
            href={`mailto:${site.email}`}
            className="border-b-[3px] border-orange font-mono text-2xl font-semibold text-cream no-underline sm:text-3xl"
          >
            {site.email}
          </a>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <CopyEmail className="inline-flex items-center rounded-[10px] border-2 border-cream bg-orange px-[18px] py-[11px] font-mono text-[13px] font-semibold text-ink transition-colors hover:bg-peach-ink" />
            <a href={site.resumeUrl} download className={darkBtn}>
              RESUME.PDF ↓
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={darkBtn}>
              GITHUB ↗
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={darkBtn}>
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </BlurFade>

      <p className="mt-6 text-center font-mono text-xs text-faint">{contact.footer}</p>
    </section>
  );
};

export default Contact;

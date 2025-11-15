// src/components/SocialBar.tsx
import { FaGithub, FaLinkedinIn, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:thilinahweerakkody@gmail.com",
    Icon: HiOutlineMail,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=zb07m3UAAAAJ",
    Icon: SiGooglescholar,
  },
  {
    label: "GitHub",
    href: "https://github.com/thilinahwe",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thilinahw",
    Icon: FaLinkedinIn,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-0985-0573",
    Icon: FaOrcid, // replace with actual X icon later if needed
  },
];

export default function SocialBar() {
  return (
    <section className="text-neutral-900 dark:text-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-6">
        <div className="flex flex-wrap justify-center gap-10 sm:gap-14 lg:gap-20">

          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              {/* ICON */}
              <Icon
                className="
                  text-5xl sm:text-6xl lg:text-7xl
                  transition duration-200
                  group-hover:text-sky-500
                  dark:group-hover:text-sky-400
                "
              />

              {/* LABEL */}
              <span className="
                text-xs sm:text-sm
                text-neutral-700 dark:text-neutral-300
                group-hover:text-sky-600 dark:group-hover:text-sky-400
              ">
                {label}
              </span>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
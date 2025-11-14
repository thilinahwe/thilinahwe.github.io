import HeadMeta from "../components/HeadMeta";

export default function Contact() {
  return (
    <>
      <HeadMeta
        title="Contact | Thilina Weerakkody"
        description="Get in touch for collaborations, industry projects, or consulting in robotics, control, and high-throughput experimental platforms."
      />

      <section className="bg-neutral-950 text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-16">
          {/* Top: Contact me for collaboration */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left text block */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Contact me!
                {/* Contact me for <span className="text-sky-400">collaboration</span> */}
              </h2>
              {/* <p className="text-sm sm:text-base text-neutral-300 mb-6 max-w-md">
                Reach out if you&apos;d like to discuss robotics, control, AI, or
                high-throughput experimental platforms. I&apos;m open to industry
                collaborations, research projects, and consulting.
              </p> */}

              {/* Social badges */}
              <div className="flex flex-wrap gap-3 text-xs text-neutral-400">
                <a
                  href="https://github.com/thilinahwe"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/thilinahw"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            </div>

            {/* Right: contact panel */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-5 sm:p-6">
              <h3 className="text-sm font-medium text-neutral-200 mb-4">
                Get in touch
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-neutral-400 text-xs uppercase mb-1">
                    Email (work)
                  </div>
                  <a
                    href="mailto:TWeerakkody@mednet.ucla.edu"
                    className="text-sky-400 hover:underline break-all"
                  >
                    TWeerakkody@mednet.ucla.edu
                  </a>
                </div>
                <div>
                  <div className="text-neutral-400 text-xs uppercase mb-1">
                    Email (personal)
                  </div>
                  <a
                    href="mailto:thilinahweerakkody@gmail.com"
                    className="text-sky-400 hover:underline break-all"
                  >
                    thilinahweerakkody@gmail.com
                  </a>
                </div>
                <div className="pt-2">
                  {/* <p className="text-xs text-neutral-500">
                    For formal academic correspondence, you may also reference my
                    academic CV and teaching page.
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Let's work together block */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
            <div>
              {/* <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Let&apos;s work <br className="hidden sm:block" />
                together today!
              </h2> */}
              {/* <p className="text-sm sm:text-base text-neutral-300 mb-6 max-w-md">
                Whether it&apos;s a research collaboration, an industry project,
                or consulting on robotics and control, I&apos;d be happy to
                discuss how I can help.
              </p> */}
              <a
                href="mailto:thilinahweerakkody@gmail.com"
                className="inline-flex items-center justify-center rounded-full
                           bg-sky-500 text-sm font-medium text-white py-3 px-6
                           shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                {/* Start a project */}
              </a>
            </div>

            {/* Sitemap & socials columns */}
            <div className="grid grid-cols-2 gap-8 text-xs text-neutral-400">
              <div>
                <div className="font-semibold text-neutral-200 mb-3">Sitemap</div>
                <div className="space-y-1">
                  <a href="#/" className="block hover:text-sky-400">
                    Home
                  </a>
                  <a href="#/projects" className="block hover:text-sky-400">
                    Projects
                  </a>
                  <a href="#/cv" className="block hover:text-sky-400">
                    Curriculum Vitae
                  </a>
                  <a href="#/services" className="block hover:text-sky-400">
                    Services
                  </a>
                  <a href="#/contact" className="block hover:text-sky-400">
                    Contact
                  </a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-neutral-200 mb-3">Socials</div>
                <div className="space-y-1">
                  <a
                    href="https://github.com/thilinahwe"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thilinahw"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-400"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Online profiles (primary + additional) */}
          <div className="border-t border-neutral-800 pt-10">
            <h2 className="text-sm font-semibold text-neutral-200 mb-4 uppercase tracking-wide">
              Online profiles
            </h2>

            {/* Additional academic profiles */}
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="text-neutral-500 mb-1">
                Additional academic / institutional profiles:
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.researchgate.net/profile/Thilina-Weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                    RG
                  </span>
                  <span>ResearchGate</span>
                </a>

                <a
                  href="https://iihr.uiowa.edu/people/thilina-weerakkody/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                    UI
                  </span>
                  <span>IIHR – University of Iowa</span>
                </a>

                <a
                  href="https://sciprofiles.com/profile/thilina-h-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                    SP
                  </span>
                  <span>SciProfiles</span>
                </a>

                <a
                  href="https://pharmacology.ucla.edu/people/thilina-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                    UCLA
                  </span>
                  <span>UCLA Pharmacology</span>
                </a>

                <a
                  href="https://www.vandamlab.org/lab-members"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-sky-500 hover:text-sky-300 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                    Lab
                  </span>
                  <span>van Dam Lab – UCLA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

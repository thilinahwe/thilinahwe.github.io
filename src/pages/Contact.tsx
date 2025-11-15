import HeadMeta from "../components/HeadMeta";

export default function Contact() {
  return (
    <>
      <HeadMeta
        title="Contact | Thilina Weerakkody"
        description="Get in touch for collaborations, industry projects, or consulting in robotics, control, and high-throughput experimental platforms."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-16">
          {/* Top: Contact me for collaboration */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left text block */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Contact me!
              </h2>

              {/* Social badges */}
              <div className="flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                <a
                  href="https://github.com/thilinahwe"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/thilinahw"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  Google Scholar
                </a>
              </div>
            </div>

            {/* Right: contact panel */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-4">
                Get in touch
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs uppercase mb-1 text-neutral-500 dark:text-neutral-400">
                    Email (work)
                  </div>
                  <a
                    href="mailto:TWeerakkody@mednet.ucla.edu"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    TWeerakkody@mednet.ucla.edu
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase mb-1 text-neutral-500 dark:text-neutral-400">
                    Email (personal)
                  </div>
                  <a
                    href="mailto:thilinahweerakkody@gmail.com"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    thilinahweerakkody@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Sitemap & socials */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
            <div>
              <a
                href="mailto:thilinahweerakkody@gmail.com"
                className="inline-flex items-center justify-center rounded-full
                           bg-sky-500 text-sm font-medium text-white py-3 px-6
                           shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                Start a conversation
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 text-xs text-neutral-600 dark:text-neutral-400">
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-200 mb-3">
                  Sitemap
                </div>
                <div className="space-y-1">
                  <a href="#/" className="block hover:text-sky-600 dark:hover:text-sky-400">
                    About
                  </a>
                  <a href="#/projects" className="block hover:text-sky-600 dark:hover:text-sky-400">
                    Projects
                  </a>
                  <a href="#/cv" className="block hover:text-sky-600 dark:hover:text-sky-400">
                    Curriculum Vitae
                  </a>
                  <a href="#/services" className="block hover:text-sky-600 dark:hover:text-sky-400">
                    Services
                  </a>
                  <a href="#/contact" className="block hover:text-sky-600 dark:hover:text-sky-400">
                    Contact
                  </a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-200 mb-3">
                  Socials
                </div>
                <div className="space-y-1">
                  <a
                    href="https://github.com/thilinahwe"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thilinahw"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Online profiles */}
          <div className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-4 uppercase tracking-wide">
              Online profiles
            </h2>

            <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="mb-1 text-neutral-500 dark:text-neutral-500">
                Additional academic / institutional profiles:
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.researchgate.net/profile/Thilina-Weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    RG
                  </span>
                  <span>ResearchGate</span>
                </a>

                <a
                  href="https://iihr.uiowa.edu/people/thilina-weerakkody/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    UI
                  </span>
                  <span>IIHR – University of Iowa</span>
                </a>

                <a
                  href="https://sciprofiles.com/profile/thilina-h-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    SP
                  </span>
                  <span>SciProfiles</span>
                </a>

                <a
                  href="https://pharmacology.ucla.edu/people/thilina-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    UCLA
                  </span>
                  <span>UCLA Pharmacology</span>
                </a>

                <a
                  href="https://www.vandamlab.org/lab-members"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    Lab
                  </span>
                  <span>van Dam Lab – UCLA</span>
                </a>

                {/* IEEE Collabratec moved here from footer */}
                <a
                  href="https://ieee-collabratec.ieee.org/app/p/ThilinaWeerakkody55689/about"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white border-neutral-200 hover:border-sky-500 hover:text-sky-600 transition-colors dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-sky-500 dark:hover:text-sky-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                    IEEE
                  </span>
                  <span>IEEE Collabratec</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
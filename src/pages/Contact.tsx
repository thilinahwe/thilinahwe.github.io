export default function Contact() {
  return (
    <section className="bg-neutral-950 text-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-16">
        {/* Top: Contact me for collaboration */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left text block */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Contact me for <span className="text-sky-400">collaboration</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mb-6 max-w-md">
              Reach out if you&apos;d like to discuss robotics, control, AI, or
              high-throughput experimental platforms. I&apos;m open to industry
              collaborations, research projects, and consulting.
            </p>

            {/* Social icons as simple text links for now */}
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

          {/* Right: simple contact panel */}
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
                <p className="text-xs text-neutral-500">
                  For formal academic correspondence, you may also reference my
                  academic CV and teaching page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Let's work together block */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Let&apos;s work <br className="hidden sm:block" />
              together today!
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mb-6 max-w-md">
              Whether it&apos;s a research collaboration, an industry project,
              or consulting on robotics and control, I&apos;d be happy to
              discuss how I can help.
            </p>
            <a
              href="mailto:thilinahweerakkody@gmail.com"
              className="inline-flex items-center justify-center rounded-full
                         bg-sky-500 text-sm font-medium text-white py-3 px-6
                         shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
            >
              Start a project
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
                <a href="#/publications" className="block hover:text-sky-400">
                  Publications
                </a>
                <a href="#/cv" className="block hover:text-sky-400">
                  CV
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
                <a
                  href="https://www.vandamlab.org/lab-members"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-sky-400"
                >
                  Lab page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

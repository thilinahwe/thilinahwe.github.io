export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: name + copyright */}
          <div className="text-xs sm:text-sm text-neutral-500">
            <div className="text-neutral-200 font-semibold">
              Thilina H. Weerakkody, Ph.D.
            </div>
            <div className="text-neutral-500">
              © {year} · Robotics · Control · AI · High-throughput systems
            </div>
          </div>

          {/* Right: primary profiles row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thilinahw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                in
              </span>
              <span>LinkedIn</span>
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                G
              </span>
              <span>Google Scholar</span>
            </a>

            {/* ORCID */}
            <a
              href="https://orcid.org/0000-0003-0985-0573"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                iD
              </span>
              <span>ORCID</span>
            </a>

            {/* IEEE Collabratec */}
            <a
              href="https://ieee-collabratec.ieee.org/app/p/ThilinaWeerakkody55689/about"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-semibold text-neutral-100">
                IEEE
              </span>
              <span>IEEE Collabratec</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

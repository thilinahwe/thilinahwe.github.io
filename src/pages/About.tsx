export default function About() {
  return (
    <section
      className="
        bg-gradient-to-b 
        from-white via-slate-50 to-gray-100
        dark:from-slate-950 dark:via-slate-900 dark:to-black
        text-neutral-900 dark:text-slate-50
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative overflow-hidden">
        {/* Glazed gradient line in the background */}
        <div
          className="
            pointer-events-none absolute -top-8 left-1/2 h-28 w-[140%] -translate-x-1/2
            bg-gradient-to-r from-blue-400 via-cyan-300 to-green-300
            dark:from-sky-500 dark:via-fuchsia-500 dark:to-emerald-400
            opacity-40 blur-3xl dark:opacity-30
          "
        />

        {/* Slight vignette at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-200/70 to-transparent dark:from-black/60" />

        {/* MAIN CONTENT STACK */}
        <div className="relative space-y-16">
          {/* =============== HERO BLOCK =============== */}
          <div className="max-w-3xl">
            {/* Subtitle */}
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-slate-300 mb-3">
              R O B O T I C S  · C O N T R O L  · D Y N A M I C S  · M O D E L L I N G  · A I
            </p>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-slate-50">
              Robotics | Controls | Dynamics | Machine Learning Data Driven Modelling
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-slate-200 mb-8 max-w-2xl">
              I am a mechanical engineer and postdoctoral researcher at UCLA,
              working at the intersection of robotics, robust/adaptive control,
              and physics-informed machine learning for medical and
              high-throughput experimental platforms.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#/projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-sky-500 text-sm font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                View selected projects
              </a>

              <a
                href="#/cv"
                className="
                  inline-flex items-center px-5 py-2.5 rounded-full border text-sm font-medium
                  border-neutral-300 text-neutral-800 hover:border-sky-500 hover:text-sky-600
                  dark:border-slate-600 dark:text-slate-100
                  dark:hover:border-sky-400 dark:hover:text-sky-300
                  transition-colors
                "
              >
                Download CV
              </a>
            </div>

            {/* Core areas + Tools */}
            <div className="flex flex-wrap gap-6 text-xs text-neutral-700 dark:text-slate-300">
              <div>
                <div className="font-semibold text-neutral-900 dark:text-slate-100 mb-1">
                  Core areas
                </div>
                <div>
                  Robotics, L₁ adaptive control, PIML, high-throughput systems
                </div>
              </div>

              <div>
                <div className="font-semibold text-neutral-900 dark:text-slate-100 mb-1">
                  Tools
                </div>
                <div>
                  Python, MATLAB/Simulink, ROS/ROS2, LabVIEW, C++, SolidWorks
                </div>
              </div>
            </div>
          </div>

          {/* ========= BIO / NEWS / HIGHLIGHTS / SKILLS (STACKED) ========= */}
          <div className="space-y-10">
            {/* Short bio */}
            <div className="max-w-4xl">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100 mb-2">
                About me
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                My background spans mechanical design, soft robotics, and control theory.
                During my Ph.D. at the University of Iowa I worked in the Smart
                Multifunctional Material Systems (SMMS) Lab on modeling and robust / L₁
                adaptive control of artificial muscles such as SMAs and twisted-and-coiled
                actuators for assistive and soft-robotic devices. At UCLA, my work focuses
                on high-throughput droplet radiochemistry, robotic platforms for PET
                radiotracer development, and data-driven / physics-informed approaches to
                automate experimental workflows.
              </p>
            </div>

            {/* News (single column) */}
            <div className="max-w-4xl space-y-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                News
              </h2>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• 2025 – Accepted article on robust control of shape memory alloys for assistive robotics.</li>
                <li>• 2024 – Joined UCLA as a Postdoctoral Research Scholar in the van Dam Lab.</li>
                <li>• Ongoing – Developing high-throughput droplet radiochemistry workflows and imaging pipelines.</li>
              </ul>
            </div>

            {/* Research highlights (single column) */}
            <div className="max-w-4xl space-y-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Research highlights
              </h2>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• L₁ adaptive and robust control of highly nonlinear artificial muscles (SMA, TCAM, TSAM).</li>
                <li>• Design and automation of robotic platforms for high-throughput droplet radiochemistry (RADBOT).</li>
                <li>• Physics-informed and data-driven modeling for soft actuators and experimental systems.</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-3 max-w-4xl">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Skills
              </h2>
              <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div>
                  <div className="font-semibold mb-1">Domains</div>
                  <ul className="space-y-1">
                    <li>• Robotics & mechatronics</li>
                    <li>• Robust / L₁ adaptive control</li>
                    <li>• Dynamics & multibody systems</li>
                    <li>• High-throughput experimental design</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-1">Software & tools</div>
                  <ul className="space-y-1">
                    <li>• Python, MATLAB/Simulink</li>
                    <li>• ROS / ROS2, LabVIEW</li>
                    <li>• C++, embedded control</li>
                    <li>• SolidWorks, Fusion 360</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-1">Applications</div>
                  <ul className="space-y-1">
                    <li>• Assistive & wearable robotics</li>
                    <li>• Droplet-based radiochemistry</li>
                    <li>• Medical imaging & PET workflows</li>
                    <li>• Physics-informed ML for experiments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ================== BOTTOM CONTACT AREA ================== */}
          <div className="space-y-6 pt-4">
            {/* Get in touch – full width, emails in one line on larger screens */}
            <div
              className="
                w-full rounded-2xl border border-neutral-200/70 bg-white/80 shadow-sm
                px-5 py-6 sm:px-6 sm:py-7
                dark:border-neutral-800/70 dark:bg-neutral-900/80
                backdrop-blur
              "
            >
              <h2 className="text-base sm:text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-50">
                Contact
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-[120px] text-sm">
                <div>
                  <div className="text-xs uppercase mb-1 text-neutral-500 dark:text-neutral-400">
                    Email (Personal)
                  </div>
                  <a
                    href="mailto:thilinahweerakkody@gmail.com"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    thilinahweerakkody@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs uppercase mb-1 text-neutral-500 dark:text-neutral-400">
                    Email (UCLA)
                  </div>
                  <a
                    href="mailto:TWeerakkody@mednet.ucla.edu"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    TWeerakkody@mednet.ucla.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Online profiles – full width, stacked under Get in touch */}
            <div
              className="
                w-full rounded-2xl border border-neutral-200/70 bg-white/80 shadow-sm
                px-5 py-6 sm:px-6 sm:py-7
                dark:border-neutral-800/70 dark:bg-neutral-900/80
                backdrop-blur
              "
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-800 dark:text-neutral-100 mb-2">
                Online profiles
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Additional academic and institutional profiles:
              </p>

              <div className="flex flex-wrap gap-3">
                {/* ResearchGate */}
                <a
                  href="https://www.researchgate.net/profile/Thilina-Weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-[12px] font-semibold text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
                    RG
                  </span>
                  <span>ResearchGate</span>
                </a>

                {/* IIHR – University of Iowa */}
                <a
                  href="https://iihr.uiowa.edu/people/thilina-weerakkody/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-10 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    UIowa
                  </span>
                  <span>IIHR – University of Iowa</span>
                </a>

                {/* SMMS (Lamuta lab) */}
                <a
                  href="https://lamuta.lab.uiowa.edu/people"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-10 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    SMMS
                  </span>
                  <span>SMMS – Lamuta Lab</span>
                </a>

                {/* SciProfiles */}
                <a
                  href="https://sciprofiles.com/profile/thilina-h-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-7 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    Sci
                  </span>
                  <span>SciProfiles</span>
                </a>

                {/* UCLA Pharmacology */}
                <a
                  href="https://pharmacology.ucla.edu/people/thilina-weerakkody"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-9 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    UCLA
                  </span>
                  <span>UCLA Pharmacology</span>
                </a>

                {/* van Dam Lab – UCLA */}
                <a
                  href="https://www.vandamlab.org/lab-members"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-7 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    Lab
                  </span>
                  <span>van Dam Lab – UCLA</span>
                </a>

                {/* IEEE Collabratec */}
                <a
                  href="https://ieee-collabratec.ieee.org/app/p/ThilinaWeerakkody55689/about"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-200 bg-white/80 text-xs sm:text-sm
                    hover:border-sky-500 hover:text-sky-600
                    dark:border-neutral-800 dark:bg-neutral-900/80
                    dark:hover:border-sky-500 dark:hover:text-sky-300
                    transition-colors
                  "
                >
                  <span className="flex h-7 w-7 items-center justify-center 
                  rounded-full bg-neutral-900 text-[11px] font-semibold text-neutral-50
                  dark:bg-neutral-100 dark:text-neutral-900">
                    IEEE
                  </span>
                  <span>IEEE Collabratec</span>
                </a>
              </div>
            </div>

            {/* Your SocialBar component will still render just below this section in the layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
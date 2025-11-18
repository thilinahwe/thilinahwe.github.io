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
          {/* =============== HERO (TWO COLUMNS: TEXT + PHOTO) =============== */}
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]
              gap-10 md:gap-16
              items-start
            "
          >
            {/* LEFT COLUMN: subtitle, name, one-liner, buttons, core areas/tools */}
            <div className="space-y-8">
              {/* Subtitle + Name + One-liner */}
              <div>
                {/* Subtitle */}
                <p
                  className="
                    text-xs sm:text-sm 
                    uppercase 
                    tracking-[0.20em]
                    text-neutral-500 dark:text-slate-300 
                    mb-3
                  "
                >
                  Robotics · Control · Dynamics · Data-driven Modelling · Machine
                  Learning · AI
                </p>

                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-slate-50">
                  Thilina H. Weerakkody
                </h1>

                {/* One-liner description */}
                
                <p className="text-sm sm:text-base md:text-base text-neutral-700 dark:text-slate-200 mb-6 max-w-4xl text-justify">
                  Mechanical Engineer &amp; Postdoctoral Scholar at UCLA working
                  at the intersection of robotics, underwater robotic systems,
                  advanced control, and AI/ML-driven design. My work combines
                  physics-informed machine learning with real-world system design
                  across underwater systems, medical robotics, healthcare
                  technologies, and high-throughput experimental automation.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
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
              </div>

              {/* Core areas + Tools */}
              <div className="flex flex-wrap gap-36 text-xs sm:text-sm text-neutral-700 dark:text-slate-300">
                <div className="space-y-1">
                  <div className="font-semibold text-neutral-900 dark:text-slate-100">
                    Core areas
                  </div>
                  <div>Robotics &amp; mechatronics</div>
                  <div>Soft actuators (SMA, TCAM, TSAM)</div>
                  <div>Control design &amp; 𝓛₁ adaptive control</div>
                  <div>Physics-informed &amp; data-driven modelling</div>
                  <div>Underwater &amp; medical robotic systems</div>
                  <div>High-throughput experimental platforms</div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-neutral-900 dark:text-slate-100">
                    Tools
                  </div>
                  <div>Python (SciPy, NumPy, PyTorch/TensorFlow)</div>
                  <div>MATLAB / Simulink (control &amp; dynamics)</div>
                  <div>ROS / ROS2, LabVIEW, embedded C/C++</div>
                  <div>SolidWorks, Fusion 360, CAD-based design</div>
                  <div>MuJoCo, Gazebo, simulation &amp; visualization</div>
                  <div>Git / GitHub for reproducible workflows</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: photo */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/assets/profile.jpg"
                alt="Thilina Weerakkody"
                className="
                  w-52 sm:w-56 md:w-64 lg:w-72 
                  h-auto
                  rounded-2xl object-cover shadow-lg
                  border border-neutral-200 dark:border-neutral-800
                "
              />
            </div>
          </div>

          {/* =============== ABOUT ME (FULL WIDTH) =============== */}
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100 mb-2">
              About me
            </h2>
            <p className="text-sm sm:text-base md:text-base text-neutral-700 dark:text-slate-200 mb-6 max-w-4xl text-justify">
              I am a mechanical engineer and postdoctoral researcher at UCLA experience in developing intelligent robotic 
              systems that combine advanced control, simulations, and modern machine learning. 
              My work focuses on building reliable, scalable, and data-efficient autonomous systems—ranging 
              from underwater robots to high-throughput experimental automation—where physics-based modeling 
              and AI-driven decision making operate together in real time. I have end-to-end experience across 
              modelling, simulation, and deployment, including robust / 𝓛₁ adaptive control of 
              nonlinear soft actuators (SMA, TCAM, TSAM), dynamic modelling of complex mechanisms, and 
              integration of physics-informed and data-driven learning pipelines for control and prediction. 
              Broadly, I am interested in robotics that leverages both physical priors and learned structure to 
              achieve strong generalization, safe closed-loop behavior, and high-performance interaction in 
              real-world environments. I enjoy working on interdisciplinary problems where control theory, 
              machine learning, and system design converge to produce practical, deployable autonomy.
            </p>
          </div>

          {/* News (single column) */}
          <div className="max-w-4xl space-y-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              News
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Sep 2025 - Our paper "Robust Control of Shape Memory Alloys for Assistive Robotics Applications" is accepted.</li>
              <li>• Oct 2024 - Joined UCLA as a Postdoctoral Research Scholar in the van Dam Lab.</li>
              <li>• Aug 2025 - Our paper "Bioinspired Active Vortex Generators for Underwater Flow Control" is published in 
                <a
                  href="https://www.liebertpub.com/doi/10.1177/28350111251365627"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline dark:text-sky-400 ml-1"
                >
                  Robotics Reports
                </a>.
              </li>
              <li>• Sep 2024 - I defended my PhD  
                <a
                  href="https://www.proquest.com/openview/7d8a4b68e26c6e63fb5d3188899e0581/1?pq-origsite=gscholar&cbl=18750&diss=y"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline dark:text-sky-400 ml-1"
                >thesis</a> on Design and Control of Artificial Muscles for Robotic Applications.</li>
            </ul>
          </div>

          {/* Research highlights (single column) */}
          <div className="max-w-4xl space-y-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              Research highlights
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• 𝓛₁ adaptive and robust control of highly nonlinear artificial muscles (SMA, TCAM, TSAM).</li>
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
                  <li>• Robotics &amp; mechatronics</li>
                  <li>• Robust / 𝓛₁ adaptive control</li>
                  <li>• Dynamics &amp; multibody systems</li>
                  <li>• High-throughput experimental design</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-1">Software &amp; tools</div>
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
                  <li>• Assistive &amp; wearable robotics</li>
                  <li>• Droplet-based radiochemistry</li>
                  <li>• Medical imaging &amp; PET workflows</li>
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
    </section>
  );
}
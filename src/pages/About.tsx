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
                  Robotics · Control · Dynamics · Physics-Informed Modelling 
                </p>

                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-slate-50">
                  Thilina H. Weerakkody
                </h1>

                {/* One-liner description */}
               
                <p className="text-sm sm:text-base md:text-base text-neutral-700 dark:text-slate-200 mb-6 max-w-4xl text-justify">
                  Mechanical Engineer and researcher working at the intersection of robotics, nonlinear dynamics, 
                  advanced control, and intelligent systems. My research integrates physics-based modeling, 
                  control theory, and machine learning to develop robotic and automated systems, with applications 
                  spanning soft and bioinspired robotics, medical technologies, and intelligent automation.

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
                  <div>Robotics &amp; intelligent mechatronic systems</div>
                  <div>Nonlinear dynamics &amp; multibody systems</div>
                  <div>Robust, adaptive &amp; model predictive control</div>
                  <div>Soft &amp; bioinspired robotic systems</div>
                  <div>Physics-informed &amp; data-driven modelling</div>
                  <div>Embedded systems &amp; intelligent automation</div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-neutral-900 dark:text-slate-100">
                    Tools
                  </div>
                  <div>MATLAB / Simulink / Simscape</div>
                  <div>Python (NumPy, SciPy, PyTorch, TensorFlow)</div>
                  <div>ROS / ROS 2, Gazebo, MuJoCo</div>
                  <div>Embedded C/C++, LabVIEW &amp; DAQ systems</div>
                  <div>SolidWorks, Fusion 360 &amp; CAD/CAE tools</div>
                  <div>Git / GitHub &amp; reproducible research workflows</div>
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
             I am a Senior Lecturer in the Department of Mechanical Engineering at the University of Moratuwa, Sri Lanka, where 
             I also received my B.Sc. Engineering (Honors) degree in Mechanical Engineering. I received my Ph.D. in Mechanical 
             Engineering from the University of Iowa, USA, where my research focused on soft robotics, nonlinear dynamics, and 
             the control of artificial muscles for robotic applications, with support from DARPA, ONR, NASA, and NSF. Following 
             my Ph.D., I worked as a Postdoctoral Scholar at the California NanoSystems Institute (CNSI) at the University of 
             California, Los Angeles (UCLA), USA, contributing to NIH- and ARPA-H-supported research on robotic automation in 
             collaboration with Stanford Medicine. My research interests include robotics, nonlinear dynamics, multibody systems, 
             robust and adaptive control, model predictive control, bioinspired robotic systems, physics-informed machine learning, 
             embedded systems, and intelligent automation.
            </p>
          </div>

          {/* News (single column) */}
          <div className="max-w-6xl space-y-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              News
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Jul 2026 - Our paper "Investigation of High-throughput Non-destructive Methods to Measure Radioactivity in Microliter Droplets" is published in IEEE Transactions on Radiation and Plasma Medical Sciences.</li>
              <li>• Apr 2026 - Joined the Department of Mechanical Engineering, University of Moratuwa, as a Senior Lecturer.</li>
              <li>• Mar 2026 - Our paper "Robust Control of Shape Memory Alloys for Assistive Robotics Applications" is published in{" "}
                <a
                  href="https://link.springer.com/article/10.1007/s40830-025-00596-z"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline dark:text-sky-400 ml-1"
                >
                  Shape Memory and Superelasticity
                </a>.</li>
              <li>• Aug 2025 - Our research on bioinspired active vortex generators for underwater flow control is featured by Iowa Now.</li>
              <li>• Aug 2025 - Our paper "Bioinspired Active Vortex Generators for Underwater Flow Control" is published in{" "}
                <a
                  href="https://www.liebertpub.com/doi/10.1177/28350111251365627"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline dark:text-sky-400 ml-1"
                >
                  Robotics Reports
                </a>.</li>
              <li>• Jul 2025 - Our U.S. patent application "Semi-Automated Immunolabeling Systems and Associated Devices and Methods" is published.</li>
              <li>• Oct 2024 - Joined UCLA as a Postdoctoral Scholar at the California NanoSystems Institute (CNSI).</li>
              <li>• Sep 2024 - Defended my Ph.D.{" "}
                <a
                  href="https://www.proquest.com/openview/7d8a4b68e26c6e63fb5d3188899e0581/1?pq-origsite=gscholar&cbl=18750&diss=y"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline dark:text-sky-400 ml-1"
                >
                  dissertation
                </a>{" "}
                on "Design and Control of Artificial Muscles for Robotic Applications."</li>
            </ul>
          </div>

          {/* Research highlights (single column) */}
          <div className="max-w-4xl space-y-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              Research highlights
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Advanced control of nonlinear and uncertain systems, including robust, adaptive, and model predictive control.</li>
              <li>• Nonlinear dynamics, multibody modeling, and control of robotic and bioinspired systems.</li>
              <li>• Design, dynamics, and control of robotic systems for uneven-terrain locomotion and mobility.</li>
              <li>• Physics-informed and data-driven modeling for dynamics, system identification, and control.</li>
              <li>• Design and automation of intelligent robotic, embedded, and experimental systems.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-3 max-w-6xl">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <div>
                <div className="font-semibold mb-1">Domains</div>
                <ul className="space-y-1">
                  <li>• Robotics &amp; intelligent mechatronic systems</li>
                  <li>• Robust, adaptive &amp; model predictive control</li>
                  <li>• Nonlinear dynamics &amp; multibody systems</li>
                  <li>• Physics-informed &amp; data-driven modeling</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-1">Software &amp; tools</div>
                <ul className="space-y-1">
                  <li>• MATLAB, Simulink &amp; Simscape</li>
                  <li>• Python, PyTorch &amp; TensorFlow</li>
                  <li>• ROS / ROS 2, Gazebo &amp; MuJoCo</li>
                  <li>• C / C++, embedded &amp; real-time control</li>
                  <li>• SolidWorks &amp; Fusion 360</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-1">Applications</div>
                <ul className="space-y-1">
                  <li>• Uneven-terrain &amp; mobile robotic systems</li>
                  <li>• Soft, bioinspired &amp; assistive robotics</li>
                  <li>• Medical robotics &amp; intelligent automation</li>
                  <li>• High-throughput experimental platforms</li>
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
                  Email (UIowa)
                </div>
                <a
                  href="mailto:thilina-weerakkody@uiowa.edu"
                  className="text-sky-600 hover:underline dark:text-sky-400"
                >
                  thilina-weerakkody@uiowa.edu
                </a>
              </div>

              <div>
                <div className="text-xs uppercase mb-1 text-neutral-500 dark:text-neutral-400">
                  Email (UOM)
                </div>
                <a
                  href="mailto:thilinaw@uom.lk"
                  className="text-sky-600 hover:underline dark:text-sky-400"
                >
                  thilinaw@uom.lk
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
                href="https://iihr.uiowa.edu/people/caterina-lamuta"
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
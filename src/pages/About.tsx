export default function About() {
  return (
    <section className="
      bg-gradient-to-b 
      // from-white via-neutral-100 to-neutral-50          // LIGHT THEME BACKGROUND
      // from-white via-amber-50 to-rose-50
      // from-blue-50 via-sky-50 to-indigo-50
      from-white via-slate-50 to-gray-100
      dark:from-slate-950 dark:via-slate-900 dark:to-black   // DARK THEME BACKGROUND
      text-neutral-900 dark:text-slate-50
    ">
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

        <div className="relative max-w-3xl">

          {/* Subtitle */}
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-slate-300 mb-3">
            R O B O T I C S · C O N T R O L · A I
          </p>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-slate-50">
            Robotics | Controls | Dynamics | Machine Learning | Data Driven Modelling
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
      </div>
    </section>
  );
}

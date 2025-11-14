export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative overflow-hidden">
        {/* Glazed gradient line in the background */}
        <div
          className="pointer-events-none absolute -top-8 left-1/2 h-28 w-[140%] -translate-x-1/2
                     bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-400
                     opacity-30 blur-3xl"
        />
        {/* Slight vignette at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300 mb-3">
            R O B O T I C S · C O N T R O L · A I
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Robotics | Controls | Dynamics | Machine Learning | Data Driven Modelling
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-8 max-w-2xl">
            I am a mechanical engineer and postdoctoral researcher at UCLA,
            working at the intersection of robotics, robust/adaptive control,
            and physics-informed machine learning for medical and
            high-throughput experimental platforms.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#/projects"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-sky-500 text-sm font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
            >
              View selected projects
            </a>
            <a
              href="#/cv"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-600 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-300">
            <div>
              <div className="font-semibold text-slate-100 mb-1">
                Core areas
              </div>
              <div>
                Robotics, L₁ adaptive control, PIML, high-throughput systems
              </div>
            </div>
            <div>
              <div className="font-semibold text-slate-100 mb-1">
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
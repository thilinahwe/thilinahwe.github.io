export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
            Robotics · Control · AI
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Robotics | Controls | Dynamics | AI | Machine Learning | Data Science{" "}
            <span className="text-sky-400">
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 max-w-2xl">
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

          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <div>
              <div className="font-semibold text-slate-200">
                Core areas
              </div>
              <div>Robotics, L₁ adaptive control, PIML, high-throughput systems</div>
            </div>
            <div>
              <div className="font-semibold text-slate-200">
                Tools
              </div>
              <div>Python, MATLAB/Simulink, ROS/ROS2, LabVIEW, C++, SolidWorks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

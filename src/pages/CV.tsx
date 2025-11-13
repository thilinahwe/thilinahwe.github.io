export default function CV() {
  return (
    <section className="bg-neutral-950 text-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mb-8">
            I maintain separate industry-focused and academic versions of my CV.
            Use the buttons below to download the version that best matches your
            needs.
          </p>

          {/* Button block */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="/assets/Thilina Weerakkody_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-full
                         bg-sky-500 text-sm font-medium text-white py-3.5 px-6
                         shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
            >
              Download Industry CV
            </a>
            <a
              href="/assets/Thilina_Weerakkody_Academic_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-full
                         bg-sky-500 text-sm font-medium text-white py-3.5 px-6
                         shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
            >
              Download Academic CV
            </a>
          </div>

          {/* Optional small text under buttons */}
          <p className="text-xs text-neutral-500">
            The industry CV emphasizes applied robotics, control, and software
            skills suited for engineering and data roles. The academic CV
            includes full publication, teaching, and service records for faculty
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}

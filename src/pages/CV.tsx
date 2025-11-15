import HeadMeta from "../components/HeadMeta";

export default function CV() {
  return (
    <>
      <HeadMeta
        title="Curriculum Vitae | Thilina Weerakkody"
        description="Download 1-page Resume and Extended Curriculum Vitae highlighting robotics, control, dynamics and modelling work."
      />

      <section className="bg-neutral-950 text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mb-8">
              I maintain a separate 1-page Resume and an extended version of my CV.
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
                Download 1-Page Resume
              </a>
              <a
                href="/assets/CV-Thilina-Hemaka-Weerakkody.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-full
                           bg-sky-500 text-sm font-medium text-white py-3.5 px-6
                           shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                Download Extended Curriculum Vitae
              </a>
            </div>

            {/* Optional small text under buttons */}
            <p className="text-xs text-neutral-500">
              The 1-page emphasizes applied robotics, control, and software
              skills suited for engineering and data roles. The extended CV
              includes full publication, teaching, and service records.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

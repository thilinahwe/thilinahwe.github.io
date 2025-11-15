// src/pages/Contact.tsx
import HeadMeta from "../components/HeadMeta";

export default function Contact() {
  return (
    <>
      <HeadMeta
        title="Opportunities & Contact | Thilina Weerakkody"
        description="Information for prospective students, collaborators, and industry partners interested in working with Dr. Thilina Weerakkody."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 space-y-12">
          
          {/* Page Header */}
          <header className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Opportunities &amp; Contact
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I am happy to hear from motivated students, collaborators, and
              industry partners interested in robotics, control theory,
              high-throughput experimental platforms, or physics-informed machine learning.
              Below is guidance on how you might work with me and a short form
              you can use to introduce yourself.
            </p>
          </header>

          {/* Sections (stacked, simple) */}
          <div className="space-y-8 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">

            {/* Prospective Students */}
            <section className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Prospective students &amp; trainees
              </h2>
              <p>
                If you are a student seeking research opportunities in robotics,
                adaptive control, artificial muscles, or high-throughput
                radiochemistry automation, please describe your background,
                current program, and skills you wish to develop.
              </p>
            </section>

            {/* Collaborations */}
            <section className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Academic &amp; research collaborations
              </h2>
              <p>
                I am open to collaborations involving soft robotics, robust /
                L₁ adaptive control, and high-throughput experimental systems.
                Please include a short project description and relevant links or preprints.
              </p>
            </section>

            {/* Industry */}
            <section className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Industry &amp; consulting
              </h2>
              <p>
                For industry or consulting work in robotics, control, automation,
                microfluidics, or AI-driven modelling, please include your
                organization, project scope, and expected timeline.
              </p>
            </section>

            {/* Direct email */}
            <section className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
                Direct email
              </h2>
              <p>You may also reach me directly:</p>
              <ul className="space-y-1">
                <li>
                  <span className="font-medium">Work:</span>{" "}
                  <a
                    href="mailto:thilinahweerakkody@gmail.com"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    thilinahweerakkody@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Personal:</span>{" "}
                  <a
                    href="mailto:TWeerakkody@mednet.ucla.edu"
                    className="text-sky-600 hover:underline dark:text-sky-400"
                  >
                    TWeerakkody@mednet.ucla.edu
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* --- GOOGLE FORM LINK ONLY --- */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-800 dark:text-neutral-100">
              Interest form
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              If you would like to be considered for future opportunities,
              please fill out the short form below. This helps me keep track
              of prospective students and collaborators.
            </p>

            {/* Button link only (no embed) */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeaYfFUcYEUayepq_XC1yo-0PGbSx93EFJ6yhuzePIuM2a9nw/viewform"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center rounded-full
                bg-sky-500 text-sm font-medium text-white py-2.5 px-5
                shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors
              "
            >
              Open interest form
              <span className="ml-2 text-base" aria-hidden="true">
                ↗
              </span>
            </a>

            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              (You will be redirected to a secure Google Form.)
            </p>
          </section>

        </div>
      </section>
    </>
  );
}
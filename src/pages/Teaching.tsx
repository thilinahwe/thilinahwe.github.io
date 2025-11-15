import { useEffect } from "react";
import HeadMeta from "../components/HeadMeta";

export default function Teaching() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <>
      <HeadMeta
        title="Teaching | Thilina H. Weerakkody"
        description="Teaching experience, courses, and mentoring by Thilina H. Weerakkody. This page is intended for academic search committees and teaching-related audiences."
      />

      <section className="bg-neutral-950 text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          {/* Page header */}
          <header className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-3">
              T E A C H I N G
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Teaching experience & academic training
            </h1>

            <div className="flex flex-wrap gap-3">
              <a
                href="/assets/CV-Thilina-Hemaka-Weerakkody.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full
                          bg-sky-500 text-sm font-medium text-white py-3 px-6
                          shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                Download Academic Curriculum Vitae
              </a>

              <a
                href="/assets/Teaching-Statement.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full
                          bg-sky-500 text-sm font-medium text-white py-3 px-6
                          shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
              >
                Teaching Statement
              </a>
            </div>
          </header>

          {/* Teaching experience sections */}
          <div className="space-y-10">
            {/* University of Iowa */}
            <section className="border border-neutral-800/70 rounded-2xl bg-neutral-900/40 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                University of Iowa — Graduate Teaching Assistant
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
                Department of Mechanical Engineering
              </p>

              {/* Course + terms */}
              <ul className="text-sm text-neutral-200 space-y-2 mb-4">
                <li>
                  <span className="font-semibold">
                    ME6130: Novel Artificial Muscles &amp; Sensors
                  </span>{" "}
                  — Tutorial / lab sessions on MATLAB/Simulink for mathematical
                  modeling of twisted and coiled artificial muscles (TCAMs).
                </li>
                <li className="text-neutral-400">
                  <span className="font-semibold">Offered:</span> Spring 2023, Spring 2024
                </li>
              </ul>

              {/* Resources for the TCAM lab */}
              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">
                    TCAM lab tutorial materials (Spring 2023–2024)
                  </div>
                  <ul className="text-sm text-sky-300 space-y-1 list-disc pl-4">
                    <li>
                      <a
                        href="/Teaching/TCAM_Lab_Tutorial.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Lab handout (PDF)
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Teaching/TCAM_Lab_Solutions.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Sample solutions (PDF)
                      </a>
                    </li>
                    <li>
                      <a
                       href="https://nbviewer.org/github/thilinahwe/thilinahwe.github.io/blob/main/public/Teaching/TCAM_Tutorial_Notebook.ipynb"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Jupyter tutorial notebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Teaching/TCAM_Code/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        MATLAB / Simulink code folder
                        <span className="text-xs text-neutral-400">
                          {" "}
                          (loadTCAMParameters.m, Sim_model_LS.slx, plotting scripts)
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-neutral-300">
                I conducted a lab session demonstrating the fabrication methods for
                artificial muscles, followed by an experiment using carbon-fiber and
                nylon TCAMs. Each sample underwent two actuation cycles under
                constant-stress conditions while students measured and recorded
                displacement and temperature. In a subsequent session, we modeled the
                governing equations, plotted both experimental and simulated results,
                and validated the TCAM model.
              </p>
            </section>

            {/* SLIIT — Instructor & Lab Manager */}
            <section className="border border-neutral-800/70 rounded-2xl bg-neutral-900/40 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                SLIIT, Sri Lanka — Instructor & Mechatronics Lab Manager
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
                Instructor (Assistant Lecturer), Mechanical Engineering · 2018–2019
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-200 mb-6">
                <div>
                  <div className="font-semibold text-neutral-100 mb-1">
                    Lecture & tutorial courses
                  </div>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>
                      ME2021: Mechanics of Machines
                      <ul className="pl-5 space-y-1 text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME2021-Lecturers.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lecture Notes (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2021-Tutorials.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Tutorial Set (PDF)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      ME2031: Engineering Drawing
                      <ul className="pl-5 space-y-1 text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME2031 - ED Assignments.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Assignments (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2031 - ED Labs.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lab Sheets (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2031 - ED Module Outline - 2019.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Module Outline (PDF)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      ME3531: Solid Mechanics &amp; Mechanical Design
                      <ul className="pl-5 space-y-1 text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME3531 Notes.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lecture Notes (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME3531 Tutorials.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Tutorial Set (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME3531 Final Examination-2019-June.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Final Exam 2019 (PDF)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>ME2541 / ME3640: Mechatronic Systems</li>
                    <li>ME3620: Control Systems</li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-neutral-100 mb-1">
                    Mechatronics lab management
                  </div>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>
                      Designed and implemented lab experiments for
                      Mechanical/Mechatronics courses.
                    </li>
                    <li>
                      Supervised lab work, ensuring safe equipment operation and
                      accurate data recording.
                    </li>
                    <li>
                      Supported final-year and project-based learning involving
                      sensors, embedded systems, and automation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* University of Moratuwa — GTA & Research Assistant Teaching */}
            <section className="border border-neutral-800/70 rounded-2xl bg-neutral-900/40 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                University of Moratuwa — Graduate Teaching Assistant
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
                Graduate Teaching Assistant &amp; Research Assistant · 2016–2018
              </p>
              <p className="text-sm text-neutral-300 mb-3">
                As a Graduate Teaching Assistant in Mechanical Engineering, I supported
                both undergraduate and graduate courses, focusing on mechatronics,
                manufacturing, MEMS/NEMS modeling, and automation.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-200">
                {/* Undergraduate courses */}
                <div>
                  <div className="font-semibold text-neutral-100 mb-1">
                    Selected courses (undergraduate)
                  </div>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>ME1802: Introduction to Manufacturing Engineering</li>
                    <li>ME2160: Automotive Transmission &amp; Brake Systems</li>
                    <li>ME2040: Fundamentals of Mechatronics</li>
                    <li>ME2023: Manufacturing Engineering I</li>
                    <li>ME4462: Automation Systems</li>
                    <li>TT4162: Control Systems &amp; Applications</li>
                    <li>
                      ME4700 / ME4310: COMSOL Multiphysics structural modeling for
                      MEMS/NEMS
                    </li>
                  </ul>
                </div>

                {/* Graduate course */}
                <div>
                  <div className="font-semibold text-neutral-100 mb-1">
                    Graduate-level teaching support
                  </div>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>ME5124: Automation and Control of Manufacturing Systems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teaching-related training & certification */}
            <section className="border border-neutral-800/70 rounded-2xl bg-neutral-900/40 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Teaching-related training &amp; certification
              </h2>

              <ul className="text-sm text-neutral-200 space-y-2 mb-3 list-disc pl-4">
                <li>
                  <span className="font-semibold">
                    Certificate in Teaching Methodology in Higher Education
                  </span>{" "}
                  — Sri Lanka Institute of Information Technology (SLIIT),
                  August–December 2018.
                </li>
              </ul>

              <p className="text-sm text-neutral-300 mb-4">
                This certification emphasized student-centered pedagogy, assessment
                design, and effective use of technology in engineering education.
              </p>

              {/* Certificate PDF Links */}
              <div className="mt-3 space-y-2 text-sm text-sky-300">
                <span className="text-xs uppercase tracking-wide text-neutral-400">
                  Certification documents
                </span>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <a
                      href="/assets/Teaching Certificate Diploma.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Teaching Certificate — Diploma (PDF)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/Teaching Certificate Transcript.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Teaching Certificate — Transcript (PDF)
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Mentoring & supervision */}
            <section className="border border-neutral-800/70 rounded-2xl bg-neutral-900/40 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Mentoring &amp; supervision
              </h2>

              {/* Overview paragraph */}
              <p className="text-sm text-neutral-300 mb-3">
                Across my roles at the University of Iowa, the University of Moratuwa,
                and UCLA, I have mentored and trained more than 12 students
                (undergraduate students, graduate students, and visiting scholars) in
                project-based and research workflows involving soft robotics, control,
                mechatronics, artificial muscles, and experimental methods. In
                addition, I currently mentor one undergraduate researcher at UCLA and
                have provided technical training to external collaborators on
                multi-institution engineering and medical robotics projects.
              </p>

              {/* Academic mentoring */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-neutral-100 mb-1">
                  Academic mentoring (University of Iowa, University of Moratuwa, UCLA)
                </h3>
                <ul className="text-sm text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Mentored 12 students in the SMMS Lab (UIowa) on SMA/TCAM modeling,
                    robust/adaptive control design, mechatronics integration, and
                    experimental workflows.
                  </li>
                  <li>
                    Supervised undergraduate and graduate project teams in automation,
                    mechatronics, embedded control, mechanism design, and data
                    acquisition.
                  </li>
                  <li>
                    Guided capstone and independent study projects involving prosthetics,
                    soft robotics, and artificial muscle systems.
                  </li>
                  <li>
                    Current mentoring of one undergraduate student at UCLA on robotic
                    imaging and high-throughput radiochemistry system development.
                  </li>
                </ul>
              </div>

              {/* Industry / startup collaboration mentoring */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-neutral-100 mb-1">
                  Industry &amp; startup mentoring (Yantra – UIowa Carver College of
                  Medicine)
                </h3>
                <ul className="text-sm text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Trained three research engineers from Yantra Life Sciences (UIowa
                    Med School startup) on hardware setup, TCAM-based actuation
                    systems, control software, and device operation workflows for
                    product development.
                  </li>
                  <li>
                    Provided ongoing technical guidance on mechanism design, hardware
                    configuration, and experimental validation for the medical-device
                    development pipeline.
                  </li>
                </ul>
              </div>

              {/* Cross-department research project mentoring */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-neutral-100 mb-1">
                  Cross-department research mentoring (Toxicology × Engineering project)
                </h3>
                <ul className="text-sm text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Mentored two undergraduate students on the automated immunolabeling
                    system (a multidisciplinary collaboration described in my CV’s
                    patent section), including CAD design, control logic, prototyping,
                    and iterative development.
                  </li>
                </ul>
              </div>

              <p className="text-xs text-neutral-500 mt-3">
                A detailed list of mentored students and collaborative projects can be
                provided upon request in application materials.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

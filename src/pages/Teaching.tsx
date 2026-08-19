// src/pages/Teaching.tsx
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

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          {/* Page header */}
          <header className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-3">
              T E A C H I N G
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Teaching Experience & Academic Training
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
  
            {/* University of Moratuwa - Senior Lecturer */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                University of Moratuwa, Sri Lanka - Department of Mechanical Engineering
                <a
                  href="https://uom.lk/mech"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    ml-1.5 align-middle
                    text-neutral-500 hover:text-sky-500
                    dark:text-neutral-400 dark:hover:text-sky-300
                    transition
                  "
                  style={{ position: "relative", top: "1px" }}   // lowers icon slightly
                  title="Open Department Website"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                  </svg>
                </a>
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
                Senior Lecturer · 2026–Present
              </p>

              <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 mb-4">
                <li>
                  <span className="font-semibold">
                    ME3013/3241: Control Systems
                  </span>{" "}
                  — Lectures/ Tutorial / Quizzes / Homework on Classic Control Systems with the aid of MATLAB/Simulink and Python for mathematical
                  modeling.
                </li>
                <li className="text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Offered:</span> Fall 2026.
                </li>
              </ul>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-1">
                    Lecture materials (Fall 2026)
                  </div>
                  <ul className="text-sm text-sky-700 dark:text-sky-300 space-y-1 list-disc pl-4">
                    <li>
                      <a
                        href="/Teaching/Control_Systems"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Lecture notes, tutorials, and assignments (PDFs and MATLAB/Simulink files)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                I teach Control Systems with an emphasis on connecting fundamental control
                theory to practical engineering systems. The course integrates mathematical
                modeling, transfer-function analysis, system response and stability, root
                locus, frequency-domain methods, and classical controller design with
                MATLAB/Simulink-based analysis and simulation. Tutorials, quizzes, and
                simulation-based assignments are used to reinforce analytical concepts and
                develop practical control-system modeling and design skills.
              </p>
            </section>
            {/* University of Iowa */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                University of Iowa, IA - Department of Mechanical Engineering 
                <a
                  href="https://me.engineering.uiowa.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    ml-1.5 align-middle
                    text-neutral-500 hover:text-sky-500
                    dark:text-neutral-400 dark:hover:text-sky-300
                    transition
                  "
                  style={{ position: "relative", top: "1px" }}   // lowers icon slightly
                  title="Open Department Website"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                  </svg>
                </a>
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
                Graduate Teaching Assistant
              </p>

              <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 mb-4">
                <li>
                  <span className="font-semibold">
                    ME6130: Novel Artificial Muscles &amp; Sensors
                  </span>{" "}
                  — Tutorial / lab sessions on MATLAB/Simulink for mathematical
                  modeling of twisted and coiled artificial muscles (TCAMs).
                </li>
                <li className="text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Offered:</span> Spring 2023, Spring
                  2024
                </li>
              </ul>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-1">
                    TCAM lab tutorial materials (Spring 2023–2024)
                  </div>
                  <ul className="text-sm text-sky-700 dark:text-sky-300 space-y-1 list-disc pl-4">
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
                        href="https://github.com/thilinahwe/thilinahwe.github.io/tree/main/public/Teaching/TCAM_Code"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        MATLAB / Simulink code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300">
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
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                SLIIT | Sri Lanka Institute of Information Technology - Mechanical Engineering             
                  <a
                  href="https://www.sliit.lk/engineering/programmes/mechanical-engineering-degree/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    ml-1.5 align-middle
                    text-neutral-500 hover:text-sky-500
                    dark:text-neutral-400 dark:hover:text-sky-300
                    transition
                  "
                  style={{ position: 'relative', top: '1px' }}
                  title="Open SLIIT Mechanical Engineering Department"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                  </svg>
                </a>
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
                Instructor (Assistant Lecturer) · 2018–2019
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-800 dark:text-neutral-200 mb-6">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    Lecture &amp; tutorial courses
                  </div>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>
                      ME2021: Mechanics of Machines
                      <ul className="pl-5 space-y-1 text-sky-700 dark:text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME2021/ME2021-Lectures.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lecture Notes (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2021/ME2021-Tutorials.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Tutorial Set (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nbviewer.org/github/thilinahwe/thilinahwe.github.io/raw/main/public/Teaching/ME2021/ME2021_Lecture01_2019.ipynb"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Animations &amp; Simulations (Jupyter Notebook)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      ME2031: Engineering Drawing
                      <ul className="pl-5 space-y-1 text-sky-700 dark:text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME2031/ME2031-ED-Assignments.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Assignments (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2031/ME2031-ED-Lab.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lab Sheets (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME2031/ME2031-ED-Module-Outline-2019.pdf"
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
                      <ul className="pl-5 space-y-1 text-sky-700 dark:text-sky-300 list-disc">
                        <li>
                          <a
                            href="/Teaching/ME3531/ME3531-Notes.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Lecture Notes (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME3531/ME3531-Tutorials.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            Tutorial Set (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Teaching/ME3531/ME3531-Final-Examination-2019-June.pdf"
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
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
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
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                University of Moratuwa, Sri Lanka - Department of Mechanical Engineering
                <a
                  href="https://uom.lk/mech"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    ml-1.5 align-middle
                    text-neutral-500 hover:text-sky-500
                    dark:text-neutral-400 dark:hover:text-sky-300
                    transition
                  "
                  style={{ position: 'relative', top: '1px' }}
                  title="Open University of Moratuwa Department of Mechanical Engineering"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                  </svg>
                </a>
              </h2>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
                Graduate Teaching Assistant · 2016–2018
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                As a Graduate Teaching Assistant in Mechanical Engineering, I supported
                both undergraduate and graduate courses, focusing on mechatronics,
                manufacturing, MEMS/NEMS modeling, and automation.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-800 dark:text-neutral-200">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
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
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    Graduate-level teaching / labs
                  </div>

                  <ul className="space-y-1.5 list-disc pl-4 text-sm text-neutral-700 dark:text-neutral-300">
                    <li>
                      <span className="font-medium">
                        ME5124 – Automation and Control of Manufacturing Systems
                      </span>

                      <ul className="mt-1 space-y-1 list-disc pl-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">

                        {/* Arduino lab notebook */}
                        <li>
                          <a
                            href="https://nbviewer.org/github/thilinahwe/thilinahwe.github.io/blob/main/public/Teaching/ME5124/ME5124_Automation_and_Control_of_Manufacturing_Systems_%E2%80%93_Arduino_Lab_Examples.ipynb"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sky-600 dark:text-sky-400 hover:underline"
                          >
                            Arduino examples (notebook)
                          </a>
                          ,{" "}
                          <a
                            href="https://github.com/thilinahwe/thilinahwe.github.io/tree/main/public/Teaching/ME5124"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 dark:text-sky-400 hover:underline"
                          >
                            Arduino codes (GitHub)
                          </a>
                        </li>
                        {/* PLC lab notebook */}
                        <li>
                          <a
                            href="https://nbviewer.org/github/thilinahwe/thilinahwe.github.io/blob/main/public/Teaching/ME5124/ME5124_Automation_and_Control_of_Manufacturing_Systems_%E2%80%93_PLC_Lab_Examples.ipynb"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sky-600 dark:text-sky-400 hover:underline"
                          >
                            PLC lab examples (notebook)
                          </a>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teaching-related training & certification */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Teaching-related training &amp; certification
              </h2>

              <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 mb-3 list-disc pl-4">
                <li>
                  <span className="font-semibold">
                    Certificate in Teaching Methodology in Higher Education
                  </span>{" "}
                  — Sri Lanka Institute of Information Technology (SLIIT),
                  August–December 2018.
                </li>
              </ul>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                This certification emphasized student-centered pedagogy, assessment
                design, and effective use of technology in engineering education.
              </p>

              <div className="mt-3 space-y-2 text-sm text-sky-700 dark:text-sky-300">
                <span className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
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

            {/* Student supervision & mentoring */}
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Student supervision &amp; mentoring
              </h2>

              {/* Current postgraduate supervision */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Postgraduate research supervision
                </h3>

                <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Currently supervising one MPhil student in robotics, nonlinear control,
                    and intelligent systems at the University of Moratuwa.
                  </li>
                </ul>
              </div>

              {/* Current undergraduate supervision */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Undergraduate design &amp; research project supervision
                </h3>

                <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Currently supervising five undergraduate design and research project
                    groups comprising 15 students at the University of Moratuwa.
                  </li>
                  <li>
                    Projects span robotics, control systems, intelligent mechatronics,
                    compliant mechanisms, embedded systems, and automation.
                  </li>
                </ul>
              </div>

              {/* Previous academic mentoring */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Previous academic mentoring
                </h3>

                <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Mentored 12 students in the SMMS Lab at the University of Iowa on
                    SMA/TCAM modeling, robust and adaptive control, mechatronics integration,
                    and experimental workflows.
                  </li>
                  <li>
                    Mentored undergraduate researchers at UCLA on robotic imaging,
                    high-throughput radiochemistry, and experimental automation.
                  </li>
                  <li>
                    Mentored two undergraduate students on an automated immunolabeling
                    system involving CAD design, control logic, prototyping, and system
                    integration.
                  </li>
                </ul>
              </div>

              {/* Industry mentoring */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Industry &amp; technical mentoring
                </h3>

                <ul className="text-sm text-neutral-800 dark:text-neutral-200 space-y-2 list-disc pl-4">
                  <li>
                    Trained three research engineers on artificial-muscle actuation,
                    control software, hardware integration, and experimental validation
                    for medical-device development.
                  </li>
                </ul>
              </div>
            </section>
            
          </div>
        </div>
      </section>
    </>
  );
}

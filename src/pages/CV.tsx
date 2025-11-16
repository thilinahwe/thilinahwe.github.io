// src/pages/CV.tsx
import HeadMeta from "../components/HeadMeta";

export default function CV() {
  return (
    <>
      <HeadMeta
        title="Curriculum Vitae | Thilina Weerakkody"
        description="Curriculum Vitae of Dr. Thilina H. Weerakkody: robotics and control for medical applications, high-throughput radiochemistry, adaptive control, and mechanical design."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-12">
          {/* Page header */}
          <header>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-3">
              C U R R I C U L U M &nbsp; V I T A E
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">
              Curriculum Vitae
            </h1>
          </header>

          {/* --- Downloadable Resume and CV --- */}
          <section className="pt-0">
            <div className="max-w-1xl mx-0">

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="/assets/Thilina Weerakkody_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-full
                           bg-sky-500 text-sm font-medium text-white py-3.5 px-6
                           shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
                >
                  Download Resume
                </a>
                <a
                  href="/assets/CV-Thilina-Hemaka-Weerakkody.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-full
                           bg-sky-500 text-sm font-medium text-white py-3.5 px-6
                           shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors"
                >
                  Download Curriculum Vitae
                </a>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-500">
                The 1-page emphasizes applied robotics, control, and software
                skills suited for engineering and data roles. The extended
                Curriculum Vitae includes the full publication list and service
                records.
              </p>
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800 my-6"></div>
          </section>

          {/* Employment History */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Employment History
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Postdoctoral Scholar, California NanoSystems Institute (CNSI) - University of California, Los Angeles, CA.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2024–Present
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Advisor: Prof. R. Michael van Dam.
                  radiochemistry.
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Research focus: high-throughput
                  radiochemistry robotic platform development and optimization;
                  in situ radioactivity measurements in high-throughput
                  radiochemistry.
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Research Assistant, Smart Multifunctional Material Systems
                    (SMMS) Lab - University of Iowa, IA.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2019–2024
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Advisor: Dr. Caterina Lamuta.
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Novel mechanism design and development; mathematical, control
                  system, physics-based, and data-driven modeling; underwater, rehabilitation, and medical robotic
                  system development and real-time control - system validation.
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Graduate Teaching Assistant, Mechanical Engineering - University of Iowa, IA.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2023-2024
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  ME6130: Novel Artificial Muscles &amp;
                  Sensors (tutorial / lab sessions on MATLAB/Simulink for
                  graduate-level research in artificial muscles).
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Research Engineer (External Collaborator), Juggernaut Life
                    Sciences, Iowa City, IA. (Part-time)
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2020–2023
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  CAD modeling (SolidWorks/Fusion 360), mechanism
                  design, and mechanical/control system development for medical
                  robotic applications (NIH-STTR funded).
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Instructor (Assistant Lecturer) &amp; Mechatronics Lab Manager - SLIIT, Malabe, Sri Lanka.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2018–2019
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Taught undergraduate courses including Mechanics of Machines,
                  Engineering Drawing, Solid Mechanics &amp; Mechanical Design,
                  Control Systems, and Mechatronic Systems. Developed and managed
                  mechatronics lab experiments for Mechanical/Mechatronics
                  programs.
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Research Assistant &amp; Graduate Teaching Assistant, Mechanical
                    Engineering - University of Moratuwa, Sri Lanka.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2016–2018
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <p>
                    Research focus: lower-limb prostheses and adaptive foot
                    devices considering kinematics, dynamics, and 3D-print-based
                    prototyping.
                  </p>
                  <p>
                    Teaching: supported multiple undergraduate and graduate
                    courses in manufacturing, mechatronics, automation, control,
                    and MEMS/NEMS modeling.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Engineering Intern, Shin Nippon Air Technologies Co. Ltd, Sri Lanka.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2014–2015
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Refrigeration and air system design; on-site MEP supervision at
                  the Aitken Spence Resort project.
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Education
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Ph.D. in Mechanical Engineering - University of Iowa, IA, USA.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2019–2024
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Thesis:{" "}
                  <em>
                    Design and Control of Artificial Muscles for Robotic
                    Applications
                  </em>
                  . Advisors: Dr. Caterina Lamuta.
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    B.Sc. (Hons.) in Mechanical Engineering - University of Moratuwa, Sri Lanka.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2011–2016
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Second Class – Upper Division (Top 10%). Thesis:{" "}
                  <em>
                    Development and Control of a Modular Artificial Shoulder
                    Prosthetic Device
                  </em>
                  .
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">
                    Diploma in Information Technology (HEQ) - British Computer Society (BCS), UK.
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    2012–2014
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Equivalent to an associate degree in Information Technology.{" "}
                  <span className="italic">
                    Relevant courses: Knowledge-Based Systems, Object-Oriented
                    Programming, Software Engineering, Information Systems, and
                    Network Information Systems.
                  </span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Certifications */}
          {/* <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                Certifications
              </h2>
              <ul className="list-disc pl-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                <li>
                  Certificate in Teaching Methodology in Higher Education, Sri Lanka
                  Institute of Information Technology (SLIIT), Aug–Dec 2018.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-md sm:text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Online Courses
              </h3>
              <ul className="list-disc pl-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                <li>Control Systems: PID, State-Space & Stability (LinkedIn Learning)</li>
                <li>Machine Learning Foundations: Neural Networks (LinkedIn Learning)</li>
                <li>Python for Data Analysis & Visualization (LinkedIn Learning)</li>
                <li>MATLAB for Engineering & Scientific Workflows (MathWorks Training)</li>
                <li>Deep Learning Essentials (LinkedIn Learning)</li>
                <li>SolidWorks Advanced Part Modeling (LinkedIn Learning)</li>
              </ul>
            </div>
          </section> */}

        </div>
      </section>
    </>
  );
}
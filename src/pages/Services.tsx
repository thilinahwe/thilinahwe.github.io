// src/pages/Services.tsx
import HeadMeta from "../components/HeadMeta";

export default function Services() {
  return (
    <>
      <HeadMeta
        title="Service & Volunteering | Thilina Weerakkody"
        description="Academic and professional service, peer-review activities, volunteering, and outreach by Dr. Thilina H. Weerakkody."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-12">
          {/* Page header */}
          <header className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-3">
              S E R V I C E &nbsp; · &nbsp; V O L U N T E E R I N G
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Academic &amp; Professional Service
            </h1>
            {/* <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              In addition to research and teaching, I am actively involved in
              peer review, professional societies, student and alumni
              organizations, and outreach activities. Below is a summary of my
              service and volunteering contributions.
            </p> */}
          </header>

          {/* Professional service & peer review */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Professional service &amp; peer review
            </h2>

            {/* <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Journal reviewer
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  <span className="font-semibold">
                    ASME Journal of Medical Devices
                  </span>{" "}
                  — Reviewer, 2025–present (2 manuscripts reviewed to date).
                </li>
                <li>
                  <span className="font-semibold">
                    ASME Journal of Mechanisms and Robotics
                  </span>{" "}
                  — Reviewer, 2025–present (2 manuscripts reviewed to date).
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Conference reviewer
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  <span className="font-semibold">
                    IEEE International Conference on Systems, Man, and
                    Cybernetics (SMC)
                  </span>
                  , 2017 — reviewed 1 manuscript.
                </li>
                <li>
                  <span className="font-semibold">
                    IEEE Region 10 Humanitarian Technology Conference (R10 HTC)
                  </span>
                  , 2018 — reviewed 1 manuscript.
                </li>
                <li>
                  <span className="font-semibold">
                    MERCon 2025 – Moratuwa Engineering Research Conference
                  </span>{" "}
                  — reviewed 5 manuscripts.
                </li>
              </ul>
            </div> */}

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              {/* <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Professional memberships
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                I maintain long-term memberships in several professional
                societies and engineering bodies:
              </p> */}
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>IEEE – member since 2012.</li>
                <li>IEEE Robotics and Automation Society (RAS).</li>
                <li>IEEE Control Systems Society (CSS).</li>
                <li>
                  Institution of Engineers Sri Lanka (IESL) – Associate
                  Engineer.
                </li>
                <li>Engineering Council Sri Lanka – Registered Practitioner.</li>
                <li>ASME, AIAA, and SIAM – member since 2024.</li>
              </ul>
            </div>
          </section>

          {/* Professional service & peer review */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Invited Talks
            </h2>

            <section className="space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                {/* <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Invited talks
                </h3> */}
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <li>
                    <em>“Design and Control of Artificial Muscles for Robotic Applications”</em>,  
                    Mechanical Engineering Graduate Seminar, University of Iowa,  
                    <span className="text-neutral-500 dark:text-neutral-400"> Feb 29, 2024.</span>
                  </li>

                  <li>
                    <em>“Limitless Horizon – Graduate studies in the USA”</em> (virtual),  
                    organized by the Rotaract Club of Alumni of University of Moratuwa,  
                    <span className="text-neutral-500 dark:text-neutral-400"> April 1, 2022.</span>
                  </li>
                </ul>
              </div>
            </section>
          </section>

          {/* Leadership, volunteering & outreach */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Leadership, volunteering &amp; outreach
            </h2>

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Event adjudication &amp; exhibitions
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  Adjudicator / panelist,{" "}
                  <span className="font-semibold">Robot Battle 2018</span>, Uva
                  Wellassa University, Sri Lanka.
                </li>
                <li>
                  Exhibitor,{" "}
                  <span className="font-semibold">ExMo 2017</span>, University
                  of Moratuwa, Sri Lanka.
                </li>
                <li>
                  Exhibitor,{" "}
                  <span className="font-semibold">
                    Techno 2016 – Institution of Engineers Sri Lanka (IESL)
                  </span>
                  .
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Student &amp; alumni organizations
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  <span className="font-semibold">
                    Rotaract Club of Alumni of University of Moratuwa
                  </span>{" "}
                  (2016–2022) – held multiple leadership roles, including:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Vice President (2017/18).</li>
                    <li>Community Service Director (2016/17).</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Rotaract Club of University of Moratuwa
                  </span>{" "}
                  (2012–2015) – member and volunteer in university and community
                  projects.
                </li>
                <li>
                  <span className="font-semibold">
                    IMechE (UK) Student Chapter, University of Moratuwa
                  </span>{" "}
                  — Assistant Treasurer (2014–2015).
                </li>
              </ul>
            </div>
          </section>
          {/* Competitions */}
          {/* <section className="space-y-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              Competitions &amp; community engagement
            </h2>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  Participant in{" "}
                  <span className="font-semibold">
                    IEEE Xtreme Programming Competition
                  </span>{" "}
                  editions 6.0 (2012), 7.0 (2013), and 8.0 (2014).
                </li>
                <li>
                  High-school level distinctions in national and international
                  competitions, including:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>
                      Higher Distinction – Sri Lankan Mathematics Olympiad
                      (2009).
                    </li>
                    <li>
                      Higher Distinction – Australian Chemistry High-School Quiz
                      (2008, Sri Lanka).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
}
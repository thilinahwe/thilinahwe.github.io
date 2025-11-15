import HeadMeta from "../components/HeadMeta";

type Project = {
  title: string;
  role: string;
  years: string;
  location?: string;
  tags?: string[];
  summary: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Robust control of shape memory alloys for assistive robotics",
    role: "Ph.D. Research, SMMS Lab, University of Iowa",
    years: "2019 – 2024",
    location: "Iowa City, IA",
    tags: ["SMA", "Robust control", "Adaptive control", "Assistive robotics"],
    summary:
      "Developed physics-based models and robust/adaptive control strategies for SMA actuators in wearable and assistive robotic devices.",
    highlights: [
      "Formulated and validated dynamic models for electrically actuated SMA wires, capturing electro-thermo-mechanical coupling and hysteresis.",
      "Designed robust and adaptive controllers for SMA-driven joints, with experimental validation on benchtop setups and proof-of-concept devices.",
      "Contributed to an accepted journal article in Shape Memory and Superelasticity on robust SMA control for assistive applications.",
    ],
  },
  {
    title: "Twisted and Coiled Artificial Muscle (TCAM) powered soft robotic systems",
    role: "Ph.D. Research, SMMS Lab, University of Iowa",
    years: "2019 – 2024",
    tags: ["Soft robotics", "TCAM", "Underwater robotics", "Continuum manipulators"],
    summary:
      "Designed, modeled, and experimentally validated multiple TCAM-powered soft robotic systems for underwater and rehabilitation applications.",
    highlights: [
      "Developed a low-cost continuum soft robotic arm powered by TCAMs, including modeling, control, and hardware testing.",
      "Contributed to octopus-inspired muscular hydrostats and tentacle-like actuators for underwater vehicle maneuvering and flow control.",
      "Led or co-authored several journal and conference publications on TCAM manufacturing, behavior, and control in soft robots.",
    ],
  },
  {
    title: "Wrist rehabilitation exoskeleton and wearable glove",
    role: "Ph.D. Collaboration, SMMS Lab & International partners",
    years: "2020 – 2023",
    tags: ["Rehabilitation robotics", "Wearable devices", "TCAM"],
    summary:
      "Worked on lightweight exoskeleton and glove devices powered by TCAMs for wrist rehabilitation and range-of-motion assistance.",
    highlights: [
      "Contributed to the design and experimental characterization of a wrist rehabilitation exoskeleton powered by TCAM actuators.",
      "Collaborated on system integration, control strategies, and dynamic modeling for wearable rehabilitation devices.",
      "Supported publications in Robotics and other venues, including an Editor’s Choice article on TCAM-powered exoskeletons.",
    ],
  },
  {
    title: "Adaptive lower-limb prosthetics and active foot mechanisms",
    role: "Research Assistant, Bionics Lab, University of Moratuwa",
    years: "2016 – 2018",
    location: "Sri Lanka",
    tags: ["Prosthetics", "Mechanism design", "Gait biomechanics"],
    summary:
      "Designed adaptive foot mechanisms and lower-limb prosthetic concepts, focusing on kinematics, dynamics, and manufacturable prototypes.",
    highlights: [
      "Developed and analyzed adaptive foot mechanisms for prosthetic applications, incorporating compliant and articulated structures.",
      "Prototyped and tested components using 3D printing and conventional manufacturing techniques.",
      "Co-authored work on adaptive feet for lower-limb prostheses in the Journal of Robotics.",
    ],
  },
  {
    title: "Modular artificial shoulder prosthesis",
    role: "Undergraduate Thesis, University of Moratuwa",
    years: "2015 – 2016",
    tags: ["Upper-limb prosthetics", "Modular design", "Control validation"],
    summary:
      "Designed and implemented a modular artificial shoulder prosthetic device with low-level control validation.",
    highlights: [
      "Developed a modular mechanical architecture for an artificial shoulder joint with multiple rotational degrees of freedom.",
      "Implemented basic control strategies and validated joint-level performance on a benchtop prototype.",
      "Presented results in international conferences focusing on modeling, identification, and control.",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <HeadMeta
        title="Projects | Thilina Weerakkody"
        description="Selected projects in robotics, control, soft actuators, and high-throughput experimental platforms."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          {/* Page header */}
          <header className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-3">
              S E L E C T E D &nbsp; P R O J E C T S
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
              Projects in robotics, control, and high-throughput systems
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl">
              This page highlights a selection of projects spanning soft robotics,
              adaptive control, assistive devices, and high-throughput
              radiochemistry automation. I will continue to expand this section
              with animations, GitHub repositories, and interactive demos.
            </p>
          </header>

          {/* Project list */}
          <div className="space-y-10 sm:space-y-12">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-6 shadow-sm sm:px-7 sm:py-7 dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none"
              >
                {/* Project header */}
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{project.years}</span>
                    {project.location && <span className="mx-1.5">·</span>}
                    {project.location && <span>{project.location}</span>}
                  </div>
                </div>

                {/* Role */}
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {project.role}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="mb-4 flex flex-wrap gap-2 text-[11px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Summary */}
                <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
                  {project.summary}
                </p>

                {/* Highlights */}
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* Placeholder for future animations / links */}
                <div className="mt-4 text-xs italic text-neutral-500 dark:text-neutral-500">
                  Future updates: add animations, schematics, and GitHub repositories
                  for this project.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
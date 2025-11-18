// src/pages/Projects.tsx
import HeadMeta from "../components/HeadMeta";

type Project = {
  title: string;
  role: string;
  years: string;
  location?: string;
  tags?: string[];
  summary: string;
  highlights: string[];
  image?: string; // future: per-project image / animation
};

const projects: Project[] = [
  {
    title: "High-throughput droplet radiochemistry platform for PET",
    role: "Postdoctoral Research — van Dam Lab, UCLA / CNSI",
    years: "2024 – Present",
    location: "Los Angeles, CA",
    tags: ["High-throughput radiochemistry", "Robotics", "Automation", "Imaging"],
    summary:
      "Developing a robotic platform for parallel droplet-based radiochemical reactions, in situ Cerenkov/scintillation imaging, and data-driven optimization of PET radiopharmaceutical synthesis.",
    highlights: [
      "Integrated multi-axis robotic motion, heating, dispensing, and imaging into a programmable high-throughput workflow.",
      "Working on quantitative Cerenkov/scintillation image acquisition for in situ radioactivity readout.",
      "Building analysis pipelines and control logic for automated reaction screening and optimization.",
    ],
  },
  {
    title: "Robust control of shape memory alloys for assistive robotics",
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
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
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
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
    role: "Ph.D. Collaboration — SMMS Lab & international partners",
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
    role: "Research Assistant — Bionics Lab, University of Moratuwa",
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
    role: "Undergraduate Thesis — University of Moratuwa",
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

// Group by end year (last 4-digit year in the string)
function groupProjectsByEndYear(list: Project[]) {
  const byYear: Record<string, Project[]> = {};

  list.forEach((p) => {
    const match = p.years.match(/\d{4}(?!.*\d{4})/); // last 4-digit year
    const yearKey = match ? match[0] : p.years;
    if (!byYear[yearKey]) byYear[yearKey] = [];
    byYear[yearKey].push(p);
  });

  const sortedYears = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));
  return { byYear, sortedYears };
}

export default function Projects() {
  const { byYear, sortedYears } = groupProjectsByEndYear(projects);

  return (
    <>
      <HeadMeta
        title="Projects | Thilina Weerakkody"
        description="Selected projects and research work in robotics, control, soft actuators, and high-throughput experimental platforms."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 space-y-10">
          {/* Header */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              P R O J E C T S
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              Projects &amp; research highlights
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl">
              A selection of ongoing and past projects spanning soft robotics,
              robust and adaptive control, assistive devices, and high-throughput
              radiochemistry automation. I plan to add animations, figures, and
              links to publications and GitHub repositories over time.
            </p>
          </header>

          {/* Year-separated list, year shown once per group (right-aligned) */}
          <div className="space-y-10">
            {sortedYears.map((year) => (
              <section
                key={year}
                className="pt-6 border-t border-neutral-200 dark:border-neutral-800"
              >
                {/* Year label, right-aligned, bigger font (Charith-style) */}
                <div className="flex justify-end mb-4">
                  <span className="text-base sm:text-2xl font-semibold text-neutral-400 dark:text-neutral-500">
                    {year}
                  </span>
                </div>

                <div className="space-y-6">
                  {byYear[year].map((project) => (
                    <article key={project.title} className="py-1">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                        {/* LEFT: image / animation placeholder (Vindula-style) */}
                        <div className="w-full sm:w-40 h-28 sm:h-28 rounded-lg overflow-hidden bg-neutral-200/70 dark:bg-neutral-800/70 flex items-center justify-center">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-[11px] text-neutral-600 dark:text-neutral-400">
                              Image / animation
                            </span>
                          )}
                        </div>

                        {/* RIGHT: text block */}
                        <div className="flex-1">
                          {/* Title */}
                          <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-50">
                            {project.title}
                          </h2>

                          {/* Role / location (no per-project year here) */}
                          <div className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            <span>{project.role}</span>
                            {project.location && (
                              <>
                                {" · "}
                                <span>{project.location}</span>
                              </>
                            )}
                          </div>

                          {/* Tags */}
                          {project.tags && (
                            <div className="mt-1 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] text-neutral-600 dark:text-neutral-400">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Summary */}
                          <p className="mt-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                            {project.summary}
                          </p>

                          {/* Highlights */}
                          <ul className="mt-1 list-disc pl-4 space-y-0.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                            {project.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
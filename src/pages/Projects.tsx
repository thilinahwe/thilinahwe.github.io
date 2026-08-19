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
  video?: string;
  papers?: { title: string; url: string }[];
};

const projects: Project[] = [
  // ============================================================
  // 2026 — CURRENT SUPERVISED RESEARCH
  // ============================================================
  {
    title: "Frugally Actuated Spider Robot for Uneven-Terrain Locomotion",
    role: "MPhil Research — Supervisor, University of Moratuwa",
    years: "2026",
    location: "Moratuwa, Sri Lanka",
    tags: ["Legged robotics", "Uneven terrain", "Underactuation", "Dynamics", "Control"],
    summary:
      "Ongoing MPhil research on frugally actuated robotic limbs for spider-robot locomotion over uneven terrain.",
    highlights: [
      "Supervising one MPhil researcher.",
      "Investigating reduced-actuation tendon-driven limb architectures.",
      "Studying limb mechanics, variable joint resistance, dynamics, and control for uneven-terrain mobility.",
    ],
  },

  {
    title: "Soft Robotics / Continuum Robot",
    role: "Undergraduate Design & Research Project — Supervisor, University of Moratuwa",
    years: "2026",
    location: "Moratuwa, Sri Lanka",
    tags: ["Soft robotics", "Continuum robotics", "Mechanism design", "Control"],
    summary:
      "Ongoing undergraduate research project focused on the design, modeling, development, and control of soft and continuum robotic systems.",
    highlights: [
      "Supervising a three-student undergraduate research team.",
      "Integrating mechanical design, modeling, sensing, actuation, and control.",
    ],
  },

  {
    title: "Cable-Driven Parallel Robot",
    role: "Undergraduate Design & Research Project — Supervisor, University of Moratuwa",
    years: "2026",
    location: "Moratuwa, Sri Lanka",
    tags: ["Parallel robotics", "Cable-driven robots", "Dynamics", "Control"],
    summary:
      "Development of a cable-driven parallel robotic system with emphasis on kinematic and dynamic modeling, sensing, workspace analysis, and control.",
    highlights: [
      "Supervising a three-student undergraduate research team.",
      "Investigating cable configurations, sensing architectures, workspace, dynamics, and control.",
    ],
  },

  {
    title: "Droplet Thermal Characterization Platform",
    role: "Undergraduate Design & Research Project — Supervisor, University of Moratuwa",
    years: "2026",
    location: "Moratuwa, Sri Lanka",
    tags: ["Thermal systems", "Automation", "Computer vision", "Mechatronics"],
    summary:
      "Development of an automated platform for thermal characterization and experimental analysis of microliter-scale droplets.",
    highlights: [
      "Supervising a three-student undergraduate research team.",
      "Integrating thermal control, sensing, automated experimentation, and computer vision.",
    ],
  },

  {
    title: "Upper-Limb Lift-Assist Robotic System",
    role: "Undergraduate Design & Research Project — Supervisor, University of Moratuwa",
    years: "2026",
    location: "Moratuwa, Sri Lanka",
    tags: ["Assistive robotics", "Wearable systems", "Dynamics", "Control"],
    summary:
      "Development of an upper-limb lift-assist robotic system for reducing physical effort during repetitive or load-bearing tasks.",
    highlights: [
      "Supervising a three-student undergraduate research team.",
      "Investigating mechanism design, sensing, actuation, ergonomics, and control.",
    ],
  },

  // {
  //   title: "Large-Format 3D Printing System",
  //   role: "Undergraduate Design & Research Project — Supervisor, University of Moratuwa",
  //   years: "2026",
  //   location: "Moratuwa, Sri Lanka",
  //   tags: ["Additive manufacturing", "Mechatronics", "Motion control", "Automation"],
  //   summary:
  //     "Development of a large-format additive manufacturing platform integrating mechanical design, motion control, sensing, and automated process control.",
  //   highlights: [
  //     "Supervising a three-student undergraduate research team.",
  //     "Integrating mechanical architecture, embedded control, motion planning, and process monitoring.",
  //   ],
  // },

  // ============================================================
  // 2024–2026 — UCLA / CNSI
  // ============================================================

  {
    title: "High-Throughput Droplet Radiochemistry Robotic Platform",
    role: "Postdoctoral Research — van Dam Lab, UCLA / CNSI",
    years: "2024 – 2025",
    location: "Los Angeles, CA",
    tags: ["Radiochemistry", "Robotics", "Automation", "Imaging"],
    summary:
      "Developed robotic and automated methods for high-throughput droplet-based radiochemistry and quantitative radioactivity measurement.",
    highlights: [
      "Integrated robotic motion, dispensing, heating, imaging, and automated experimental workflows.",
      "Developed methods for in situ and non-destructive radioactivity measurements of microliter droplets.",
      "Contributed to high-throughput radiochemistry platform development and experimental automation.",
    ],
    papers: [
      {
        title:
          "Investigation of High-throughput Non-destructive Methods to Measure Radioactivity in Microliter Droplets",
        url: "https://ieeexplore.ieee.org/abstract/document/11599877/",
      },
    ],
  },

  // ============================================================
  // 2019–2024 — UNIVERSITY OF IOWA / SMMS LAB
  // ============================================================

  {
    title: "Robust and Adaptive Control of Shape Memory Alloy Actuators",
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
    years: "2023 – 2024",
    location: "Iowa City, IA",
    tags: ["SMA", "Robust control", "Adaptive control", "Assistive robotics"],
    summary:
      "Developed robust and adaptive control strategies for electro-thermally actuated shape memory alloys under nonlinear, uncertain, and hysteretic behavior.",
    highlights: [
      "Developed physics-based dynamic models for SMA actuators.",
      "Designed robust adaptive closed-loop control strategies.",
      "Experimentally validated the controllers across multiple SMA configurations.",
    ],
    papers: [
      {
        title:
          "Robust Control of Shape Memory Alloys for Assistive Robotics Applications",
        url: "https://link.springer.com/article/10.1007/s40830-025-00596-z",
      },
    ],
  },

  {
    title: "Bioinspired Active Vortex Generators for Underwater Flow Control",
    role: "Ph.D. Research Collaboration — SMMS Lab, University of Iowa",
    years: "2023 – 2024",
    location: "Iowa City, IA",
    tags: ["Bioinspired robotics", "Flow control", "Underwater robotics", "Artificial muscles"],
    summary:
      "Developed bioinspired active vortex generators driven by artificial muscles for adaptive underwater flow-control applications.",
    highlights: [
      "Investigated active surface morphing for flow manipulation.",
      "Integrated artificial-muscle actuation into deployable vortex-generator concepts.",
      "Studied applications in underwater vehicle maneuverability and flow control.",
    ],
  },

  {
    title: "Octopus-Inspired Muscular Hydrostats for Underwater Robotics",
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
    years: "2021 – 2023",
    location: "Iowa City, IA",
    tags: ["Soft robotics", "Bioinspired robotics", "TCAM", "Underwater robotics"],
    summary:
      "Developed octopus-inspired muscular hydrostats powered by twisted and coiled artificial muscles for soft underwater robotic systems.",
    highlights: [
      "Designed bioinspired continuum structures using artificial-muscle actuation.",
      "Investigated bending, contraction, and multidirectional deformation.",
      "Validated actuation performance through experimental characterization.",
    ],
  },

  {
    title: "TCAM-Powered Continuum Soft Robotic Arm",
    role: "Ph.D. Research Collaboration — SMMS Lab, University of Iowa",
    years: "2022 – 2024",
    location: "Iowa City, IA",
    tags: ["Continuum robotics", "Soft robotics", "TCAM", "Control"],
    summary:
      "Designed and developed a low-cost continuum soft robotic arm powered by twisted and coiled artificial muscles.",
    highlights: [
      "Developed the mechanical and actuation architecture of the continuum robot.",
      "Integrated TCAM-based actuation with modeling and control.",
      "Performed hardware characterization and system-level validation.",
    ],
  },

  {
    title: "Wrist Rehabilitation Exoskeleton Powered by Artificial Muscles",
    role: "Ph.D. Research Collaboration — SMMS Lab & International Partners",
    years: "2020 – 2023",
    tags: ["Rehabilitation robotics", "Wearable robotics", "TCAM", "Assistive systems"],
    summary:
      "Developed lightweight wearable robotic systems powered by artificial muscles for wrist rehabilitation and motion assistance.",
    highlights: [
      "Contributed to mechanical design and artificial-muscle integration.",
      "Supported dynamic modeling, control, and experimental validation.",
      "Contributed to an Editor's Choice publication in Robotics.",
    ],
  },

  {
    title: "Automated Manufacturing System for TCAMs",
    role: "Ph.D. Research Collaboration — SMMS Lab, University of Iowa",
    years: "2021 – 2022",
    location: "Iowa City, IA",
    tags: ["TCAM", "Manufacturing automation", "Mechatronics", "Artificial muscles"],
    summary:
      "Developed an automated manufacturing platform for carbon-fiber-based twisted and coiled artificial muscles.",
    highlights: [
      "Automated key steps in TCAM fabrication.",
      "Integrated mechanical, sensing, and control subsystems.",
      "Improved repeatability and scalability of artificial-muscle manufacturing.",
    ],
  },

  {
    title: "Physics-Based Modeling of Twisted Spiral Artificial Muscles",
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
    years: "2020 – 2021",
    location: "Iowa City, IA",
    tags: ["TSAM", "Physics-based modeling", "Nonlinear dynamics", "Artificial muscles"],
    summary:
      "Developed physics-based dynamic models for the electro-thermal actuation of bioinspired twisted spiral artificial muscles.",
    highlights: [
      "Modeled electro-thermal and mechanical coupling.",
      "Investigated nonlinear dynamic actuation behavior.",
      "Validated model predictions against experimental measurements.",
    ],
  },

  {
    title: "Wearable Rehabilitation Glove Powered by Artificial Muscles",
    role: "Ph.D. Research Collaboration — SMMS Lab, University of Iowa",
    years: "2020 – 2021",
    tags: ["Wearable robotics", "Rehabilitation", "TCAM", "Assistive robotics"],
    summary:
      "Developed a lightweight wearable rehabilitation glove powered by twisted and coiled artificial muscles.",
    highlights: [
      "Integrated artificial muscles into a wearable hand-assistance system.",
      "Contributed to mechanism design, actuation, and system integration.",
      "Investigated rehabilitation and assistive-robotics applications.",
    ],
  },

  {
    title: "Dynamic Modeling and Control of Twisted and Coiled Artificial Muscles",
    role: "Ph.D. Research — SMMS Lab, University of Iowa",
    years: "2019 – 2023",
    location: "Iowa City, IA",
    tags: ["TCAM", "Nonlinear dynamics", "Robust control", "System modeling"],
    summary:
      "Developed dynamic models and control strategies for twisted and coiled artificial muscles used in soft robotic systems.",
    highlights: [
      "Developed electro-thermo-mechanical models of TCAM actuation.",
      "Implemented robust and sampled-data control strategies.",
      "Validated models and controllers through experimental testing.",
    ],
  },

  // ============================================================
  // 2020–2023 — YANTRA / MEDICAL ROBOTICS
  // ============================================================

  {
    title: "Semi-Automated Immunolabeling System — Phase II",
    role: "Research Engineer / External Collaborator — Yantra Life Sciences",
    years: "2022 – 2023",
    location: "Iowa City, IA",
    tags: ["Medical robotics", "Automation", "Mechatronics", "Device development"],
    summary:
      "Advanced development of a semi-automated immunolabeling system for biomedical sample preparation.",
    highlights: [
      "Improved mechanical architecture and automated sample-handling workflows.",
      "Developed control logic and integrated electromechanical subsystems.",
      "Supported prototype refinement and experimental validation.",
    ],
  },

  {
    title: "Semi-Automated Immunolabeling System — Phase I",
    role: "Research Engineer / External Collaborator — Yantra Life Sciences",
    years: "2020 – 2022",
    location: "Iowa City, IA",
    tags: ["Medical robotics", "Automation", "CAD", "Prototyping"],
    summary:
      "Developed an initial semi-automated system for immunolabeling and biomedical sample-preparation workflows.",
    highlights: [
      "Developed CAD models and mechanical mechanisms.",
      "Integrated actuation, fluid handling, and control concepts.",
      "Performed prototyping and iterative system development.",
    ],
  },

  // ============================================================
  // 2016–2018 — UNIVERSITY OF MORATUWA
  // ============================================================

  {
    title: "Adaptive Lower-Limb Prosthetics and Adaptive Foot Mechanisms",
    role: "Research Assistant — Bionics Lab, University of Moratuwa",
    years: "2016 – 2018",
    location: "Moratuwa, Sri Lanka",
    tags: ["Prosthetics", "Mechanism design", "Gait biomechanics"],
    summary:
      "Designed adaptive foot mechanisms and lower-limb prosthetic concepts focusing on kinematics, dynamics, and manufacturable prototypes.",
    highlights: [
      "Developed adaptive prosthetic-foot mechanisms.",
      "Performed kinematic and dynamic analysis.",
      "Fabricated and tested prototypes using additive and conventional manufacturing.",
    ],
    papers: [
      {
        title: "Adaptive Foot in Lower-Limb Prostheses",
        url: "/Research/AdaptiveFootInLowerLimbProstheses.pdf",
      },
    ],
  },

  // ============================================================
  // 2015–2016 — UNDERGRADUATE RESEARCH
  // ============================================================

  {
    title: "Modular Artificial Shoulder Prosthesis",
    role: "Undergraduate Thesis & Conference Research — University of Moratuwa",
    years: "2015 – 2016",
    location: "Moratuwa, Sri Lanka",
    tags: ["Upper-limb prosthetics", "Modular design", "Control", "EMG"],
    video: "/Research/Shoulder_Prosthesis_Demo.mp4",
    summary:
      "Designed and implemented a modular artificial shoulder prosthetic device with low-level control validation.",
    highlights: [
      "Developed a modular mechanical architecture for an artificial shoulder joint.",
      "Implemented low-level actuation and control strategies.",
      "Experimentally validated the prototype and presented the work at an international conference.",
    ],
    papers: [
      {
        title: "Conference Paper",
        url: "/Research/DevelopmentOfAnActiveShoulderProsthesisWithLowLevelControlValidation.pdf",
      },
      {
        title: "Undergraduate Thesis",
        url: "/Research/University_of_Moratuwa_UG_Thesis.pdf",
      },
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
              Projects &amp; Research Highlights
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl">
              A selection of ongoing and past projects spanning soft robotics,
              robust and adaptive control, assistive devices, and high-throughput
              radiochemistry automation.
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
                        <div className="w-full sm:w-1/4 aspect-video rounded-lg overflow-hidden bg-neutral-200/70 dark:bg-neutral-800/70 flex items-center justify-center">
                          {project.video ? (
                            <video
                              src={project.video}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                          ) : project.image ? (
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
                          {project.papers?.length ? (
                            <div className="mt-2 space-y-1">
                              <p className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                Publications
                              </p>
                              <ul className="space-y-1">
                                {project.papers.map((paper) => (
                                  <li key={paper.url}>
                                    <a
                                      href={paper.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      {paper.title} →
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}                         
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

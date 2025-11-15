import HeadMeta from "../components/HeadMeta";

export default function Services() {
  return (
    <>
      <HeadMeta
        title="Services | Thilina Weerakkody"
        description="Consulting and collaboration in robotics, control, physics-informed ML, and automation of experimental platforms."
      />

      <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Services
          </h1>
          <p className="text-sm sm:text-base max-w-3xl text-neutral-700 dark:text-neutral-300">
            I am open to collaborations and consulting in robotics and control for
            medical applications, physics-informed machine learning, and
            automation of high-throughput experimental platforms. If you have a
            project or idea that intersects these areas, feel free to reach out
            via the contact page.
          </p>
        </div>
      </section>
    </>
  );
}
export default function CV() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        You can download my full CV as a PDF using the link below.
      </p>
      <a
        href="/assets/Weerakkody_CV.pdf"
        className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-sm font-medium"
        target="_blank"
        rel="noreferrer"
      >
        Download CV (PDF)
      </a>
    </section>
  );
}

export default function CV() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300 max-w-2xl">
        I maintain separate industry-focused and academic versions of my CV.
        You can download either version below as a PDF.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="/assets/Thilina_Weerakkody_CV.pdf"
          className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-sm font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Download Industry CV (PDF)
        </a>

        <a
          href="/assets/Thilina_Weerakkody_Academic_CV.pdf"
          className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-100 text-neutral-900 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700 text-sm font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Download Academic CV (PDF)
        </a>
      </div>
    </section>
  );
}

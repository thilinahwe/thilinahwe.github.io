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
        title="Teaching (Private) | Thilina Weerakkody"
        description="Private teaching page with academic materials and teaching-focused information for search committees."
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Teaching (Private Link)</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          This page is intentionally not linked in the main navigation and is
          tagged as <code>noindex</code> so that search engines do not index it.
          Share this URL only with academic search committees or teaching-related
          audiences.
        </p>
        <a
          href="/assets/Thilina_Weerakkody_Academic_CV.pdf"
          className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-sm font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Download Academic CV (PDF)
        </a>
      </section>
    </>
  );
}

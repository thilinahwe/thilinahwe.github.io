import { useEffect } from "react";

export default function Teaching() {
  useEffect(() => {
    // Dynamically add <meta name="robots" content="noindex">
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Teaching (Private Link)</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        This page is intentionally not linked in the main navigation and is
        tagged as <code>noindex</code> so that search engines do not index
        it. Share this URL only with academic search committees or teaching-
        related audiences.
      </p>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Thilina H. Weerakkody</span>
        <span className="flex gap-3">
          <a
            href="https://github.com/thilinahwe"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?user=zb07m3UAAAAJ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            Google Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/thilinahw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}

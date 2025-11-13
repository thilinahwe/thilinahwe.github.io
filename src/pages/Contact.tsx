export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        The best way to reach me is by email or LinkedIn.
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="mailto:TWeerakkody@mednet.ucla.edu"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            TWeerakkody@mednet.ucla.edu
          </a>
        </li>
        <li>
          <a
            href="mailto:thilinahweerakkody@gmail.com"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            thilinahweerakkody@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thilinahw"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </section>
  );
}

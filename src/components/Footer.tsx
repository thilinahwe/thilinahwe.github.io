// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t bg-neutral-50 text-neutral-700 border-neutral-300    /* Light mode */
        dark:bg-black dark:text-neutral-300 dark:border-neutral-800  /* Dark mode */
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-1">
        <p className="text-xs sm:text-sm text-center leading-relaxed">
          Design &amp; Coded by Thilina H. Weerakkody © {year}
          <span className="mx-2">•</span> Robotics
          <span className="mx-2">•</span> Controls
          <span className="mx-2">•</span> Dynamics
          <span className="mx-2">•</span> Modelling
          <span className="mx-2">•</span> AI
        </p>
      </div>
    </footer>
  );
}
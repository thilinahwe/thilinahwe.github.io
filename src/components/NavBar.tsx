import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Curriculum Vitae", to: "/cv" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // on mount → load saved theme or default dark mode
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="border-b border-neutral-200 bg-neutral-50/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Name */}
        <a
          href="#/"
          className="text-sm sm:text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Thilina H. Weerakkody
        </a>

        {/* Right: nav + theme toggle */}
        <nav className="flex items-center gap-4 text-xs sm:text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "px-3 py-1.5 rounded-full transition-colors",
                  isActive
                    ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 dark:text-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-800/70",
                ].join(" ")
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Light/Dark toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1.5 rounded-full border transition
                       border-neutral-300 bg-neutral-100 text-neutral-800
                       hover:bg-neutral-200
                       dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}
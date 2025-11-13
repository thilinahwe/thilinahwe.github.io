import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved === "dark";
    }
    // If no saved theme, default to dark
    return true;
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const baseLink =
    "px-3 py-2 rounded text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800";
  const active = "underline underline-offset-8";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold text-sm sm:text-base">
          Thilina Weerakkody
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/publications"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : ""}`
            }
          >
            Publications
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : ""}`
            }
          >
            CV
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : ""}`
            }
          >
            Contact
          </NavLink>
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="ml-2 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700 text-sm"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "About", to: "/" },
  { label: "Projects", to: "/projects" },
  // Publications removed
  { label: "CV", to: "/cv" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  return (
    <header className="bg-neutral-950/90 border-b border-neutral-800 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: name (still links to home) */}
        <a href="#/" className="text-sm sm:text-base font-semibold text-neutral-100 tracking-tight">
          Thilina H. Weerakkody
        </a>

        {/* Right: nav links */}
        <nav className="flex items-center gap-4 text-xs sm:text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "px-3 py-1.5 rounded-full transition-colors",
                  isActive
                    ? "bg-neutral-800 text-neutral-50"
                    : "text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/70",
                ].join(" ")
              }
              end={link.to === "/"} // makes sure About only active on exact "/"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

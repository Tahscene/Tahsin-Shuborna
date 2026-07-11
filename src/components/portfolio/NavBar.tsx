import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useMode } from "./ModeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#path", label: "Path" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const { mode, toggle } = useMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          Tahsin <span className="text-accent accent-transition">Shuborna</span>
        </a>

        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <ModeToggle mode={mode} onToggle={toggle} />
        </nav>

        <div className="ml-auto flex items-center gap-3 md:hidden">
          <ModeToggle mode={mode} onToggle={toggle} compact />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="rounded-md border border-border p-2 text-ink"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-paper md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function ModeToggle({
  mode,
  onToggle,
  compact = false,
}: {
  mode: "teacher" | "analyst";
  onToggle: () => void;
  compact?: boolean;
}) {
  const isAnalyst = mode === "analyst";
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isAnalyst ? "teacher" : "analyst"} mode`}
      className={`relative flex items-center rounded-full border border-border bg-secondary/60 p-1 text-xs font-medium accent-transition ${
        compact ? "w-[150px]" : "w-[190px]"
      }`}
    >
      <span
        className="absolute top-1 bottom-1 rounded-full bg-accent accent-transition"
        style={{
          left: isAnalyst ? "50%" : "0.25rem",
          right: isAnalyst ? "0.25rem" : "50%",
        }}
      />
      <span
        className={`relative z-10 flex-1 py-1.5 text-center accent-transition ${
          isAnalyst ? "text-ink/60" : "text-ink"
        }`}
      >
        Teacher
      </span>
      <span
        className={`relative z-10 flex-1 py-1.5 text-center accent-transition ${
          isAnalyst ? "text-ink" : "text-ink/60"
        }`}
      >
        Analyst
      </span>
    </button>
  );
}

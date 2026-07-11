const items = [
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte Australia via Forage",
    date: "June 2026",
  },
  {
    title: "Dean's List",
    org: "Ahsanullah University of Science and Technology",
    date: "Spring 2024, Fall 2024, Spring 2025",
  },
  {
    title: "Finalist, top 10 of 2000 teams",
    org: "The Infinity x AI BuildFest 2026",
    date: "2026",
  },
  {
    title: "ICCIT 2025 accepted paper",
    org: "IEEE ICCIT",
    date: "2025",
  },
];

export function Certifications() {
  return (
    <section className="border-b border-border bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          Certifications and achievements
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Small proofs of work</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-paper p-5">
              <p className="font-accent text-xs uppercase tracking-[0.2em] text-ink/50">{it.date}</p>
              <h3 className="mt-2 font-display text-base text-ink">{it.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{it.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

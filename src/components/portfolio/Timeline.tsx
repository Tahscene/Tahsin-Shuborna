import { GraduationCap, Cpu, BadgeCheck, type LucideIcon } from "lucide-react";

type Item = {
  role: string;
  org: string;
  date: string;
  body: string;
  icon?: LucideIcon;
};

const items: Item[] = [

  {
    role: "Research Intern",
    org: "Elite Research Lab LLC",
    date: "Current",
    body: "Ongoing research work in deep learning and applied AI alongside the FlyRank AI internship.",
  },
  {
    role: "Backend AI Engineer Intern",
    org: "FlyRank AI",
    date: "Current",
    body: "Supporting AI powered backend systems and data processing.",
  },
  {
    role: "Data Analytics Job Simulation",
    org: "Deloitte Australia via Forage",
    date: "June 2026",
    body: "Applied analytics scenarios covering data classification, forensic analysis and dashboard reporting.",
  },
  {
    role: "BSc in Computer Science and Engineering",
    org: "Ahsanullah University of Science and Technology",
    date: "2022 to 2026",
    body:
      "CGPA 3.71. Dean's List with 3.98 in Spring 2024, Fall 2024 plus Spring 2025. Thesis on Destination Intention Aware Reinforcement Learning for Urban Traffic Optimization using VANET. A case study on Dhaka City supervised by Prof. Dr. Mohammad Shafiul Alam.",
  },
  {
    role: "Higher Secondary Certificate",
    org: "Viqarunnisa Noon College",
    date: "2019 to 2021",
    body: "GPA 5.00.",
  },
];

export function Timeline() {
  return (
    <section id="path" className="border-b border-border bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          The path
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Experience and education
        </h2>

        <div className="relative mt-12 pl-8 sm:pl-12">
          <div
            className="absolute left-2 top-2 bottom-2 w-px sm:left-4"
            style={{
              background: "linear-gradient(180deg, var(--maroon) 0%, var(--board) 100%)",
            }}
          />
          <ul className="space-y-10">
            {items.map((it, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[26px] top-2 h-3 w-3 rounded-full ring-4 ring-paper sm:-left-[34px]"
                  style={{
                    background:
                      i === 0
                        ? "var(--maroon)"
                        : i === items.length - 1
                          ? "var(--board)"
                          : "var(--accent)",
                  }}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg text-ink">{it.role}</h3>
                  <span className="text-sm text-ink/60">at {it.org}</span>
                </div>
                <p className="mt-1 font-accent text-sm text-ink/60">{it.date}</p>
                <p className="mt-2 max-w-3xl text-ink/80 leading-relaxed">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

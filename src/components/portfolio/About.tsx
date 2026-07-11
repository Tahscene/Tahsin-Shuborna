import { useMode } from "./ModeContext";

const teacherCopy = [
  "I am Tahsin Shuborna. I am a Computer Science and Engineering graduate from Ahsanullah University of Science and Technology. Teaching has been my constant thread since childhood. It moved from make believe classrooms into real ones through tutoring, peer mentoring and undergraduate research supervision.",
  "My focus as an educator is clarity. I break complex ideas into small honest steps so that students can rebuild them on their own. I care about first year courses in programming, data structures, algorithms, machine learning and the mathematics that supports them.",
  "I am applying for teaching faculty positions where I can build a research active classroom, mentor undergraduate projects and grow with the students I teach.",
];

const analystCopy = [
  "I am Tahsin Shuborna. I am a Computer Science and Engineering graduate from Ahsanullah University of Science and Technology with a strong interest in turning messy real world data into decisions.",
  "My analyst work centres on structured tabular modelling, healthcare and public policy datasets, distributed processing with PySpark and clear reporting. I have shipped predictive pipelines using TabNet, FT Transformer and gradient boosted trees for medical outcomes.",
  "I am open to data analyst roles where the work spans exploratory analysis, statistical modelling, dashboards and communicating findings to teams that need to act on them.",
];

const stats = [
  { label: "CGPA", value: "3.71 / 4.00" },
  { label: "Dean's List", value: "3 semesters" },
  { label: "Published paper", value: "ICCIT 2025" },
  { label: "Manuscripts in review", value: "2 journals" },
  { label: "Hackathon", value: "Top 10 of 2000 teams" },
  { label: "Currently", value: "Research Intern at Elite Research Lab LLC" },
];

export function About() {
  const { mode } = useMode();
  const copy = mode === "teacher" ? teacherCopy : analystCopy;

  return (
    <section id="about" className="border-b border-border bg-paper py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {mode === "teacher" ? "An educator by instinct" : "An analyst by discipline"}
          </h2>
          <div className="mt-6 space-y-4 text-ink/80 leading-relaxed">
            {copy.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div
            className="h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border-4 bg-chalk-dim"
            style={{ borderColor: "var(--maroon)" }}
          >
            <img
              src="https://placehold.co/440x440/B9C4BD/0E1A15?text=Photo"
              alt="Portrait of Tahsin Shuborna"
              className="h-full w-full object-cover"
            />
          </div>


          <aside className="chalk-texture w-full rounded-2xl bg-board p-6 text-chalk shadow-lg sm:p-8">
            <p className="font-accent text-xs uppercase tracking-[0.24em] text-accent accent-transition">
              On the board
            </p>
            <h3 className="mt-2 font-display text-xl">By the numbers</h3>
            <dl className="mt-6 space-y-4">
              {stats.map((s) => (
                <div key={s.label} className="border-b border-chalk-dim/20 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-wider text-chalk-dim">{s.label}</dt>
                  <dd className="mt-1 font-display text-lg text-chalk">{s.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

      </div>
    </section>
  );
}

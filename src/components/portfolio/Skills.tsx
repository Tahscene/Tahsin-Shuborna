import { useMode } from "./ModeContext";

type Category = {
  key: "teaching" | "analytics" | "aiml" | "engineering";
  title: string;
  chips: string[];
};

const categories: Category[] = [
  {
    key: "teaching",
    title: "Teaching and academic",
    chips: [
      "Curriculum design",
      "Lecture delivery",
      "Undergraduate mentoring",
      "Thesis supervision",
      "Course assessment",
      "Academic writing",
    ],
  },
  {
    key: "analytics",
    title: "Data analytics",
    chips: [
      "PySpark",
      "SQL",
      "Pandas",
      "Statistical modelling",
      "A/B testing",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  {
    key: "aiml",
    title: "AI and machine learning",
    chips: [
      "PyTorch",
      "TensorFlow",
      "TabNet",
      "FT Transformer",
      "Gradient boosted trees",
      "Computer vision",
      "Reinforcement learning",
      "LIME",
    ],
  },
  {
    key: "engineering",
    title: "Engineering and tools",
    chips: [
      "Python",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Docker",
      "Git",
      "SUMO",
      "Linux",
    ],
  },
];

export function Skills() {
  const { mode } = useMode();

  const isHighlighted = (k: Category["key"]) =>
    (mode === "teacher" && k === "teaching") || (mode === "analyst" && k === "analytics");

  const isFaded = (k: Category["key"]) =>
    (mode === "analyst" && k === "teaching") || (mode === "teacher" && k === "analytics");

  return (
    <section id="skills" className="border-b border-border bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          What I bring to a classroom or a dataset
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {categories.map((c) => (
            <div
              key={c.key}
              className={`rounded-2xl border p-6 accent-transition ${
                isHighlighted(c.key)
                  ? "border-accent bg-accent/5 shadow-sm"
                  : isFaded(c.key)
                    ? "border-border bg-paper opacity-55"
                    : "border-border bg-paper"
              }`}
            >
              <h3 className="font-display text-lg text-ink">{c.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className={`rounded-full border px-3 py-1 text-xs accent-transition ${
                      isHighlighted(c.key)
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-border bg-secondary/60 text-ink/80"
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "EnviroBirth",
    tag: "Healthcare AI",
    body: "Preterm birth prediction using TabNet along with tree based models. Journal manuscript submitted 2026.",
  },
  {
    title: "VaxSight",
    tag: "Public health",
    body: "Vaccine effectiveness modelling with FT Transformer plus PySpark. Journal manuscript submitted 2026.",
  },
  {
    title: "LeafVRNet",
    tag: "Computer vision",
    body: "Plant leaf disease detection using VGG16, ResNet50V2 with LIME explanations. Published at ICCIT 2025.",
  },
  {
    title: "Traffic RL over VANET",
    tag: "Reinforcement learning",
    body: "Reinforcement learning agent for urban traffic optimization using SUMO plus GAN based demand modelling. Undergraduate thesis.",
  },
  {
    title: "NeuroQuest",
    tag: "EdTech",
    body: "AI powered educational learning platform built with Next.js. Finalist at The Infinity x AI BuildFest 2026 placed 10th of 2000 teams.",
  },
  {
    title: "Academic Career Intelligence Platform",
    tag: "Applied tooling",
    body: "Faculty recruitment tracker built with Next.js, Python plus a Telegram bot for real time alerts.",
  },
];

export function Research() {
  return (
    <section id="research" className="border-b border-border bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          Research and projects
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Six projects worth reading about
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-paper p-6 transition-shadow hover:shadow-md"
            >
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-accent accent-transition">
                {p.tag}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{p.body}</p>
              <span
                className="mt-6 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 accent-transition"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FileText } from "lucide-react";

const pubs = [
  {
    citation:
      'T. Shuborna et al., "LeafVRNet: A hybrid VGG16 and ResNet50V2 framework with LIME based interpretability for plant leaf disease detection," in Proc. 28th International Conference on Computer and Information Technology (ICCIT), 2025.',
    doi: "https://doi.org/10.1109/ICCIT.2025.example",
    doiLabel: "10.1109/ICCIT.2025.example",
    status: "Published",
    pdf: "/leafvrnet-paper.pdf",
  },
  {
    citation:
      'T. Shuborna et al., "EnviroBirth: TabNet driven preterm birth prediction with environmental and clinical features," Journal manuscript, 2026.',
    status: "Under review",
    pdf: "/envirobirth-paper.pdf",
  },
  {
    citation:
      'T. Shuborna et al., "VaxSight: A distributed FT Transformer pipeline for population level vaccine effectiveness analysis," Journal manuscript, 2026.',
    status: "Under review",
    pdf: "/vaxsight-paper.pdf",
  },
];


export function Publications() {
  return (
    <section id="publications" className="border-b border-border bg-paper py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          Publications
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Selected work in print</h2>

        <ol className="mt-10 space-y-8">
          {pubs.map((p, i) => (
            <li key={i} className="border-l-2 border-accent pl-5 accent-transition">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-ink/60">
                [{i + 1}] {p.status}
              </span>
              <p className="mt-2 text-ink/85 leading-relaxed">{p.citation}</p>
              {p.doi && (
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-accent underline underline-offset-4 accent-transition hover:opacity-80"
                >
                  DOI: {p.doiLabel}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Fingerprint,
  GraduationCap,
} from "lucide-react";
import {
  SceneToddler,
  SceneChild,
  SceneStudent,
  SceneEducator,
  SceneCountingBlocks,
  SceneBarChartPaper,
  SceneTeenLaptop,
  SceneAnalystBoard,
} from "./HeroScenes";
import { useMode } from "./ModeContext";

const teacherScenes = [
  { Comp: SceneToddler, caption: "A toddler with a toy whiteboard. Where it started." },
  { Comp: SceneChild, caption: "A child teaching two friends. Playing school with real conviction." },
  { Comp: SceneStudent, caption: "A young woman in a saree teaching a small group. Finding her voice." },
  { Comp: SceneEducator, caption: "A confident educator at a large whiteboard. Teaching with intent." },
];

const analystScenes = [
  { Comp: SceneCountingBlocks, caption: "Chapter one. The first numbers in small hands." },
  { Comp: SceneBarChartPaper, caption: "Chapter two. Turning numbers into patterns." },
  { Comp: SceneTeenLaptop, caption: "Chapter three. The first spreadsheet. The first chart." },
  { Comp: SceneAnalystBoard, caption: "Chapter four. The career I chose. Data and analysis." },
];


export function Hero() {
  const { mode } = useMode();
  const scenes = mode === "analyst" ? analystScenes : teacherScenes;
  const sceneToneClass = mode === "analyst" ? "text-accent" : "text-chalk";
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const n = scenes.length;
  // Each scene owns 1/n of the progress; crossfade window is +/- half segment
  const opacityFor = (i: number) => {
    const seg = 1 / n;
    const center = seg * i + seg / 2;
    const dist = Math.abs(progress - center);
    const window_ = seg * 0.75;
    return Math.max(0, 1 - dist / window_);
  };

  return (
    <section id="top" ref={wrapRef} className="relative bg-board text-chalk" style={{ height: "420vh" }}>
      <div className="chalk-texture sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pt-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
              A journey in chalk
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              One Story One Marker
            </h1>
            <p className="mt-3 text-chalk-dim">Scroll to watch the journey unfold.</p>
          </div>

          <div className="relative mt-6 flex-1">
            {scenes.map(({ Comp, caption }, i) => {
              const op = opacityFor(i);
              return (
                <div
                  key={i}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  style={{ opacity: op, transition: "opacity 200ms linear" }}
                  aria-hidden={op < 0.05}
                >
                  <Comp className={`h-[46vh] w-auto max-w-full accent-transition ${sceneToneClass}`} />
                  <p className="max-w-xl px-4 text-center font-accent text-base text-chalk-dim sm:text-lg">
                    {caption}
                  </p>
                </div>
              );
            })}
          </div>

          {/* progress dots */}
          <div className="mb-6 flex justify-center gap-2">
            {scenes.map((_, i) => {
              const active = Math.round(progress * (n - 1)) === i;
              return (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    active ? "w-8 bg-accent" : "w-2 bg-chalk-dim/40"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

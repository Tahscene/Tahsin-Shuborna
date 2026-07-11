import { createFileRoute } from "@tanstack/react-router";
import { ModeProvider } from "../components/portfolio/ModeContext";
import { NavBar } from "../components/portfolio/NavBar";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Timeline } from "../components/portfolio/Timeline";
import { Research } from "../components/portfolio/Research";
import { Publications } from "../components/portfolio/Publications";
import { Skills } from "../components/portfolio/Skills";
import { Certifications } from "../components/portfolio/Certifications";
import { Contact } from "../components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tahsin Shuborna. Educator plus Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Tahsin Shuborna. Computer Science and Engineering graduate applying for teaching faculty positions plus data analyst roles.",
      },
      { property: "og:title", content: "Tahsin Shuborna. Educator plus Data Analyst" },
      {
        property: "og:description",
        content:
          "One story, one marker. Teaching, research plus data analytics from a CSE graduate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-paper text-ink">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Research />
          <Publications />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ModeProvider>
  );
}

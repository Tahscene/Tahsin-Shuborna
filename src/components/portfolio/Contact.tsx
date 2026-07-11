import { Download, Mail, Linkedin, Github, Fingerprint, GraduationCap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="chalk-texture bg-board py-24 text-chalk">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-accent text-sm uppercase tracking-[0.24em] text-accent accent-transition">
          Contact
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Let us find the right room.</h2>
        <p className="mt-4 max-w-2xl text-chalk-dim leading-relaxed">
          Reach out about teaching faculty positions, applied research collaborations or data
          analyst roles. I read every message.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/cv-faculty.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-ink accent-transition hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Faculty CV
          </a>
          <a
            href="/cv-analyst.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-chalk/40 px-5 py-3 text-sm font-medium text-chalk transition-colors hover:bg-chalk/10"
          >
            <Download className="h-4 w-4" />
            Data Analyst CV
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          <li>
            <a
              href="mailto:tahsin.shuborna@example.com"
              className="group flex items-center gap-3 rounded-xl border border-chalk/15 bg-board-dark/40 p-4 transition-colors hover:border-accent accent-transition"
            >
              <Mail className="h-5 w-5 text-accent accent-transition" />
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-chalk-dim">Email</p>
                <p className="text-sm text-chalk">tahsin.shuborna@example.com</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/tahsin-shuborna"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-chalk/15 bg-board-dark/40 p-4 transition-colors hover:border-accent accent-transition"
            >
              <Linkedin className="h-5 w-5 text-accent accent-transition" />
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-chalk-dim">
                  LinkedIn
                </p>
                <p className="text-sm text-chalk">in/tahsin-shuborna</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tahsinshuborna"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-chalk/15 bg-board-dark/40 p-4 transition-colors hover:border-accent accent-transition"
            >
              <Github className="h-5 w-5 text-accent accent-transition" />
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-chalk-dim">GitHub</p>
                <p className="text-sm text-chalk">@tahsinshuborna</p>
              </div>
            </a>
          </li>
        </ul>

        <footer className="mt-16 border-t border-chalk/15 pt-6 text-xs text-chalk-dim">
          <p>
            Built with care by Tahsin Shuborna. {new Date().getFullYear()}. One story. One marker.
          </p>
        </footer>
      </div>
    </section>
  );
}

import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "portfolio",
    desc: "Personal portfolio site built with TanStack Start and deployed with Cloudflare configuration.",
    tags: ["TypeScript", "TanStack Start", "Tailwind CSS"],
    repo: "https://github.com/XueShadow/portfolio",
  },
  {
    title: "laravel",
    desc: "Laravel repository for PHP web development practice and application workflows.",
    tags: ["PHP", "Laravel", "Blade"],
    repo: "https://github.com/XueShadow/laravel",
  },
  {
    title: "pre-enrollment",
    desc: "Pre-enrollment web application repository focused on student-facing enrollment flows.",
    tags: ["PHP", "Laravel", "SQL"],
    repo: "https://github.com/XueShadow/pre-enrollment",
  },
  {
    title: "FastAPI",
    desc: "Python API repository showcasing backend endpoint development with FastAPI.",
    tags: ["Python", "FastAPI", "REST APIs"],
    repo: "https://github.com/XueShadow/FastAPI",
  },
  {
    title: "dakee",
    desc: "Python project repository for data and AI-related exploration.",
    tags: ["Python", "Data", "AI"],
    repo: "https://github.com/XueShadow/dakee",
  },
  {
    title: "Activity-3_Building-a-GenAI-App",
    desc: "Class activity repository focused on building a GenAI app workflow.",
    tags: ["GenAI", "Python", "Streamlit"],
    repo: "https://github.com/XueShadow/Activity-3_Building-a-GenAI-App",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white">
                <FolderOpen className="h-4 w-4" />
              </span>
              Project Repositories
            </h2>
            <a
              href="https://github.com/XueShadow?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View GitHub Repositories <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group glass rounded-2xl p-5 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] rounded-md px-2 py-1 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full btn-neon px-3.5 py-1.5 text-xs font-medium text-white"
                  >
                    <Github className="h-3 w-3" /> Repository
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

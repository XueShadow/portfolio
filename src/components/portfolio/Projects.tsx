import { ArrowRight, ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "portfolio",
    desc: "Personal portfolio built with TanStack Start and deployed to Cloudflare.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/XueShadow/portfolio",
  },
  {
    title: "laravel",
    desc: "Laravel project repository demonstrating PHP backend and Blade workflows.",
    tags: ["PHP", "Laravel", "Blade"],
    githubUrl: "https://github.com/XueShadow/laravel",
  },
  {
    title: "pre-enrollment",
    desc: "Enrollment-focused web project with role-based application requirements.",
    tags: ["Laravel", "PHP", "SQL"],
    githubUrl: "https://github.com/XueShadow/pre-enrollment",
  },
  {
    title: "FastAPI",
    desc: "Python API project exploring backend structure and authentication patterns.",
    tags: ["Python", "FastAPI", "REST API"],
    githubUrl: "https://github.com/XueShadow/FastAPI",
  },
  {
    title: "dakee",
    desc: "Data and AI-oriented project leveraging Python ecosystem tools.",
    tags: ["Python", "Streamlit", "Pandas"],
    githubUrl: "https://github.com/XueShadow/dakee",
  },
  {
    title: "Activity-3_Building-a-GenAI-App",
    desc: "GenAI app project using data analysis and visualization components.",
    tags: ["GenAI", "Plotly", "Hugging Face APIs"],
    githubUrl: "https://github.com/XueShadow/Activity-3_Building-a-GenAI-App",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><FolderOpen className="h-4 w-4" /></span>
              My Recent Projects
            </h2>
            <a
              href="https://github.com/XueShadow?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View All Repositories <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <article key={p.title} className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="p-5">
                  <h3 className="font-semibold text-base">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10.5px] rounded-md px-2 py-1 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10 text-white">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full glass border border-border px-3.5 py-1.5 text-xs"
                    >
                      <Github className="h-3 w-3" /> Code
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full btn-neon px-3.5 py-1.5 text-xs font-medium text-white"
                    >
                      Open Repo <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

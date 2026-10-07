import { ListChecks, Cpu } from "lucide-react";

const skillGroups = [
  {
    title: "Web Development",
    items: ["PHP", "Laravel", "Blade", "JavaScript", "Tailwind CSS", "Alpine.js", "REST APIs"],
  },
  {
    title: "Data & AI",
    items: ["Python", "Pandas", "Streamlit", "Plotly", "Hugging Face APIs", "GenAI"],
  },
  {
    title: "Tools",
    items: ["SQLite / SQL", "Git", "GitHub"],
  },
];

const tech = [
  "PHP",
  "Laravel",
  "Blade",
  "JavaScript",
  "Tailwind CSS",
  "Alpine.js",
  "SQLite",
  "SQL",
  "Python",
  "Pandas",
  "Streamlit",
  "Plotly",
  "Hugging Face APIs",
  "GenAI",
  "Git",
  "GitHub",
  "REST APIs",
];

export function Skills() {
  return (
    <section id="skills" className="py-14">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-5">
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><ListChecks className="h-4 w-4" /></span>
            My Skills
          </h2>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs rounded-full px-3 py-1 bg-white/5 border border-white/10 text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><Cpu className="h-4 w-4" /></span>
            Technologies &amp; Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {tech.map((label) => (
              <div
                key={label + "-tech"}
                className={`group glass rounded-xl p-3 flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-all hover:border-primary/40`}
              >
                <span className="grid h-10 min-w-10 px-3 place-items-center rounded-lg bg-white/5 text-sm font-semibold">
                  {label.split(" ").at(0)}
                </span>
                <span className="text-[10.5px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

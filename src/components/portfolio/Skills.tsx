import {
  BarChart3,
  BrainCircuit,
  Braces,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Leaf,
  Paintbrush,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const skillGroups = [
  {
    title: "Web Development",
    items: [
      "PHP",
      "Laravel",
      "Blade",
      "JavaScript",
      "Tailwind CSS",
      "Alpine.js",
      "REST APIs",
    ],
  },
  {
    title: "Data & AI",
    items: [
      "Python",
      "Pandas",
      "Streamlit",
      "Plotly",
      "Hugging Face APIs",
      "GenAI",
    ],
  },
  {
    title: "Tools",
    items: ["SQLite / SQL", "Git", "GitHub"],
  },
];

const tech = [
  { Icon: FileCode2, label: "PHP", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { Icon: Globe, label: "Laravel", color: "text-rose-400", bg: "bg-rose-400/10" },
  {
    Icon: Braces,
    label: "JavaScript",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    Icon: Paintbrush,
    label: "Tailwind CSS",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  { Icon: Cpu, label: "Alpine.js", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  {
    Icon: Database,
    label: "SQLite / SQL",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    Icon: BrainCircuit,
    label: "Python",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    Icon: Leaf,
    label: "Pandas",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    Icon: BarChart3,
    label: "Streamlit",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    Icon: BarChart3,
    label: "Plotly",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    Icon: GitBranch,
    label: "Git",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  { Icon: Github, label: "GitHub", color: "text-white", bg: "bg-white/10" },
];

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-14">
      <div
        ref={ref}
        className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-5"
      >
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white">
              <BarChart3 className="h-4 w-4" />
            </span>
            Skills Overview
          </h2>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl glass p-4">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs rounded-full px-3 py-1 bg-primary/15 text-primary border border-primary/30"
                    >
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
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white">
              <Cpu className="h-4 w-4" />
            </span>
            Technologies &amp; Tools
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tech.map(({ Icon, label, color, bg }) => (
              <div
                key={label}
                className={`group glass rounded-xl p-3 flex flex-col items-center gap-1.5 transition-all ${inView ? "opacity-100" : "opacity-80"}`}
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-lg ${bg}`}
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                </span>
                <span className="text-[10.5px] text-muted-foreground text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

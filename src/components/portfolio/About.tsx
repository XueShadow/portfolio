import {
  User,
  FolderGit2,
  MapPin,
  CheckCircle2,
  Sparkles,
  Eye,
  Zap,
  Users,
} from "lucide-react";

const info = [
  { Icon: User, label: "Name", value: "Ji Monsales" },
  { Icon: FolderGit2, label: "GitHub", value: "github.com/XueShadow" },
  { Icon: MapPin, label: "Location", value: "Manila, Philippines" },
  { Icon: CheckCircle2, label: "Availability", value: "Open to Work" },
];

const traits = [
  { Icon: Sparkles, label: "Problem Solver", color: "text-rose-400" },
  { Icon: Eye, label: "Detail Oriented", color: "text-emerald-400" },
  { Icon: Zap, label: "Fast Learner", color: "text-amber-400" },
  { Icon: Users, label: "Team Player", color: "text-sky-400" },
];

export function About() {
  return (
    <section id="about" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8 grid lg:grid-cols-[auto_1fr_1fr] gap-8 items-center">
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl opacity-70" />
            <div className="relative h-44 w-44 rounded-full p-1 bg-gradient-to-br from-violet-400 via-fuchsia-500 to-cyan-400">
              <div className="h-full w-full rounded-full bg-background/90 grid place-items-center">
                <User className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white">
                <User className="h-4 w-4" />
              </span>
              About Me
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              I'm <span className="text-white font-semibold">Ji Monsales</span>,
              a Computer Science student and web developer building practical
              projects while strengthening full-stack fundamentals.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              I focus on Laravel/PHP, JavaScript, Python, and API-driven
              development, with an emphasis on clean UI and maintainable code.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {traits.map(({ Icon, label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} /> {label}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 space-y-3 text-sm">
            {info.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground w-24">{label}:</span>
                <span className="font-medium">{value}</span>
                {label === "Availability" && (
                  <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_oklch(0.78_0.2_150/0.7)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

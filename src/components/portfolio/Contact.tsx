import { Github, MessageCircle, ExternalLink, FolderGit2 } from "lucide-react";

const contact = [
  { Icon: Github, label: "GitHub Profile", value: "https://github.com/XueShadow" },
  { Icon: FolderGit2, label: "Repositories", value: "https://github.com/XueShadow?tab=repositories" },
  { Icon: MessageCircle, label: "Project Questions", value: "https://github.com/XueShadow/portfolio/issues/new" },
];

const socials = [
  { Icon: Github, label: "GitHub", handle: "@XueShadow", href: "https://github.com/XueShadow", color: "text-white" },
  {
    Icon: FolderGit2,
    label: "Portfolio Repository",
    handle: "github.com/XueShadow/portfolio",
    href: "https://github.com/XueShadow/portfolio",
    color: "text-sky-300",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1fr_1fr] gap-5">
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><MessageCircle className="h-4 w-4" /></span>
            Get In Touch
          </h2>
          <div className="space-y-4">
            {contact.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg glass text-primary"><Icon className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <a
                    href={value}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:text-primary transition break-all"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h3 className="font-heading text-lg font-bold mb-2">Contact Note</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This portfolio currently has no backend contact form configured. For now, the reliable contact options are
            the GitHub profile and repository issues listed here.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="https://github.com/XueShadow"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl btn-neon px-6 py-3 text-sm font-semibold text-white"
            >
              Open GitHub Profile <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/XueShadow/portfolio/issues/new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass border border-border px-6 py-3 text-sm font-semibold hover:border-primary/60 transition"
            >
              Open Portfolio Issue <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h3 className="font-heading text-lg font-bold mb-1">Let's Connect</h3>
          <p className="text-xs text-muted-foreground">Reach out through verified links.</p>
          <div className="mt-5 space-y-3">
            {socials.map(({ Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 glass rounded-xl p-3 hover:border-primary/40 transition"
              >
                <span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${color}`}><Icon className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-[11px] text-muted-foreground">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

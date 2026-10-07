import {
  Github,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const contact = [
  { Icon: MapPin, label: "Location", value: "Manila, Philippines" },
  {
    Icon: Mail,
    label: "Primary Contact",
    value: "Use the GitHub profile link below",
  },
];

const links = [
  {
    Icon: Github,
    label: "GitHub Profile",
    href: "https://github.com/XueShadow",
    value: "github.com/XueShadow",
  },
  {
    Icon: LinkIcon,
    label: "Portfolio Repository",
    href: "https://github.com/XueShadow/portfolio",
    value: "github.com/XueShadow/portfolio",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr_1fr] gap-5">
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white">
              <MessageCircle className="h-4 w-4" />
            </span>
            Contact
          </h2>
          <div className="space-y-4">
            {contact.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg glass text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h3 className="font-heading text-lg font-bold mb-1">Reach Out</h3>
          <p className="text-sm text-muted-foreground">
            This portfolio does not use a backend contact form. Please connect
            directly through GitHub.
          </p>
          <div className="mt-5 space-y-3">
            {links.map(({ Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 glass rounded-xl p-3 hover:border-primary/40 transition"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h3 className="font-heading text-lg font-bold mb-1">Current Focus</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Internship and junior web developer opportunities</li>
            <li>Laravel/PHP and JavaScript web applications</li>
            <li>Python, data tooling, and GenAI learning projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

const items = [
  {
    title: "Project-first portfolio",
    detail:
      "This portfolio highlights real repository work and avoids fictional client/testimonial claims.",
  },
  {
    title: "Current focus",
    detail:
      "Main focus areas are Laravel/PHP web development, REST APIs, and Python data/GenAI projects.",
  },
  {
    title: "Next improvements",
    detail:
      "Planned improvements include additional project documentation, stronger test coverage, and more polished deployment workflows.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold flex items-center gap-2 mb-6">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><Quote className="h-4 w-4" /></span>
            Project Notes
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

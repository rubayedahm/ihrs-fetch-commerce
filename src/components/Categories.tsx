import { categories } from "@/content/company";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

export function Categories() {
  if (categories.length === 0) return null;
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we sell" title="Our product range" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 transition hover:border-brand/40 hover:shadow-lg">
                <h3 className="font-display font-bold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

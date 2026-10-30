import { ClipboardCheck, Headphones, PackageSearch, Store } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const steps = [
  {
    icon: PackageSearch,
    title: "Source",
    body: "We research demand and buy from established UK and international suppliers, comparing price, quality and lead times before we commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Check",
    body: "Products are checked against listing descriptions and UK product-safety and labelling requirements before they go on sale.",
  },
  {
    icon: Store,
    title: "List & sell",
    body: "We write accurate listings, set competitive prices and sell through our eBay and TikTok Shop storefronts.",
  },
  {
    icon: Headphones,
    title: "Deliver & support",
    body: "Orders are dispatched with tracking, and we handle questions, returns and refunds promptly through each platform.",
  },
];

export function Process() {
  return (
    <section id="how-we-work" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title="From supplier to doorstep"
          intro="A simple, transparent model: we buy stock from suppliers, add value through selection, presentation and service, and sell direct to consumers online."
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="relative h-full rounded-3xl border border-line p-6">
                <span className="absolute top-6 right-6 font-display text-sm font-bold text-line">
                  0{i + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

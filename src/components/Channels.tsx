import { ArrowUpRight, BadgeCheck, Music2 } from "lucide-react";
import { channels } from "@/content/company";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const styles: Record<string, { ring: string; badge: string; icon: React.ReactNode }> = {
  ebay: {
    ring: "hover:border-ebay/50",
    badge: "bg-ebay/10 text-ebay",
    icon: (
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-[#e53238]">e</span>
        <span className="text-[#0064d2]">b</span>
        <span className="text-[#f5af02]">a</span>
        <span className="text-[#86b817]">y</span>
      </span>
    ),
  },
  tiktok: {
    ring: "hover:border-tiktok/60",
    badge: "bg-tiktok/10 text-cyan-700",
    icon: <Music2 className="size-6 text-ink" />,
  },
};

export function Channels() {
  return (
    <section id="channels" className="scroll-mt-20 bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Live storefronts"
          title="Where we sell"
          intro="Our shops are public and open for business. Anyone can visit them to see our current listings, prices and customer feedback."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {channels.map((c, i) => {
            const s = styles[c.id];
            return (
              <Reveal key={c.id} delay={i * 0.1}>
                <article
                  className={`group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${s.ring}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl border border-line bg-white shadow-sm">
                      {s.icon}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${s.badge}`}>
                      <BadgeCheck className="size-3.5" /> Active seller
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{c.label}</h3>
                  {c.handle && <p className="mt-1 text-sm font-medium text-muted">Seller: {c.handle}</p>}
                  <p className="mt-4 flex-1 leading-relaxed text-muted">{c.description}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand"
                    >
                      Visit our {c.name} shop <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { RefreshCcw, Scale, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, title: "Safe, genuine products", body: "We buy from identifiable suppliers and only list items we can describe accurately." },
  { icon: Truck, title: "Tracked dispatch", body: "Orders ship with tracking so customers and platforms can follow every delivery." },
  { icon: RefreshCcw, title: "Fair returns", body: "We honour UK consumer rights, including the 14-day right to cancel online orders." },
  { icon: Scale, title: "Properly run company", body: "A UK limited company keeping proper records and filing with Companies House and HMRC." },
];

export function Commitments() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-3">
              <it.icon className="size-7 text-accent" />
              <h3 className="font-display font-bold text-ink">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

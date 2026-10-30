export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent font-display text-sm font-extrabold text-white shadow-lg shadow-brand/30">
        IF
      </span>
      <span className={`font-display text-base font-bold leading-tight ${light ? "text-white" : "text-ink"}`}>
        IHRS Fetch
        <span className={`block text-[11px] font-medium tracking-[0.18em] uppercase ${light ? "text-white/60" : "text-muted"}`}>
          Commerce Ltd
        </span>
      </span>
    </span>
  );
}

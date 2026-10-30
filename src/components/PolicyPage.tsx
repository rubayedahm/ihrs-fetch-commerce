export function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <div className="bg-ink pt-32 pb-14 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold tracking-tight">{title}</h1>
        </div>
      </div>
      <article className="prose-policy mx-auto max-w-3xl px-4 py-14 sm:px-6">{children}</article>
    </>
  );
}

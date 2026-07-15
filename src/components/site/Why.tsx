const points = [
  {
    k: "01",
    t: "Un studio, pas une usine.",
    d: "Trois projets par trimestre. Jamais plus. Pour que chaque détail compte.",
  },
  {
    k: "02",
    t: "Conçu pour convertir.",
    d: "Une esthétique qui inspire confiance. Une structure qui transforme.",
  },
  {
    k: "03",
    t: "Livré, pas promis.",
    d: "Quatre semaines, dates fermes. Vous savez quand. Vous savez quoi.",
  },
  {
    k: "04",
    t: "Pensé pour durer.",
    d: "Pas de tendance. Du design qui ne vieillira pas avant dix ans.",
  },
];

export const Why = () => {
  return (
    <section className="py-32 md:py-48 border-t hairline bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Pourquoi mono.web
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-balance">
              Le luxe, aujourd&apos;hui,
              <br />
              c&apos;est{" "}
              <span className="font-serif-display italic">l&apos;attention</span>.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-base md:text-lg leading-relaxed self-end">
            Nous ne vendons pas des sites. Nous vendons une exigence —
            celle de ne rien laisser au hasard, ni dans le pixel, ni dans le mot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border hairline rounded-md overflow-hidden">
          {points.map((p) => (
            <div key={p.k} className="bg-background p-10 md:p-12">
              <div className="text-[11px] tracking-[0.2em] text-muted-foreground mb-8">
                {p.k}
              </div>
              <h3 className="font-display text-2xl font-light mb-4 text-balance">
                {p.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

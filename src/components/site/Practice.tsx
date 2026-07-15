const services = [
  {
    n: "01",
    t: "Sites web premium",
    d: "Des interfaces sobres, rapides, conçues pour rester pertinentes pendant dix ans.",
  },
  {
    n: "02",
    t: "Identité visuelle",
    d: "Marques minimalistes — un signe, une typographie, une intention claire.",
  },
  {
    n: "03",
    t: "Communication",
    d: "Un message, dit juste. Sans bruit, sans surenchère, sans concession.",
  },
];

export const Practice = () => {
  return (
    <section id="pratique" className="py-32 md:py-48 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-20">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            Ce que nous faisons
          </p>
          <p className="hidden md:block text-sm text-muted-foreground">— Trois disciplines.</p>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y hairline">
          {services.map((s) => (
            <article
              key={s.n}
              className="group p-10 md:p-12 transition-colors duration-500 hover:bg-secondary"
            >
              <div className="text-[11px] tracking-[0.2em] text-muted-foreground mb-12">
                {s.n}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light mb-6 text-balance">
                {s.t}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs">
                {s.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

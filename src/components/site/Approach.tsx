const steps = [
  {
    n: "I.",
    t: "Comprendre",
    d: "Écouter, observer, retirer le superflu. Définir ce qui compte vraiment.",
  },
  {
    n: "II.",
    t: "Simplifier",
    d: "Réduire, jusqu'à ne garder que l'évidence. La forme suit l'intention.",
  },
  {
    n: "III.",
    t: "Sublimer",
    d: "Polir chaque détail. Jusqu'à ce que l'objet semble inévitable.",
  },
];

export const Approach = () => {
  return (
    <section id="approche" className="py-32 md:py-48 border-t hairline bg-secondary/40">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-10">
          Notre approche
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-balance">
          Comprendre.{" "}
          <span className="text-muted-foreground">Simplifier.</span>{" "}
          <span className="font-serif-display italic">Sublimer.</span>
        </h2>

        <div className="mt-24 grid md:grid-cols-3 gap-16 md:gap-10 text-left">
          {steps.map((s) => (
            <div key={s.n} className="space-y-5">
              <div className="font-serif-display text-3xl text-muted-foreground">
                {s.n}
              </div>
              <h3 className="font-display text-2xl font-light">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const offers = [
  {
    n: "01",
    name: "Essentiel",
    price: "300 €",
    pitch: "Le site qui lance votre activité. Simple, élégant, efficace.",
    inclus: [
      "Site vitrine sur mesure",
      "Design épuré & responsive",
      "Optimisé pour Google",
      "Livré en 2 semaines",
    ],
    cta: "Lancer mon site",
    featured: false,
  },
  {
    n: "02",
    name: "Marque",
    price: "1 000 €",
    pitch: "Identité visuelle, direction artistique & analyse stratégique.",
    inclus: [
      "Analyse stratégique de marque",
      "Direction artistique complète",
      "Logo & système visuel",
      "Charte & guidelines",
    ],
    cta: "Construire ma marque",
    featured: true,
  },
  {
    n: "03",
    name: "Sur mesure",
    price: "sur devis",
    pitch: "Site + identité, e-commerce, projets singuliers.",
    inclus: [
      "Périmètre défini ensemble",
      "Site & identité réunis",
      "Accompagnement dédié",
      "Suivi long terme",
    ],
    cta: "Parler du projet",
    featured: false,
  },
];

export const Offers = () => {
  return (
    <section id="offres" className="py-32 md:py-48 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Offres
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-balance">
            Trois manières de{" "}
            <span className="font-serif-display italic">commencer</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">
            Des engagements clairs. Des prix justes. Aucun superflu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border hairline rounded-md overflow-hidden">
          {offers.map((o) => (
            <article
              key={o.name}
              className={`relative p-10 md:p-12 flex flex-col bg-background transition-colors duration-500 ${
                o.featured ? "md:bg-foreground md:text-background" : "hover:bg-secondary"
              }`}
            >
              {o.featured && (
                <span className="hidden md:inline-block absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase opacity-70">
                  Recommandé
                </span>
              )}
              <div className={`text-[11px] tracking-[0.2em] mb-10 ${o.featured ? "opacity-60" : "text-muted-foreground"}`}>
                {o.n}
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-4">
                {o.name}
              </h3>
              <p className={`text-sm mb-8 ${o.featured ? "opacity-70" : "text-muted-foreground"}`}>
                {o.pitch}
              </p>
              <div className="font-serif-display text-2xl mb-10">
                {o.price}
              </div>

              <ul className={`space-y-3 text-sm flex-1 ${o.featured ? "opacity-90" : ""}`}>
                {o.inclus.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden className={o.featured ? "opacity-50" : "text-muted-foreground"}>—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-12 group inline-flex items-center gap-2 text-sm transition-all duration-500 hover:gap-3 ${
                  o.featured
                    ? "text-background"
                    : "text-foreground"
                }`}
              >
                {o.cta}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Paiement en 3 fois sans frais. Garantie satisfaction sur le design.
        </p>
      </div>
    </section>
  );
};

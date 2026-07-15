const offers = [
  {
    name: "Votre site",
    price: "300 €",
    pitch: "Le site qui lance votre activité.",
    inclus: [
      "Site professionnel sur mesure",
      "Textes écrits pour vous",
      "Mise en ligne en 7 jours",
      "Accompagnement inclus",
    ],
    cta: "Créer mon site",
    featured: false,
  },
  {
    name: "Votre marque",
    price: "1 000 €",
    pitch: "Site + identité visuelle + analyse stratégique.",
    inclus: [
      "Tout ce qui est dans Votre site",
      "Logo & identité visuelle",
      "Direction artistique",
      "Analyse stratégique de votre marque",
    ],
    cta: "Lancer ma marque",
    featured: true,
  },
];

export const Pricing = () => {
  return (
    <section id="tarifs" className="py-24 md:py-36 border-t hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Tarifs
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Un prix{" "}
            <span className="font-serif-display italic">clair</span>. Sans surprise.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Payé une fois. Aucun abonnement caché.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border hairline rounded-lg overflow-hidden">
          {offers.map((o) => (
            <article
              key={o.name}
              className={`p-10 md:p-14 flex flex-col ${
                o.featured ? "bg-foreground text-background" : "bg-background"
              }`}
            >
              <h3 className="font-display text-2xl font-light mb-4">{o.name}</h3>
              <p className={`text-sm mb-8 ${o.featured ? "opacity-70" : "text-muted-foreground"}`}>
                {o.pitch}
              </p>
              <div className="font-display text-6xl md:text-7xl font-light mb-2">
                {o.price}
              </div>
              <div className={`text-xs mb-10 ${o.featured ? "opacity-60" : "text-muted-foreground"}`}>
                Payé une fois. Tout compris.
              </div>

              <ul className={`space-y-3 text-sm flex-1 mb-10 ${o.featured ? "opacity-90" : ""}`}>
                {o.inclus.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden className={o.featured ? "opacity-50" : "text-muted-foreground"}>✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demarrer"
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm transition-all duration-500 hover:gap-3 ${
                  o.featured
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {o.cta}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Paiement en 3 fois sans frais possible. Devis gratuit.
        </p>
      </div>
    </section>
  );
};

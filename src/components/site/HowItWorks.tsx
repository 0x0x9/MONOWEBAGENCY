const steps = [
  {
    n: "1",
    t: "Vous nous parlez (10 min)",
    d: "Un appel simple. Vous nous racontez votre métier. C'est tout.",
  },
  {
    n: "2",
    t: "On crée votre site et votre marque",
    d: "On écrit, on dessine, on construit. Vous n'avez rien à faire.",
  },
  {
    n: "3",
    t: "Vous recevez votre site",
    d: "Prêt à l'emploi, en ligne, sous 7 jours.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="comment" className="py-24 md:py-36 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Comment ça marche
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Simple. En{" "}
            <span className="font-serif-display italic">trois étapes</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((s) => (
            <div key={s.n} className="text-center md:text-left">
              <div className="font-display text-7xl md:text-8xl font-light text-muted-foreground/40 mb-6">
                {s.n}
              </div>
              <h3 className="font-display text-2xl font-light mb-4 text-balance">
                {s.t}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-20 text-center font-serif-display italic text-xl md:text-2xl text-muted-foreground">
          Pas de formulaire compliqué. Pas de technique. Pas de stress.
        </p>
      </div>
    </section>
  );
};

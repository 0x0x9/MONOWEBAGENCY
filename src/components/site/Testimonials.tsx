const quotes = [
  {
    q: "Enfin un site simple et professionnel. J'ai des nouveaux clients chaque semaine.",
    a: "Marc D.",
    r: "Plombier, Lyon",
  },
  {
    q: "J'ai tout compris tout de suite. Aucun jargon. Que des gens humains.",
    a: "Sophie L.",
    r: "Fleuriste, Nantes",
  },
  {
    q: "Rapide, clair, efficace. Mon site était prêt en moins d'une semaine.",
    a: "Karim B.",
    r: "Coach sportif, Paris",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-36 border-t hairline bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-16 text-center">
          Ce que nos clients disent
        </p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {quotes.map((t) => (
            <figure key={t.a} className="space-y-6">
              <blockquote className="font-serif-display text-xl md:text-2xl leading-snug text-balance">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <div className="text-foreground">{t.a}</div>
                <div className="text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

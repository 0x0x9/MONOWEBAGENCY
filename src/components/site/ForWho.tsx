const points = [
  "Vous n'avez pas le temps de vous occuper d'un site.",
  "L'informatique, ce n'est pas votre métier — et c'est normal.",
  "Vous voulez un site simple qui vous ramène des clients.",
  "Vous voulez un prix clair, sans mauvaise surprise.",
];

export const ForWho = () => {
  return (
    <section className="py-24 md:py-36 border-t hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
            alt="Professionnel souriant dans son espace de travail moderne"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Pour qui
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-balance mb-10">
            Pensé pour les{" "}
            <span className="font-serif-display italic">artisans</span>,
            commerçants et indépendants.
          </h2>

          <ul className="space-y-5">
            {points.map((p) => (
              <li key={p} className="flex gap-4 text-base md:text-lg leading-relaxed">
                <span aria-hidden className="text-muted-foreground mt-1">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-serif-display italic text-xl text-muted-foreground">
            Vous nous parlez de votre métier. On fait le reste.
          </p>
        </div>
      </div>
    </section>
  );
};

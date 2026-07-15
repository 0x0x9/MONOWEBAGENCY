const items = [
  { t: "Votre site professionnel", d: "Beau, rapide, qui marche sur mobile." },
  { t: "Votre identité visuelle", d: "Un logo et des couleurs qui vous ressemblent." },
  { t: "Vos textes, écrits pour vous", d: "On trouve les bons mots à votre place." },
  { t: "Vos photos intégrées", d: "Les vôtres, ou de belles photos qu'on vous fournit." },
  { t: "Votre marque clarifiée", d: "Un message simple, qui parle à vos clients." },
  { t: "Mise en ligne rapide", d: "Votre site en ligne en moins d'une semaine." },
  { t: "Accompagnement humain", d: "Une vraie personne au bout du fil. Toujours." },
];

export const Includes = () => {
  return (
    <section className="py-24 md:py-36 border-t hairline bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Ce que vous recevez
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Tout est{" "}
            <span className="font-serif-display italic">inclus</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Vous nous dites ce que vous faites. On s&apos;occupe du reste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border hairline rounded-lg overflow-hidden">
          {items.map((i, idx) => (
            <div key={i.t} className="bg-background p-8 md:p-10 flex gap-6">
              <div className="font-serif-display text-2xl text-muted-foreground w-10 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-light mb-2">
                  {i.t}
                </h3>
                <p className="text-muted-foreground text-base">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

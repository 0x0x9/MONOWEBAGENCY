export const Vision = () => {
  return (
    <section id="vision" className="py-32 md:py-48 border-t hairline">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-16">
          Vision
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-light text-balance">
          La technologie devrait
          <span className="text-muted-foreground"> disparaître</span>.
          <br />
          Il ne reste que
          <span className="font-serif-display italic"> l&apos;émotion</span>.
        </h2>
        <div className="mt-20 grid md:grid-cols-2 gap-10 md:gap-16 max-w-3xl">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Nous croyons qu&apos;un produit numérique réussi se reconnaît
            à ce qu&apos;on a su en retirer, jamais à ce qu&apos;on y a ajouté.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Chaque détail est pesé. Chaque mot est choisi. Chaque pixel
            sert l&apos;intention. Le reste n&apos;existe pas.
          </p>
        </div>
      </div>
    </section>
  );
};

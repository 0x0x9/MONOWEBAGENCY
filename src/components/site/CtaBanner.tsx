export const CtaBanner = () => {
  return (
    <section className="py-32 md:py-48 border-t hairline bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[12px] tracking-[0.2em] uppercase opacity-60 mb-10">
          Prochaine fenêtre — Janvier 2026
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-balance">
          Votre marque mérite{" "}
          <span className="font-serif-display italic">mieux</span>.
          <br />
          Commençons.
        </h2>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background text-foreground text-sm transition-all duration-500 hover:gap-3"
          >
            Réserver un appel
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#offres"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 underline-offset-4 hover:underline"
          >
            Comparer les offres
          </a>
        </div>
        <p className="mt-10 text-xs opacity-50">
          Réponse sous 24h. Devis offert. Aucun engagement.
        </p>
      </div>
    </section>
  );
};

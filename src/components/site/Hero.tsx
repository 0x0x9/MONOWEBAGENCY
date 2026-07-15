export const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="reveal delay-1 text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
          Sites & marques pour petites entreprises
        </p>
        <h1 className="reveal delay-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] font-light text-balance">
          Votre site professionnel,
          <br />
          <span className="font-serif-display italic font-normal">créé pour vous</span>.
        </h1>
        <p className="reveal delay-3 mt-8 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground text-balance">
          On s&apos;occupe de tout. Vous n&apos;avez rien à faire.
        </p>

        <div className="reveal delay-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demarrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-base transition-all duration-500 hover:gap-3"
          >
            Créer mon site maintenant
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#comment"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
          >
            Voir comment ça marche
          </a>
        </div>

        <div className="reveal delay-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <span>✓ Prêt en 7 jours</span>
          <span>✓ À partir de 300 €</span>
          <span>✓ Sans engagement</span>
        </div>
      </div>

      <div className="reveal-slow delay-4 mt-16 md:mt-24 max-w-5xl mx-auto px-6 md:px-10">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt="Site web professionnel sur MacBook - Design élégant et minimaliste"
            width={1600}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="font-display text-[18vw] md:text-[14vw] leading-none font-light tracking-tighter">
          mono<span className="font-serif-display italic text-muted-foreground">.web</span>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-sm text-muted-foreground">
          <p className="max-w-sm">
            Studio digital. Paris — partout. Conçu avec patience.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:hello@mono.web" className="hover:text-foreground transition-colors">hello@mono.web</a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t hairline flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} mono.web — Tous droits réservés.</p>
          <p className="font-serif-display italic">La simplicité est la sophistication ultime.</p>
        </div>
      </div>
    </footer>
  );
};

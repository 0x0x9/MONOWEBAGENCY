const links = [
  { label: "Comment ça marche", href: "#comment" },
  { label: "Tarifs", href: "#tarifs" },
];

export const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b hairline">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-base tracking-tight">
          mono<span className="text-muted-foreground">.web</span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#demarrer"
          className="text-[13px] px-4 py-1.5 rounded-full bg-foreground text-background border border-foreground transition-opacity duration-300 hover:opacity-90"
        >
          Créer mon site
        </a>
      </nav>
    </header>
  );
};

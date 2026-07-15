import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    client: "Maison Lumière",
    title: "Une architecte invisible, devenue incontournable.",
    cat: "Site — Identité",
    year: "2025",
    problem: "Une architecte d'intérieur talentueuse mais invisible en ligne, avec un ancien site daté qui ne reflétait pas la qualité de son travail.",
    solution: "Site épuré en tons chauds, mettant en valeur les espaces sans les distraire. Navigation intuitive et formulaire de contact simplifié.",
    result: "+300% de demandes de devis en 3 mois. Temps moyen sur site ×4.",
    demoUrl: "/demo/maison-lumiere",
    tags: ["Architecture", "Minimaliste", "Élégant", "Responsive"],
  },
  {
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1600&q=80",
    client: "Sakura",
    title: "Un restaurant qui ne vendait pas son ambiance.",
    cat: "Site — Réservation",
    year: "2024",
    problem: "Un restaurant japonais premium dont le site ne transmettait pas l'expérience immersive et zen proposée en salle.",
    solution: "Design immersif en dark mode avec accents dorés, galerie visuelle, formulaire de réservation fluide et présentation du chef.",
    result: "Réservations en ligne ×4. Taux de conversion visite → réservation passé de 3% à 18%.",
    demoUrl: "/demo/sakura",
    tags: ["Restauration", "Dark Mode", "Réservation", "Premium"],
  },
  {
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80",
    client: "Studio Minuit",
    title: "Un portfolio confus qui noyait les meilleures photos.",
    cat: "Portfolio",
    year: "2024",
    problem: "Un photographe professionnel avec un portfolio surchargé où les visiteurs ne trouvaient pas ses meilleures réalisations.",
    solution: "Portfolio minimaliste dark avec grille filtrable, navigation claire par catégorie, et galerie immersive. Chaque image devient héroïne.",
    result: "Taux de conversion galerie → contact passé de 2% à 12%. Temps passé sur le portfolio +280%.",
    demoUrl: "/demo/studio-minuit",
    tags: ["Photographie", "Portfolio", "Dark Mode", "Filtres"],
  },
];

export const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="travaux" className="py-32 md:py-48 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header minimal */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            Travaux
          </p>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </div>

        {/* Liste des projets */}
        <div className="border-t hairline">
          {projects.map((p, i) => {
            const isExpanded = expandedIndex === i;
            const number = String(i + 1).padStart(2, "0");

            return (
              <article
                key={p.client}
                className="border-b hairline"
              >
                {/* Row header — toujours visible */}
                <button
                  onClick={() => toggleExpand(i)}
                  className="group w-full text-left"
                >
                  <div 
                    className="grid grid-cols-[60px_1fr_auto_auto] md:grid-cols-[100px_1fr_180px_80px_60px] items-center gap-4 py-6 md:py-8 transition-all duration-300"
                    style={{ paddingLeft: isExpanded ? '0px' : undefined }}
                  >
                    {/* Numéro filigrane */}
                    <div className="relative overflow-hidden">
                      <span 
                        className="font-display text-5xl md:text-7xl font-extralight tracking-tight select-none transition-all duration-500 block"
                        style={{ 
                          color: 'hsl(var(--foreground))',
                          opacity: isExpanded ? 0.25 : 0.1,
                          transform: isExpanded ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        {number}
                      </span>
                    </div>

                    {/* Client + Titre */}
                    <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-3">
                      <h3 className="font-display text-base md:text-lg font-medium tracking-tight truncate">
                        {p.client}
                        <span className="text-muted-foreground font-normal hidden sm:inline"> — {p.title}</span>
                      </h3>
                      {/* Titre mobile uniquement */}
                      <p className="text-muted-foreground text-sm sm:hidden truncate">
                        {p.title}
                      </p>
                    </div>

                    {/* Catégorie — desktop only */}
                    <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hidden md:block">
                      {p.cat}
                    </span>

                    {/* Année */}
                    <span className="text-[11px] tracking-wide text-muted-foreground text-right md:text-left">
                      {p.year}
                    </span>

                    {/* Flèche */}
                    <div className="flex justify-end">
                      <ArrowRight 
                        className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1"
                        style={{ 
                          transform: isExpanded ? 'rotate(90deg)' : undefined 
                        }}
                      />
                    </div>
                  </div>
                </button>

                {/* Contenu expanded */}
                <div 
                  className="overflow-hidden transition-all duration-500"
                  style={{ 
                    maxHeight: isExpanded ? '1000px' : '0px',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="pb-12 md:pb-16 pt-4">
                    {/* Image panoramique */}
                    <div className="overflow-hidden rounded-sm mb-10 md:mb-12">
                      <img
                        src={p.img}
                        alt={`${p.client} — ${p.title}`}
                        className="w-full aspect-[21/9] object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>

                    {/* État de cas — 3 colonnes */}
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          Problème
                        </p>
                        <p className="text-sm leading-relaxed">
                          {p.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          Solution
                        </p>
                        <p className="text-sm leading-relaxed">
                          {p.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          Résultat
                        </p>
                        <p className="text-sm leading-relaxed font-medium">
                          {p.result}
                        </p>
                      </div>
                    </div>

                    {/* Tags + CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t hairline">
                      {/* Tags */}
                      <p className="text-[11px] tracking-wide text-muted-foreground">
                        {p.tags.join(" / ")}
                      </p>

                      {/* CTA */}
                      <a
                        href={p.demoUrl}
                        className="group/link inline-flex items-center gap-1.5 text-sm hover:underline underline-offset-4 transition-all"
                      >
                        Voir le site en direct
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 pt-16 border-t hairline">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Vous avez parcouru la liste ?
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight">
                Créons <span className="font-serif-display italic">votre</span> projet.
              </h3>
            </div>
            <a
              href="#demarrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-base transition-all duration-300 hover:gap-3"
            >
              Démarrer
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

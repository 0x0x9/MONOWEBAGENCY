import { Instagram, Mail, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const categories = ["Tous", "Portrait", "Mode", "Architecture", "Éditorial", "Publicité"];

const portfolio = [
  { id: 1, category: "Portrait", title: "L'attente", client: "Magazine L'Œil", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { id: 2, category: "Mode", title: "Noir absolu", client: "Maison Margiela", image: "https://images.unsplash.com/photo-1469334031218-1f155dd3eb33?w=800&q=80" },
  { id: 3, category: "Architecture", title: "Béton brut", client: "Le Moniteur", image: "https://images.unsplash.com/photo-1486718448742-163732f148e5?w=800&q=80" },
  { id: 4, category: "Portrait", title: "Silence", client: "The Gentlewoman", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
  { id: 5, category: "Mode", title: "Lignes pures", client: "Jil Sander", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
  { id: 6, category: "Éditorial", title: "Espace vide", client: "Apartamento", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
  { id: 7, category: "Publicité", title: "Essence", client: "Chanel Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80" },
  { id: 8, category: "Architecture", title: "Lumière naturelle", client: "Dwell", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" },
  { id: 9, category: "Portrait", title: "Double jeu", client: "Vanity Fair", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
];

const clientLogos = [
  "Vogue", "Le Monde", "Chanel", "Dior", "Hermès", "Cartier"
];

const pricing = [
  {
    title: "Portrait",
    price: "450€",
    unit: "/ demi-journée",
    features: ["Séance studio ou extérieur", "Direction artistique", "Sélection & retouche", "Livraison web + print"],
  },
  {
    title: "Mode",
    price: "1 200€",
    unit: "/ journée",
    features: ["Lookbook 10 tenues", "Mannequin inclus", "Maquillage & coiffure", "Retouche incluse"],
    popular: true,
  },
  {
    title: "Éditorial",
    price: "Sur devis",
    unit: "",
    features: ["Direction artistique complète", "Production incluse", "Équipe dédiée", "Usage presse + web"],
  },
];

const processSteps = [
  { num: "01", title: "Brief", desc: "On discute de votre vision, vos besoins, vos contraintes." },
  { num: "02", title: "Concept", desc: "Je propose des idées, des références, un moodboard." },
  { num: "03", title: "Shoot", desc: "Le jour J. Direction, lumière, capture." },
  { num: "04", title: "Post-prod", desc: "Sélection, retouche, livraison dans les délais." },
];

const services = [
  {
    title: "Portrait",
    description: "Capturer l'essence, au-delà de l'apparence. Sessions en studio ou sur location, pour particuliers et professionnels.",
  },
  {
    title: "Mode",
    description: "Lookbooks, campagnes, editorial. Une vision minimaliste pour sublimer vos créations et faire rayonner vos pièces.",
  },
  {
    title: "Architecture",
    description: "Photographier l'espace, la lumière, la matière. Pour architectes, designers, et magazines spécialisés.",
  },
  {
    title: "Éditorial",
    description: "Raconter une histoire en images. Direction artistique, mise en scène, et photographie pour la presse.",
  },
];

const awards = [
  { year: "2024", title: "Prix Picto de la Jeune Photographie" },
  { year: "2023", title: "Sélection PhotoVogue Festival" },
  { year: "2022", title: "Creative Review Photography Annual" },
];

export default function DemoStudioMinuit() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPortfolio =
    activeCategory === "Tous"
      ? portfolio
      : portfolio.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#050505]/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-mono text-sm tracking-[0.3em] uppercase">
            Studio Minuit
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a
              href="#portfolio"
              className="text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 py-8">
            <div className="flex flex-col items-center gap-6">
              <a
                href="#portfolio"
                className="text-xs tracking-[0.2em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-xs tracking-[0.2em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-xs tracking-[0.2em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-end pb-24 md:pb-32 pt-32 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6">
                PHOTOGRAPHE — PARIS / LONDRES
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]">
                La photographie
                <br />
                <span className="text-white/40">comme silence.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                Portrait, mode, architecture. Une approche minimaliste où
                chaque image respire.
              </p>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
              >
                Voir le portfolio
                <ArrowDown className="w-4 h-4 rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-[#0a0a0a] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80"
              alt="Portrait mode élégant noir et blanc"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-xs tracking-[0.3em] text-white/60 mb-2">PROJET RÉCENT</p>
              <h3 className="text-xl font-light">Portrait — L'attente</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-4">
                SÉLECTION
              </p>
              <h2 className="text-2xl md:text-3xl font-light">Portfolio</h2>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-white text-black"
                      : "bg-transparent text-white/50 hover:text-white border border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPortfolio.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-[4/5] bg-[#0a0a0a] overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-mono text-xs tracking-[0.2em] text-white/60 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-light mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.client}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-4">
                EXPERTISE
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Services</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                Chaque projet mérite une approche unique. Nous travaillons en
                étroite collaboration pour créer des images qui vous ressemblent.
              </p>
              <div className="mt-8 space-y-4">
                {awards.map((award) => (
                  <div key={award.title} className="flex items-center gap-4">
                    <span className="text-xs text-white/30 font-mono">{award.year}</span>
                    <span className="text-sm">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-white/10">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-[#0a0a0a] p-8 group cursor-pointer hover:bg-[#111] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-light">{service.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-white/40 text-center mb-8">
            ILS NOUS FONT CONFIANCE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {clientLogos.map((client) => (
              <span key={client} className="text-lg md:text-xl font-light text-white/40 tracking-wide">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-4">
              INVESTISSEMENT
            </p>
            <h2 className="text-2xl md:text-3xl font-light">Tarifs</h2>
            <p className="text-sm text-white/50 mt-4 max-w-md mx-auto">
              Des forfaits clairs, sans surprise. Chaque projet inclut la préparation, le shoot, et la post-production.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {pricing.map((plan) => (
              <div key={plan.title} className={`p-8 ${plan.popular ? 'bg-[#0a0a0a]' : 'bg-[#050505]'}`}>
                {plan.popular && (
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 mb-4 block">Populaire</span>
                )}
                <h3 className="text-lg font-light mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-light">{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-white/50 flex items-start gap-2">
                      <span className="text-white/30">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80"
                  alt="Appareil photo vintage"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6">
                NOTRE MÉTHODE
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Du concept
                <br />
                <span className="text-white/40">à l'image.</span>
              </h2>
              <div className="space-y-8">
                {processSteps.map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <span className="font-mono text-2xl text-white/20">{step.num}</span>
                    <div>
                      <h3 className="text-lg font-light mb-1">{step.title}</h3>
                      <p className="text-sm text-white/50">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed">
            "Ce qui n'est pas là, cela compte aussi."
          </blockquote>
          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-white/40">
            — LUDWIG MIES VAN DER ROHE
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-light mb-2">8+</p>
              <p className="text-xs tracking-[0.2em] text-white/40">ANNÉES D'EXPÉRIENCE</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light mb-2">200+</p>
              <p className="text-xs tracking-[0.2em] text-white/40">PROJETS RÉALISÉS</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light mb-2">50+</p>
              <p className="text-xs tracking-[0.2em] text-white/40">MARQUES ACCOMPAGNÉES</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light mb-2">12</p>
              <p className="text-xs tracking-[0.2em] text-white/40">PRIX & RECONNAISSANCES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6">
                COLLABORONS
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Commençons
                <br />
                <span className="text-white/40">un projet.</span>
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:hello@studiominuit.com"
                  className="flex items-center gap-4 text-sm hover:text-white/60 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@studiominuit.com
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-4 text-sm hover:text-white/60 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @studiominuit
                </a>
              </div>
            </div>

            <form className="space-y-8">
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] text-white/40 mb-3">
                  NOM
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] text-white/40 mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-[0.2em] text-white/40 mb-3">
                  PROJET
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
              >
                ENVOYER
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.3em]">Studio Minuit</p>
          <p className="text-xs text-white/40">
            © 2024 Studio Minuit. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

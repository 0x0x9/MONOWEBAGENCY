import { ArrowRight, Instagram, Mail, MapPin, Phone, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Appartement Saint-Germain",
    category: "Résidentiel",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    description: "Rénovation complète d'un appartement haussmannien de 180m²",
  },
  {
    id: 2,
    title: "Boutique Édition Limitée",
    category: "Commercial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Concept store de maroquinerie de luxe",
  },
  {
    id: 3,
    title: "Loft Canal Saint-Martin",
    category: "Résidentiel",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    description: "Transformation d'un ancien atelier en loft contemporain",
  },
  {
    id: 4,
    title: "Maison Normandie",
    category: "Résidentiel",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    description: "Réhabilitation d'une longère du XIXe siècle",
  },
  {
    id: 5,
    title: "Showroom Architecte",
    category: "Commercial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Espace d'exposition pour matériaux de construction haut de gamme",
  },
  {
    id: 6,
    title: "Penthouse Marais",
    category: "Résidentiel",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    description: "Sur les toits de Paris, 120m² de lumière",
  },
];

const services = [
  {
    title: "Consultation initiale",
    description: "Rencontre pour comprendre vos besoins, vos envies, votre mode de vie. Nous échangeons sur vos inspirations et établissons un cahier des charges.",
    duration: "1-2 heures",
  },
  {
    title: "Conception architecturale",
    description: "Plans détaillés, choix des matériaux, étude des lumières. Chaque décision est pensée pour créer des espaces cohérents et fonctionnels.",
    duration: "2-4 semaines",
  },
  {
    title: "Direction des travaux",
    description: "Suivi rigoureux des artisans, respect des délais et du budget. Nous coordonnons chaque étape pour une réalisation sans stress.",
    duration: "Selon projet",
  },
  {
    title: "Décoration finale",
    description: "Sélection des mobiliers, textiles, objets. Nous habillons votre espace pour qu'il vous ressemble vraiment.",
    duration: "1-2 semaines",
  },
];

const testimonials = [
  {
    name: "Marie & Thomas",
    project: "Appartement Saint-Germain",
    text: "Camille a transformé notre appartement en un lieu de vie exceptionnel. Son sens de l'espace et son attention aux détails ont dépassé nos attentes.",
  },
  {
    name: "Alexandre Dubois",
    project: "Boutique Édition Limitée",
    text: "Une collaboratrice hors pair. Elle a su traduire l'identité de notre marque dans un espace qui séduit nos clients dès l'entrée.",
  },
  {
    name: "Sophie Lefranc",
    project: "Maison Normandie",
    text: "Respect de l'histoire de notre maison tout en l'amenagée pour la vie moderne. Un équilibre parfait entre authenticité et confort.",
  },
];

const processSteps = [
  { step: "01", title: "Rencontre", desc: "Premier échange autour d'un café pour définir vos besoins." },
  { step: "02", title: "Conception", desc: "Plans, moodboards, sélection des matériaux." },
  { step: "03", title: "Réalisation", desc: "Travaux coordonnés avec les meilleurs artisans." },
  { step: "04", title: "Livraison", desc: "Votre espace transformé, prêt à vivre." },
];

export default function DemoMaisonLumiere() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#FAF9F6]/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide">
            Maison Lumière
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#projets" className="hover:opacity-60 transition-opacity">
              Projets
            </a>
            <a href="#services" className="hover:opacity-60 transition-opacity">
              Services
            </a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-transform" />
            <div className="w-6 h-0.5 bg-current transition-transform" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F6] border-b border-[#1a1a1a]/10 py-4">
            <div className="flex flex-col items-center gap-4 text-sm tracking-wide">
              <a
                href="#projets"
                className="hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projets
              </a>
              <a
                href="#services"
                className="hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355]">
                Architecte d'intérieur — Paris
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-light">
                Créer des espaces
                <br />
                <span className="italic">qui respirent.</span>
              </h1>
              <p className="text-lg text-[#1a1a1a]/70 max-w-md leading-relaxed">
                Chaque projet raconte une histoire. Nous traduisons vos aspirations
                en lieux de vie singuliers, où la lumière et l'espace dansent en
                harmonie.
              </p>
              <a
                href="#projets"
                className="inline-flex items-center gap-3 text-sm tracking-wide border-b border-current pb-1 hover:opacity-60 transition-opacity"
              >
                Découvrir nos projets
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[#E8E4DF] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                  alt="Intérieur minimaliste élégant avec lumière naturelle"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="absolute -bottom-4 -left-4 text-[11px] tracking-wide text-[#8b7355]">
                Appartement Saint-Germain, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
                Portfolio
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                Projets récents
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#1a1a1a]/60 max-w-xs">
              Une sélection de nos réalisations, de l'appartement parisien à la
              maison de campagne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group cursor-pointer ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`bg-[#E8E4DF] overflow-hidden ${
                    index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-light group-hover:opacity-60 transition-opacity">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#8b7355] mt-1">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-[#1a1a1a]/40">{project.year}</span>
                  </div>
                  <p className="text-sm text-[#1a1a1a]/60">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
                Services
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                Une approche
                <br />
                <span className="italic">sur mesure.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex gap-6 pb-8 border-b border-[#1a1a1a]/10 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-2xl text-[#8b7355]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl md:text-2xl font-light">
                        {service.title}
                      </h3>
                      <span className="text-xs text-[#8b7355] tracking-wide">{service.duration}</span>
                    </div>
                    <p className="text-[#1a1a1a]/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed">
            "L'architecture est le jeu savant, correct et magnifique des volumes
            assemblés sous la lumière."
          </blockquote>
          <p className="mt-8 text-sm tracking-wide text-[#8b7355]">
            — Le Corbusier
          </p>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Designer au travail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-6">
                Notre approche
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                L'essentiel,
                <br />
                <span className="italic">sans le superflu.</span>
              </h2>
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-8">
                Chaque projet commence par l'écoute. Nous prenons le temps de comprendre
                qui vous êtes, comment vous vivez, ce qui vous fait vibrer. Cette
                compréhension guide chaque décision, de la disposition des pièces au
                choix d'une poignée de porte.
              </p>
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-8">
                Notre philosophie est simple : créer des espaces qui respirent, où
                chaque élément a sa place et sa raison d'être. Pas de gadgets
                inutiles, pas de tendances éphémères. Juste du beau, du durable,
                du sens.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="font-serif text-4xl text-[#8b7355]">12</p>
                  <p className="text-sm text-[#1a1a1a]/60">Années d'expérience</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-[#8b7355]">150+</p>
                  <p className="text-sm text-[#1a1a1a]/60">Projets réalisés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
              Comment ça marche
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Notre processus
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-5xl text-[#E8E4DF]">{item.step}</span>
                <h3 className="font-serif text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 md:py-32 px-6 bg-[#E8E4DF]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
              Témoignages
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <Quote className="w-8 h-8 text-[#8b7355]/30 mb-4" />
                <p className="text-[#1a1a1a]/80 leading-relaxed mb-6">{t.text}</p>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-[#8b7355]">{t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
            Inspiration
          </p>
          <h3 className="font-serif text-2xl font-light mb-6">
            Recevez notre sélection d'architectures
          </h3>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-transparent border-b border-[#1a1a1a]/20 py-2 focus:outline-none focus:border-[#1a1a1a]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#1a1a1a] text-[#FAF9F6] text-sm tracking-wide hover:bg-[#1a1a1a]/80 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#8b7355] mb-4">
                Contact
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Commençons
                <br />
                <span className="italic">votre projet.</span>
              </h2>
              <p className="text-[#1a1a1a]/70 leading-relaxed max-w-md mb-12">
                Chaque espace mérite une attention particulière. Racontez-nous
                votre vision, nous vous accompagnons dans sa réalisation.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:bonjour@maisonlumiere.fr"
                  className="flex items-center gap-4 text-sm hover:opacity-60 transition-opacity"
                >
                  <Mail className="w-4 h-4 text-[#8b7355]" />
                  bonjour@maisonlumiere.fr
                </a>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-4 text-sm hover:opacity-60 transition-opacity"
                >
                  <Phone className="w-4 h-4 text-[#8b7355]" />
                  +33 1 23 45 67 89
                </a>
                <div className="flex items-center gap-4 text-sm">
                  <MapPin className="w-4 h-4 text-[#8b7355]" />
                  12 rue de la Paix, 75002 Paris
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Projet</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1a1a1a] text-[#FAF9F6] text-sm tracking-wide hover:bg-[#1a1a1a]/80 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg">Maison Lumière</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:bonjour@maisonlumiere.fr"
              className="hover:opacity-60 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-[#1a1a1a]/40">
            © 2024 Maison Lumière. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

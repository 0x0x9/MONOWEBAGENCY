import { Clock, MapPin, Phone, Instagram, ArrowRight, Star, Calendar, Users } from "lucide-react";
import { useEffect, useState } from "react";

const menuCategories = [
  {
    category: "Entrées",
    items: [
      { name: "Edamame", desc: "Fèves de soja vapeur, fleur de sel", price: "8€" },
      { name: "Gyoza croustillants", desc: "Porc, ciboulette, sauce maison", price: "14€" },
      { name: "Carpaccio de saumon", desc: "Yuzu, coriandre, huile de sésame", price: "18€" },
      { name: "Tempura légère", desc: "Légumes de saison, sauce tentsuyu", price: "16€" },
    ]
  },
  {
    category: "Sashimi & Sushi",
    items: [
      { name: "Sashimi du jour", desc: "Sélection du chef, 5 pièces", price: "28€" },
      { name: "Tataki de thon", desc: "Carpaccio légèrement grillé, sauce ponzu", price: "24€" },
      { name: "Assortiment sushi", desc: "12 pièces, poisson du marché", price: "32€" },
      { name: "Maki signature", desc: "Homard, avocat, caviar d'umami", price: "26€" },
    ]
  },
  {
    category: "Plats",
    items: [
      { name: "Ramen maison", desc: "Bouillon 12h, porc braisé, œuf mollet", price: "22€" },
      { name: "Black cod miso", desc: "Cabillaud mariné 3 jours, aubergine", price: "38€" },
      { name: "Wagyu A5", desc: "200g, légumes grillés, sauce ponzu", price: "65€" },
      { name: "Daurade royale", desc: "Papillote en feuille de bananier", price: "34€" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Mochi glacé", desc: "Thé matcha, sésame noir, yuzu", price: "12€" },
      { name: "Dorayaki", desc: "Pancake moelleux, crème de marron", price: "10€" },
      { name: "Soufflé au sésame", desc: "Chaud, cœur coulant, glace vanille", price: "14€" },
    ]
  }
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", title: "Salle principale" },
  { url: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80", title: "Sushi bar" },
  { url: "https://images.unsplash.com/photo-1611145430818-ac14573364f9?w=800&q=80", title: "Présentation" },
  { url: "https://images.unsplash.com/photo-1592173376801-074941eb2d25?w=800&q=80", title: "Plats signature" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", title: "Ambiance" },
  { url: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80", title: "Détails" },
];

const privateEvents = [
  {
    title: "Salle privée",
    capacity: "8-12 personnes",
    desc: "Espace intimiste pour dîners d'affaires ou célébrations",
  },
  {
    title: "Sakura Lounge",
    capacity: "20-30 personnes",
    desc: "Cocktail dinatoire avec vue sur les chefs",
  },
  {
    title: "Privatisation",
    capacity: "Jusqu'à 50 personnes",
    desc: "Le restaurant entier pour votre événement",
  },
];

export default function DemoSakura() {
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
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-wider">
            桜
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest">
            <a href="#menu" className="hover:text-[#c9a87c] transition-colors">
              MENU
            </a>
            <a href="#chef" className="hover:text-[#c9a87c] transition-colors">
              CHEF
            </a>
            <a href="#contact" className="hover:text-[#c9a87c] transition-colors">
              RÉSERVER
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#f5f0e8]/10 py-6">
            <div className="flex flex-col items-center gap-6 text-sm tracking-widest">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
                MENU
              </a>
              <a href="#chef" onClick={() => setMobileMenuOpen(false)}>
                CHEF
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                RÉSERVER
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Intérieur restaurant japonais élégant"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-6 pt-20">
          <p className="text-[#c9a87c] text-sm tracking-[0.4em] uppercase mb-6">
            Restaurant Japonais
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8">
            桜
          </h1>
          <p className="text-lg md:text-xl text-[#f5f0e8]/70 max-w-md mx-auto mb-12 font-light">
            Une expérience culinaire nippone,
            <br />
            sublimée par la simplicité.
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9a87c] text-[#c9a87c] text-sm tracking-widest hover:bg-[#c9a87c] hover:text-[#0a0a0a] transition-all duration-500"
          >
            RÉSERVER UNE TABLE
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs tracking-widest text-[#f5f0e8]/40">
          <span>DÉFILER</span>
          <ArrowRight className="w-3 h-3 rotate-90" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-8">
            Notre philosophie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8">
            Dans la simplicité se cache
            <br />
            <span className="italic text-[#c9a87c]">la perfection.</span>
          </h2>
          <p className="text-[#f5f0e8]/60 leading-relaxed max-w-2xl mx-auto">
            Chaque plat est une méditation. Chaque ingrédient est choisi avec
            soin, préparé avec précision, présenté avec élégance. Nous célébrons
            la nature dans sa forme la plus pure.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-4">
              Carte
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Le Menu
            </h2>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {menuCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="font-serif text-xl text-[#c9a87c] mb-8 pb-4 border-b border-[#c9a87c]/30">
                  {cat.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                  {cat.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-serif text-lg group-hover:text-[#c9a87c] transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[#c9a87c] font-light">{item.price}</span>
                      </div>
                      <p className="text-sm text-[#f5f0e8]/50">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#c9a87c] hover:text-[#f5f0e8] transition-colors"
            >
              Voir la carte complète
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section id="chef" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-[#111] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ez15b8fn3?w=800&q=80"
                  alt="Chef japonais préparant des sushis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c9a87c] p-6 text-[#0a0a0a]">
                <p className="text-3xl font-serif">15</p>
                <p className="text-xs tracking-widest">ANNÉES D'EXPÉRIENCE</p>
              </div>
            </div>

            <div>
              <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-6">
                Le Chef
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Kenji Tanaka
              </h2>
              <p className="text-[#f5f0e8]/60 leading-relaxed mb-8">
                Formé au cœur de Tokyo, Kenji a perfectionné son art dans les
                plus grands restaurants de la capitale. Son approche respecte les
                traditions millénaires tout en embrassant une esthétique
                contemporaine.
              </p>
              <blockquote className="font-serif text-xl italic text-[#f5f0e8]/80 border-l-2 border-[#c9a87c] pl-6">
                "La cuisine japonaise n'est pas ce que l'on ajoute,
                mais ce que l'on retient."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-4">
              L'expérience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              L'art du détail
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`bg-[#111] overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : "aspect-square"}`}>
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements privés */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Événement privé"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-6">
                Événements
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Célébrez
                <br />
                <span className="italic">chez nous.</span>
              </h2>
              <p className="text-[#f5f0e8]/60 leading-relaxed mb-8">
                Anniversaires, dîners d'affaires, soirées privées. Notre équipe 
                crée des expériences sur mesure pour vos moments importants.
              </p>
              <div className="space-y-6">
                {privateEvents.map((event) => (
                  <div key={event.title} className="flex items-start gap-4 pb-6 border-b border-[#f5f0e8]/10 last:border-0">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-serif text-lg">{event.title}</h3>
                        <span className="text-xs text-[#c9a87c] tracking-wide">{event.capacity}</span>
                      </div>
                      <p className="text-sm text-[#f5f0e8]/50">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 border border-[#c9a87c] text-[#c9a87c] text-sm tracking-widest hover:bg-[#c9a87c] hover:text-[#0a0a0a] transition-all"
              >
                DEMANDER UN DEVIS
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-4">
              Avis
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Ce qu'ils disent
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pierre M.", text: "Une expérience gastronomique exceptionnelle. Le chef a transformé des produits simples en œuvres d'art.", stars: 5 },
              { name: "Sarah L.", text: "Ambiance feutrée, service impeccable. Mon nouveau restaurant japonais préféré à Paris.", stars: 5 },
              { name: "Marc D.", text: "Nous avons privatisé pour notre anniversaire de mariage. Magique du début à la fin.", stars: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]" />
                  ))}
                </div>
                <p className="text-[#f5f0e8]/80 leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-sm text-[#c9a87c]">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-16 px-6 border-t border-[#f5f0e8]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="w-6 h-6 text-[#c9a87c] mx-auto mb-4" />
              <h4 className="text-sm tracking-widest mb-2">HORAIRES</h4>
              <p className="text-sm text-[#f5f0e8]/60">Mar-Sam<br />12h-14h30 | 19h-22h30</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-[#c9a87c] mx-auto mb-4" />
              <h4 className="text-sm tracking-widest mb-2">ADRESSE</h4>
              <p className="text-sm text-[#f5f0e8]/60">8 rue du Faubourg<br />Saint-Honoré, Paris 8e</p>
            </div>
            <div>
              <Phone className="w-6 h-6 text-[#c9a87c] mx-auto mb-4" />
              <h4 className="text-sm tracking-widest mb-2">RÉSERVATION</h4>
              <p className="text-sm text-[#f5f0e8]/60">+33 1 98 76 54 32<br />24h/24 en ligne</p>
            </div>
            <div>
              <Calendar className="w-6 h-6 text-[#c9a87c] mx-auto mb-4" />
              <h4 className="text-sm tracking-widest mb-2">FERMETURE</h4>
              <p className="text-sm text-[#f5f0e8]/60">Dimanche<br />& Jours fériés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation / Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#c9a87c] text-sm tracking-[0.3em] uppercase mb-6">
                Réservation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Réservez votre table
              </h2>
              <p className="text-[#f5f0e8]/60 leading-relaxed mb-12">
                Pour une expérience optimale, nous vous recommandons de
                réserver. Les groupes de plus de 6 personnes sont invités à nous
                contacter directement.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-[#c9a87c]" />
                  <div>
                    <p className="text-sm font-medium">Mardi — Samedi</p>
                    <p className="text-sm text-[#f5f0e8]/50">
                      12h00 — 14h30 | 19h00 — 22h30
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#c9a87c]" />
                  <a
                    href="tel:+33198765432"
                    className="text-sm hover:text-[#c9a87c] transition-colors"
                  >
                    +33 1 98 76 54 32
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[#c9a87c]" />
                  <p className="text-sm text-[#f5f0e8]/60">
                    8 rue du Faubourg Saint-Honoré, 75008 Paris
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-[#c9a87c] mb-3">
                    DATE
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-2 text-[#f5f0e8] focus:outline-none focus:border-[#c9a87c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#c9a87c] mb-3">
                    COUVERTS
                  </label>
                  <select className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-2 text-[#f5f0e8] focus:outline-none focus:border-[#c9a87c] transition-colors">
                    <option value="" className="bg-[#111]">
                      Sélectionner
                    </option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-[#111]">
                        {n} {n === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-[#c9a87c] mb-3">
                    NOM
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-2 text-[#f5f0e8] focus:outline-none focus:border-[#c9a87c] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-[#c9a87c] mb-3">
                    TÉLÉPHONE
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-2 text-[#f5f0e8] focus:outline-none focus:border-[#c9a87c] transition-colors"
                    placeholder="+33..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-[#c9a87c] mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-[#f5f0e8]/20 py-2 text-[#f5f0e8] focus:outline-none focus:border-[#c9a87c] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#c9a87c] text-[#0a0a0a] text-sm tracking-widest hover:bg-[#d4b896] transition-colors"
              >
                CONFIRMER LA RÉSERVATION
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#f5f0e8]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-2xl">桜</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-[#c9a87c] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-[#f5f0e8]/40 tracking-widest">
            © 2024 SAKURA. TOUS DROITS RÉSERVÉS.
          </p>
        </div>
      </footer>
    </div>
  );
}

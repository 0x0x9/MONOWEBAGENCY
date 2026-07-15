import { useState } from "react";
import { toast } from "sonner";

export const Start = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast("Merci ! On vous rappelle dans la journée.");
    }, 700);
  };

  return (
    <section id="demarrer" className="py-28 md:py-40 border-t hairline bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[12px] tracking-[0.2em] uppercase opacity-60 mb-8">
          Démarrer
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-balance">
          Dites-nous ce que vous faites.
          <br />
          On crée votre{" "}
          <span className="font-serif-display italic">site</span>.
        </h2>
        <p className="mt-6 opacity-70 text-lg">
          On vous rappelle dans la journée. Sans engagement.
        </p>

        <form onSubmit={onSubmit} className="mt-12 space-y-5 text-left">
          <input
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full bg-background/10 border border-background/20 rounded-full px-6 py-4 text-base text-background placeholder:text-background/50 outline-none focus:border-background transition-colors duration-300"
          />
          <input
            name="contact"
            type="text"
            required
            placeholder="Votre email ou téléphone"
            className="w-full bg-background/10 border border-background/20 rounded-full px-6 py-4 text-base text-background placeholder:text-background/50 outline-none focus:border-background transition-colors duration-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-background text-foreground text-base transition-all duration-500 hover:gap-3 disabled:opacity-50"
          >
            {loading ? "Envoi…" : "Lancer mon site"}
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </button>
        </form>

        <p className="mt-8 text-sm opacity-60">
          Ou appelez-nous directement —{" "}
          <a href="tel:+33000000000" className="underline underline-offset-4">
            01 23 45 67 89
          </a>
        </p>
      </div>
    </section>
  );
};

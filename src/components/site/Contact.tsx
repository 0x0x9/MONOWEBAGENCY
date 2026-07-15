import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast("Message reçu. Nous revenons vers vous sous 24h.");
    }, 700);
  };

  return (
    <section id="contact" className="py-32 md:py-48 border-t hairline">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-10">
          Contact
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-balance">
          Parlons de votre{" "}
          <span className="font-serif-display italic">vision</span>.
        </h2>
        <p className="mt-6 text-muted-foreground">
          Une idée, un projet, une intuition. Écrivez-nous.
        </p>

        <form onSubmit={onSubmit} className="mt-16 text-left space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <Field label="Nom" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Votre projet en une phrase" name="message" type="text" required />

          <div className="pt-6 flex items-center justify-between gap-4 border-t hairline">
            <p className="text-xs text-muted-foreground">
              Nous répondons sous 24h, en semaine.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm transition-all duration-500 hover:gap-3 disabled:opacity-50"
            >
              {loading ? "Envoi…" : "Envoyer"}
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) => (
  <label className="block group">
    <span className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
      {label}
    </span>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-transparent border-0 border-b hairline pb-3 text-base outline-none focus:border-foreground transition-colors duration-300 placeholder:text-muted-foreground"
    />
  </label>
);

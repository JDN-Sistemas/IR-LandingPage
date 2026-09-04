import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-14">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Vamos transformar o ambiente da sua empresa?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Agende uma conversa e descubra como a psicologia organizacional
          pode elevar a saúde mental e a performance do seu time.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma conversa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background-alt"
          >
            <MessageCircle size={18} />
            Fale pelo WhatsApp
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Agende uma conversa
          </a>
        </div>
      </div>
    </section>
  );
}

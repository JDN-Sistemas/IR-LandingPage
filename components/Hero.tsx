import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(200,139,84,0.18),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(122,59,18,0.12),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <h1 className="font-display text-4xl leading-tight font-semibold text-text sm:text-5xl">
            Desenvolvimento humano que{" "}
            <span className="text-primary italic">transforma</span>{" "}
            organizações
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Consultoria em psicologia organizacional voltada à saúde mental no
            trabalho e ao desenvolvimento de lideranças e times — unindo
            ciência, escuta ativa e resultados mensuráveis.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                "Olá! Gostaria de agendar um diagnóstico gratuito."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              <MessageCircle size={18} />
              Agende um diagnóstico gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background-alt"
            >
              Conheça os serviços
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-[3rem] bg-background-alt" />
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[3rem] border border-border bg-background p-12 shadow-xl shadow-primary/5">
            <Image
              src="/logo-ir.jpg"
              alt="IR Desenvolvimento Humano e Organizacional"
              width={320}
              height={320}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-2xl border border-border bg-background px-5 py-4 text-center shadow-lg">
            <p className="font-display text-2xl font-semibold text-primary">
              POT
            </p>
            <p className="text-xs text-text-secondary">
              Abordagem em Psicologia Organizacional e do Trabalho
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { GraduationCap, Quote } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export default function AboutRafael() {
  return (
    <section id="rafael" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-background-alt shadow-sm">
            <Image
              src="/rafael-ita.jpg"
              alt={siteConfig.responsavel.nome}
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-6 pt-14 text-center">
              <p className="font-display text-xl font-semibold text-white">
                {siteConfig.responsavel.nome}
              </p>
              <p className="mt-1 text-sm text-white/85">
                {siteConfig.responsavel.especialidade}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-accent-light uppercase">
                {siteConfig.responsavel.crp}
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Responsável técnico
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Sobre {siteConfig.responsavel.nome}
          </h2>

          <p className="mt-6 text-text-secondary">
            Atuação dividida entre o cuidado individual e o desenvolvimento
            das organizações, unindo psicologia clínica e inteligência
            organizacional em cada projeto.
          </p>

          <ul className="mt-6 space-y-3">
            {siteConfig.responsavel.formacao.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-text-secondary">
                <GraduationCap
                  className="mt-0.5 shrink-0 text-primary"
                  size={18}
                />
                {item}
              </li>
            ))}
          </ul>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <Quote className="mb-2 text-accent-light" size={22} />
            <p className="font-display text-lg text-text italic">
              Acredito que desenvolver pessoas é o caminho mais consistente
              para transformar organizações.
            </p>
          </blockquote>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-background-alt"
          >
            <LinkedinIcon size={18} />
            Ver perfil no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

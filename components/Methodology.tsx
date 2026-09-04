import { Search, Target, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Entendimento profundo do cenário e das dores da organização por meio de escuta ativa e dados.",
  },
  {
    icon: Target,
    title: "Plano de Ação",
    description:
      "Definição clara de objetivos, prioridades e indicadores de acompanhamento.",
  },
  {
    icon: Rocket,
    title: "Execução",
    description:
      "Intervenções, treinamentos e acompanhamento próximo junto às lideranças e equipes.",
  },
  {
    icon: LineChart,
    title: "Avaliação de Resultados",
    description:
      "Mensuração de impacto com indicadores e ajustes contínuos ao longo do processo.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Metodologia
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Como trabalhamos
          </h2>
          <p className="mt-4 text-text-secondary">
            Um processo estruturado, transparente e orientado a resultados —
            para você saber exatamente o que esperar em cada etapa.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />

          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={22} />
              </div>
              <span className="mt-4 font-display text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

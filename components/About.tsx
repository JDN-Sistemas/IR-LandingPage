import { HeartHandshake, Ear, FlaskConical, Sparkles } from "lucide-react";

const values = [
  {
    icon: FlaskConical,
    title: "Ciência",
    description: "Práticas fundamentadas em evidências da psicologia organizacional.",
  },
  {
    icon: Ear,
    title: "Escuta ativa",
    description: "Diagnóstico construído a partir da realidade de cada equipe.",
  },
  {
    icon: HeartHandshake,
    title: "Ética",
    description: "Sigilo e responsabilidade técnica em cada intervenção.",
  },
  {
    icon: Sparkles,
    title: "Humanização",
    description: "Pessoas no centro das decisões e da cultura organizacional.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Quem somos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Conectamos saúde mental e performance organizacional
          </h2>
          <p className="mt-5 text-text-secondary">
            A IR Desenvolvimento Humano e Organizacional nasceu da convicção
            de que empresas saudáveis são construídas por pessoas saudáveis.
            Atuamos como consultoria em psicologia organizacional e do
            trabalho, apoiando lideranças e equipes a desenvolverem cultura,
            clima e performance de forma sustentável.
          </p>
          <p className="mt-4 text-text-secondary">
            Nosso diferencial está em unir rigor técnico da Psicologia
            Organizacional e do Trabalho (POT) a um olhar humano e próximo,
            gerando diagnósticos precisos e planos de ação que realmente
            saem do papel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background-alt text-primary">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

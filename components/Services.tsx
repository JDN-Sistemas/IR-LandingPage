import {
  Building2,
  Users,
  BrainCircuit,
  UserSearch,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Consultoria Organizacional",
    description:
      "Diagnóstico de clima, cultura e processos para orientar decisões estratégicas.",
  },
  {
    icon: Users,
    title: "Desenvolvimento de Lideranças",
    description:
      "Mentoria e treinamentos para gestores desenvolverem times de alta performance.",
  },
  {
    icon: BrainCircuit,
    title: "Saúde Mental no Trabalho",
    description:
      "Programas de prevenção ao burnout e promoção de bem-estar corporativo.",
  },
  {
    icon: UserSearch,
    title: "Recrutamento e Seleção",
    description:
      "Avaliação psicológica de candidatos com foco comportamental e de fit cultural.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos In Company",
    description:
      "Workshops sobre comunicação, feedback e gestão de conflitos para equipes.",
  },
  {
    icon: Stethoscope,
    title: "Psicoterapia Organizacional",
    description:
      "Atendimento individual a colaboradores como parte do cuidado corporativo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Áreas de atuação
          </h2>
          <p className="mt-4 text-text-secondary">
            Soluções sob medida para cada etapa da jornada de desenvolvimento
            humano e organizacional da sua empresa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-accent">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-text">
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

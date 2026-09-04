// Dados institucionais centralizados — atualize aqui quando tiver as
// informações reais (telefone, e-mail, endereço e redes sociais).
export const siteConfig = {
  name: "IR Desenvolvimento Humano e Organizacional",
  shortName: "IR",
  responsavel: {
    nome: "Rafael Ita",
    crp: "CRP 08/05071",
    especialidade: "Psicologia Clínica & Inteligência Organizacional",
    formacao: [
      "Graduação em Psicologia pela PUCPR — campus Toledo",
      "Pós-graduando em Psicologia Organizacional, Neurociência e Gestão de Riscos Psicossociais",
      "Atuação Clínica e Organizacional",
    ],
  },
  contact: {
    whatsapp: "554520318026",
    whatsappDisplay: "(45) 2031-8026",
    email: "contato@irdesenvolvimento.com.br",
    address: "Toledo, PR — atendimento presencial e online",
  },
  social: {
    instagram: "https://www.instagram.com/irpsicologiadho",
    linkedin: "https://www.linkedin.com/in/itarafaeu/",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "O Psicólogo", href: "#rafael" },
    { label: "Nosso Espaço", href: "#espaco" },
    { label: "Contato", href: "#contato" },
  ],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quais tipos de empresa vocês atendem?",
    answer:
      "Atendemos empresas de diferentes portes e segmentos, de startups a organizações consolidadas, adaptando a abordagem à realidade de cada uma.",
  },
  {
    question: "Como funciona a primeira reunião/diagnóstico?",
    answer:
      "A primeira conversa é gratuita e serve para entender o cenário da sua empresa, ouvir as principais dores e avaliar como podemos ajudar.",
  },
  {
    question: "Os atendimentos são presenciais ou online?",
    answer:
      "Trabalhamos com ambos os formatos, de acordo com a necessidade e a localização da empresa.",
  },
  {
    question: "Qual o prazo médio de um projeto de consultoria?",
    answer:
      "Varia conforme o escopo, mas a maioria dos projetos tem duração entre 2 e 6 meses, com etapas e entregas bem definidas.",
  },
  {
    question: "Vocês emitem contrato e nota fiscal?",
    answer:
      "Sim. Todos os projetos são formalizados por contrato e emitimos nota fiscal para pessoa jurídica.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-text">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-text-secondary">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

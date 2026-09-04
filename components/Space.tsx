import Image from "next/image";

const photos = [
  { src: "/espaco-1.jpg", alt: "Sala de atendimento" },
  { src: "/espaco-2.jpg", alt: "Sala de atendimento — vista da escrivaninha" },
  { src: "/espaco-3.jpg", alt: "Sala de atendimento — poltronas e vista da cidade" },
  { src: "/espaco-4.jpg", alt: "Sala de atendimento — vista panorâmica" },
];

export default function Space() {
  return (
    <section id="espaco" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Nosso espaço
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Conheça o espaço de atendimento
          </h2>
          <p className="mt-4 text-text-secondary">
            Um ambiente acolhedor, pensado para o conforto e a privacidade de
            cada atendimento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

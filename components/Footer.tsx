import Image from "next/image";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-ir.jpg"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
              <span className="font-display text-base font-semibold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Consultoria em psicologia organizacional e do trabalho —
              desenvolvimento de lideranças, saúde mental corporativa e
              cultura de alta performance.
            </p>
            <p className="mt-3 text-xs text-white/60">
              {siteConfig.responsavel.nome} · {siteConfig.responsavel.crp}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent-light">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent-light">
              Redes sociais
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de saber mais sobre a IR.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <WhatsappIcon size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.moveonsistemas.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Desenvolvido por Moveonsistemas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Contato
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Vamos conversar
          </h2>
          <p className="mt-4 text-text-secondary">
            Fale diretamente pelos canais abaixo.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <a
            href={whatsappLink("Olá! Gostaria de saber mais sobre a IR.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-background-alt/60 p-5 transition-colors hover:bg-background-alt sm:col-span-2"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <MessageCircle size={20} />
            </span>
            <div>
              <p className="font-display font-semibold text-text">
                WhatsApp
              </p>
              <p className="text-sm text-text-secondary">
                {siteConfig.contact.whatsappDisplay}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-background-alt/60 p-5 transition-colors hover:bg-background-alt"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <Mail size={20} />
            </span>
            <div>
              <p className="font-display font-semibold text-text">
                E-mail
              </p>
              <p className="text-sm text-text-secondary">
                {siteConfig.contact.email}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background-alt/60 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <MapPin size={20} />
            </span>
            <div>
              <p className="font-display font-semibold text-text">
                Localização
              </p>
              <p className="text-sm text-text-secondary">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2 sm:col-span-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-background-alt"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-background-alt"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

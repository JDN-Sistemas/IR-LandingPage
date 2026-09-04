"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo-ir.jpg"
            alt={siteConfig.name}
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg leading-tight font-semibold text-primary">
            
            <span className="block text-[0.65rem] font-sans font-medium tracking-wide text-text-secondary uppercase">
              Desenvolvimento Humano e Organizacional
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap text-text/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-primary-dark lg:inline-block"
        >
          Agende uma conversa
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-text/80 hover:bg-background-alt hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Agende uma conversa
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

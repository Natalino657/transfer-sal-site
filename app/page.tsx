import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import HomeHero from "./components/HomeHero";
import { MailIcon, MapPinIcon, MenuIcon, PhoneIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/** Ajusta estes dados com os contactos reais do teu tio */
const PHONE_DISPLAY = "+238 9837959";
const PHONE_HREF = "tel:+2389837959";
const WHATSAPP_DISPLAY = "+238 9837959";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_DISPLAY.replace(/\D/g, "")}`;
const EMAIL = "reservas@transfer-sal.cv";

const GALLERY = [
  {
    title: "Estrada à beira-mar",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Viagem ao pôr do sol",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conforto a bordo",
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main className="flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto flex h-14 items-center justify-between gap-3 px-4">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Transfer Ilha do Sal
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <a href="#servicos" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Serviços
            </a>
            <a href="#momentos" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Momentos
            </a>
            <a href="#contacto" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Contacto
            </a>
            <Separator orientation="vertical" className="mx-1 h-6" />
            <a href={PHONE_HREF} className={buttonVariants({ variant: "default", size: "sm" })}>
              <PhoneIcon className="size-4" />
              Ligar
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              WhatsApp
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a href={PHONE_HREF} className={buttonVariants({ size: "sm" })}>
              <PhoneIcon className="size-4" />
            </a>
            <Sheet>
              <SheetTrigger
                render={<Button variant="ghost" size="icon-sm" aria-label="Abrir menu" />}
              >
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetHeader className="border-b px-4 py-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 p-4">
                  <a href="#servicos" className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}>
                    Serviços
                  </a>
                  <a href="#momentos" className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}>
                    Momentos
                  </a>
                  <a href="#contacto" className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}>
                    Contacto
                  </a>
                  <Separator className="my-2" />
                  <a href={PHONE_HREF} className={cn(buttonVariants({ variant: "default" }), "justify-start gap-2")}>
                    <PhoneIcon className="size-4" />
                    Ligar {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: "outline" }), "justify-start")}
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <HomeHero
        phoneDisplay={PHONE_DISPLAY}
        phoneHref={PHONE_HREF}
        whatsappHref={WHATSAPP_HREF}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Atendimento directo
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Reservas tratadas por telefone ou WhatsApp
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Explicamos disponibilidade, preço e horários em conversa — rápido e
              personalizado, só por chamada ou WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={PHONE_HREF} className={buttonVariants({ size: "lg" })}>
                <PhoneIcon className="size-4" />
                Ligar
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="servicos" className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-14 md:py-16">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">O que fazemos</h2>
              <p className="mt-2 text-muted-foreground">
                Serviços pensados para turistas e residentes — combina connosco por
                chamada.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Aeroporto ↔ Hotel",
                body: "Chegadas e partidas com hora combinada e apoio com bagagem.",
              },
              {
                title: "Deslocações na ilha",
                body: "Viagens pontuais ou ao longo do dia, conforme a tua necessidade.",
              },
              {
                title: "Tours e passeios",
                body: "Sugestões de roteiro ou o teu plano — falamos e ajustamos.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delayMs={idx * 80}>
                <Card className="h-full border-border/80 p-6 transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                  <p className="mt-4 text-xs font-medium text-primary">
                    Marcação: {PHONE_DISPLAY} ou WhatsApp
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="momentos" className="container mx-auto px-4 py-14 md:py-16">
        <ScrollReveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Momentos</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Imagens de exemplo 
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, idx) => (
            <ScrollReveal key={g.title} delayMs={idx * 70}>
              <Card className="group overflow-hidden border-0 p-0 shadow-md ring-1 ring-black/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                  <p className="absolute bottom-3 left-3 text-sm font-medium text-white">
                    {g.title}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Fala connosco</h2>
              <p className="mt-3 text-muted-foreground md:text-lg">
                O jeito mais simples: uma chamada ou uma mensagem. Respondemos o mais
                depressa possível.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <ScrollReveal delayMs={0}>
              <Card className="flex flex-col gap-4 p-6 text-left shadow-sm transition hover:shadow-md">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <PhoneIcon className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Telefone
                  </div>
                  <a href={PHONE_HREF} className="mt-1 block text-xl font-semibold hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <a href={PHONE_HREF} className={buttonVariants({ className: "w-full sm:w-auto" })}>
                  Ligar agora
                </a>
              </Card>
            </ScrollReveal>
            <ScrollReveal delayMs={90}>
              <Card className="flex flex-col gap-4 p-6 text-left shadow-sm transition hover:shadow-md">
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <span className="text-lg font-bold" aria-hidden>
                    W
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    WhatsApp
                  </div>
                  <p className="mt-1 text-xl font-semibold">{WHATSAPP_DISPLAY}</p>
                </div>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}
                >
                  Abrir conversa
                </a>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delayMs={160}>
            <Card className="mx-auto mt-6 max-w-3xl p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 size-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground hover:underline">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:text-right">
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">Local</div>
                    <p className="text-sm text-muted-foreground">Ilha do Sal, Cabo Verde</p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Transfer Ilha do Sal</span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a href={PHONE_HREF} className="hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <div className="container mx-auto grid grid-cols-2 gap-2 px-3 py-2.5">
          <a href={PHONE_HREF} className={cn(buttonVariants(), "w-full gap-1.5")}>
            <PhoneIcon className="size-4" />
            Ligar
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

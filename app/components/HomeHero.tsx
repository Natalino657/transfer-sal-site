"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { MessageCircleIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Trocar por fotos tuas em `public/` (ex.: /hero-1.jpg) quando tiveres — mantém boa luz e horizonte. */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1519046904884-531933e7df08?auto=format&fit=crop&w=1920&q=80",
];

const SLIDE_MS = 7000;

type HomeHeroProps = {
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
};

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export default function HomeHero({
  phoneDisplay,
  phoneHref,
  whatsappHref,
}: HomeHeroProps) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion || HERO_IMAGES.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden rounded-b-3xl md:rounded-b-[2rem] ring-1 ring-black/10 shadow-2xl">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1.4s] ease-out",
            i === active ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none",
          )}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/45 to-black/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(255,200,120,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto flex min-h-[min(92vh,820px)] flex-col justify-end px-4 pb-16 pt-28 md:pb-20 md:pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200/90">
          Ilha do Sal • Cabo Verde
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
          Transfer confortável.{" "}
          <span className="text-amber-100">Fala connosco</span> e tratamos da tua
          viagem.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
          Aeroporto, hotel e passeios — marca por telefone ou WhatsApp e combinamos
          tudo contigo, sem complicações.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={phoneHref} className={cn(buttonVariants({ size: "lg" }), "gap-2 text-base shadow-lg")}>
            <PhoneIcon className="size-5" aria-hidden />
            Ligar agora
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "gap-2 border border-white/25 bg-white/15 text-white backdrop-blur hover:bg-white/25",
            )}
          >
            <MessageCircleIcon className="size-5" aria-hidden />
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-white/70">
          <span className="font-medium text-white/90">{phoneDisplay}</span>
          {" — "}
          resposta humana, horários à tua medida.
        </p>

        {!reducedMotion && HERO_IMAGES.length > 1 ? (
          <div className="mt-10 flex gap-2" role="tablist" aria-label="Fotos de fundo">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-10 bg-amber-200" : "w-3 bg-white/35 hover:bg-white/55",
                )}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

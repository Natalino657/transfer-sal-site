"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  label: string;
  ariaLabel: string;
};

const FLAGS: Record<Locale, { src: string; alt: string }> = {
  pt: { src: "/pt.svg", alt: "Português" },
  en: { src: "/gb.svg", alt: "English" },
};

export default function LocaleSwitch({ locale, ariaLabel }: Props) {
  const router = useRouter();
  const [pending, start] = useTransition();

  const next: Locale = locale === "pt" ? "en" : "pt";
  const flag = FLAGS[next];

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={ariaLabel}
      disabled={pending}
      className="overflow-hidden rounded-full p-0 ring-1 ring-border hover:ring-foreground/40"
      onClick={() => {
        start(async () => {
          await fetch("/api/locale", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ locale: next }),
          });
          router.refresh();
        });
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flag.src}
        alt={flag.alt}
        className="h-5 w-5 rounded-full object-cover"
      />
    </Button>
  );
}


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

export default function LocaleSwitch({ locale, label, ariaLabel }: Props) {
  const router = useRouter();
  const [pending, start] = useTransition();

  const next = locale === "pt" ? "en" : "pt";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={ariaLabel}
      disabled={pending}
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
      {label}
    </Button>
  );
}


import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import HomeHero from "../components/HomeHero";
import { FeedbackStrip } from "../components/FeedbackStrip";
import LocaleSwitch from "../components/LocaleSwitch";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
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
import { listFeedbackImageUrls } from "@/lib/feedback-images";
import { getLocalBusinessJsonLd } from "@/lib/json-ld";
import {
  SITE,
  getMetadataBase,
  getPhoneHref,
  getWhatsAppHref,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { getLocale, t } from "@/lib/i18n";

const PHONE_HREF = getPhoneHref();
const WHATSAPP_HREF = getWhatsAppHref();
const PHONE_DISPLAY = SITE.phoneDisplay;
const WHATSAPP_DISPLAY = SITE.phoneDisplay;
const EMAIL = SITE.email;

const GALLERY = [
  {
    title: "Praia em Santa Maria",
    src: "https://images.unsplash.com/photo-1592761684665-92bc9aacf340?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Buracona, Blue Eye",
    src: "https://images.unsplash.com/photo-1714829732963-0d6801f93781?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Salinas de Pedra de Lume",
    src: "https://images.unsplash.com/photo-1714829732325-e0a0992cc936?auto=format&fit=crop&w=900&q=80",
  },
];

export default async function Home() {
  const locale = await getLocale();
  const copy = t(locale);
  const feedbackImages = await listFeedbackImageUrls();

  const gallery = GALLERY.map((g, idx) => ({
    ...g,
    title: copy.moments.gallery[idx] ?? g.title,
  }));

  const jsonLd = getLocalBusinessJsonLd(getMetadataBase());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
          <div className="container mx-auto flex h-14 items-center justify-between gap-3 px-4">
            <Link href="/" className="flex items-center group shrink-0">
              <Image
                src="/logo.png"
                alt="Transfer Ilha do Sal"
                width={170}
                height={170}
                priority
                className="object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#servicos"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {copy.nav.services}
              </a>
              <a
                href="#momentos"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {copy.nav.moments}
              </a>
              <a
                href="#feedback"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {copy.nav.feedback}
              </a>
              <a
                href="#contacto"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {copy.nav.contact}
              </a>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <a
                href={PHONE_HREF}
                className={buttonVariants({ variant: "default", size: "sm" })}
              >
                <PhoneIcon className="size-4" />
                {copy.nav.call}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                {copy.nav.whatsapp}
              </a>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <LocaleSwitch
                locale={locale}
                label={copy.langLabel}
                ariaLabel={copy.langSwitchTo}
              />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <a href={PHONE_HREF} className={buttonVariants({ size: "sm" })}>
                <PhoneIcon className="size-4" />
              </a>
              <LocaleSwitch
                locale={locale}
                label={copy.langLabel}
                ariaLabel={copy.langSwitchTo}
              />
              <Sheet>
                <SheetTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={copy.nav.openMenu}
                    />
                  }
                >
                  <MenuIcon />
                </SheetTrigger>
                <SheetContent side="right" className="p-0">
                  <SheetHeader className="border-b px-4 py-4">
                    <SheetTitle>{copy.nav.menu}</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-1 p-4">
                    <a
                      href="#servicos"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "justify-start",
                      )}
                    >
                      {copy.nav.services}
                    </a>
                    <a
                      href="#momentos"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "justify-start",
                      )}
                    >
                      {copy.nav.moments}
                    </a>
                    <a
                      href="#feedback"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "justify-start",
                      )}
                    >
                      {copy.nav.feedback}
                    </a>
                    <a
                      href="#contacto"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "justify-start",
                      )}
                    >
                      {copy.nav.contact}
                    </a>
                    <Separator className="my-2" />
                    <a
                      href={PHONE_HREF}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "justify-start gap-2",
                      )}
                    >
                      <PhoneIcon className="size-4" />
                      {copy.nav.call} {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "justify-start gap-2",
                      )}
                    >
                      <WhatsAppIcon className="size-4 shrink-0" />
                      {copy.nav.openWhatsapp}
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
          copy={{
            eyebrow: copy.hero.eyebrow,
            title1: copy.hero.title1,
            titleEm: copy.hero.titleEm,
            title2: copy.hero.title2,
            subtitle: copy.hero.subtitle,
            callNow: copy.hero.callNow,
            whatsapp: copy.nav.whatsapp,
            humanResponseSuffix: copy.hero.humanResponsePrefix,
            backgroundPhotosLabel: copy.hero.backgroundPhotos,
          }}
        />

        <section className="container mx-auto px-4 py-12 md:py-16">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary" className="mb-4">
                {copy.intro.badge}
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {copy.intro.title}
              </h2>
              <p className="mt-3 text-muted-foreground md:text-lg">
                {copy.intro.body}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={PHONE_HREF} className={buttonVariants({ size: "lg" })}>
                  <PhoneIcon className="size-4" />
                  {copy.nav.call}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {copy.nav.whatsapp}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="servicos" className="border-y bg-muted/30">
          <div className="container mx-auto px-4 py-14 md:py-16">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">{copy.services.title}</h2>
                <p className="mt-2 text-muted-foreground">
                  {copy.services.body}
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {copy.services.items.map((item, idx) => (
                <ScrollReveal key={item.title} delayMs={idx * 80}>
                  <Card className="h-full border-border/80 p-6 transition-shadow hover:shadow-md">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.body}
                    </p>
                    <p className="mt-4 text-xs font-medium text-primary">
                      {copy.services.booking} {PHONE_DISPLAY}{" "}
                      {copy.services.bookingSuffix}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="momentos"
          className="container mx-auto px-4 py-14 md:py-16"
        >
          <ScrollReveal>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">{copy.moments.title}</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  {copy.moments.body}
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, idx) => (
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

        <section id="feedback" className="border-y bg-muted/25 py-14 md:py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">{copy.feedback.title}</h2>
                <p className="mt-2 text-muted-foreground">
                  {copy.feedback.body}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {copy.feedback.caption}
                </p>
              </div>
            </ScrollReveal>
            {feedbackImages.length > 0 ? (
              <div className="mt-10">
                <FeedbackStrip
                  images={feedbackImages}
                  ariaLabel={copy.feedback.carouselLabel}
                  photoLabel={copy.feedback.photoAltPrefix}
                />
              </div>
            ) : null}
          </div>
        </section>

        <section
          id="contacto"
          className="border-t bg-gradient-to-b from-muted/40 to-background"
        >
          <div className="container mx-auto px-4 py-14 md:py-20">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {copy.contact.title}
                </h2>
                <p className="mt-3 text-muted-foreground md:text-lg">
                  {copy.contact.body}
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
                      {copy.contact.phone}
                    </div>
                    <a
                      href={PHONE_HREF}
                      className="mt-1 block text-xl font-semibold hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className={buttonVariants({
                      className: "w-full sm:w-auto",
                    })}
                  >
                    {copy.contact.callNow}
                  </a>
                </Card>
              </ScrollReveal>
              <ScrollReveal delayMs={90}>
                <Card className="flex flex-col gap-4 p-6 text-left shadow-sm transition hover:shadow-md">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <WhatsAppIcon className="size-5 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {copy.contact.whatsapp}
                    </div>
                    <p className="mt-1 text-xl font-semibold">
                      {WHATSAPP_DISPLAY}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "secondary",
                      className: "w-full gap-2 sm:w-auto",
                    })}
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    {copy.contact.openChat}
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
                      <div className="text-sm font-semibold">
                        {copy.contact.email}
                      </div>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-muted-foreground hover:text-foreground hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:text-right">
                    <MapPinIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-semibold">
                        {copy.contact.place}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {copy.contact.placeValue}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <footer className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
            <span>
              © {new Date().getFullYear()} {copy.footer.copyright}
            </span>
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
            <a
              href={PHONE_HREF}
              className={cn(buttonVariants(), "w-full gap-1.5")}
            >
              <PhoneIcon className="size-4" />
              {copy.nav.call}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full gap-1.5",
              )}
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              {copy.nav.whatsapp}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

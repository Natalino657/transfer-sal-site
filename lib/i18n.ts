import { cookies } from "next/headers";

export type Locale = "pt" | "en";

const LOCALE_COOKIE = "site_locale";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const raw = jar.get(LOCALE_COOKIE)?.value?.toLowerCase();
  return raw === "en" ? "en" : "pt";
}

export function isLocale(v: unknown): v is Locale {
  return v === "pt" || v === "en";
}

export function t(locale: Locale) {
  return locale === "en" ? en : pt;
}

const pt = {
  langLabel: "PT",
  langSwitchTo: "Mudar para inglês",

  nav: {
    services: "Serviços",
    moments: "Momentos",
    contact: "Contacto",
    call: "Ligar",
    whatsapp: "WhatsApp",
    openWhatsapp: "Abrir WhatsApp",
    menu: "Menu",
    openMenu: "Abrir menu",
  },

  hero: {
    eyebrow: "Ilha do Sal • Cabo Verde",
    title1: "Transfer confortável.",
    titleEm: "Fala connosco",
    title2: "e tratamos da tua viagem.",
    subtitle:
      "Aeroporto, hotel e passeios — marca por telefone ou WhatsApp e combinamos tudo contigo, sem complicações.",
    callNow: "Ligar agora",
    humanResponsePrefix: "resposta humana, horários à tua medida.",
    backgroundPhotos: "Fotos de fundo",
  },

  intro: {
    badge: "Atendimento directo",
    title: "Reservas tratadas por telefone ou WhatsApp",
    body:
      "Explicamos disponibilidade, preço e horários em conversa — rápido e personalizado, só por chamada ou WhatsApp.",
  },

  services: {
    title: "O que fazemos",
    body: "Serviços pensados para turistas e residentes — combina connosco por chamada.",
    items: [
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
    ],
    booking: "Marcação:",
    bookingSuffix: "ou WhatsApp",
  },

  moments: {
    title: "Momentos",
    body: "Imagens de exemplo",
    gallery: [
      "Estrada à beira-mar",
      "Viagem ao pôr do sol",
      "Conforto a bordo",
    ],
  },

  contact: {
    title: "Fala connosco",
    body:
      "O jeito mais simples: uma chamada ou uma mensagem. Respondemos o mais depressa possível.",
    phone: "Telefone",
    callNow: "Ligar agora",
    whatsapp: "WhatsApp",
    openChat: "Abrir conversa",
    email: "Email",
    place: "Local",
    placeValue: "Ilha do Sal, Cabo Verde",
  },

  footer: {
    copyright: "Transfer Ilha do Sal",
  },
} as const;

const en = {
  langLabel: "EN",
  langSwitchTo: "Switch to Portuguese",

  nav: {
    services: "Services",
    moments: "Moments",
    contact: "Contact",
    call: "Call",
    whatsapp: "WhatsApp",
    openWhatsapp: "Open WhatsApp",
    menu: "Menu",
    openMenu: "Open menu",
  },

  hero: {
    eyebrow: "Sal Island • Cape Verde",
    title1: "Comfortable transfers.",
    titleEm: "Talk to us",
    title2: "and we’ll sort your trip.",
    subtitle:
      "Airport, hotel and tours — book by phone or WhatsApp and we’ll arrange everything with you, hassle-free.",
    callNow: "Call now",
    humanResponsePrefix: "human reply, flexible times for you.",
    backgroundPhotos: "Background photos",
  },

  intro: {
    badge: "Direct service",
    title: "Bookings handled by phone or WhatsApp",
    body:
      "We confirm availability, prices and times by chat — fast and personal, via call or WhatsApp.",
  },

  services: {
    title: "What we do",
    body: "Services for tourists and residents — arrange it with us by phone.",
    items: [
      {
        title: "Airport ↔ Hotel",
        body: "Arrivals and departures with agreed time and help with luggage.",
      },
      {
        title: "Island trips",
        body: "One-off rides or full-day availability — as you need.",
      },
      {
        title: "Tours & excursions",
        body: "Suggested routes or your plan — we’ll talk and adjust.",
      },
    ],
    booking: "Booking:",
    bookingSuffix: "or WhatsApp",
  },

  moments: {
    title: "Moments",
    body: "Sample images",
    gallery: ["Seaside road", "Sunset ride", "Comfort on board"],
  },

  contact: {
    title: "Contact us",
    body:
      "The easiest way: a call or a message. We reply as fast as possible.",
    phone: "Phone",
    callNow: "Call now",
    whatsapp: "WhatsApp",
    openChat: "Open chat",
    email: "Email",
    place: "Location",
    placeValue: "Sal Island, Cape Verde",
  },

  footer: {
    copyright: "Transfer Sal Island",
  },
} as const;


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
    feedback: "Feedback",
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
    body: "Explicamos disponibilidade, preço e horários em conversa — rápido e personalizado, só por chamada ou WhatsApp.",
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
      {
        title: "Mobilidade reduzida",
        body: "Viaturas preparadas para quem precisa de apoio extra ou de transporte adaptado — explica as tuas necessidades na marcação e tratamos do resto.",
      },
    ],
    booking: "Marcação:",
    bookingSuffix: "ou WhatsApp",
  },

  moments: {
    title: "Momentos",
    body: "Da praia de Santa Maria às salinas de Pedra de Lume — o Sal de perto.",
    gallery: [
      "Praia em Santa Maria",
      "Buracona, Blue Eye",
      "Salinas de Pedra de Lume",
    ],
  },

  feedback: {
    title: "Feedback",
    body: "Há mais de 12 anos a transportar quem visita a ilha do Sal — conhecemos bem as estradas, os pontos de interesse e o que faz a diferença no dia a dia. Trabalhamos com segurança, pontualidade e um atendimento próximo; as fotos que vês são momentos reais com visitantes que autorizaram partilhar a experiência connosco online.",
    carouselLabel: "Fotografias de clientes no Sal",
    photoAltPrefix: "Momento com clientes",
    caption:
      "Imagens reais, publicadas com autorização expressa dos visitantes.",
  },

  contact: {
    title: "Fala connosco",
    body: "O jeito mais simples: uma chamada ou uma mensagem. Respondemos o mais depressa possível.",
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
    feedback: "Feedback",
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
    body: "We confirm availability, prices and times by chat — fast and personal, via call or WhatsApp.",
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
      {
        title: "Reduced mobility",
        body: "Vehicles set up for guests who need extra support or adapted transport — tell us what you need when you book and we’ll arrange it.",
      },
    ],
    booking: "Booking:",
    bookingSuffix: "or WhatsApp",
  },

  moments: {
    title: "Moments",
    body: "From Santa Maria beach to the Pedra de Lume salt pans — Sal up close.",
    gallery: ["Santa Maria beach", "Buracona, Blue Eye", "Pedra de Lume salt pans"],
  },

  feedback: {
    title: "Feedback",
    body: "For well over a decade we’ve been moving visitors around Sal — we know the roads, the must-see spots and the little details that make a trip smoother. Safety, punctuality and a genuinely warm welcome come first; the photos are real moments with guests who gave their consent to appear here.",
    carouselLabel: "Guest photos from Sal",
    photoAltPrefix: "Moment with guests",
    caption: "Real photos, published with each guest’s clear permission.",
  },

  contact: {
    title: "Contact us",
    body: "The easiest way: a call or a message. We reply as fast as possible.",
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

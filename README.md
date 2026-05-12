# Transfer Ilha do Sal — Site

Site de apresentação e contacto para **transfer na ilha do Sal, Cabo Verde** (aeroporto, hotel, passeios e mobilidade reduzida). Construído com [Next.js](https://nextjs.org) (App Router).

| | |
| --- | --- |
| **Site em produção** | **[saltransfer.com](https://saltransfer.com)** |

---

## Desenvolvimento local

Requisitos: [Node.js](https://nodejs.org/) (versão LTS recomendada).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). As alterações em `app/page.tsx` e noutros ficheiros recarregam automaticamente.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servidor após build
npm run lint    # ESLint
```

---

## Conteúdo e pastas úteis

| Pasta / ficheiro | Descrição |
| --- | --- |
| `app/page.tsx` | Página principal (hero, serviços, momentos, feedback, contacto) |
| `lib/i18n.ts` | Textos em português e inglês |
| `lib/site-config.ts` | Nome do site, telefone, email, URL base para SEO |
| `public/feedback/` | Fotos do carrossel de feedback (adicionar/remover ficheiros; listagem automática) |
| `public/logo.png` | Logótipo no cabeçalho |

---

## Variáveis de ambiente

Copia `.env.local.example` para `.env.local` se precisares de overrides locais.

Em **produção**, define `NEXT_PUBLIC_SITE_URL` com o URL público do site (ex.: `https://saltransfer.com`) para canonical, Open Graph, `robots.txt` e `sitemap.xml` ficarem corretos.

---

## Deploy

O projecto está preparado para [Vercel](https://vercel.com) ou qualquer hosting que suporte Next.js. Consulta a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Stack técnica

- **Next.js** (App Router) + **React**
- **Tailwind CSS** + componentes UI (shadcn-style)
- Tipografia **Geist** via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

Documentação geral: [Next.js Docs](https://nextjs.org/docs).

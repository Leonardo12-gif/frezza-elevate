import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase, FileText, Instagram, Facebook,
  Film, Clapperboard, Target, Code2, ArrowUpRight, Handshake, Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import TikTokIcon from "@/components/TikTokIcon";
import avatar from "@/assets/avatar.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonardo Frezza — Links Oficiais" },
      { name: "description", content: "Frezza Marketing · Videomaker, Storymaker, Tráfego Pago e Desenvolvimento. Para parcerias e publis, fale com a assessoria oficial." },
      { property: "og:title", content: "Leonardo Frezza — Links Oficiais" },
      { property: "og:description", content: "Atuação profissional pela Frezza Marketing · Parcerias e publis pela assessoria oficial." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5515991273423";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

// PROFISSIONAL — Frezza Marketing (empresa)
const profissional = [
  {
    label: "Frezza Marketing",
    title: "Contratar serviço",
    subtitle: "Atendimento comercial da empresa",
    url: wa("Olá! Gostaria de contratar um serviço com a Frezza Marketing."),
    icon: WhatsAppIcon,
  },
  {
    label: "Portfólio",
    title: "Solicitar portfólio",
    subtitle: "Receba pelo WhatsApp",
    url: wa("Olá, gostaria de solicitar o portfolio de Leonardo Frezza."),
    icon: Briefcase,
  },
];

const especialidades = [
  { title: "Videomaker", desc: "Direção e captação de vídeo para marcas.", icon: Film },
  { title: "Storymaker", desc: "Narrativas curtas e conteúdo para redes.", icon: Clapperboard },
  { title: "Tráfego Pago", desc: "Gestão de campanhas em Meta Ads.", icon: Target },
  { title: "Desenvolvimento", desc: "Sistemas e sites sob medida.", icon: Code2 },
];

// PARCERIAS & PUBLIS — Assessoria oficial
const parcerias = [
  {
    label: "Assessoria Oficial",
    title: "Falar com a assessoria",
    subtitle: "Parcerias, permutas e publis",
    url: wa("Olá! Sou da equipe de [marca] e gostaria de conversar sobre uma parceria com o Leonardo."),
    icon: Handshake,
  },
  {
    label: "Mídia Kit — 2026",
    title: "Solicitar mídia kit",
    subtitle: "Métricas, audiência e formatos",
    url: wa("Olá! Gostaria de solicitar o Mídia Kit 2026 do Leonardo Frezza."),
    icon: FileText,
  },
];

const socials = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/l.frezza/" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/174B7QMWgz/" },
  { name: "WhatsApp", icon: WhatsAppIcon, url: WHATSAPP },
];

function Index() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-1 relative z-10">
        {/* HERO */}
        <section className="pt-16 pb-10 text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <a
              href="https://www.instagram.com/l.frezza/"
              target="_blank" rel="noopener noreferrer"
              className="mb-7 inline-block relative animate-fade-up"
            >
              <div className="relative inline-block">
                <div className="avatar-ring" />
                <div className="rounded-full p-[3px] bg-background relative z-10">
                  <img src={avatar} alt="Leonardo Frezza" className="block w-24 h-24 rounded-full object-cover" />
                </div>
              </div>
            </a>

            <h1
              className="font-display text-4xl md:text-5xl font-medium mb-3 tracking-tight title-shimmer animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Leonardo Frezza
            </h1>

            <p
              className="text-[11px] md:text-xs text-muted-foreground tracking-[0.32em] uppercase font-light animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Criador de Conteúdo · Gym · Lifestyle · Humor
            </p>

            <a
              href="https://www.tiktok.com/@l.frezza"
              target="_blank" rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/5 hover:bg-primary/10 hover:border-primary/45 transition-all animate-fade-up"
              style={{ animationDelay: "0.28s" }}
            >
              <TikTokIcon className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase font-medium text-foreground/90">
                Siga no TikTok
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-primary/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </a>

            <div className="mx-auto mt-7 mb-2 w-20 hairline animate-fade-up" style={{ animationDelay: "0.34s" }} />

            <p
              className="mt-5 text-xs text-muted-foreground font-light italic animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Obrigado por clicar e demonstrar interesse.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <span className="text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </section>

        {/* ====================== PROFISSIONAL ====================== */}
        <section className="pt-10 pb-6">
          <div className="container mx-auto px-6 max-w-xl">
            <SectionHeader
              eyebrow="01 — Profissional"
              title="Frezza Marketing"
              caption="Atuação direta da empresa. Serviços contratados via comercial."
              delay={0.6}
            />

            <div className="space-y-3 mt-8">
              {profissional.map((l, i) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.title}
                    href={l.url}
                    target="_blank" rel="noopener noreferrer"
                    className="premium-card group relative flex items-center gap-4 px-5 py-4 animate-fade-up"
                    style={{ animationDelay: `${0.7 + i * 0.08}s` }}
                  >
                    <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9.5px] text-primary/70 tracking-[0.3em] uppercase font-medium">{l.label}</p>
                      <h3 className="text-[15px] font-medium text-foreground mt-0.5">{l.title}</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5 font-light">{l.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            {/* Especialidades */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-5 animate-fade-up" style={{ animationDelay: "0.9s" }}>
                <Sparkles className="w-3.5 h-3.5 text-primary/70" strokeWidth={1.5} />
                <span className="text-[10px] text-muted-foreground/70 tracking-[0.4em] uppercase font-light">
                  Especialidades
                </span>
                <div className="flex-1 hairline" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {especialidades.map((e, i) => {
                  const Icon = e.icon;
                  return (
                    <div
                      key={e.title}
                      className="premium-card relative p-5 flex flex-col gap-3 animate-fade-up"
                      style={{ animationDelay: `${0.95 + i * 0.06}s` }}
                    >
                      <span className="serial absolute top-3 right-4 text-xs tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="icon-tile w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-[17px] h-[17px]" strokeWidth={1.5} />
                      </div>
                      <div className="relative">
                        <h3 className="font-display text-lg leading-tight text-foreground">{e.title}</h3>
                        <p className="text-[11.5px] text-muted-foreground font-light leading-relaxed mt-1">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Divisor entre seções */}
        <div className="container mx-auto px-6 max-w-xl my-6">
          <div className="section-divider animate-fade-up" style={{ animationDelay: "1.15s" }}>
            <span className="text-[10px] text-muted-foreground/60 tracking-[0.5em] uppercase font-light">
              &
            </span>
          </div>
        </div>

        {/* ====================== PARCERIAS & PUBLIS ====================== */}
        <section className="pt-4 pb-8">
          <div className="container mx-auto px-6 max-w-xl">
            <SectionHeader
              eyebrow="02 — Parcerias & Publis"
              title="Assessoria oficial"
              caption="Para campanhas publicitárias, permutas e colaborações com o criador, o atendimento é feito exclusivamente pela assessoria."
              delay={1.2}
            />

            <div className="space-y-3 mt-8">
              {parcerias.map((l, i) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.title}
                    href={l.url}
                    target="_blank" rel="noopener noreferrer"
                    className="premium-card group relative flex items-center gap-4 px-5 py-4 animate-fade-up"
                    style={{ animationDelay: `${1.3 + i * 0.08}s` }}
                  >
                    <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9.5px] text-primary/70 tracking-[0.3em] uppercase font-medium">{l.label}</p>
                      <h3 className="text-[15px] font-medium text-foreground mt-0.5">{l.title}</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5 font-light">{l.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="py-10">
          <div className="container mx-auto px-6 max-w-xl">
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="flex-1 hairline" />
              <span className="text-[10px] text-muted-foreground/60 tracking-[0.4em] uppercase font-light">
                Redes Sociais
              </span>
              <div className="flex-1 hairline" />
            </div>
            <div className="flex justify-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={s.name}
                    className="icon-tile group w-11 h-11 rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <p className="text-[11px] text-muted-foreground/60 tracking-wide font-light">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/frezzamarketing/"
              target="_blank" rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Frezza Marketing
            </a>
            {" · "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow, title, caption, delay,
}: { eyebrow: string; title: string; caption: string; delay: number }) {
  return (
    <div className="text-center animate-fade-up" style={{ animationDelay: `${delay}s` }}>
      <span className="text-[10px] text-primary/80 tracking-[0.45em] uppercase font-medium">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-[34px] mt-3 text-foreground leading-tight">
        {title}
      </h2>
      <div className="mx-auto mt-4 w-16 hairline" />
      <p className="text-[12.5px] text-muted-foreground font-light leading-relaxed mt-5 max-w-sm mx-auto">
        {caption}
      </p>
    </div>
  );
}

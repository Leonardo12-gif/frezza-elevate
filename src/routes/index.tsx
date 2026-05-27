import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase, FileText, Film, Clapperboard, Target, Code2,
  ArrowUpRight, Handshake, Megaphone, Building2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import TikTokIcon from "@/components/TikTokIcon";
import avatar from "@/assets/avatar.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonardo Frezza — Links Oficiais" },
      { name: "description", content: "Parcerias e publis com a assessoria oficial. Serviços profissionais pela Frezza Marketing — vídeo, conteúdo, tráfego pago e desenvolvimento." },
      { property: "og:title", content: "Leonardo Frezza — Links Oficiais" },
      { property: "og:description", content: "Parcerias com a assessoria · Serviços pela Frezza Marketing." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5515991273423";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

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
    label: "Portfólio de Publis",
    title: "Solicitar portfólio",
    subtitle: "Campanhas e colaborações anteriores",
    url: wa("Olá! Gostaria de solicitar o portfólio de publis e parcerias do Leonardo."),
    icon: Briefcase,
  },
  {
    label: "Mídia Kit — 2026",
    title: "Solicitar mídia kit",
    subtitle: "Métricas, audiência e formatos",
    url: wa("Olá! Gostaria de solicitar o Mídia Kit 2026 do Leonardo Frezza."),
    icon: FileText,
  },
];

// PROFISSIONAL — Frezza Marketing
const profissional = [
  {
    label: "Frezza Marketing",
    title: "Contratar serviço",
    subtitle: "Atendimento comercial da empresa",
    url: wa("Olá! Gostaria de contratar um serviço com a Frezza Marketing."),
    icon: WhatsAppIcon,
  },
  {
    label: "Portfólio de Serviços",
    title: "Solicitar portfólio",
    subtitle: "Cases e trabalhos da empresa",
    url: wa("Olá, gostaria de solicitar o portfólio de serviços da Frezza Marketing."),
    icon: Briefcase,
  },
];

const especialidades = [
  { title: "Videomaker", desc: "Direção e captação para marcas.", icon: Film },
  { title: "Storymaker", desc: "Conteúdo curto para redes.", icon: Clapperboard },
  { title: "Tráfego Pago", desc: "Campanhas em Meta Ads.", icon: Target },
  { title: "Desenvolvimento", desc: "Sites e sistemas sob medida.", icon: Code2 },
];

function Index() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-1 relative z-10">
        {/* HERO */}
        <section className="pt-14 pb-6 text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <a
              href="https://www.instagram.com/l.frezza/"
              target="_blank" rel="noopener noreferrer"
              className="mb-6 inline-block relative animate-fade-up"
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

            <div className="mt-5 flex items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span className="text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </section>

        {/* ====================== PARCERIAS & PUBLIS ====================== */}
        <Section
          icon={Megaphone}
          eyebrow="Para marcas & agências"
          title="Parcerias & Publis"
          caption="Campanhas, permutas e colaborações com o criador são tratadas exclusivamente pela assessoria oficial."
          delay={0.5}
        >
          {parcerias.map((l, i) => (
            <LinkCard key={l.title} {...l} delay={0.6 + i * 0.07} />
          ))}
        </Section>

        {/* Divisor */}
        <div className="container mx-auto px-6 max-w-xl my-8">
          <div className="section-divider animate-fade-up" style={{ animationDelay: "0.85s" }}>
            <span>&</span>
          </div>
        </div>

        {/* ====================== PROFISSIONAL ====================== */}
        <Section
          icon={Building2}
          eyebrow="Para empresas que querem contratar"
          title="Serviços profissionais"
          caption="Vídeo, conteúdo, tráfego pago e desenvolvimento entregues diretamente pela Frezza Marketing, empresa do Leonardo."
          delay={0.9}
        >
          {profissional.map((l, i) => (
            <LinkCard key={l.title} {...l} delay={1 + i * 0.07} />
          ))}

          {/* Especialidades — integradas como grade da seção profissional */}
          <div className="pt-4">
            <p className="text-[10px] text-muted-foreground/70 tracking-[0.4em] uppercase font-light text-center mb-4 animate-fade-up" style={{ animationDelay: "1.18s" }}>
              O que a empresa entrega
            </p>
            <div className="grid grid-cols-2 gap-3">
              {especialidades.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.title}
                    className="premium-card relative p-4 flex flex-col gap-2.5 animate-fade-up"
                    style={{ animationDelay: `${1.22 + i * 0.05}s` }}
                  >
                    <span className="serial absolute top-2.5 right-3 text-[11px] tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="icon-tile w-9 h-9 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="relative">
                      <h3 className="font-display text-base leading-tight text-foreground">{e.title}</h3>
                      <p className="text-[11px] text-muted-foreground font-light leading-relaxed mt-0.5">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 py-10 mt-6">
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

/* ---------- Section ---------- */
function Section({
  icon: Icon, eyebrow, title, caption, delay, children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  eyebrow: string; title: string; caption: string; delay: number;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-2 pb-4">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center animate-fade-up" style={{ animationDelay: `${delay}s` }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <Icon className="w-3.5 h-3.5 text-primary/80" strokeWidth={1.5} />
            <span className="text-[10px] text-primary/80 tracking-[0.35em] uppercase font-medium">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-[34px] mt-4 text-foreground leading-tight">
            {title}
          </h2>
          <div className="mx-auto mt-3 w-14 hairline" />
          <p className="text-[12.5px] text-muted-foreground font-light leading-relaxed mt-4 max-w-sm mx-auto">
            {caption}
          </p>
        </div>
        <div className="space-y-3 mt-7">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Link Card ---------- */
function LinkCard({
  label, title, subtitle, url, icon: Icon, delay,
}: {
  label: string; title: string; subtitle: string; url: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  delay: number;
}) {
  return (
    <a
      href={url}
      target="_blank" rel="noopener noreferrer"
      className="premium-card group relative flex items-center gap-4 px-5 py-4 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9.5px] text-primary/70 tracking-[0.3em] uppercase font-medium">{label}</p>
        <h3 className="text-[15px] font-medium text-foreground mt-0.5">{title}</h3>
        <p className="text-[11.5px] text-muted-foreground mt-0.5 font-light">{subtitle}</p>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
    </a>
  );
}

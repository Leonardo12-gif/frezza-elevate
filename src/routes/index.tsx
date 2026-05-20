import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Briefcase, FileText, Instagram, Facebook,
  Video, Smile, Package, Camera, Scissors, Sparkles,
  Smartphone, Handshake, Mic, Lightbulb, ArrowUpRight,
} from "lucide-react";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonardo Frezza — Links Oficiais" },
      { name: "description", content: "Criador de conteúdo, parcerias e assessoria. Acesse os links oficiais de Leonardo Frezza." },
      { property: "og:title", content: "Leonardo Frezza — Links Oficiais" },
      { property: "og:description", content: "Criador de conteúdo, parcerias e assessoria." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5515991273423";

const links = [
  { title: "Fale com minha assessoria", subtitle: "WhatsApp direto", url: WHATSAPP, icon: Phone },
  { title: "Portfólio", subtitle: "Apresentações e cases", url: "https://www.canva.com/design/DAG4jW9haFo/rT5bnXd7Q-AQ7RS9XpG2AQ/view", icon: Briefcase },
  { title: "Mídia Kit — 2026", subtitle: "Solicite pelo WhatsApp", url: `${WHATSAPP}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20o%20M%C3%ADdia%20Kit%202026.`, icon: FileText },
];

const services = [
  { title: "Criação de Reels", desc: "Vídeos autênticos e dinâmicos, com foco em engajamento.", icon: Video },
  { title: "Conteúdo de Humor", desc: "Vídeos leves e espontâneos no estilo cotidiano.", icon: Smile },
  { title: "Review de Produtos", desc: "Apresentação real e credível no dia a dia.", icon: Package },
  { title: "Gravações Profissionais", desc: "Equipamentos de alta qualidade, imagem e som limpos.", icon: Camera },
  { title: "Edição e Pós-Produção", desc: "Ritmo, cortes precisos e acabamento profissional.", icon: Scissors },
  { title: "Garoto-Propaganda", desc: "O rosto da sua marca em campanhas e Reels.", icon: Sparkles },
  { title: "Stories e Bastidores", desc: "Conteúdos rápidos mostrando o dia a dia da marca.", icon: Smartphone },
  { title: "Parcerias e Publis", desc: "Conteúdo sob medida com entrega rápida.", icon: Handshake },
  { title: "Presença em Eventos", desc: "Ativações e gravações exclusivas no local.", icon: Mic },
  { title: "Roteiros e Ideias", desc: "Ideias transformadas em roteiros prontos para gravar.", icon: Lightbulb },
];

const socials = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/l.frezza/" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/174B7QMWgz/" },
  { name: "WhatsApp", icon: Phone, url: WHATSAPP },
];

function Index() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-1 relative z-10">
        {/* HERO */}
        <section className="pt-20 pb-12 text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <a
              href="https://www.instagram.com/l.frezza/"
              target="_blank" rel="noopener noreferrer"
              className="mb-8 inline-block relative animate-fade-up"
            >
              <div className="relative inline-block">
                <div className="avatar-ring" />
                <div className="rounded-full p-[3px] bg-background relative z-10">
                  <img
                    src={avatar}
                    alt="Leonardo Frezza"
                    className="block w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>
            </a>

            <h1
              className="font-display text-5xl md:text-6xl font-medium mb-4 tracking-tight title-shimmer animate-fade-up"
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

            <div
              className="mt-3 mb-2 flex items-center justify-center gap-2 animate-fade-up"
              style={{ animationDelay: "0.28s" }}
            >
              <span className="font-display italic text-base text-gold/90">Founder</span>
              <span className="text-gold/60">→</span>
              <a
                href="https://www.instagram.com/frezzamarketing/"
                target="_blank" rel="noopener noreferrer"
                className="text-sm text-foreground/90 hover:text-gold transition-colors"
              >
                @frezzamarketing
              </a>
            </div>

            <div className="mx-auto mt-6 mb-2 w-24 hairline animate-fade-up" style={{ animationDelay: "0.35s" }} />

            <p
              className="mt-6 text-sm text-muted-foreground font-light italic animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Obrigado por clicar e demonstrar interesse.
            </p>
          </div>
        </section>

        {/* LINKS */}
        <section className="pb-4">
          <div className="container mx-auto px-6 max-w-xl space-y-3">
            {links.map((l, i) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank" rel="noopener noreferrer"
                  className="premium-card group flex items-center gap-4 px-5 py-4 animate-fade-up"
                  style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                >
                  <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-foreground">{l.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-light">{l.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </section>

        {/* SERVICES - inline, clean */}
        <section id="servicos" className="pt-14 pb-10">
          <div className="container mx-auto px-6 max-w-xl">
            <div className="text-center mb-8 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <span className="text-[10px] text-gold/70 tracking-[0.4em] uppercase font-medium">
                — Serviços —
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-3 mb-2 text-foreground">
                O que eu entrego
              </h2>
              <p className="text-xs text-muted-foreground font-light max-w-sm mx-auto">
                Conteúdo autêntico e profissional que conecta marcas ao público.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s, i) => {
                const Icon = s.icon;
                const url = `${WHATSAPP}?text=${encodeURIComponent(`Quero este serviço: ${s.title}`)}`;
                return (
                  <a
                    key={s.title}
                    href={url}
                    target="_blank" rel="noopener noreferrer"
                    className="premium-card group p-4 flex flex-col gap-3 animate-fade-up"
                    style={{ animationDelay: `${0.9 + i * 0.04}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="icon-tile w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg leading-tight text-foreground mb-1">{s.title}</h3>
                      <p className="text-[11.5px] text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                    </div>
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
                Assessoria
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
                    className="icon-tile w-11 h-11 rounded-full flex items-center justify-center group"
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
          <p className="text-[11px] text-muted-foreground/50 tracking-wide font-light">
            Feito por{" "}
            <a
              href="https://www.instagram.com/frezzamarketing/"
              target="_blank" rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
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

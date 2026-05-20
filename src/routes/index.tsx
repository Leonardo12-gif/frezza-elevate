import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Briefcase, FileText, Instagram, Facebook,
  Video, Smile, Package, Camera, Scissors, Sparkles,
  Smartphone, Handshake, Mic, Lightbulb, ArrowUpRight,
} from "lucide-react";
import avatar from "@/assets/avatar.png";
import { ThemeToggle } from "@/components/ThemeToggle";

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
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const links = [
  { title: "Fale com minha assessoria", subtitle: "WhatsApp direto", url: WHATSAPP, icon: Phone },
  { title: "Portfólio", subtitle: "Apresentações e cases", url: "https://www.canva.com/design/DAG4jW9haFo/rT5bnXd7Q-AQ7RS9XpG2AQ/view", icon: Briefcase },
  { title: "Mídia Kit — 2026", subtitle: "Solicite pelo WhatsApp", url: wa("Olá! Gostaria de solicitar o Mídia Kit 2026."), icon: FileText },
];

type Service = { title: string; icon: typeof Video };

const serviceGroups: { label: string; items: Service[] }[] = [
  {
    label: "Conteúdo",
    items: [
      { title: "Criação de Reels", icon: Video },
      { title: "Conteúdo de Humor", icon: Smile },
      { title: "Stories e Bastidores", icon: Smartphone },
      { title: "Roteiros e Ideias", icon: Lightbulb },
    ],
  },
  {
    label: "Produção",
    items: [
      { title: "Gravações Profissionais", icon: Camera },
      { title: "Edição e Pós-Produção", icon: Scissors },
    ],
  },
  {
    label: "Marca",
    items: [
      { title: "Garoto-Propaganda", icon: Sparkles },
      { title: "Review de Produtos", icon: Package },
      { title: "Parcerias e Publis", icon: Handshake },
      { title: "Presença em Eventos", icon: Mic },
    ],
  },
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
                  <img
                    src={avatar}
                    alt="Leonardo Frezza"
                    className="block w-24 h-24 rounded-full object-cover"
                  />
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

            <div className="mx-auto mt-7 mb-2 w-20 hairline animate-fade-up" style={{ animationDelay: "0.3s" }} />

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

        {/* LINKS */}
        <section className="pb-2">
          <div className="container mx-auto px-6 max-w-xl space-y-3">
            {links.map((l, i) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.title}
                  href={l.url}
                  target="_blank" rel="noopener noreferrer"
                  className="premium-card group flex items-center gap-4 px-5 py-4 animate-fade-up"
                  style={{ animationDelay: `${0.55 + i * 0.08}s` }}
                >
                  <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-foreground">{l.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-light">{l.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </section>

        {/* SERVICES — grouped, clean */}
        <section id="servicos" className="pt-14 pb-8">
          <div className="container mx-auto px-6 max-w-xl">
            <div className="text-center mb-8 animate-fade-up" style={{ animationDelay: "0.85s" }}>
              <span className="text-[10px] text-primary/80 tracking-[0.4em] uppercase font-medium">
                Serviços
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-2 text-foreground">
                O que eu entrego
              </h2>
            </div>

            <div className="premium-card p-5 md:p-6 animate-fade-up" style={{ animationDelay: "0.95s" }}>
              <div className="space-y-6">
                {serviceGroups.map((group) => (
                  <div key={group.label}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-medium">
                        {group.label}
                      </span>
                      <div className="flex-1 h-px bg-border/60" />
                    </div>
                    <ul className="divide-y divide-border/40">
                      {group.items.map((s) => {
                        const Icon = s.icon;
                        return (
                          <li key={s.title}>
                            <a
                              href={wa(`Quero este serviço: ${s.title}`)}
                              target="_blank" rel="noopener noreferrer"
                              className="group flex items-center gap-3 py-2.5 -mx-2 px-2 rounded-lg hover:bg-foreground/[0.03] transition-colors"
                            >
                              <Icon className="w-[15px] h-[15px] text-primary/70 group-hover:text-primary transition-colors flex-shrink-0" strokeWidth={1.5} />
                              <span className="flex-1 text-sm text-foreground/90 group-hover:text-foreground font-light">
                                {s.title}
                              </span>
                              <ArrowUpRight
                                className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                strokeWidth={1.5}
                              />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
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
          <p className="text-[11px] text-muted-foreground/50 tracking-wide font-light">
            Feito por{" "}
            <a
              href="https://www.instagram.com/frezzamarketing/"
              target="_blank" rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors"
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

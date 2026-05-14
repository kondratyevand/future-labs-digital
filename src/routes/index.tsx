import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import CursorGlow from "@/components/CursorGlow";

const HeroScene = lazy(() => import("@/components/HeroScene"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Present Future Lab — Compliance · Go-To-Market · Web3" },
      {
        name: "description",
        content:
          "Boutique consulting lab helping companies navigate compliance, go-to-market expansion, and emerging Web3 opportunities.",
      },
      { property: "og:title", content: "Present Future Lab" },
      {
        property: "og:description",
        content: "Strategic consulting for companies building across regulated, fast-moving, and emerging markets.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

const FLOATING_LABELS = [
  { text: "COMPLIANCE", x: "8%", y: "22%" },
  { text: "GO-TO-MARKET", x: "78%", y: "18%" },
  { text: "WEB3 PROJECTS", x: "82%", y: "70%" },
  { text: "STRATEGY", x: "10%", y: "72%" },
  { text: "MARKET ENTRY", x: "50%", y: "8%" },
  { text: "DIGITAL INFRASTRUCTURE", x: "50%", y: "90%" },
];

const SERVICES = [
  {
    n: "01",
    title: "COMPLIANCE",
    text: "Partner verification, regulatory mapping, risk screening, market intelligence, and compliance-oriented business support for companies entering complex jurisdictions.",
    icon: ShieldIcon,
  },
  {
    n: "02",
    title: "GO-TO-MARKET",
    text: "Market entry strategy, partner search, business development, localization, ecosystem mapping, and commercial expansion across international markets.",
    icon: RadarIcon,
  },
  {
    n: "03",
    title: "WEB3 PROJECTS",
    text: "Support for blockchain, tokenization, digital assets, decentralized infrastructure, and Web3 business models — from strategy to partnerships and ecosystem development.",
    icon: NodesIcon,
  },
];

const METHOD = [
  { n: "I", k: "Decode", t: "We analyze market, regulatory, and business complexity." },
  { n: "II", k: "Design", t: "We build practical strategies, structures, and partnership pathways." },
  { n: "III", k: "Deploy", t: "We support execution, communication, and market activation." },
];

function Index() {
  return (
    <div className="relative z-[2] min-h-screen text-foreground">
      <CursorGlow />
      <Nav />

      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="absolute inset-0" aria-hidden>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        {/* Floating tech labels */}
        {FLOATING_LABELS.map((l, i) => (
          <motion.div
            key={l.text}
            className="absolute hidden md:block font-mono text-[10px] tracking-[0.25em] text-muted-foreground/80"
            style={{ left: l.x, top: l.y }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-primary/60" />
              {l.text}
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
            </span>
          </motion.div>
        ))}

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pt-28 pb-12 md:px-10">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
            <span>N 40°42′46″ · W 74°00′21″</span>
            <span className="hidden md:inline">LAB / 2025 — ∞</span>
          </div>

          <motion.div
            className="pointer-events-none mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full glass px-4 py-1.5 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              BOUTIQUE STRATEGIC CONSULTING LAB
            </div>
            <h1 className="text-gradient text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              PRESENT
              <br />
              <span className="text-aurora animate-shimmer">FUTURE LAB</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl font-mono text-xs tracking-[0.2em] text-muted-foreground md:text-sm">
              COMPLIANCE · GO-TO-MARKET · WEB3 PROJECTS
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Strategic consulting for companies building across regulated, fast-moving, and emerging markets.
            </p>
          </motion.div>

          <motion.div
            className="flex items-end justify-between font-mono text-[10px] tracking-[0.25em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span>SCROLL ↓</span>
            <span className="hidden md:inline">v.2.5 — TRANSMISSION ACTIVE</span>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
              001 / INTRO
            </div>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="text-gradient text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                We help companies move from
                <span className="text-aurora"> complexity </span>
                to market clarity.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
                Present Future Lab works with companies, founders, investors, and institutions operating
                at the intersection of regulation, international expansion, and emerging technologies.
                We combine strategic thinking, market intelligence, compliance awareness, and practical execution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
                002 / SERVICES
              </div>
              <h2 className="mt-4 text-gradient text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
                Three lenses. One operating system.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-14">
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
              003 / METHOD
            </div>
            <h2 className="mt-4 text-gradient text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
              Decode. Design. Deploy.
            </h2>
          </div>
        </Reveal>

        <div className="ring-gradient relative overflow-hidden rounded-2xl glass-strong p-2">
          <div className="rounded-xl bg-[oklch(0.1_0.02_265)/0.6] p-6 md:p-10">
            <div className="mb-6 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                PFL_OS / METHOD.SEQ
              </span>
              <span className="hidden md:inline">RUNTIME 00:00:03 · STATUS OK</span>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-3">
              {METHOD.map((m) => (
                <div key={m.k} className="bg-[oklch(0.13_0.02_265)] p-8 transition hover:bg-[oklch(0.16_0.025_265)]">
                  <div className="font-mono text-xs tracking-[0.3em] text-primary">{m.n}</div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{m.k}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[420px] max-w-3xl -translate-y-1/2 rounded-full opacity-40 blur-3xl"
             style={{ background: "var(--gradient-aurora)" }} aria-hidden />
        <Reveal>
          <div className="text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
              004 / CONTACT
            </div>
            <h2 className="mt-6 text-gradient text-[clamp(2.25rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Let&apos;s build what
              <br />
              <span className="text-aurora">comes next.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              For partnerships, consulting requests, and project discussions:
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:andrey@presentfuturelab.com"
              className="group relative inline-flex items-center gap-4 rounded-full glass-strong px-6 py-4 text-base transition hover:scale-[1.02] hover:glow-primary md:px-10 md:py-6 md:text-2xl"
            >
              <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition group-hover:opacity-100"
                    style={{ background: "var(--gradient-aurora)" }} />
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-medium tracking-tight text-foreground">andrey@presentfuturelab.com</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-foreground">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
            <span className="relative h-2 w-2 rounded-full bg-primary" />
          </span>
          PFL
        </a>
        <nav className="glass hidden rounded-full px-2 py-2 md:flex">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:andrey@presentfuturelab.com"
          className="hidden font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition hover:text-foreground md:inline"
        >
          → CONTACT
        </a>
        <a
          href="#contact"
          className="rounded-full glass px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] md:hidden"
        >
          MENU
        </a>
      </div>
    </header>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  const Icon = service.icon;
  return (
    <div className="ring-gradient group relative h-full overflow-hidden rounded-2xl glass-strong p-px transition hover:glow-soft">
      <div className="relative h-full rounded-2xl bg-[oklch(0.11_0.02_265)/0.7] p-8">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{service.n}</span>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg glass text-primary transition group-hover:scale-110 group-hover:text-cyan-300">
            <Icon />
          </div>
        </div>
        <h3 className="mt-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
        <div className="mt-8 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          <span>// MODULE ACTIVE</span>
          <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 font-mono text-[10px] tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} PRESENT FUTURE LAB</div>
        <div className="flex gap-6">
          <span>COMPLIANCE</span>
          <span>GO-TO-MARKET</span>
          <span>WEB3</span>
        </div>
        <a href="mailto:andrey@presentfuturelab.com" className="transition hover:text-foreground">
          ANDREY@PRESENTFUTURELAB.COM
        </a>
      </div>
    </footer>
  );
}

/* Icons */
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RadarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 12L19 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
function NodesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 7.5L10.5 10.5M16.5 7.5L13.5 10.5M7.5 16.5L10.5 13.5M16.5 16.5L13.5 13.5"
            stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  CircleDollarSign,
  Download,
  FileDown,
  Goal,
  Globe2,
  LineChart,
  Moon,
  Repeat2,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Card3D } from "@/components/Card3D";

export const metadata: Metadata = {
  title: "Cashnix — Financial Forecasting App Case Study",
  description:
    "How KinetixSoft turned a complex financial forecasting model into a clear, production-ready FlutterFlow app with custom forecasting logic.",
  alternates: { canonical: "https://kinetixsoft.com/case-studies/cashnix" },
  openGraph: {
    title: "Cashnix — Financial Forecasting App Case Study",
    description:
      "A FlutterFlow fintech case study: turning complex forecasting logic into a financial app people can understand and enjoy using.",
    url: "https://kinetixsoft.com/case-studies/cashnix",
    type: "article",
  },
};

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.mycompany.cashnixfinancialforecasting";

type Feature = {
  title: string;
  description: string;
  icon: typeof BarChart3;
};

const features: Feature[] = [
  {
    title: "Transaction tracking",
    description:
      "Log income and expenses with custom categories so the forecast is grounded in the user's real financial activity.",
    icon: WalletCards,
  },
  {
    title: "Recurring transactions",
    description:
      "Model repeating income and expenses once, then let the forecast account for them across future periods.",
    icon: Repeat2,
  },
  {
    title: "What-if scenarios",
    description:
      "Test a future decision before making it and see how a new expense, saving habit, or income change affects the outlook.",
    icon: Target,
  },
  {
    title: "Visual insights",
    description:
      "Bar, line, and pie charts make spending patterns and future balances easier to understand at a glance.",
    icon: LineChart,
  },
  {
    title: "Financial KPIs",
    description:
      "Surface maximum and minimum balance, savings rate, and top spending category without forcing users to calculate them.",
    icon: BarChart3,
  },
  {
    title: "AI recommendations",
    description:
      "Turn financial patterns into practical recommendations that help users decide what to do next.",
    icon: BrainCircuit,
  },
  {
    title: "Multi-currency support",
    description:
      "Give users a flexible experience across currencies while keeping the underlying financial picture consistent.",
    icon: Globe2,
  },
  {
    title: "CSV export",
    description:
      "Let users take their financial history with them through a simple, useful export flow.",
    icon: FileDown,
  },
  {
    title: "Savings goals and dark mode",
    description:
      "Track progress toward goals with clear indicators and make the entire experience comfortable to use at night.",
    icon: Goal,
  },
];

const tags = ["FinTech", "FlutterFlow", "Forecasting"];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cerulean/30 bg-cerulean/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cerulean">
      {children}
    </span>
  );
}

function SectionMarker({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cerulean/15 text-cerulean border border-cerulean/25">
        PHASE {number}
      </span>
      <div className="h-px flex-1 bg-jet-border" />
    </div>
  );
}

function CashnixDeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] flex items-center justify-center py-6">
      {/* Background glow effects */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-cerulean/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-neon-rose/20 blur-[100px] pointer-events-none" />

      {/* Floating Secondary Screen (Analytics & Forecasting) */}
      <div className="hidden sm:block absolute -right-2 md:-right-6 top-8 w-[210px] md:w-[240px] aspect-[9/19] rounded-[30px] overflow-hidden border border-jet-border shadow-2xl opacity-60 hover:opacity-100 hover:scale-105 hover:z-20 transition-all duration-500 rotate-6 bg-jet-surface">
        <img
          src="/images/cashnix/cashnix-screen-2.png"
          alt="Cashnix Cash Flow Forecasting Analytics"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Primary Hero Screen (Live App Dashboard) */}
      <div className="relative z-10 w-[250px] sm:w-[280px] md:w-[300px] aspect-[9/19] rounded-[34px] overflow-hidden border-2 border-cerulean/50 bg-jet shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_40px_rgba(0,123,167,0.4)] ring-1 ring-white/10 group">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black/80 rounded-full z-20 backdrop-blur-sm" />
        <img
          src="/images/cashnix/cashnix-screen-1.png"
          alt="Cashnix Financial Forecasting Live App Dashboard"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  );
}

const appScreenshots = [
  {
    src: "/images/cashnix/cashnix-screen-1.png",
    title: "Financial Dashboard",
    subtitle: "Real-time balance tracking, projected cash flow, and spending trajectory at a glance."
  },
  {
    src: "/images/cashnix/cashnix-screen-2.png",
    title: "90-Day Cash Flow Projections",
    subtitle: "Proprietary forecasting algorithm modeling future liquidity based on historical income."
  },
  {
    src: "/images/cashnix/cashnix-screen-3.png",
    title: "What-If Scenario Simulator",
    subtitle: "Simulate major life purchases, pay raises, and recurring changes before committing."
  },
  {
    src: "/images/cashnix/cashnix-screen-4.png",
    title: "Categorized Transactions",
    subtitle: "Granular expense auditing with smart tags and recurring commitment detection."
  },
  {
    src: "/images/cashnix/cashnix-screen-5.png",
    title: "Savings Goals & Milestones",
    subtitle: "Target-based savings trackers with adaptive weekly contribution forecasts."
  },
  {
    src: "/images/cashnix/cashnix-screen-6.png",
    title: "KPI Analytics & Health Score",
    subtitle: "Actionable financial insights and AI recommendations to accelerate savings."
  }
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cashnix — Financial Forecasting App Case Study",
  description:
    "How KinetixSoft turned a complex financial forecasting model into a clear, production-ready FlutterFlow app.",
  author: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  publisher: { "@type": "Organization", name: "KinetixSoft", url: "https://kinetixsoft.com" },
  mainEntityOfPage: "https://kinetixsoft.com/case-studies/cashnix",
  about: { "@type": "SoftwareApplication", name: "Cashnix Financial Forecast" },
};

export default function CashnixCaseStudyPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-jet text-white">
      <JsonLd data={caseStudySchema} />

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_70%_16%,rgba(0,123,167,0.2),transparent_40%),linear-gradient(180deg,rgba(10,10,10,0)_0%,#0A0A0A_100%)]" />

        <section className="relative px-4 pb-24 pt-36 md:px-6 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm transition-colors text-white/50 hover:text-cerulean"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/images/cashnix/cashnix-icon.png"
                    alt="Cashnix App Icon"
                    className="w-14 h-14 rounded-2xl border border-jet-border shadow-xl shadow-cerulean/10 object-cover"
                  />
                  <div>
                    <div className="flex flex-wrap gap-2 mb-1.5">
                      {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    <a
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Google Play Store
                    </a>
                  </div>
                </div>
                <h1 className="mb-6 max-w-2xl text-4xl leading-tight md:text-6xl font-bold tracking-tight">
                  Cashnix: Financial Clarity,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean via-sky-400 to-neon-rose">
                    Forecast Forward.
                  </span>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70">
                  A modern personal finance app that turns income, expenses, and future decisions into a clear plan people can actually understand.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-duo inline-flex items-center gap-2"
                  >
                    View on Google Play <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/flutterflow"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-jet-border bg-jet-surface/80 hover:bg-jet-elevated hover:border-cerulean/50 px-6 text-sm font-semibold transition-all text-white/90"
                  >
                    Explore FlutterFlow Services
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-wider text-white/40">
                  <span>Mobile App</span>
                  <span>Custom Dart Engine</span>
                  <span>Production Deployed</span>
                </div>
              </div>

              <CashnixDeviceMockup />
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="relative border-y border-jet-border px-4 py-20 md:px-6 md:py-24 bg-jet-surface/40">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionMarker number="01" />
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
                The <span className="text-cerulean">Challenge</span>
              </h2>
              <p className="mb-5 text-base leading-relaxed text-white/70">
                Cashnix started with an intricate financial forecasting model. It could represent the relationships between income, expenses, recurring commitments, and future decisions, but the raw model was not a product people could comfortably use every day.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                The challenge was to make the underlying logic feel simple without making it shallow. Users needed to record what was happening now, explore what might happen next, and understand the result quickly enough to make a better decision.
              </p>
            </div>
            <div className="flex flex-col justify-end space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-jet-border p-6 bg-jet-surface/80">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cerulean/10 text-cerulean border border-cerulean/30">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-white/95">Keep the Model Rigorous</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    The interface had to preserve the mathematical integrity of the forecasting engine while giving users a clear path from input to projection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-jet-border p-6 bg-jet-surface/80">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-rose/10 text-neon-rose border border-neon-rose/30">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-white/95">Make the Future Intuitive</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Forecasts, KPIs, and what-if scenarios needed to feel like empowering guidance rather than a spreadsheet with a darker coat of paint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="relative px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <SectionMarker number="02" />
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Approach</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                We used FlutterFlow where it created speed and clarity, then wrote custom Dart logic where the product needed depth. The result was not a compromise — it was a deliberate pairing of visual velocity and native code.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Build the Product Surface",
                  glow: "cerulean" as const,
                  description:
                    "FlutterFlow gave us a fast, flexible way to shape the mobile experience: onboarding, transaction entry, navigation, goal tracking, chart layouts, and the dark-mode visual system.",
                },
                {
                  number: "02",
                  title: "Layer in the Hard Math",
                  glow: "neon-rose" as const,
                  description:
                    "Custom Dart algorithms handled the what-if forecasting simulator, recurring transaction behaviour, rolling balance projections, and KPI calculations.",
                },
                {
                  number: "03",
                  title: "Validate Real Scenarios",
                  glow: "cerulean" as const,
                  description:
                    "We validated the product around real financial questions: Can a user understand a forecast? Can they compare scenarios? Can they trust the number and know what to do next?",
                },
              ].map((item) => (
                <Card3D key={item.number} glowColor={item.glow} maxTilt={6}>
                  <div className="rounded-2xl border border-jet-border p-8 bg-jet-surface/90 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-6 text-xs font-mono font-bold tracking-wider text-cerulean">{item.number}</div>
                      <h3 className="mb-3 text-xl font-bold text-white/95">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-cerulean/30 bg-gradient-to-r from-cerulean/10 via-jet-surface to-neon-rose/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cerulean/15 text-cerulean border border-cerulean/30">
                  <Sparkles className="h-5 w-5 text-neon-rose" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-white">The Right Tool for Each Layer</div>
                  <p className="max-w-2xl text-sm leading-relaxed text-white/70">
                    FlutterFlow accelerated the interface design. Custom code protected the product's unique value. Together, they allowed us to ship on schedule without diluting the forecasting algorithm.
                  </p>
                </div>
              </div>
              <Link href="/flutterflow" className="btn-cerulean shrink-0">
                See FlutterFlow Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="relative border-y border-jet-border px-4 py-20 md:px-6 md:py-28 bg-jet-surface/40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionMarker number="03" />
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Key Features <span className="text-cerulean">Engineered</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/50 md:text-right font-mono">
                Every feature was built to empower user decision-making.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card3D key={feature.title} glowColor={idx % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={5}>
                    <div className="rounded-2xl border border-jet-border p-6 bg-jet-surface/80 hover:border-cerulean/40 transition-colors h-full">
                      <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${idx % 2 === 0 ? "bg-cerulean/10 text-cerulean border-cerulean/30" : "bg-neon-rose/10 text-neon-rose border-neon-rose/30"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-bold text-white/95">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCTION APP SCREENSHOTS GALLERY */}
        <section className="relative px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <SectionMarker number="04" />
              <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">
                Published App <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">Screenshots</span>
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Direct captures from the live Google Play release, demonstrating FlutterFlow's UI capabilities combined with custom financial calculation routines.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {appScreenshots.map((screen, idx) => (
                <Card3D key={idx} glowColor={idx % 2 === 0 ? "cerulean" : "neon-rose"} maxTilt={5}>
                  <div className="group rounded-2xl border border-jet-border bg-jet-surface/90 p-4 transition-all flex flex-col h-full shadow-xl">
                    <div className="relative aspect-[9/18] w-full rounded-xl overflow-hidden border border-jet-border bg-jet mb-4">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white/95 mb-1 group-hover:text-cerulean transition-colors">
                      {screen.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/60">
                      {screen.subtitle}
                    </p>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-duo inline-flex items-center gap-2"
              >
                Download Cashnix on Google Play <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="relative border-t border-jet-border px-4 py-20 md:px-6 md:py-28 bg-jet-surface/40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <SectionMarker number="05" />
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
                The <span className="text-cerulean">Outcome</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Cashnix shipped as a production-ready financial app on Google Play. More importantly, the complexity that existed in the original model became a product experience users could navigate, understand, and enjoy.
              </p>
            </div>

            <div className="mb-10 grid gap-6 sm:grid-cols-3">
              {[
                { value: "Google Play", label: "Store Status", note: "Production Release Live" },
                { value: "5.0 ★", label: "Client Rating", note: "Verified Client Review" },
                { value: "Full Stack", label: "Architecture", note: "FlutterFlow + Custom Logic" },
              ].map((stat, i) => (
                <Card3D key={stat.label} glowColor={i === 1 ? "neon-rose" : "cerulean"} maxTilt={6}>
                  <div className="rounded-2xl border border-jet-border p-6 bg-jet-surface/90 text-center">
                    <div className={`mb-3 text-3xl md:text-4xl font-extrabold font-mono ${i === 1 ? "text-neon-rose" : "text-cerulean"}`}>
                      {stat.value}
                    </div>
                    <div className="mb-1 font-bold text-white/95">{stat.label}</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white/40">{stat.note}</div>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-jet-border p-8 bg-jet-surface/80">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white/95">A Real Product, Not a Prototype</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  The app made it through the complete lifecycle: architectural design, visual builds, custom algorithms, security rules, and production deployment on Google Play.
                </p>
              </div>
              <div className="rounded-2xl border border-jet-border p-8 bg-jet-surface/80">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-cerulean/10 text-cerulean border border-cerulean/30">
                  <Download className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white/95">Clarity Users Can Feel</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  The client's feedback was unequivocal: the application converted a dense financial spreadsheet model into a clean, intuitive, and trustworthy tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="relative px-4 pb-24 md:px-6 md:pb-32">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cerulean/30 bg-gradient-to-br from-cerulean/15 via-jet-surface to-neon-rose/15 p-8 text-center md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-cerulean/40 text-2xl text-cerulean font-mono">
              “
            </div>
            <blockquote className="mx-auto max-w-3xl text-2xl leading-relaxed md:text-3xl font-semibold text-white/95">
              “We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using.”
            </blockquote>
            <div className="mt-7 text-xs font-mono font-bold uppercase tracking-widest text-neon-rose">
              A Fintech Founder, US
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative border-t border-jet-border px-4 py-24 md:px-6 md:py-32 bg-jet-surface/60">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-4 text-xs font-mono uppercase tracking-widest text-cerulean font-bold">Have a Complex Idea?</div>
            <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
              Have an Idea Like This?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-neon-rose">
                Let's Build It.
              </span>
            </h2>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/60">
              Tell us what you're building, what makes it complex, and where you want to go. We'll help you engineer the right architecture.
            </p>
            <Link href="/contact">
              <button className="btn-duo">
                Start a Conversation <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
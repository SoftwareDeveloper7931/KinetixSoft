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
    <span
      className="inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
      style={{
        background: "rgba(74,95,189,0.12)",
        borderColor: "rgba(74,95,189,0.28)",
        color: "#8798F4",
      }}
    >
      {children}
    </span>
  );
}

function SectionMarker({ number }: { number: string }) {
  return (
    <div className="ledger-rule mb-6">
      <span className="ledger-index">{number}</span>
      <span className="ledger-line" />
    </div>
  );
}

function DashboardPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-[470px] overflow-hidden rounded-2xl border p-3 shadow-2xl shadow-blue-950/30"
      style={{
        background: "linear-gradient(145deg, #1A2232 0%, #101620 100%)",
        borderColor: "rgba(125,145,230,0.22)",
      }}
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative rounded-xl border p-4" style={{ background: "#0D121B", borderColor: "#232A36" }}>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/45">Cashnix forecast</div>
            <div className="text-lg font-semibold text-white">Financial overview</div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
            <CircleDollarSign className="h-4 w-4" />
          </div>
        </div>

        <div className="mb-3 rounded-xl border p-3" style={{ background: "#121A26", borderColor: "#263247" }}>
          <div className="mb-2 flex items-center justify-between text-[10px] text-white/45">
            <span>Projected balance</span>
            <span className="text-emerald-400">+12.4%</span>
          </div>
          <div className="mb-1 text-2xl font-semibold text-white">$18,420</div>
          <div className="text-[10px] text-white/40">Based on your current plan</div>
          <div className="mt-4 flex h-20 items-end gap-1.5">
            {[28, 35, 31, 45, 42, 58, 52, 66, 63, 78, 73, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/80 to-cyan-300/70"
                style={{ height: `${height}%`, opacity: index > 8 ? 0.95 : 0.62 }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-white/30">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border p-3" style={{ background: "#121A26", borderColor: "#232A36" }}>
            <div className="mb-2 flex items-center gap-2 text-[10px] text-white/45">
              <Target className="h-3 w-3 text-cyan-300" /> Savings goal
            </div>
            <div className="mb-2 text-sm font-semibold text-white">New home fund</div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-white/40">
              <span>$7,500 saved</span>
              <span>75%</span>
            </div>
          </div>
          <div className="rounded-xl border p-3" style={{ background: "#121A26", borderColor: "#232A36" }}>
            <div className="mb-2 flex items-center gap-2 text-[10px] text-white/45">
              <Sparkles className="h-3 w-3 text-amber-300" /> Recommendation
            </div>
            <div className="text-xs leading-relaxed text-white/80">
              Reduce dining spend by 8% to reach your goal two weeks sooner.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="min-h-screen overflow-hidden bg-[#0A0E14]">
      <JsonLd data={caseStudySchema} />

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_70%_16%,rgba(74,95,189,0.2),transparent_38%),linear-gradient(180deg,rgba(10,14,20,0)_0%,#0A0E14_100%)]" />

        <section className="relative px-4 pb-24 pt-36 md:px-6 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "#8A93A3" }}
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <h1
                  className="mb-6 max-w-2xl text-5xl leading-[1.02] md:text-7xl"
                  style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  Cashnix: financial clarity,{" "}
                  <em style={{ color: "#7185E4", fontStyle: "italic" }}>forecast forward.</em>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed md:text-xl" style={{ color: "#A7AFBD" }}>
                  A personal finance app that turns income, expenses, and future decisions into a plan people can actually understand.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-colors"
                    style={{ background: "#4A5FBD", color: "#E9EBEF" }}
                  >
                    View on Google Play <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/flutterflow"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 text-sm font-semibold transition-colors hover:border-[#4A5FBD]"
                    style={{ borderColor: "#2A3342", color: "#D7DBE5" }}
                  >
                    Explore FlutterFlow
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em]" style={{ color: "#707B8C" }}>
                  <span>Mobile app</span>
                  <span>Custom logic</span>
                  <span>Production shipped</span>
                </div>
              </div>

              <DashboardPreview />
            </div>
          </div>
        </section>

        <section className="relative border-y px-4 py-20 md:px-6 md:py-24" style={{ borderColor: "#1D2531", background: "#0D121A" }}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionMarker number="01" />
              <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                The <em style={{ color: "#7185E4", fontStyle: "italic" }}>challenge</em>
              </h2>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "#9BA5B5" }}>
                Cashnix started with a complicated financial forecasting model. It could represent the relationships between income, expenses, recurring commitments, and future decisions, but the raw model was not a product people could comfortably use every day.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#9BA5B5" }}>
                The challenge was to make the underlying logic feel simple without making it shallow. Users needed to record what was happening now, explore what might happen next, and understand the result quickly enough to make a better decision.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="mb-5 flex items-start gap-4 rounded-xl border p-5" style={{ borderColor: "#283243", background: "#121923" }}>
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Keep the model honest</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>
                    The interface had to preserve the integrity of the forecasting engine while giving users a clear path from action to outcome.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border p-5" style={{ borderColor: "#283243", background: "#121923" }}>
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <LineChart className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Make the future visible</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>
                    Forecasts, KPIs, and what-if scenarios needed to feel like useful guidance rather than a spreadsheet with a prettier skin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <SectionMarker number="02" />
              <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                The <em style={{ color: "#7185E4", fontStyle: "italic" }}>approach</em>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#9BA5B5" }}>
                We used FlutterFlow where it created speed and clarity, then added custom logic where the product needed depth. The result was not a compromise between low-code and custom development — it was a deliberate combination of both.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Build the product surface",
                  description:
                    "FlutterFlow gave us a fast, flexible way to shape the mobile experience: onboarding, transaction entry, navigation, goal tracking, chart layouts, and the dark-mode visual system.",
                },
                {
                  number: "02",
                  title: "Layer in the hard parts",
                  description:
                    "Custom Dart and API logic handled the what-if forecasting engine, recurring transaction behaviour, balance projections, and KPI calculations that made Cashnix more than a simple ledger.",
                },
                {
                  number: "03",
                  title: "Test decisions, not just screens",
                  description:
                    "We validated the product around real financial questions: Can a user understand a forecast? Can they compare scenarios? Can they trust the number and know what to do next?",
                },
              ].map((item) => (
                <div key={item.number} className="rounded-xl border p-7" style={{ borderColor: "#232A36", background: "#12161F" }}>
                  <div className="mb-10 text-sm font-semibold tracking-[0.18em]" style={{ color: "#7185E4" }}>{item.number}</div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ color: "#E9EBEF" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-xl border p-6 md:flex-row md:items-center md:justify-between md:p-8" style={{ borderColor: "rgba(74,95,189,0.3)", background: "linear-gradient(100deg,rgba(74,95,189,0.12),rgba(18,22,31,0.8))" }}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-white">The right tool for each layer</div>
                  <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "#9BA5B5" }}>
                    FlutterFlow accelerated the product surface. Custom code protected the product&apos;s unique value. Together, they let us move quickly without flattening the forecasting model into a generic budgeting app.
                  </p>
                </div>
              </div>
              <Link href="/flutterflow" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold" style={{ color: "#8798F4" }}>
                See our FlutterFlow services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative border-y px-4 py-20 md:px-6 md:py-28" style={{ borderColor: "#1D2531", background: "#0D121A" }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionMarker number="03" />
                <h2 className="text-4xl md:text-5xl" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  Key features <em style={{ color: "#7185E4", fontStyle: "italic" }}>built</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed md:text-right" style={{ color: "#8A93A3" }}>
                Every feature supports the same goal: helping people make a decision with more confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="card-hover rounded-xl border p-6" style={{ borderColor: "#232A36", background: "#12161F" }}>
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border text-blue-300" style={{ background: "rgba(74,95,189,0.12)", borderColor: "rgba(74,95,189,0.2)" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold" style={{ color: "#E9EBEF" }}>{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <SectionMarker number="04" />
              <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                The <em style={{ color: "#7185E4", fontStyle: "italic" }}>outcome</em>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#9BA5B5" }}>
                Cashnix shipped as a production-ready financial app on Google Play. More importantly, the complexity that existed in the original model became a product experience users could navigate, understand, and enjoy.
              </p>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "—", label: "Downloads", note: "Add live total" },
                { value: "—", label: "User rating", note: "Add Play Store rating" },
                { value: "—", label: "Time to launch", note: "Add project timeline" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border p-6" style={{ borderColor: "#232A36", background: "#12161F" }}>
                  <div className="mb-3 text-4xl" style={{ color: "#7185E4", fontFamily: "var(--font-display)" }}>{stat.value}</div>
                  <div className="mb-1 font-semibold" style={{ color: "#E9EBEF" }}>{stat.label}</div>
                  <div className="text-xs uppercase tracking-[0.12em]" style={{ color: "#687486" }}>{stat.note}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border p-7" style={{ borderColor: "#232A36", background: "#12161F" }}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold" style={{ color: "#E9EBEF" }}>A real product, not a prototype</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>
                  The app made it through the journey that matters: architecture, build, custom logic, testing, and production release. It is available for users to download and use on Google Play today.
                </p>
              </div>
              <div className="rounded-xl border p-7" style={{ borderColor: "#232A36", background: "#12161F" }}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <Download className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold" style={{ color: "#E9EBEF" }}>Clarity users can feel</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A93A3" }}>
                  The founder&apos;s feedback captured the outcome best: the app preserved a complex forecasting model while making it understandable and genuinely enjoyable for users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-24 md:px-6 md:pb-32">
          <div className="mx-auto max-w-4xl rounded-2xl border p-8 text-center md:p-16" style={{ borderColor: "rgba(74,95,189,0.35)", background: "linear-gradient(145deg,rgba(74,95,189,0.16),rgba(18,22,31,0.86))" }}>
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border text-3xl" style={{ borderColor: "rgba(135,152,244,0.4)", color: "#8798F4", fontFamily: "Georgia, serif" }}>
              “
            </div>
            <blockquote className="mx-auto max-w-3xl text-2xl leading-relaxed md:text-4xl" style={{ color: "#F0F2F7", fontFamily: "var(--font-display)" }}>
              “We came in with a complicated forecasting model and KinetixSoft shipped something our users genuinely understand and enjoy using.”
            </blockquote>
            <div className="mt-7 text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "#8798F4" }}>
              A Fintech Founder, US
            </div>
          </div>
        </section>

        <section className="relative border-t px-4 py-24 md:px-6 md:py-32" style={{ borderColor: "#1D2531", background: "#0D121A" }}>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#7185E4" }}>Have a complex idea?</div>
            <h2 className="mb-6 text-4xl md:text-6xl" style={{ color: "#E9EBEF", fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Have an idea like this?{" "}
              <em style={{ color: "#7185E4", fontStyle: "italic" }}>Let&apos;s build it.</em>
            </h2>
            <p className="mb-9 max-w-xl text-lg leading-relaxed" style={{ color: "#8A93A3" }}>
              Tell us what you&apos;re building, what makes it complicated, and where you want to go. We&apos;ll help you choose the right balance of speed, flexibility, and custom engineering.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md px-7 text-sm font-semibold transition-colors"
              style={{ background: "#4A5FBD", color: "#E9EBEF" }}
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
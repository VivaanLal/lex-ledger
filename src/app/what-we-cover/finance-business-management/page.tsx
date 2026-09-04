"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  PieChart,
  Activity,
  BarChart3,
  Info,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

const coreTopics = [
  {
    icon: DollarSign,
    title: "Pricing Architecture & Value Realization",
    desc: "Developing pricing structures that reflect true delivery costs, overhead drag, and commercial positioning rather than arbitrary market guesswork.",
    keyQuestions: "What is your hourly cost of doing business before profit? How do discounts compound across volume?",
  },
  {
    icon: PieChart,
    title: "Margins & Cost Allocation",
    desc: "Decoupling gross margin from net margin. Understanding direct variable labor/materials vs fixed baseline overhead, and finding which products actually generate return.",
    keyQuestions: "Which client or product lines subsidize underperforming offerings? Where is silent margin erosion occurring?",
  },
  {
    icon: Activity,
    title: "Cash Flow Timing & Working Capital",
    desc: "Managing the critical timing gap between debtor collection and supplier/payroll outflows. Why profitable businesses can still experience insolvency crises.",
    keyQuestions: "What is your cash conversion cycle in days? How many months of operating expenses do you hold in liquid reserves?",
  },
  {
    icon: BarChart3,
    title: "Understanding Business Numbers & Statements",
    desc: "Demystifying management accounts: interpreting the P&L, balance sheet solvency, accounts receivable aging, and basic operational ratios.",
    keyQuestions: "Do you review management accounts monthly or only at tax time? Can you identify your current ratio?",
  },
  {
    icon: TrendingUp,
    title: "Financial Decision Frameworks",
    desc: "Evaluating major commercial commitments: taking on commercial debt, leasing equipment, hiring key personnel, or funding expansion from operational cash.",
    keyQuestions: "What is the break-even timeline for new headcount? What happens to cash reserves if receivables slow by 30 days?",
  },
];

const questionsWorthAsking = [
  "Do we know our exact break-even revenue figure on a monthly and quarterly basis?",
  "What is our debtor aging profile: how much revenue is tied up in invoices past 30, 60, or 90 days?",
  "When did we last recalibrate our client pricing against inflation, supplier increases, and statutory wage increases?",
  "Are our statutory tax collections (GST, payroll withholdings) segregated into a separate reserve account?",
  "If our top client cancelled their contract tomorrow, how many months of operational runway would remain?",
];

export default function FinanceManagementPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs
          items={[
            { label: "What We Cover", href: "/what-we-cover" },
            { label: "Finance & Business Management" },
          ]}
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Subject Area · Pillar 02
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                Finance &amp; Business Management.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                A sustainable enterprise requires unvarnished command over its numbers. We demystify pricing, margins, cash flow, and financial metrics so you understand the operational reality behind your P&amp;L.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== WHY THIS MATTERS ===== */}
      <section className="py-20 md:py-28 bg-paper border-y border-border/80">
        <div className="container-content">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Strategic Rationale
              </span>
              <h2 className="font-serif text-2xl md:text-4xl text-ink leading-tight mb-6">
                Why financial literacy matters to a growing business.
              </h2>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed mb-6">
                Bookkeeping is historical; financial management is forward-looking. Many business owners mistake top-line revenue growth for financial health, discovering too late that expanding sales often increases working capital demands faster than incoming cash receipts.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed font-medium">
                Developing proactive financial awareness helps founders distinguish between paper profits and liquid solvency, price their work sustainably, and engage external accountants with strategic intent.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CORE TOPICS GRID ===== */}
      <section className="py-24 md:py-36 bg-warm-gray">
        <div className="container-content">
          <div className="max-w-3xl mb-16">
            <AnimateOnScroll>
              <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Curriculum Scope
              </span>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-ink leading-tight tracking-tight">
                Core topics we examine.
              </h2>
            </AnimateOnScroll>
          </div>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {coreTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-paper rounded-3xl p-8 md:p-10 border border-border/80 shadow-sm flex flex-col justify-between hover:border-copper/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-warm-gray flex items-center justify-center mb-6">
                    <topic.icon className="w-6 h-6 text-copper" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink mb-4 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                    {topic.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 bg-warm-gray/30 -mx-8 -mb-8 md:-mx-10 md:-mb-10 p-6 rounded-b-3xl">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1">
                    Key Inquiry:
                  </p>
                  <p className="text-xs text-charcoal/90 leading-relaxed italic">
                    &ldquo;{topic.keyQuestions}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== QUESTIONS WORTH ASKING & PROFESSIONAL ADVICE ===== */}
      <section className="py-24 md:py-36 bg-paper border-b border-border/80">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Questions Worth Asking */}
            <div className="lg:col-span-6">
              <AnimateOnScroll>
                <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                  Self-Inspection
                </span>
                <h2 className="font-serif text-2xl md:text-4xl text-ink leading-tight mb-8">
                  Questions worth asking internally.
                </h2>
              </AnimateOnScroll>

              <div className="space-y-4">
                {questionsWorthAsking.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-ivory border border-border/70 flex items-start gap-4"
                  >
                    <span className="font-serif text-xl font-bold text-copper/50 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-charcoal leading-relaxed">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* When to Bring in a Professional */}
            <div className="lg:col-span-6">
              <AnimateOnScroll delay={0.2}>
                <div className="bg-deep-navy text-paper rounded-[2.5rem] p-8 md:p-12 shadow-xl">
                  <span className="apple-badge bg-paper/10 text-copper-light mb-6">
                    Advisory Boundaries
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-paper mb-4 leading-tight">
                    When to engage an accredited financial professional.
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Lex &amp; Ledger provides conceptual financial literacy and decision frameworks. You should consult a certified public accountant, chartered accountant, or licensed financial advisor when:
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Formal tax planning, entity restructuring, and annual statutory return lodgement</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Applying for substantial commercial debt, business mortgages, or institutional credit facilities</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Formal valuation of company equity for incoming investors or partner buyouts</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Complex payroll classification, employee share schemes, or cross-border tax compliance</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-paper/5 border border-gray-700 text-xs text-gray-400 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      Content on this platform does not constitute individual tax advice, investment recommendations, or accounting opinions.
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ===== RELATED COVERAGE ===== */}
      <section className="py-20 md:py-28 bg-ivory text-center">
        <div className="container-content">
          <h3 className="font-serif text-2xl md:text-3xl text-ink mb-8">
            Explore interconnected areas
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/what-we-cover/business-legal-awareness"
              className="w-full sm:w-auto px-8 py-4 bg-paper border border-border/80 rounded-full text-sm font-medium text-ink hover:border-copper transition-all shadow-sm"
            >
              Business &amp; Legal Awareness &rarr;
            </Link>
            <Link
              href="/what-we-cover/risk-protection"
              className="w-full sm:w-auto px-8 py-4 bg-paper border border-border/80 rounded-full text-sm font-medium text-ink hover:border-copper transition-all shadow-sm"
            >
              Risk &amp; Protection &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

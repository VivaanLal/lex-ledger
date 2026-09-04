"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  FileText,
  ShieldCheck,
  ArrowRight,
  CircleDot,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Start with a question",
    description:
      "You notice an area you do not fully understand — a contract clause, a GST obligation, a type of insurance, a cash-flow concern. That moment of uncertainty is where Lex & Ledger begins.",
    details: [
      "You receive a contract and aren't sure what certain clauses mean",
      "You're unsure whether your business needs to register for GST",
      "A customer makes a complaint and you don't know your obligations",
      "You want insurance but don't know what types apply to your business",
    ],
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Build awareness",
    description:
      "The platform provides clear educational information and practical prompts to help you understand the basics. No jargon. No assumptions. Just clear explanations written for business owners, not lawyers.",
    details: [
      "Plain-language guides on legal, financial, and risk topics",
      "Practical checklists to help you assess your situation",
      "Key questions to help you think through the issue",
      "Context on why this topic matters for growing businesses",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "Prepare for a conversation",
    description:
      "You organise documents, questions, and business context so you are ready to have a productive discussion. When you do speak with a professional, you'll make the most of that time.",
    details: [
      "Know which documents to gather before a meeting",
      "Understand the right questions to ask a professional",
      "Have context on the terminology they'll use",
      "Be clear on what outcome you need",
    ],
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Know when to get specialist help",
    description:
      "You recognise when the matter is regulated, personalised, complex, or high risk — and you seek a qualified professional. Knowing when to get help is itself a form of good judgement.",
    details: [
      "Regulated advice: legal, tax, financial, insurance",
      "High-stakes decisions: contracts, disputes, compliance",
      "Complex situations: multiple jurisdictions, structural changes",
      "Personal circumstances: specific to your business and industry",
    ],
  },
];

const scenarios = [
  {
    id: "contracts",
    title: "Signing a High-Value Client Agreement",
    context: "A boutique creative studio is offered a 12-month retainer worth 40% of their annual revenue, but the contract is 32 pages.",
    stepsApplied: [
      { step: "01 Notice", action: "Founder spots an indemnification clause and uncapped liability on consequential losses." },
      { step: "02 Understand", action: "Uses Lex & Ledger's primer to learn what mutual indemnification means vs unilateral exposure." },
      { step: "03 Prepare", action: "Drafts a concise redline inquiry list highlighting 3 specific clauses for legal review." },
      { step: "04 Get Help", action: "Takes the prepared briefing to a commercial solicitor, spending 45 minutes instead of 6 hours." },
    ],
    outcome: "Solicitor quickly amends the unilateral clause. Studio signs with clear, capped liability boundaries."
  },
  {
    id: "gst",
    title: "Crossing the Statutory Revenue Threshold",
    context: "A specialty trades business expects rolling 12-month revenue to pass statutory GST registration thresholds next month.",
    stepsApplied: [
      { step: "01 Notice", action: "Operator notices monthly invoicing pace is accelerating toward the compulsory registration mark." },
      { step: "02 Understand", action: "Reviews basic mechanics of collecting tax on behalf of authorities and pricing impact." },
      { step: "03 Prepare", action: "Calculates whether existing client quotes need gross-up clauses and organizes supplier tax invoices." },
      { step: "04 Get Help", action: "Meets with registered tax agent to set up proper BAS lodgement calendar and accounting software integration." },
    ],
    outcome: "Pricing is adjusted before threshold is crossed; avoids back-tax liabilities and cash-flow shock."
  },
  {
    id: "risk",
    title: "Expanding to a First Commercial Premise",
    context: "An e-commerce retailer moves stock out of a home garage into a leased commercial warehouse with 2 staff.",
    stepsApplied: [
      { step: "01 Notice", action: "Recognizes that physical premises introduce public slip-and-fall risk and landlord insurance covenants." },
      { step: "02 Understand", action: "Learns the functional distinction between Public Liability, Stock-in-Transit, and Glass/Property cover." },
      { step: "03 Prepare", action: "Extracts landlord lease insurance requirements and estimates accurate inventory replacement valuations." },
      { step: "04 Get Help", action: "Consults an accredited commercial insurance broker with exact lease covenants in hand." },
    ],
    outcome: "Broker binds compliant coverage that matches lease covenants without costly duplicate riders."
  }
];

export default function HowItWorksPage() {
  const [activeScenario, setActiveScenario] = useState<string>("contracts");
  const currentScenario = scenarios.find((s) => s.id === activeScenario)!;

  return (
    <>
      <div className="container-content pt-6">
        <Breadcrumbs items={[{ label: "How It Works" }]} />
      </div>

      {/* ===== HERO ===== */}
      <section className="bg-ivory pt-12 pb-24 md:pt-20 md:pb-36">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                The Journey · Four Stages
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4rem] lg:text-[5rem] text-ink tracking-tight leading-[1.08]">
                From uncertainty
                <br />
                <span className="text-copper">to deliberate clarity.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Lex &amp; Ledger doesn&apos;t give you generic advice. It helps you notice what matters, understand the basic concepts, prepare your information, and bring in the right professional when needed.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FOUR STEPS — Large alternating layout ===== */}
      <section className="bg-paper">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`py-20 md:py-32 ${index % 2 === 1 ? "bg-warm-gray" : "bg-paper"} border-t border-border/60`}
          >
            <div className="container-content">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <AnimateOnScroll direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-serif text-[3.5rem] md:text-[5rem] text-copper/15 leading-none">
                        {String(step.id).padStart(2, "0")}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-copper" />
                      </div>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.1}>
                    <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] text-ink tracking-tight mb-6 leading-snug">
                      {step.title}
                    </h2>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.2}>
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                      {step.description}
                    </p>
                  </AnimateOnScroll>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <AnimateOnScroll delay={0.3}>
                    <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-border/80 shadow-sm">
                      <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-6">
                        Operational Indicators
                      </p>
                      <StaggerChildren className="space-y-4" staggerDelay={0.08}>
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CircleDot className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                            <p className="text-[15px] text-charcoal leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </StaggerChildren>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== INTERACTIVE REAL-WORLD SCENARIO SIMULATION ===== */}
      <section className="py-24 md:py-36 bg-ivory border-t border-border/80">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-4">
                Interactive Case Studies
              </span>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-ink leading-tight tracking-tight">
                How the framework works in practice.
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 mt-4 leading-relaxed">
                See how a founder navigates common inflection points using the four-step sequence.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Scenario Tab Selectors */}
          <div className="flex flex-wrap gap-3 mb-10">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(s.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeScenario === s.id
                    ? "bg-ink text-paper shadow-md"
                    : "bg-paper text-slate hover:text-ink hover:bg-warm-gray border border-border/80"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Active Scenario Card */}
          <AnimateOnScroll>
            <div className="bg-paper rounded-3xl p-8 md:p-12 border border-border/80 shadow-md">
              <div className="mb-8 pb-6 border-b border-border/60">
                <span className="text-xs uppercase tracking-[0.2em] text-copper font-bold block mb-2">
                  Operating Context
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">
                  {currentScenario.title}
                </h3>
                <p className="text-base text-charcoal/80 leading-relaxed max-w-3xl">
                  {currentScenario.context}
                </p>
              </div>

              {/* 4 Steps Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {currentScenario.stepsApplied.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-ivory border border-border/60">
                    <span className="text-xs font-bold text-copper uppercase tracking-wider block mb-2">
                      {item.step}
                    </span>
                    <p className="text-xs md:text-sm text-charcoal/90 leading-relaxed">
                      {item.action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outcome Banner */}
              <div className="p-6 rounded-2xl bg-copper/5 border border-copper/20 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-copper block mb-1">
                    Measurable Result
                  </span>
                  <p className="text-sm text-ink font-medium leading-relaxed">
                    {currentScenario.outcome}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== NOT A REPLACEMENT ===== */}
      <section className="bg-deep-navy py-24 md:py-36">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="w-16 h-16 rounded-2xl bg-paper/5 flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="w-8 h-8 text-copper" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="font-serif text-[2rem] md:text-[3rem] text-paper tracking-tight mb-6">
                Transparency about boundaries.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Lex &amp; Ledger is an educational platform. We help you prepare, understand, and ask better questions. We do not provide legal, tax, accounting, financial, insurance, or other regulated professional advice.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="bg-paper/5 rounded-3xl p-8 md:p-10 border border-gray-700/40">
                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" staggerDelay={0.1}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-gray-200">
                      Helps you understand general concepts, terminology, and operational thresholds
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-gray-200">
                      Provides checklists and questions to prepare for professional consultations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-gray-400">
                      Does not replace qualified legal counsel, tax agents, or licensed brokers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-gray-400">
                      Does not provide personalized, case-specific legal or financial recommendations
                    </p>
                  </div>
                </StaggerChildren>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-paper py-24 md:py-36">
        <div className="container-content text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[2rem] md:text-[3rem] text-ink tracking-tight mb-6">
              Ready to explore?
            </h2>
            <p className="text-charcoal/70 text-lg mb-10 max-w-xl mx-auto">
              Start with the topics that matter most to your business.
            </p>
            <Link
              href="/what-we-cover"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-ink text-paper text-[15px] font-medium rounded-full hover:bg-charcoal transition-all duration-300 no-underline shadow-lg shadow-ink/10"
            >
              Explore what we cover
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

interface PlannedTopic {
  id: string;
  category: "Business & Legal" | "Finance" | "Risk & Protection";
  title: string;
  summary: string;
  inquiries: string[];
  operationalImpact: string;
  status: "Under Editorial Review" | "Curriculum Outlined" | "Drafting";
}

const plannedTopics: PlannedTopic[] = [
  {
    id: "contracts-review",
    category: "Business & Legal",
    title: "What to review before signing a commercial agreement.",
    summary:
      "A systematic breakdown of standard commercial terms that look harmless on paper but shift unilateral liability to the small supplier.",
    inquiries: [
      "Identifying uncapped indemnities and consequential loss carve-outs",
      "Termination for convenience clauses and their cash-flow impact",
      "Intellectual property transfer vs licensing definitions",
    ],
    operationalImpact: "Foundational for any business entering B2B client or supplier contracts.",
    status: "Under Editorial Review",
  },
  {
    id: "pricing-vs-cashflow",
    category: "Finance",
    title: "Why pricing and cash flow need completely different conversations.",
    summary:
      "High gross margins do not protect a business if payment cycles and working capital are misaligned. How to evaluate both concurrently.",
    inquiries: [
      "Distinguishing accounting profitability from liquid operating cash",
      "The working capital drag of rapid revenue expansion",
      "Building milestone billing schedules that shield operational runway",
    ],
    operationalImpact: "Essential for growing service agencies, manufacturers, and trade teams.",
    status: "Curriculum Outlined",
  },
  {
    id: "business-risk-audit",
    category: "Risk & Protection",
    title: "Questions to ask when conducting an internal risk review.",
    summary:
      "Risk is not just fire or theft; it is concentrated supplier dependencies, key-person vulnerability, and digital infrastructure interruption.",
    inquiries: [
      "Mapping single-point failures in your supply chain and operations",
      "Evaluating customer concentration risk (what happens if your top client leaves?)",
      "Identifying which operational risks can be insured vs managed internally",
    ],
    operationalImpact: "Critical for founders expanding beyond solo operations to multi-person teams.",
    status: "Under Editorial Review",
  },
  {
    id: "gst-obligations",
    category: "Business & Legal",
    title: "Understanding GST thresholds and operational collection discipline.",
    summary:
      "Why crossing statutory registration thresholds requires immediate recalibration of your quoted prices and cash management practices.",
    inquiries: [
      "The mechanics of collecting statutory taxes on behalf of revenue authorities",
      "Common cash-flow pitfalls when tax liabilities are co-mingled with operating accounts",
      "Input tax credits: verifying valid documentation from subcontractors",
    ],
    operationalImpact: "Required awareness for businesses nearing statutory registration benchmarks.",
    status: "Drafting",
  },
  {
    id: "insurance-architecture",
    category: "Risk & Protection",
    title: "Insurance awareness: decodifying commercial coverage categories.",
    summary:
      "Understanding the distinct functions of Public Liability, Professional Indemnity, Management Liability, and Business Interruption.",
    inquiries: [
      "Why one generic policy never provides blanket commercial coverage",
      "The role of retroactive dates in claims-made policies",
      "Questions to bring to an accredited insurance broker before renewal",
    ],
    operationalImpact: "Vital for all operators before binding commercial insurance policies.",
    status: "Curriculum Outlined",
  },
  {
    id: "accountant-briefing",
    category: "Finance",
    title: "How to prepare your business before meeting a financial professional.",
    summary:
      "How to transform expensive accountant billable hours from basic cleanup into high-leverage strategic advice.",
    inquiries: [
      "The standard file package required for an efficient annual review",
      "Formulating questions around unit economics rather than simple compliance",
      "Setting expectations on proactive advisory versus tax lodgement",
    ],
    operationalImpact: "High return-on-time for any owner working with external CPAs.",
    status: "Drafting",
  },
];

const categories = [
  "All Areas",
  "Business & Legal",
  "Finance",
  "Risk & Protection",
] as const;

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Areas");

  const filteredTopics = plannedTopics.filter((topic) => {
    if (activeCategory === "All Areas") return true;
    return topic.category === activeCategory;
  });

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs items={[{ label: "Insights" }]} />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Editorial Hub · Research Agenda
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                Insights for the decisions that shape your business.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                We translate complicated statutory rules, margin realities, and commercial exposures into plain, actionable frameworks. Our forthcoming editorial dossiers are designed to help you prepare before complications become urgent.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL THESIS / FEATURED PREVIEW ===== */}
      <section className="container-content mb-24 md:mb-32">
        <AnimateOnScroll>
          <div className="bg-paper rounded-3xl p-8 md:p-14 border border-border/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="apple-badge bg-ink text-paper text-[11px]">
                    Upcoming Feature Dossier
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate font-medium">
                    Series 01 · Foundational Literacy
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-4xl text-ink leading-snug mb-6">
                  The Anatomy of a Small-Business Agreement: 5 Clauses Founders Overlook.
                </h2>
                <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
                  Every month, small businesses sign standard counter-party contracts assuming standard means balanced. This upcoming long-form primer explores unilateral indemnity traps, jurisdiction selection, and implicit warranties that expose founders to outsized commercial risk.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate font-medium">
                  <span className="flex items-center gap-1.5 bg-warm-gray px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper" /> Plain-Language Analysis
                  </span>
                  <span className="flex items-center gap-1.5 bg-warm-gray px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper" /> Self-Audit Checklist
                  </span>
                  <span className="flex items-center gap-1.5 bg-warm-gray px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper" /> Specialist Inquiry Prompts
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-warm-gray/60 p-8 rounded-2xl border border-border/70 text-center">
                <BookOpen className="w-10 h-10 text-copper mx-auto mb-4" />
                <h3 className="font-serif text-lg text-ink mb-2">Editorial State</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed mb-4">
                  In final peer and legal review. Articles are published exclusively following strict jurisdictional validation.
                </p>
                <span className="inline-block px-3 py-1 bg-paper border border-border text-[11px] font-semibold text-copper tracking-wider uppercase rounded-full">
                  Scheduled for Vol. 1 Release
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ===== CATEGORY FILTER BAR ===== */}
      <section className="border-b border-border/80 sticky top-16 md:top-[72px] bg-ivory/95 backdrop-blur-md z-30 py-4 mb-16">
        <div className="container-content flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-ink text-paper shadow-sm"
                    : "bg-paper text-slate hover:text-ink hover:bg-warm-gray border border-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate font-medium">
            Showing {filteredTopics.length} Planned Editorial Dossiers
          </div>
        </div>
      </section>

      {/* ===== PLANNED DOSSIERS GRID ===== */}
      <section className="container-content pb-28 md:pb-40">
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-paper rounded-3xl p-8 border border-border/80 shadow-sm flex flex-col justify-between hover:border-copper/40 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="apple-badge bg-warm-gray text-slate text-[11px]">
                    {topic.category}
                  </span>
                  <span className="text-[11px] font-semibold text-copper tracking-wider uppercase">
                    {topic.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-[22px] text-ink mb-4 leading-snug">
                  {topic.title}
                </h3>

                <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                  {topic.summary}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-border/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-slate">
                    Curriculum Core:
                  </p>
                  {topic.inquiries.map((inq, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/90">
                      <span className="text-copper font-serif font-bold">•</span>
                      <span>{inq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 bg-warm-gray/30 -mx-8 -mb-8 p-6 rounded-b-3xl">
                <p className="text-[11px] text-slate font-medium leading-relaxed">
                  <strong className="text-ink">Relevance:</strong> {topic.operationalImpact}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* ===== THE 3-TIER EDITORIAL FRAMEWORK ===== */}
      <section className="py-24 md:py-36 bg-paper border-t border-border/80">
        <div className="container-content">
          <div className="max-w-3xl mb-16 md:mb-20">
            <AnimateOnScroll>
              <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Publication Standard
              </span>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-ink leading-tight tracking-tight">
                How every Lex &amp; Ledger guide is constructed.
              </h2>
              <p className="text-lg text-charcoal/80 mt-4 leading-relaxed">
                We do not write generic blog commentary. Each publication follows a rigorous three-layer editorial architecture designed for maximum practical utility.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ivory border border-border/70">
              <span className="font-serif text-3xl text-copper/40 font-bold block mb-4">
                Layer 01
              </span>
              <h3 className="font-serif text-xl text-ink mb-3">Plain-Language Demystification</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Breaking down statutory language, tax mechanisms, or policy clauses into straightforward operational mechanics. What is actually happening behind the legal jargon?
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-border/70">
              <span className="font-serif text-3xl text-copper/40 font-bold block mb-4">
                Layer 02
              </span>
              <h3 className="font-serif text-xl text-ink mb-3">The Internal Exposure Audit</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Practical, actionable questions founders can evaluate immediately: Where are our copies of subcontractor agreements? What is our average debtor cycle? Are we under-insured?
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-border/70">
              <span className="font-serif text-3xl text-copper/40 font-bold block mb-4">
                Layer 03
              </span>
              <h3 className="font-serif text-xl text-ink mb-3">The Professional Consultation Brief</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                A structured prompt sheet detailing what documents to bring, what questions to ask, and how to verify advice when consulting licensed lawyers, accountants, or brokers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL DISPATCH NOTICE ===== */}
      <section className="py-24 md:py-36 bg-deep-navy text-paper text-center">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                Publishing Schedule
              </span>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-paper leading-tight tracking-tight mb-6">
                Editorial integrity before publishing volume.
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                Rather than flooding business owners with content-marketing fluff, our editorial releases will occur in curated, peer-reviewed quarterly volumes.
              </p>
              <Link
                href="/what-we-cover"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-copper text-paper text-[15px] font-medium rounded-full hover:bg-copper-dark transition-all duration-300 no-underline shadow-lg shadow-copper/20"
              >
                Explore the platform coverage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

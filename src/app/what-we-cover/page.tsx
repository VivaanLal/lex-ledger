"use client";

import Link from "next/link";
import {
  ArrowRight,
  Scale,
  TrendingUp,
  Shield,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const coveragePillars = [
  {
    icon: Scale,
    tag: "Area 01 · Legal Frameworks",
    title: "Business & Legal Awareness",
    summary:
      "Understanding your foundational obligations and statutory boundaries: contracts, consumer rights, intellectual property, GST thresholds, and corporate compliance.",
    bulletPoints: [
      "Contractual terms, risk allocation, and termination rights",
      "Statutory consumer guarantees and commercial fair-trading rules",
      "Protecting brand identity and proprietary operational assets",
      "Entity structuring and ongoing statutory compliance duties",
    ],
    href: "/what-we-cover/business-legal-awareness",
    accent: "copper",
  },
  {
    icon: TrendingUp,
    tag: "Area 02 · Financial Literacy",
    title: "Finance & Business Management",
    summary:
      "Gaining operational command over the numbers that determine survival: gross margins, unit economics, debtor management, and working capital buffers.",
    bulletPoints: [
      "Aligning pricing models with true overhead and margin targets",
      "Managing the timing mismatch between invoicing and cash receipts",
      "Reading management balance sheets for liquidity and solvency",
      "Making capital expenditure and hiring decisions with clarity",
    ],
    href: "/what-we-cover/finance-business-management",
    accent: "ink",
  },
  {
    icon: Shield,
    tag: "Area 03 · Resilience & Safeguards",
    title: "Risk & Protection",
    summary:
      "Identifying operational single-point failures and navigating commercial insurance awareness: understanding policy types, exclusions, and business continuity.",
    bulletPoints: [
      "Auditing supplier dependencies and key-person vulnerabilities",
      "Deconstructing commercial insurance policies (Liability, PI, Cyber)",
      "Lease indemnity covenants and property insurance requirements",
      "Formulating emergency operational continuity protocols",
    ],
    href: "/what-we-cover/risk-protection",
    accent: "charcoal",
  },
];

const whoItsFor = [
  {
    role: "Founders & Solo Operators",
    desc: "Transitioning from skilled practitioner to business owner, taking on contracts and compliance for the first time.",
  },
  {
    role: "Growing Teams (2–20 People)",
    desc: "Experiencing operational complexity where informal handshakes no longer suffice for staff, vendors, and clients.",
  },
  {
    role: "Retail & Service Operators",
    desc: "Managing lease covenants, supplier agreements, variable labor costs, and statutory consumer obligations.",
  },
  {
    role: "Scaling Commercial Enterprises",
    desc: "Preparing for external audits, institutional bank financing, commercial tenders, or shareholder succession.",
  },
];

export default function WhatWeCoverPage() {
  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs items={[{ label: "What We Cover" }]} />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Platform Scope · Three Pillars
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                The parts of business that deserve attention before they become urgent.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Running a business means navigating legal obligations, financial realities, and operational risks simultaneously. These are not isolated silos; they are interconnected systems that together determine your resilience.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== INTERCONNECTED ECOSYSTEM BANNERS ===== */}
      <section className="container-content pb-28 md:pb-40">
        <div className="space-y-12">
          {coveragePillars.map((pillar, idx) => (
            <AnimateOnScroll key={pillar.title} delay={idx * 0.1}>
              <div className="bg-paper rounded-[2.5rem] p-8 md:p-14 border border-border/80 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-warm-gray flex items-center justify-center">
                        <pillar.icon className="w-6 h-6 text-copper" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] font-semibold text-copper">
                        {pillar.tag}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-5">
                      {pillar.title}
                    </h2>

                    <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-8">
                      {pillar.summary}
                    </p>

                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-charcoal transition-colors no-underline shadow-sm"
                    >
                      Examine {pillar.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="lg:col-span-6 bg-ivory rounded-3xl p-8 border border-border/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate block mb-4">
                      Core Subject Areas Explored:
                    </span>
                    <div className="space-y-3.5">
                      {pillar.bulletPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-charcoal">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ===== WHO THIS IS FOR / WHAT THIS IS NOT ===== */}
      <section className="py-24 md:py-36 bg-paper border-y border-border/80">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Who This Is For */}
            <div className="lg:col-span-7">
              <AnimateOnScroll>
                <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                  Operator Profile
                </span>
                <h2 className="font-serif text-[2rem] md:text-[3rem] text-ink leading-tight mb-8">
                  Who Lex &amp; Ledger is built for.
                </h2>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whoItsFor.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-ivory border border-border/70">
                    <h3 className="font-serif text-lg text-ink mb-2">
                      {item.role}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What This Is Not */}
            <div className="lg:col-span-5">
              <AnimateOnScroll delay={0.2}>
                <div className="p-8 md:p-10 rounded-3xl bg-warm-gray/60 border border-border">
                  <div className="w-12 h-12 rounded-2xl bg-copper/10 flex items-center justify-center mb-6">
                    <AlertCircle className="w-6 h-6 text-copper" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-4">
                    What this platform is not.
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm text-charcoal/85 leading-relaxed">
                    <p>
                      Lex &amp; Ledger is <strong>not</strong> a law firm, registered tax accounting practice, licensed insurance brokerage, or wealth advisory company.
                    </p>
                    <p>
                      We do not execute binding legal filings, draft bespoke litigation documents, calculate final statutory tax returns, or bind insurance coverage.
                    </p>
                    <p className="p-4 rounded-xl bg-paper border border-border text-ink font-medium">
                      Where regulated professional advice is required, we actively guide operators to engage accredited, licensed specialists who have full visibility over their specific commercial circumstances.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CLOSING STATEMENT ===== */}
      <section className="py-24 md:py-36 bg-deep-navy text-paper text-center">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-paper leading-tight tracking-tight mb-6">
                Clarity before complexity.
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                Understanding these three disciplines gives small-business owners the confidence to build and grow without fear of the unexpected.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-copper text-paper text-[15px] font-medium rounded-full hover:bg-copper-dark transition-all duration-300 no-underline shadow-lg shadow-copper/20"
              >
                Understand how our platform works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

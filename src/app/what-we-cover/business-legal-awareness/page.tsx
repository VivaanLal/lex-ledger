"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  ArrowRight,
  Scale,
  FileText,
  CheckCircle2,
  Shield,
  Users,
  Info,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

const coreTopics = [
  {
    icon: FileText,
    title: "Contracts & Commercial Agreements",
    desc: "Understanding the essential architecture of agreements with customers, subcontractors, and vendors. We examine indemnity clauses, termination terms, and dispute mechanisms.",
    keyQuestions: "Are liabilities mutual? What events trigger immediate termination? Where is dispute resolution seated?",
  },
  {
    icon: Users,
    title: "Consumer Rights & Guarantees",
    desc: "Navigating statutory consumer protections, non-excludable guarantees, representations, and fair-trading practices that govern your products and customer interactions.",
    keyQuestions: "Do your refund terms inadvertently breach statutory guarantees? Are representations clear and substantiated?",
  },
  {
    icon: Shield,
    title: "Intellectual Property & Brand Assets",
    desc: "Identifying proprietary commercial value: trade marks, copyright in deliverables, trade secrets, and ensuring proper IP assignment from contractors and staff.",
    keyQuestions: "Does your company own work produced by external freelancers? Have you documented brand asset rights?",
  },
  {
    icon: Scale,
    title: "Statutory Tax & GST Thresholds",
    desc: "Understanding compulsory turnover registration requirements, invoicing protocol, and the operational separation of statutory tax receipts from working capital.",
    keyQuestions: "Is your business approaching compulsory registration? Are your customer quotes calculated inclusive or exclusive of tax?",
  },
  {
    icon: CheckCircle2,
    title: "Regulatory Compliance & Licensing",
    desc: "Navigating jurisdictional requirements, industry-specific operational permits, privacy principles for customer records, and workplace compliance duties.",
    keyQuestions: "Are operating permits current? How is customer data stored, secured, and retired?",
  },
];

const questionsWorthAsking = [
  "Do we have signed, countersigned written agreements in place for our top three customer relationships?",
  "Are our standard terms of trade accessible prior to customer payment, or only sent afterward on an invoice?",
  "Have we identified which operational assets and customer lists constitute our protected commercial intellectual property?",
  "Is our projected turnover approaching compulsory GST registration within the next 3 to 6 months?",
  "Do our contractor agreements contain explicit intellectual property assignment clauses?",
];

export default function BusinessLegalPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs
          items={[
            { label: "What We Cover", href: "/what-we-cover" },
            { label: "Business & Legal Awareness" },
          ]}
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Subject Area · Pillar 01
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                Business &amp; Legal Awareness.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Knowing your statutory obligations and contractual rights is the baseline for sustainable enterprise. We build foundational awareness so you can make informed decisions before disputes arise.
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
                Why legal awareness matters to a growing business.
              </h2>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed mb-6">
                Ignorance is never a legal defence. In commercial operations, casual misunderstandings around contract terms, consumer guarantees, or tax registration compound quietly until an invoice is withheld, a customer disputes an agreement, or a regulatory body audits an entity.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed font-medium">
                Developing foundational awareness allows business owners to negotiate more equitable terms, safeguard brand value, and enter professional consultations with clarity rather than panic.
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
                Core topics we demystify.
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
                    When to engage an accredited legal professional.
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Lex &amp; Ledger provides general commercial awareness. You should immediately consult a registered legal practitioner when facing:
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Drafting or negotiating bespoke commercial contracts or master agreements</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Formal trademark registration, patent filings, or copyright infringement notices</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Managing contentious customer disputes, debt recovery proceedings, or litigation</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Shareholder agreements, equity vesting, or structural corporate restructures</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-paper/5 border border-gray-700 text-xs text-gray-400 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      General educational materials provided here do not constitute legal advice or formal representation under any jurisdiction.
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
              href="/what-we-cover/finance-business-management"
              className="w-full sm:w-auto px-8 py-4 bg-paper border border-border/80 rounded-full text-sm font-medium text-ink hover:border-copper transition-all shadow-sm"
            >
              Finance &amp; Business Management &rarr;
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

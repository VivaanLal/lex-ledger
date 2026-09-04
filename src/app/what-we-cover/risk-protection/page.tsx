"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  Umbrella,
  RotateCcw,
  Link as LinkIcon,
  Info,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

const coreTopics = [
  {
    icon: AlertTriangle,
    title: "Understanding Operational Exposure",
    desc: "Mapping risks across business model, industry, physical location, personnel, assets, supply chain, and customer dependencies. Identifying hidden single points of failure.",
    keyQuestions: "What happens if a primary supplier halts operations? Which internal processes rely solely on one person?",
  },
  {
    icon: Umbrella,
    title: "Commercial Insurance Awareness",
    desc: "Understanding insurance as a risk-transfer mechanism: how policy wordings function, definitions of insured events, deductibles/excesses, and common exclusion clauses.",
    keyQuestions: "What is the difference between claims-made and occurrence policies? Why does notification timing matter?",
  },
  {
    icon: Shield,
    title: "Deconstructing Coverage Categories",
    desc: "High-level literacy around standard commercial lines: Public Liability, Professional Indemnity, Management Liability, Cyber Interruption, and Asset Protection.",
    keyQuestions: "Does your commercial lease mandate specific public liability limits? Does your service work require indemnity coverage?",
  },
  {
    icon: RotateCcw,
    title: "Business Continuity & Crisis Scenarios",
    desc: "Developing basic operational contingency plans: digital data redundancy, emergency cash flow reserves, disaster recovery, and key-person incapacitation protocols.",
    keyQuestions: "How many days could operations continue during an IT blackout or physical facility closure?",
  },
  {
    icon: LinkIcon,
    title: "Supplier & Contractual Risk Pass-Through",
    desc: "Evaluating how upstream and downstream commercial contracts allocate risk, including indemnity covenants, performance bonds, and limitation of liability.",
    keyQuestions: "Are you accepting uncapped liability for events caused by subcontractors? Do your client contracts demand uninsured risks?",
  },
];

const questionsWorthAsking = [
  "Do we have an up-to-date schedule of all commercial insurance policies, renewal dates, and certificates of currency?",
  "Are our insured property and stock replacement values based on original purchase prices or current replacement costs?",
  "If our cloud software, payment gateway, or server infrastructure went offline for 72 hours, what is our manual backup protocol?",
  "Have our operational risks changed (e.g. new products, new locations, hiring staff) without notifying our insurance broker?",
  "Do any of our major client contracts impose indemnity obligations that fall outside our current insurance policy coverage?",
];

export default function RiskProtectionPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs
          items={[
            { label: "What We Cover", href: "/what-we-cover" },
            { label: "Risk & Protection" },
          ]}
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Subject Area · Pillar 03
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                Risk &amp; Protection.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Risk varies across business model, sector, location, assets, people, and suppliers. We help you identify vulnerabilities early and build insurance awareness so you are prepared for unexpected disruptions.
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
                Why risk awareness matters to a growing business.
              </h2>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed mb-6">
                Most small-business owners only examine risk after an incident occurs: a water leak damages physical stock, an employee suffers an injury, a ransomware attack locks business files, or a client issues a formal claim. At that point, options are narrow and expensive.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-relaxed font-medium">
                Understanding risk beforehand enables founders to decide which operational exposures can be eliminated, which should be managed internally through procedure, and which should be transferred to insurance providers.
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
                Core topics we deconstruct.
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
                    When to engage an accredited insurance broker or specialist.
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Lex &amp; Ledger provides general educational risk concepts. You should consult a licensed insurance broker or qualified risk advisor when:
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Selecting specific insurance policies, negotiating deductibles, or binding coverage</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Determining legally required coverage limits (e.g. workers compensation or statutory requirements)</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Reviewing landlord lease insurance covenants or enterprise client contract insurance schedules</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                      <ArrowRight className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>Preparing and lodging formal insurance claims following a commercial loss event</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-paper/5 border border-gray-700 text-xs text-gray-400 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>
                      Lex &amp; Ledger does not underwrite, broker, sell, or advise on specific insurance products or policy terms.
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
              href="/what-we-cover/finance-business-management"
              className="w-full sm:w-auto px-8 py-4 bg-paper border border-border/80 rounded-full text-sm font-medium text-ink hover:border-copper transition-all shadow-sm"
            >
              Finance &amp; Business Management &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

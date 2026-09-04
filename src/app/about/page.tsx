"use client";

import Link from "next/link";
import {
  ArrowRight,
  Lock,
  FileCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

const principles = [
  {
    number: "01",
    title: "Understanding precedes protection.",
    description:
      "A contract or an insurance certificate is only as protective as your understanding of what it actually covers. We believe operational literacy is the first and most durable line of defence for any business.",
    subtext: "Clarity over complexity.",
  },
  {
    number: "02",
    title: "Clarity should not require a retainer.",
    description:
      "Small-business owners shouldn't have to hire a multi-disciplinary advisory board just to understand basic compliance thresholds, margin structures, or commercial terms.",
    subtext: "Democratising foundational context.",
  },
  {
    number: "03",
    title: "Prudence means knowing when to step back.",
    description:
      "We are deliberate about our boundaries. We do not provide regulated legal, financial, or tax advice. Teaching entrepreneurs when, why, and how to engage accredited specialists is our core responsibility.",
    subtext: "Respect for regulated practice.",
  },
  {
    number: "04",
    title: "Prepared businesses spend less on crises.",
    description:
      "Engaging a lawyer or forensic accountant after a breakdown is expensive. Entering that same conversation with structured questions, clean records, and precise context produces faster, better outcomes.",
    subtext: "Lower friction, superior counsel.",
  },
];

const comparativeModel = [
  {
    trait: "Typical Advisory Encounter",
    modelA: "Triggered by acute crisis, breach, or audit notice",
    modelB: "Proactive baseline awareness from day one",
  },
  {
    trait: "Cost Profile",
    modelA: "Emergency hourly rates and dispute resolution expense",
    modelB: "Structured educational investment and planned specialist consults",
  },
  {
    trait: "Founder Position",
    modelA: "Reactive, defensive, rushed, and disoriented",
    modelB: "Informed, deliberate, calm, and organized",
  },
  {
    trait: "Outcome",
    modelA: "Damage control and compromise",
    modelB: "Long-term operational resilience and sustainable growth",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-24 md:pt-20 md:pb-36">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Our Philosophy · We Stay
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                A business-support platform for the parts of growth that are easy to overlook.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Most commercial support systems are built for the aftermath. A disputed contract. A compliance notice. An unforeseen cash deficit. Lex &amp; Ledger is built to be there continuously — before small uncertainties turn into expensive liabilities.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC EDITORIAL IMAGERY ===== */}
      <section className="container-content mb-28 md:mb-40">
        <AnimateOnScroll duration={1}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/80">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=85"
                alt="Small leadership team reviewing business documents collaboratively"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-xl text-paper">
                <p className="text-xs uppercase tracking-[0.2em] text-copper-light font-semibold mb-2">
                  Editorial Observation
                </p>
                <p className="text-lg md:text-xl font-serif leading-snug">
                  &ldquo;A business does not fail from what it plans for. It stumbles in the quiet blind spots between legal, financial, and risk obligations.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ===== THE "WE STAY" PRINCIPLE ===== */}
      <section className="py-24 md:py-36 bg-paper border-y border-border/80">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll>
                <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                  The Core Idea
                </span>
                <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-ink leading-tight tracking-tight mb-6">
                  We stay.
                </h2>
                <p className="text-lg text-charcoal/85 leading-relaxed mb-6">
                  Traditional professional services are episodic. They engage for a transaction, an annual filing, or an emergency hearing — and then they leave.
                </p>
                <p className="text-lg text-charcoal/85 leading-relaxed font-medium">
                  Lex &amp; Ledger is deliberately positioned as an ongoing presence. We stay alongside business owners as day-to-day decisions compound, providing the scaffolding needed to spot exposure early.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7">
              <AnimateOnScroll delay={0.2}>
                <div className="bg-ivory rounded-3xl p-8 md:p-12 border border-border/80">
                  <h3 className="text-xs font-semibold text-slate uppercase tracking-[0.2em] mb-8">
                    Rethinking Business Guidance
                  </h3>

                  <div className="space-y-6">
                    {comparativeModel.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-paper border border-border/60 shadow-sm"
                      >
                        <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">
                          {item.trait}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="p-3 bg-warm-gray/40 rounded-xl text-slate">
                            <span className="block text-[11px] uppercase font-bold text-slate/70 mb-1">Conventional Approach</span>
                            {item.modelA}
                          </div>
                          <div className="p-3 bg-copper/5 rounded-xl text-ink font-medium border border-copper/15">
                            <span className="block text-[11px] uppercase font-bold text-copper mb-1">Lex &amp; Ledger Framework</span>
                            {item.modelB}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUR FOUNDATIONAL PILLARS ===== */}
      <section className="py-24 md:py-40 bg-warm-gray">
        <div className="container-content">
          <div className="max-w-3xl mb-16 md:mb-24">
            <AnimateOnScroll>
              <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Foundational Tenets
              </span>
              <h2 className="font-serif text-[2.25rem] md:text-[3.25rem] text-ink leading-tight tracking-tight">
                What we stand on.
              </h2>
            </AnimateOnScroll>
          </div>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.12}
          >
            {principles.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-paper rounded-3xl p-8 md:p-12 border border-border/80 shadow-sm flex flex-col justify-between hover:border-copper/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-4xl text-copper/30 font-bold">
                      {pillar.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-slate font-medium">
                      {pillar.subtext}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal/80 text-base md:text-[17px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== GOVERNANCE & EDITORIAL CHARTER ===== */}
      <section className="py-24 md:py-36 bg-paper border-b border-border/80">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <span className="text-copper text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                  Institutional Integrity
                </span>
                <h2 className="font-serif text-[2rem] md:text-[3rem] text-ink leading-tight">
                  Transparent standards and stewardship.
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-ivory border border-border/70">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-serif text-xl text-ink mb-3">No Commercial Referral Bias</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Lex &amp; Ledger does not take referral commissions, lead-generation bounty, or hidden sponsor placements from law firms, insurers, or lenders. Our education remains objective and focused entirely on the operator&apos;s interest.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-ivory border border-border/70">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-serif text-xl text-ink mb-3">Explicit Regulatory Boundary</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  We state clearly and repeatedly that general educational materials cannot replace qualified, registered legal practitioners or accredited financial advisers who understand your specific jurisdiction and circumstances.
                </p>
              </div>
            </div>

            {/* Team / Stewardship note strictly as placeholder note */}
            <div className="p-8 rounded-3xl bg-warm-gray/60 border border-border text-center">
              <p className="text-xs uppercase tracking-[0.16em] text-slate font-semibold mb-2">
                Governance Note
              </p>
              <p className="text-charcoal text-sm leading-relaxed max-w-2xl mx-auto">
                The founding team, editorial review board, and academic advisors for Lex &amp; Ledger will be published ahead of our general public release. We believe credentials should be verified, transparent, and grounded in rigorous commercial practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING STATEMENT ===== */}
      <section className="py-28 md:py-44 bg-deep-navy text-center text-paper">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <p className="text-copper text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Understand · Protect · Grow
              </p>
              <h2 className="font-serif text-[2.5rem] md:text-[3.75rem] text-paper leading-tight tracking-tight mb-8">
                Building businesses that endure.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Preparedness is not a single milestone. It is a posture of looking closely at what you are doing before someone else has to inspect it.
              </p>
              <Link
                href="/what-we-cover"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-copper text-paper text-[15px] font-medium rounded-full hover:bg-copper-dark transition-all duration-300 no-underline shadow-lg shadow-copper/20"
              >
                Explore our coverage areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

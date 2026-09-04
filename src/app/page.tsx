"use client";

import Link from "next/link";
import {
  ArrowRight,
  Scale,
  TrendingUp,
  Shield,
  Eye,
  BookOpen,
  ClipboardList,
  UserCheck,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerChildren,
} from "@/components/ui/AnimateOnScroll";

const coverageAreas = [
  {
    icon: Scale,
    title: "Business & Legal Awareness",
    description:
      "GST. Contracts. Consumer rights. Intellectual property. Compliance. The obligations that shape how your business operates — explained before they become problems.",
    href: "/what-we-cover/business-legal-awareness",
  },
  {
    icon: TrendingUp,
    title: "Finance & Business Management",
    description:
      "Pricing. Margins. Cash flow. Business numbers. The financial decisions that determine whether your business is growing — or just busy.",
    href: "/what-we-cover/finance-business-management",
  },
  {
    icon: Shield,
    title: "Risk & Protection",
    description:
      "Business risks. Insurance awareness. Types of coverage. What happens when something unexpected occurs — and what you can do before it does.",
    href: "/what-we-cover/risk-protection",
  },
];

const steps = [
  {
    icon: Eye,
    number: "01",
    title: "Notice",
    description: "Identify the decisions and obligations that may affect your business.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Understand",
    description: "Learn the basic concepts in clear, practical language.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Prepare",
    description: "Gather information, ask better questions, and plan ahead.",
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Get the right help",
    description: "Bring in a qualified professional when the issue requires it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Full viewport, centred, Apple-style ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-ivory overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.07]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/80 to-ivory" />
        </div>

        <div className="relative container-content text-center py-24 md:py-32">
          <AnimateOnScroll duration={1} delay={0.1}>
            <p className="text-copper text-ui font-medium tracking-widest uppercase mb-6">
              Understand · Protect · Grow
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll duration={1} delay={0.25}>
            <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-ink tracking-tight max-w-5xl mx-auto">
              The things that help
              <br />
              a business stay ready.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll duration={1} delay={0.5}>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mt-8 leading-relaxed">
              Running a business is more than making sales. Lex &amp; Ledger
              helps small-business owners understand the legal, financial, and
              risk-related decisions they navigate as they grow.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll duration={0.8} delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                href="/what-we-cover"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-ink text-paper text-[15px] font-medium rounded-full hover:bg-charcoal transition-all duration-300 no-underline shadow-lg shadow-ink/10"
              >
                Explore what we cover
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-6 py-4 text-[15px] font-medium text-charcoal hover:text-ink transition-colors duration-200 no-underline"
              >
                Why Lex &amp; Ledger exists
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== EDITORIAL IMAGE BREAK ===== */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="Business owner reviewing important documents at a desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <AnimateOnScroll>
            <p className="text-paper/70 text-sm tracking-widest uppercase">
              Clarity before complexity
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WE STAY — Big typography section ===== */}
      <section className="bg-paper py-24 md:py-40">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] text-ink leading-[1.15] tracking-tight">
                We do not wait
                <br />
                <span className="text-copper">for the problem.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-lg md:text-xl text-charcoal/80 mt-8 md:mt-12 max-w-2xl leading-relaxed">
                Most business owners think about contracts, GST, cash flow,
                compliance, insurance, and protection when something has already
                gone wrong.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-lg md:text-xl text-charcoal mt-6 max-w-2xl leading-relaxed font-medium">
                Lex &amp; Ledger exists to make those conversations easier to
                start earlier.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.35}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-10 text-copper text-[15px] font-medium hover:text-copper-dark transition-colors no-underline group"
              >
                Read our philosophy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== THREE COVERAGE AREAS — Large cards ===== */}
      <section className="bg-warm-gray py-24 md:py-40">
        <div className="container-content">
          <AnimateOnScroll>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-serif text-[2rem] md:text-[3rem] text-ink tracking-tight">
                Three areas that deserve
                <br className="hidden md:block" />
                your attention.
              </h2>
            </div>
          </AnimateOnScroll>

          <StaggerChildren
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
            staggerDelay={0.15}
          >
            {coverageAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group relative bg-paper rounded-3xl p-10 lg:p-12 border border-border/50 hover:border-copper/20 hover:shadow-2xl hover:shadow-copper/5 transition-all duration-500 no-underline flex flex-col min-h-[360px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-warm-gray flex items-center justify-center mb-8 group-hover:bg-copper/10 transition-colors duration-500">
                  <area.icon className="w-7 h-7 text-charcoal group-hover:text-copper transition-colors duration-500" />
                </div>

                <h3 className="font-serif text-2xl md:text-[1.75rem] text-ink mb-4 leading-snug">
                  {area.title}
                </h3>

                <p className="text-[15px] text-charcoal/70 leading-relaxed flex-1">
                  {area.description}
                </p>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <span className="inline-flex items-center gap-2 text-[14px] font-medium text-copper group-hover:text-copper-dark transition-colors">
                    Explore this area
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== FOUR STEP PROCESS — Cinematic ===== */}
      <section className="bg-deep-navy py-24 md:py-40 overflow-hidden">
        <div className="container-content">
          <AnimateOnScroll>
            <div className="text-center mb-16 md:mb-24">
              <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
                How it works
              </p>
              <h2 className="font-serif text-[2rem] md:text-[3rem] text-paper tracking-tight">
                A clearer way to think about
                <br className="hidden md:block" />
                what comes next.
              </h2>
            </div>
          </AnimateOnScroll>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700/30 rounded-3xl overflow-hidden"
            staggerDelay={0.12}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-deep-navy p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-copper/40 font-serif text-[2.5rem] leading-none">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-paper/5 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-copper" />
                  </div>
                </div>
                <h3 className="text-paper text-lg font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerChildren>

          <AnimateOnScroll delay={0.3}>
            <div className="text-center mt-16">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-copper text-[15px] font-medium hover:text-copper-light transition-colors no-underline group"
              >
                See how it works in detail
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== CREDIBILITY — Clean, confident ===== */}
      <section className="bg-paper py-24 md:py-40">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-ink tracking-tight mb-8">
                Practical awareness
                <br />
                for real businesses.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                Lex &amp; Ledger is designed to help business owners ask better
                questions and prepare more thoughtfully. We provide educational
                information and structured guidance — not regulated professional
                advice.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-[15px] text-slate leading-relaxed">
                Where a decision depends on your specific circumstances, we
                encourage you to work with an appropriately qualified
                professional.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CLOSING — Full-width dark, cinematic ===== */}
      <section className="relative bg-ink py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal/20 via-transparent to-transparent" />

        <div className="relative container-content text-center">
          <AnimateOnScroll duration={1}>
            <h2 className="font-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-paper tracking-tight leading-[1.05]">
              Understand.
              <br />
              Protect. Grow.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-xl mx-auto leading-relaxed">
              A business does not become prepared by knowing everything at once.
              It becomes prepared by knowing what to look at next.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.5}>
            <Link
              href="/what-we-cover"
              className="group inline-flex items-center gap-2.5 mt-12 px-8 py-4 bg-copper text-paper text-[15px] font-medium rounded-full hover:bg-copper-dark transition-all duration-300 no-underline"
            >
              Start with what we cover
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

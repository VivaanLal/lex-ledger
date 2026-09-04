"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Link as LinkedinIcon,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  Clock,
  Info,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface PreparationGuide {
  area: string;
  recommendedDocs: string[];
  initialQuestions: string[];
}

const preparationGuides: Record<string, PreparationGuide> = {
  legal: {
    area: "Business & Legal Awareness",
    recommendedDocs: [
      "Current master services agreements or client contract templates",
      "Standard terms of trade and customer-facing refund policies",
      "Subcontractor and supplier agreements currently in force",
    ],
    initialQuestions: [
      "Are your contract termination and liability provisions mutual?",
      "Do your customer terms reflect statutory consumer guarantees in your jurisdiction?",
      "Is your brand name or intellectual property documented and registered?",
    ],
  },
  finance: {
    area: "Finance & Business Management",
    recommendedDocs: [
      "Trailing 12-month profit and loss statement and balance sheet",
      "Accounts receivable aging summary (30/60/90+ days)",
      "Standard pricing schedule with estimated gross margin calculations",
    ],
    initialQuestions: [
      "What is your liquid working capital buffer relative to fixed monthly overhead?",
      "Which client or service line generates your highest cash margin?",
      "How are you managing future tax liabilities separately from operational cash?",
    ],
  },
  risk: {
    area: "Risk & Protection",
    recommendedDocs: [
      "Current schedules of business insurance policies and certificates of currency",
      "Key supplier contracts and single-source dependency list",
      "Basic business continuity and data backup protocol documentation",
    ],
    initialQuestions: [
      "If your primary operating location or digital system was interrupted, what is your fallback?",
      "Are your insurance policy limits aligned with your current contract requirements?",
      "Have you identified key-person dependencies within your operational workflow?",
    ],
  },
};

export default function ContactPage() {
  const [selectedArea, setSelectedArea] = useState<"legal" | "finance" | "risk">("legal");
  const [showSubmittedModal, setShowSubmittedModal] = useState(false);

  const activeGuide = preparationGuides[selectedArea];

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      {/* Breadcrumbs */}
      <div className="container-content pt-6">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="container-content">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <span className="apple-badge bg-copper/10 text-copper mb-6">
                Communication Channels · Inquiries
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] text-ink leading-[1.08] tracking-tight">
                Start a conversation when you are ready.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <p className="text-xl md:text-2xl text-charcoal/80 font-light mt-8 leading-relaxed max-w-3xl">
                Genuine contact channels will be added once confirmed. In the interim, explore our pre-inquiry preparation guidelines to structure your business questions with precision.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CHANNELS & PREPARATION MATRIX ===== */}
      <section className="container-content pb-24 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Formal Channels & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <AnimateOnScroll>
              <h2 className="font-serif text-2xl md:text-3xl text-ink tracking-tight mb-6">
                Platform Registry
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed mb-8">
                To maintain institutional transparency, contact channels below are formally designated pending final operational registration and regulatory intake verification.
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-paper border border-border/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate flex items-center gap-2">
                      <Mail className="w-4 h-4 text-copper" /> Direct Email Desk
                    </span>
                    <span className="text-[10px] font-bold text-copper uppercase px-2 py-0.5 bg-copper/10 rounded">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm font-mono text-slate bg-warm-gray/60 p-2.5 rounded-lg border border-border/50">
                    [Business email to be added]
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-border/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate flex items-center gap-2">
                      <Phone className="w-4 h-4 text-copper" /> Telephone Inquiries
                    </span>
                    <span className="text-[10px] font-bold text-copper uppercase px-2 py-0.5 bg-copper/10 rounded">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm font-mono text-slate bg-warm-gray/60 p-2.5 rounded-lg border border-border/50">
                    [Phone number to be added, if applicable]
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-border/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-copper" /> Geographic Scope
                    </span>
                    <span className="text-[10px] font-bold text-copper uppercase px-2 py-0.5 bg-copper/10 rounded">
                      To Confirm
                    </span>
                  </div>
                  <p className="text-sm font-mono text-slate bg-warm-gray/60 p-2.5 rounded-lg border border-border/50">
                    [Service region to be confirmed]
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-border/80 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-copper" /> Professional Network
                    </span>
                    <span className="text-[10px] font-bold text-copper uppercase px-2 py-0.5 bg-copper/10 rounded">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm font-mono text-slate bg-warm-gray/60 p-2.5 rounded-lg border border-border/50">
                    [LinkedIn URL to be added, if applicable]
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Operating Protocol */}
            <AnimateOnScroll delay={0.2}>
              <div className="p-6 rounded-2xl bg-warm-gray/60 border border-border/70 text-xs text-charcoal/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-ink">
                  <Clock className="w-4 h-4 text-copper" /> Inquiries Notice
                </div>
                <p>
                  Official inquiries will be reviewed during standard business hours. Initial onboarding will be capped to maintain rigorous review standards.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Pre-Inquiry Preparation Tool & Form State */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Interactive Preparation Selector */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-paper rounded-3xl p-8 md:p-10 border border-border/80 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                    Pre-Inquiry Tool
                  </span>
                  <span className="text-xs text-slate">Self-Preparation</span>
                </div>

                <h3 className="font-serif text-2xl text-ink mb-3">
                  What area is your business addressing?
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                  Select your primary focus area to view what documents and context will yield the most productive discussion.
                </p>

                {/* Switcher Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-8 bg-warm-gray/60 p-1.5 rounded-2xl border border-border/50">
                  <button
                    onClick={() => setSelectedArea("legal")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                      selectedArea === "legal"
                        ? "bg-ink text-paper shadow-sm"
                        : "text-slate hover:text-ink"
                    }`}
                  >
                    Business &amp; Legal
                  </button>
                  <button
                    onClick={() => setSelectedArea("finance")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                      selectedArea === "finance"
                        ? "bg-ink text-paper shadow-sm"
                        : "text-slate hover:text-ink"
                    }`}
                  >
                    Finance &amp; Numbers
                  </button>
                  <button
                    onClick={() => setSelectedArea("risk")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                      selectedArea === "risk"
                        ? "bg-ink text-paper shadow-sm"
                        : "text-slate hover:text-ink"
                    }`}
                  >
                    Risk &amp; Protection
                  </button>
                </div>

                {/* Dynamic Checklist */}
                <div className="space-y-6 bg-ivory p-6 rounded-2xl border border-border/60">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate mb-3">
                      Recommended Documents to Collate:
                    </h4>
                    <div className="space-y-2">
                      {activeGuide.recommendedDocs.map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate mb-3">
                      Initial Internal Inquiries:
                    </h4>
                    <div className="space-y-2">
                      {activeGuide.initialQuestions.map((q, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal">
                          <HelpCircle className="w-4 h-4 text-slate shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Inquiry Form Design State */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-paper rounded-3xl p-8 md:p-10 border border-border/80 shadow-md relative">
                
                {/* Internal CMS Implementation Note */}
                <div className="mb-6 p-4 rounded-xl bg-warm-gray border border-border/80 flex items-start gap-3">
                  <Info className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal/80 leading-relaxed">
                    <strong className="text-ink font-semibold block mb-0.5">
                      Implementation Note:
                    </strong>
                    Enquiry form — connect backend before launch. This interface demonstrates the prospective inquiry capture flow. No transmission occurs in preview mode.
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-ink mb-6">
                  General Inquiry Interface
                </h3>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowSubmittedModal(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 bg-ivory border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-business" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                        Business / Trade Name
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        placeholder="e.g. Vance Trading Co."
                        className="w-full px-4 py-3 bg-ivory border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. contact@vancetrading.com"
                      className="w-full px-4 py-3 bg-ivory border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-copper transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-summary" className="text-xs font-semibold text-charcoal uppercase tracking-wider">
                      General Operational Inquiries (Non-Confidential)
                    </label>
                    <textarea
                      id="contact-summary"
                      rows={4}
                      placeholder="Briefly describe the operational topic or decision framework you are currently reviewing..."
                      className="w-full px-4 py-3 bg-ivory border border-border rounded-xl text-sm text-ink focus:outline-none focus:border-copper transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-ink text-paper text-sm font-medium rounded-full hover:bg-charcoal transition-all duration-200"
                    >
                      Preview Submission Flow
                    </button>
                  </div>
                </form>

                {/* Modal notification for preview state */}
                {showSubmittedModal && (
                  <div className="absolute inset-0 bg-paper/95 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-center text-center z-20">
                    <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-copper" />
                    </div>
                    <h4 className="font-serif text-2xl text-ink mb-2">Form Structure Validated</h4>
                    <p className="text-sm text-charcoal/80 max-w-md leading-relaxed mb-6">
                      This inquiry form is correctly rendered as a project design state. Live submissions will be accepted once the secure backend and verified privacy workflow are connected prior to official public launch.
                    </p>
                    <button
                      onClick={() => setShowSubmittedModal(false)}
                      className="px-6 py-2.5 bg-ink text-paper text-xs font-medium rounded-full hover:bg-charcoal transition-colors"
                    >
                      Close Notice
                    </button>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </section>

      {/* ===== PRIVACY & REGULATORY SAFE HARBOR ===== */}
      <section className="py-16 md:py-24 bg-paper border-t border-border/80">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-warm-gray flex items-center justify-center mx-auto mb-6">
              <ShieldAlert className="w-6 h-6 text-slate" />
            </div>
            <h3 className="font-serif text-xl text-ink mb-3">
              Confidentiality &amp; Regulatory Safe Harbor
            </h3>
            <p className="text-xs md:text-sm text-slate leading-relaxed">
              Do not transmit sensitive financial statements, trade secrets, passwords, or privileged dispute correspondence through general web forms. Lex &amp; Ledger provides general educational frameworks and does not create an attorney-client or licensed advisory relationship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

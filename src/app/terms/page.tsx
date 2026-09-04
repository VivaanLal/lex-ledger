import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use | Lex & Ledger',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ivory fade-in">
      <div className="section-padding container-content">
        <Breadcrumbs items={[{ label: 'Terms of Use' }]} />
        
        <div className="container-prose mt-8">
          <h1 className="text-h1 font-serif text-ink mb-6">Terms of Use</h1>
          
          <div className="bg-warm-gray p-6 rounded-lg mb-10 border border-border">
            <p className="text-body text-charcoal font-medium">
              Note: These terms of use are a placeholder structure. They will be completed with jurisdiction-specific content once the relevant legal review is finalised.
            </p>
            <p className="text-sm text-charcoal mt-2">
              Last updated: [Date to be confirmed]
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">1. Acceptance of Terms</h2>
              <p className="text-body text-charcoal">Details regarding user acceptance of these terms will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">2. Use of the Platform</h2>
              <p className="text-body text-charcoal">Rules and guidelines for using the platform will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">3. Intellectual Property</h2>
              <p className="text-body text-charcoal">Information about intellectual property rights will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">4. Limitation of Liability</h2>
              <p className="text-body text-charcoal">Clauses limiting the liability of Lex & Ledger will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">5. Governing Law</h2>
              <p className="text-body text-charcoal">The jurisdiction and governing laws applicable to these terms will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">6. Changes to Terms</h2>
              <p className="text-body text-charcoal">Our policy regarding updates and changes to these terms will be documented here once confirmed.</p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">7. Contact</h2>
              <p className="text-body text-charcoal">Contact information for terms-related inquiries will be added here. ([Business email to be added])</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

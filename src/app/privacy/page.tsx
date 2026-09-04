import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lex & Ledger',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ivory fade-in">
      <div className="section-padding container-content">
        <Breadcrumbs items={[{ label: 'Privacy' }]} />
        
        <div className="container-prose mt-8">
          <h1 className="text-h1 font-serif text-ink mb-6">Privacy Policy</h1>
          
          <div className="bg-warm-gray p-6 rounded-lg mb-10 border border-border">
            <p className="text-body text-charcoal font-medium">
              Note: This privacy policy is a placeholder structure. It will be completed with jurisdiction-specific content once the relevant legal review is finalised.
            </p>
            <p className="text-sm text-charcoal mt-2">
              Last updated: [Date to be confirmed]
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">1. Information We Collect</h2>
              <p className="text-body text-charcoal">Details about data collection practices will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">2. How We Use Information</h2>
              <p className="text-body text-charcoal">Details about how collected information is used will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">3. Information Sharing</h2>
              <p className="text-body text-charcoal">Policies regarding the sharing of information with third parties will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">4. Data Security</h2>
              <p className="text-body text-charcoal">Measures taken to secure your data will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">5. Your Rights</h2>
              <p className="text-body text-charcoal">Information regarding user rights concerning their data will be documented here once confirmed.</p>
            </section>
            
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">6. Contact</h2>
              <p className="text-body text-charcoal">Contact information for privacy-related inquiries will be added here. ([Business email to be added])</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

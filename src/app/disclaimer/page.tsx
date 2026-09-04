import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Important Disclaimer | Lex & Ledger',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-ivory fade-in">
      <div className="section-padding container-content">
        <Breadcrumbs items={[{ label: 'Important Disclaimer' }]} />
        
        <div className="container-prose mt-8">
          <h1 className="text-h1 font-serif text-ink mb-8">Important Disclaimer</h1>
          
          <div className="space-y-8 text-body text-charcoal leading-relaxed">
            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">Educational and Awareness Purpose</h2>
              <p>
                Lex & Ledger is designed exclusively as an educational and awareness platform to support small businesses. The resources, articles, and tools provided on this website are intended to help you understand general concepts related to business management and operations.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">Not Professional Advice</h2>
              <p>
                The information provided by Lex & Ledger does not constitute legal, tax, accounting, financial, insurance, or any other regulated professional advice. You should not act or refrain from acting on the basis of any content included on this platform without seeking appropriate professional guidance.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">General Nature of Content</h2>
              <p>
                All content on this website is general in nature. It may not apply to your specific business circumstances, industry, or jurisdiction. Laws and regulations vary widely and are subject to change. Therefore, the information found here may not always reflect the most current legal or business developments applicable to you.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">Consult Professionals</h2>
              <p>
                We strongly recommend that you consult appropriately qualified and licensed professionals—such as lawyers, certified public accountants, or financial advisors—for advice tailored to your individual business needs and situation.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">No Guarantee of Accuracy</h2>
              <p>
                While we strive to provide helpful and accurate information, Lex & Ledger makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or currency of the information contained on the website.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">No Professional-Client Relationship</h2>
              <p>
                Your use of this website, including communication with Lex & Ledger through contact forms or email, does not create a professional-client relationship between you and Lex & Ledger. Any information you submit to us via this website will not be considered privileged or confidential.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-serif text-ink mb-4">External Links</h2>
              <p>
                Any links to third-party websites or external resources are provided solely for your convenience. Lex & Ledger does not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party websites. Use of external links is at your own risk.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

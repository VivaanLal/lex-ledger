import Link from "next/link";

const footerNav = {
  platform: [
    { name: "What We Cover", href: "/what-we-cover" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  topics: [
    {
      name: "Business & Legal Awareness",
      href: "/what-we-cover/business-legal-awareness",
    },
    {
      name: "Finance & Business Management",
      href: "/what-we-cover/finance-business-management",
    },
    { name: "Risk & Protection", href: "/what-we-cover/risk-protection" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Important Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-gray-300" role="contentinfo">
      <div className="container-content">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-paper font-serif text-xl tracking-tight hover:text-paper no-underline"
              aria-label="Lex & Ledger — Home"
            >
              Lex &amp; Ledger
            </Link>
            <p className="mt-4 text-caption text-gray-400 leading-relaxed">
              A business-support platform helping small-business owners
              understand the legal, financial, and risk-related decisions they
              navigate as they grow.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-caption font-medium text-gray-400 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {footerNav.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-gray-300 hover:text-paper transition-colors duration-200 no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-caption font-medium text-gray-400 uppercase tracking-wider mb-4">
              Topics
            </h3>
            <ul className="space-y-2.5">
              {footerNav.topics.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-gray-300 hover:text-paper transition-colors duration-200 no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-caption font-medium text-gray-400 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-gray-300 hover:text-paper transition-colors duration-200 no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700/50 py-8">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            Lex &amp; Ledger provides general educational information and
            business-support resources. Content on this website is not legal,
            tax, accounting, financial, insurance, or other regulated
            professional advice. Requirements and risks vary by business and
            location. Seek advice from an appropriately qualified professional
            before making decisions that depend on your specific circumstances.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Lex &amp; Ledger. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 no-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

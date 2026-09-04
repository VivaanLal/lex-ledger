import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lex & Ledger | Business Support for What Comes Next",
    template: "%s | Lex & Ledger",
  },
  description:
    "Lex & Ledger helps small-business owners build awareness around legal, financial, and risk-related decisions as they grow.",
  metadataBase: new URL("https://lexandledger.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Lex & Ledger",
    title: "Lex & Ledger | Business Support for What Comes Next",
    description:
      "Lex & Ledger helps small-business owners build awareness around legal, financial, and risk-related decisions as they grow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

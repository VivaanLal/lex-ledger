"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "What We Cover",
    href: "/what-we-cover",
    children: [
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
  },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-border">
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-ink font-serif text-xl md:text-2xl tracking-tight hover:text-ink no-underline"
            aria-label="Lex & Ledger — Home"
          >
            Lex &amp; Ledger
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`flex items-center gap-1 px-3 py-2 text-ui font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-copper bg-copper/5"
                        : "text-charcoal hover:text-ink hover:bg-warm-gray"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 bg-paper rounded-xl shadow-lg border border-border py-2 animate-in fade-in-0 slide-in-from-top-2"
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-2.5 text-ui font-medium transition-colors duration-200 no-underline ${
                          pathname === item.href
                            ? "text-copper bg-copper/5"
                            : "text-charcoal hover:text-ink hover:bg-warm-gray"
                        }`}
                      >
                        Overview
                      </Link>
                      <div className="mx-4 my-1 border-t border-border" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-ui transition-colors duration-200 no-underline ${
                            pathname === child.href
                              ? "text-copper bg-copper/5"
                              : "text-charcoal hover:text-ink hover:bg-warm-gray"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-ui font-medium rounded-lg transition-colors duration-200 no-underline ${
                    isActive(item.href)
                      ? "text-copper bg-copper/5"
                      : "text-charcoal hover:text-ink hover:bg-warm-gray"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/what-we-cover"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-ui font-medium text-paper bg-ink rounded-lg hover:bg-charcoal transition-colors duration-200 no-underline"
          >
            Explore what we cover
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-charcoal hover:text-ink rounded-lg hover:bg-warm-gray transition-colors duration-200"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-border bg-ivory"
          aria-label="Mobile navigation"
        >
          <div className="container-content py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 text-body font-medium rounded-lg transition-colors duration-200 no-underline ${
                    isActive(item.href)
                      ? "text-copper bg-copper/5"
                      : "text-charcoal hover:text-ink hover:bg-warm-gray"
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-3 py-2 text-body-sm rounded-lg transition-colors duration-200 no-underline ${
                          pathname === child.href
                            ? "text-copper bg-copper/5"
                            : "text-slate hover:text-ink hover:bg-warm-gray"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 mt-3 border-t border-border">
              <Link
                href="/what-we-cover"
                className="block text-center px-5 py-3 text-ui font-medium text-paper bg-ink rounded-lg hover:bg-charcoal transition-colors duration-200 no-underline"
              >
                Explore what we cover
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

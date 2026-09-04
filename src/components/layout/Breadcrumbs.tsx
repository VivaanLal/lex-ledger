import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container-content py-4">
      <ol className="flex items-center gap-1.5 text-caption text-slate flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-ink transition-colors duration-200 no-underline text-slate"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-border-dark flex-shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-ink transition-colors duration-200 no-underline text-slate"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-ink font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

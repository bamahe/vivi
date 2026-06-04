// ============================================
// Breadcrumbs — Server component with JSON-LD
// Renders accessible breadcrumb navigation
// and BreadcrumbList schema for SEO
// ============================================

import Link from "next/link";

// Shape of a single breadcrumb item
interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items (first = root, last = current page) */
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build BreadcrumbList JSON-LD schema for search engines
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `https://vivipm.com${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Visible breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted-text)]">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {/* Separator between items */}
                {idx > 0 && (
                  <span className="select-none" aria-hidden="true">
                    /
                  </span>
                )}
                {/* Last item is plain text (current page), others are links */}
                {isLast ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

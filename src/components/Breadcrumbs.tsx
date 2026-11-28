import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SITE_URL = "https://www.eurodigi.ai";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

function Breadcrumbs({ items, tone = "dark", compact = false, className = "" }: BreadcrumbsProps) {
  const linkClass =
    tone === "light"
      ? "text-white/80 hover:text-white focus-visible:ring-white"
      : "text-slate-600 hover:text-blue-700 focus-visible:ring-cyan-700";
  const currentClass = tone === "light" ? "text-white" : "text-slate-900";
  const separatorClass = tone === "light" ? "text-cyan-300" : "text-cyan-600";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.to ? { item: `${SITE_URL}${item.to === "/" ? "/" : item.to}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${compact ? "text-sm" : "text-base md:text-lg"}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`rounded transition-colors focus-visible:outline-none focus-visible:ring-2 ${linkClass}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={`font-medium ${currentClass}`}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight aria-hidden="true" className={`h-4 w-4 ${separatorClass}`} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

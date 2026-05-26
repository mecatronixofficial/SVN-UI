import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-brand-100">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-accent"
          >
            <FaHome className="h-3 w-3" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaChevronRight className="h-2.5 w-2.5 text-brand-300" />
            {item.href ? (
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-accent">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import Breadcrumbs, { type BreadcrumbItem } from "@/components/Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&auto=format&fit=crop&q=80",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-brand-800/70" />
      <div className="absolute inset-0 -z-10 blueprint-bg opacity-30" />
      <div className="container-x py-20 md:py-28">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-brand-100 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      <div className="stripe-bg h-2" />
    </section>
  );
}

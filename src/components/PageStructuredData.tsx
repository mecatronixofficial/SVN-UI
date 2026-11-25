import { createPageSchema, pageSeo, serializeJsonLd } from "@/lib/seo";

export default function PageStructuredData({
  page,
  type = "WebPage",
}: {
  page: keyof typeof pageSeo;
  type?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(createPageSchema(pageSeo[page], type)),
      }}
    />
  );
}

import type { Metadata } from "next";
import { generateMainMetadata } from "@/ui/seo/metadata-generator";
import { 
  organizationSchema, 
  getWebsiteSchema, 
  getFAQSchema 
} from "@/ui/seo/structured-data";
import { MultipleStructuredData } from "@/ui/components/common/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return generateMainMetadata(params.lang);
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Generate structured data schemas
  const schemas = [
    organizationSchema,
    getWebsiteSchema(params.lang),
    getFAQSchema(params.lang),
  ];

  return (
    <>
      <MultipleStructuredData schemas={schemas} />
      {children}
    </>
  );
}


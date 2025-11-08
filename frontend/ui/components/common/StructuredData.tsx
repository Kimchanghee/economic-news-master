/**
 * Structured Data Component
 * JSON-LD를 페이지에 삽입하는 컴포넌트
 */

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Multiple Structured Data Component
 */
interface MultipleStructuredDataProps {
  schemas: any[];
}

export function MultipleStructuredData({ schemas }: MultipleStructuredDataProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
    </>
  );
}


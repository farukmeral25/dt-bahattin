type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** XSS'e karşı "<" karakteri kaçışlanarak JSON-LD script'i basar. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

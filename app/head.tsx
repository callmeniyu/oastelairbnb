const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteDescription =
  "Earn more, stress less with Oastel. Full-service property management in Cameron Highlands, from setup to daily operations.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oastel",
  url: siteUrl,
  description: siteDescription,
  areaServed: "Cameron Highlands, Malaysia",
  serviceType: "Short-term rental management",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oastel",
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-MY",
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

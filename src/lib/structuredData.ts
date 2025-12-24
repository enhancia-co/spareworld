// Structured Data (JSON-LD) generators for SEO

const baseUrl = "https://spareworld.sa";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spare World",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: "Trusted supplier of commercial kitchen and laundry equipment spare parts in Saudi Arabia",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressRegion: ["Jeddah", "Riyadh", "Khobar"],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-543291286",
    contactType: "Sales",
    email: "sales@spareworldsa.com",
    areaServed: "SA",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [
    "https://www.linkedin.com/company/spare-world-sa/",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}#organization`,
  name: "Spare World",
  image: `${baseUrl}/logo.png`,
  description: "Commercial kitchen and laundry equipment spare parts supplier serving Jeddah, Riyadh, and Khobar, Saudi Arabia",
  url: baseUrl,
  telephone: "+966-543291286",
  email: "sales@spareworldsa.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressLocality: ["Jeddah", "Riyadh", "Khobar"],
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.4873",
    longitude: "39.1788",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    {
      "@type": "City",
      name: "Jeddah",
    },
    {
      "@type": "City",
      name: "Riyadh",
    },
    {
      "@type": "City",
      name: "Khobar",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Equipment Spare Parts",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Commercial Kitchen Spare Parts",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Commercial Oven Parts",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Deep Fryer Components",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Refrigeration Units",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Commercial Laundry Spare Parts",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Washer Drum Parts",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Dryer Components",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Boiler Spare Parts",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Burner Assemblies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Control Valves",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "HVAC Spare Parts",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Compressor Parts",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Fan Motors",
            },
          },
        ],
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Spare World",
  url: baseUrl,
  description: "Commercial kitchen and laundry equipment spare parts supplier in Saudi Arabia",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "LocalBusiness",
    name: "Spare World",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
});


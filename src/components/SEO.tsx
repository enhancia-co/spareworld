import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
  structuredData?: object;
}

const baseUrl = "https://spareworld.sa";
const defaultImage = `${baseUrl}/logo.png`;

const SEO = ({
  title = "Spare World - Commercial Kitchen & Laundry Equipment Spare Parts | Saudi Arabia",
  description = "Spare World is the trusted supplier of commercial kitchen and laundry equipment spare parts in Jeddah, Riyadh, and Khobar. Quality parts, expert installation, fast delivery.",
  keywords = "spare parts, commercial kitchen, laundry equipment, HVAC parts, boiler parts, Saudi Arabia, Jeddah, Riyadh, Khobar, commercial equipment spare parts",
  image = defaultImage,
  type = "website",
  url,
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Spare World");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("language", "English");
    updateMetaTag("revisit-after", "7 days");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", fullImageUrl, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:site_name", "Spare World", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImageUrl);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector("script[type='application/ld+json']") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, type, currentUrl, fullImageUrl, structuredData]);

  return null;
};

export default SEO;



import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

const SITE_URL = "https://www.gyermekgyt-bp.hu";

export default function SEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("property", "og:type", "website");

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${SITE_URL}${path}`;

    return () => {
      // A következő oldal saját SEO-beállításait alkalmazza.
    };
  }, [title, description, path]);

  return null;
}

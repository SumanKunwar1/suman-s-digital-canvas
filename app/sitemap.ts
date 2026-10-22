import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...work.map((w) => `/work/${w.slug}/`), "/cv/"];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" }));
}

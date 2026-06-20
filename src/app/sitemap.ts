import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coltechs.netlify.app";

  const routes = [
    "",
    "/about",
    "/software",
    "/automation",
    "/infrastructure",
    "/core-values",
    "/vision-mission",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

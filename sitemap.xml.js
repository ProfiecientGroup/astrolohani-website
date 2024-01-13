const fs = require("fs");

const BASE_URL = "https://www.astrolohani.com/";
const pages = [
  "",
  "about-us",
  "services/vedic-kundali",
  "services/vastu-visit",
  "services/gemstone",
  "services/varshik-fal",
  "services/kundali-milan",
  "services/predictions",
  "contact-us"
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const url = `${BASE_URL}${page}`;
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${url === BASE_URL ? 1.0 : 0.8}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

generateSitemap();

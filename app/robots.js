export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/13x77/",
          "/dashboard/author",
          "/dashboard/admin",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://www.hezaragency.com/sitemap.xml",
    host: "https://www.hezaragency.com",
  };
}

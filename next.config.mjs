/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    // ✅ deviceSizes بهینه برای LCP شما
    deviceSizes: [432, 640, 750, 828, 1080, 1200, 1920],
    // ✅ qualities تعریف شده برای جلوگیری از خطا
    qualities: [65, 70, 75],
    // ✅ کش طولانی برای بهبود performance
    minimumCacheTTL: 31536000,
  },
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // ✅ کش کردن assets
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
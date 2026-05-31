export default function CleanSEOHeroStatic() {
  // Function to handle consultation click
  const handleConsultationClick = () => {
    // In a real app, you might redirect to a consultation page or open a modal
    console.log("Consultation clicked");
  };

  // Function to handle portfolio click
  const handlePortfolioClick = () => {
    // In a real app, you might redirect to portfolio page
    console.log("Portfolio clicked");
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "خدمات سئو تضمینی",
            description:
              "سئو تخصصی برای رسیدن به رتبه اول گوگل با تضمین قراردادی",
            provider: {
              "@type": "Organization",
              name: "آژانس سئو ال پی",
              url: "https://lp-agency.com",
            },
            serviceType: "SEO Services",
            areaServed: {
              "@type": "Country",
              name: "Iran",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="container mx-auto px-4 pt-16 md:pt-20">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2.5 rounded-full border border-blue-200">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8S16.42 2 12 2c-1.09 0-2.12.21-3.06.59.15-.46.36-1.05.58-1.65C10.44 1.31 11.16.67 13.5.67z" />
              </svg>
              <span className="text-blue-700 font-medium text-sm">
                صعود به رتبه ۱ گوگل
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              افزایش رتبه سایت شما در گوگل با خدمات حرفه‌ای سئو و بهینه‌سازی
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              با خدمات سئو تضمینی ما، سایت شما در کمتر از ۳ ماه به صفحه اول گوگل
              می‌رسد
            </p>
          </div>

          {/* Search Simulation */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Search Bar */}
              <div className="flex items-center gap-3 p-6 border-b border-gray-100">
                <div className="p-2.5 bg-blue-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-gray-500 text-sm mb-1">
                    جستجو در گوگل
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 h-10 flex items-center">
                    طراحی سایت در سنندج
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-sm font-medium">
                    صفحه ۱
                  </span>
                </div>
              </div>

              {/* Search Instructions */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    حدود <span className="font-medium">۱,۲۷۰,۰۰۰</span> نتیجه
                    (۰.۴۸ ثانیه)
                  </div>
                  <div className="text-xs text-gray-400">
                    جستجوی پیشنهادی:{" "}
                    <span className="text-blue-600 font-medium">
                      بهترین آژانس سئو
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Results */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Result 1 */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border-r-4 border-blue-500 shadow-sm">
                    {/* Rank and URL */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                        1
                      </div>
                      <div className="text-sm text-green-700">
                        www.hezaragency.com
                        <span className="text-gray-400 mx-2">›</span>
                        <span className="text-gray-500">صفحه اصلی</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-1 text-blue-700">
                      آژانس طراحی سایت هزار
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-2">
                      آژانس سئو تخصصی در کوردستان با سابقه درخشان و نمونه‌کارهای
                      موفق. ارائه خدمات سئو تضمینی با قرارداد رسمی و گزارش‌گیری
                      مستمر.
                    </p>

                    {/* Additional Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>۳ روز پیش</span>
                      <span>•</span>
                      <span>۴.۸ ★ (۱۲۴ نظر)</span>
                      <span>•</span>
                      <span className="text-green-700 font-medium">
                        تضمین قراردادی
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center gap-1.5 text-xs text-green-700 font-medium px-3 py-1.5 bg-green-50 rounded-lg">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>شما اینجایید</span>
                      </div>
                      <div className="text-xs text-blue-600 px-2 py-1 bg-blue-50 rounded">
                        برند تأیید شده
                      </div>
                    </div>
                  </div>

                  {/* Result 2 */}
                  <div className="p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
                    {/* Rank and URL */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 text-gray-400">
                        2
                      </div>
                      <div className="text-sm text-green-700">
                        www.cheap-seo-services.com
                        <span className="text-gray-400 mx-2">›</span>
                        <span className="text-gray-500">صفحه اصلی</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-1 text-blue-900">
                      خدمات سئو ارزان قیمت
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-2">
                      خدمات سئو ارزان قیمت با کیفیت قابل قبول. مشاوره رایگان سئو
                      برای وبسایت‌های کوچک و متوسط.
                    </p>

                    {/* Additional Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>۱ هفته پیش</span>
                      <span>•</span>
                      <span>۳.۲ ★ (۳۴ نظر)</span>
                    </div>
                  </div>

                  {/* Result 3 */}
                  <div className="p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
                    {/* Rank and URL */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 text-gray-400">
                        3
                      </div>
                      <div className="text-sm text-green-700">
                        www.free-seo-consulting.com
                        <span className="text-gray-400 mx-2">›</span>
                        <span className="text-gray-500">صفحه اصلی</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-1 text-blue-900">
                      مشاوره سئو رایگان تخصصی
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-2">
                      ارائه مشاوره رایگان سئو توسط متخصصین با تجربه. تحلیل
                      رایگان سایت و ارائه راهکارهای عملی.
                    </p>

                    {/* Additional Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>۲ روز پیش</span>
                      <span>•</span>
                      <span>۴.۵ ★ (۸۹ نظر)</span>
                    </div>
                  </div>
                </div>

                {/* Related Searches */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    جستجوهای مرتبط
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg">
                      سئو سایت کوردستان
                    </span>
                    <span className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg">
                      بهترین آژانس سئو
                    </span>
                    <span className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg">
                      افزایش رتبه گوگل
                    </span>
                    <span className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg">
                      بهینه سازی سایت
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">۳۰۰٪+</div>
                </div>
                <div className="text-gray-600">رشد ترافیک</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">رتبه ۱</div>
                </div>
                <div className="text-gray-600">گوگل</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">۹۵٪</div>
                </div>
                <div className="text-gray-600">رضایت مشتری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

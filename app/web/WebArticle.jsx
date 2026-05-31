import Image from "next/image";

export default function SeoContentSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر بخش */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            آژانس طراحی سایت حرفه‌ای، سئو بین‌المللی و توسعه وب مدرن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* محتوای اصلی */}
        <div className="space-y-16">
          {/* مقدمه */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              <strong className="text-gray-900">
                آژانس دیجیتال مارکتینگ هزار
              </strong>{" "}
              یک
              <a
                href="/about-us"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                title="درباره آژانس طراحی سایت و سئو"
              >
                آژانس تخصصی طراحی سایت و سئو
              </a>
              در سنندج و کودستان است که با تمرکز بر توسعه وب مدرن، سئو تکنیکال،
              طراحی سایت سه‌بعدی و استراتژی محتوای حرفه‌ای، به کسب‌وکارها کمک
              می‌کند تا در نتایج گوگل
              <strong className="text-gray-900">
                {" "}
                جایگاه پایدار و واقعی
              </strong>{" "}
              به‌دست آورند. ما با استفاده از آخرین تکنولوژی‌های روز دنیا مانند
              <a
                href="https://nextjs.org"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Next.js
              </a>
              و
              <a
                href="https://react.dev"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                React
              </a>
              ، سایت‌های با عملکرد عالی ایجاد می‌کنیم.
            </p>

            <p className="text-gray-700 leading-relaxed mb-12 text-lg">
              هدف ما فقط ساخت سایت نیست؛ ما زیرساختی می‌سازیم که بتواند
              <strong className="text-gray-900">
                {" "}
                ترافیک ارگانیک، لید واقعی و فروش پایدار
              </strong>
              ایجاد کند. به همین دلیل تمام پروژه‌ها بر اساس الگوریتم‌های به‌روز
              گوگل، استانداردهای
              <a
                href="https://developers.google.com/search/docs"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Google Search Central
              </a>
              و اصول UX طراحی می‌شوند. مطالعه
              <a
                href="/blog/google-core-updates"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                title="آخرین آپدیت های گوگل"
              >
                آخرین آپدیت‌های الگوریتم گوگل
              </a>
              بخش مهمی از استراتژی ما است.
            </p>
          </div>

          {/* تصویر اول با کادر - FIXED HEIGHT */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0">
              <img
                src="/images/seo-web-design-agency.jpg"
                alt="آژانس طراحی سایت و سئو حرفه‌ای با تمرکز بر رتبه اول گوگل و افزایش ترافیک ارگانیک"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
                width="1200"
                height="675"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm md:text-base">
                طراحی سایت سئو محور • افزایش رتبه در گوگل
              </p>
            </div>
          </div>

          {/* بخش طراحی سئو محور */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10">
            <div className="flex items-center mb-8">
              <div
                className="bg-blue-600 p-3 rounded-xl ml-4"
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                چرا طراحی سایت سئو محور مهم‌ترین عامل موفقیت است؟
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              بسیاری از سایت‌ها ظاهر زیبایی دارند اما به دلیل ضعف در ساختار فنی،
              محتوایی و لینک‌سازی، هیچ‌گاه به صفحه اول گوگل نمی‌رسند. بر اساس
              تحقیقات
              <a
                href="https://backlinko.com/google-first-page-study"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Backlinko
              </a>
              ، سایت‌های صفحه اول گوگل به طور متوسط ۱۰ برابر بیشتر کلیک دریافت
              می‌کنند. در خدمات
              <a
                href="/seo-services"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                title="خدمات سئو تخصصی"
              >
                طراحی سایت سئو محور
              </a>
              ما، همه چیز از ابتدا بر اساس سئو چیده می‌شود.
            </p>

            {/* چک لیست */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-6 border-r-4 border-blue-600 pr-3">
                چک‌لیست فنی سئو
              </h4>
              <ul className="space-y-4">
                {[
                  "تحقیق کلمات کلیدی بر اساس Search Intent و ابزارهایی مانند Ahrefs و SEMrush",
                  "طراحی معماری صفحات (Site Architecture) برای بهبود Crawlability",
                  "بهینه‌سازی Headingها (H1 تا H4) با تگ‌های سمانتیک مناسب",
                  "بهبود Core Web Vitals و سرعت لود زیر ۲ ثانیه",
                  "پیاده‌سازی اسکیما مارک‌آپ (Schema.org) برای Rich Snippets",
                  "بهینه‌سازی Mobile-First Indexing و ریسپانسیو بودن کامل",
                  "ایجاد ساختار لینک‌دهی داخلی (Internal Linking) قدرتمند",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="bg-blue-100 p-1 rounded-full ml-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* تصویر دوم - FIXED HEIGHT */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0">
              <img
                src="/images/international-seo-multilingual.jpg"
                alt="سئو بین‌المللی و طراحی سایت چندزبانه برای بازار جهانی و جذب مشتریان بین المللی"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
                width="1200"
                height="675"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm md:text-base">
                سئو بین‌المللی • طراحی سایت چندزبانه
              </p>
            </div>
          </div>

          {/* بخش سئو بین‌المللی */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              سئو بین‌المللی و طراحی سایت چندزبانه برای بازارهای جهانی
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  اگر بازار هدف شما فقط ایران نیست، سئو داخلی کافی نخواهد بود.
                  ما با پیاده‌سازی اصول
                  <strong className="text-gray-900"> International SEO</strong>
                  سایت شما را برای چند کشور و چند زبان بهینه می‌کنیم. طبق
                  راهنمای
                  <a
                    href="https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    گوگل برای سایت‌های چندمنطقه‌ای
                  </a>
                  ، این رویکرد می‌تواند تا ۳۰۰% ترافیک بین‌المللی را افزایش دهد.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 border-r-4 border-blue-600 pr-3">
                  بهترین روش‌های سئو بین‌المللی
                </h4>
                <ul className="space-y-3">
                  {[
                    "استفاده از دامنه کشوری (مانند .de برای آلمان) یا subdirectory (/de/)",
                    "پیاده‌سازی کامل تگ‌های hreflang در سراسر سایت",
                    "بهینه‌سازی برای موتورهای جستجوی محلی (مانند Yandex، Baidu)",
                    "ایجاد پروفایل‌های Google Business Profile برای هر منطقه",
                    "تولید محتوای مرتبط با فرهنگ و نیازهای هر بازار",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-3 flex-shrink-0">
                        <span className="text-sm">{index + 1}</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h4 className="text-xl font-bold">یادگیری عمیق‌تر</h4>
              </div>
              <p className="mb-0 text-lg">
                برای یادگیری عمیق‌تر، پیشنهاد می‌کنیم
                <a
                  href="/blog/international-seo-guide"
                  className="underline font-medium mx-1 hover:text-blue-200 transition-colors"
                  title="راهنمای کامل سئو بین المللی"
                >
                  راهنمای کامل سئو بین‌المللی
                </a>
                و همچنین
                <a
                  href="/blog"
                  className="underline font-medium mx-1 hover:text-blue-200 transition-colors"
                >
                  مقالات تخصصی سئو
                </a>
                ما را مطالعه کنید.
              </p>
            </div>
          </div>

          {/* بخش طراحی سه‌بعدی */}
          <div className="mt-16">
            <div className="flex items-center mb-8">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl ml-4"
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                طراحی سایت سه‌بعدی (3D Web Design) با Three.js و WebGL
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  <a
                    href="/3d-web-design"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                    title="خدمات طراحی سایت سه بعدی"
                  >
                    طراحی سایت سه‌بعدی
                  </a>
                  برای برندهایی مناسب است که می‌خواهند تجربه‌ای متفاوت و ماندگار
                  برای کاربران ایجاد کنند. استفاده اصولی از
                  <a
                    href="https://threejs.org"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors mx-1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    Three.js
                  </a>
                  و WebGL باعث افزایش تعامل کاربر (User Engagement) و بهبود
                  سیگنال‌های رفتاری سئو می‌شود. تحقیقات نشان می‌دهد سایت‌های
                  دارای عناصر تعاملی تا ۴۰% بیشتر کاربران را حفظ می‌کنند.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    بهینه‌سازی سئو برای سایت‌های سه‌بعدی
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Lazy Loading برای مدل‌های سه‌بعدی",
                      "فشرده‌سازی بافت‌ها و مدل‌ها (Texture Compression)",
                      "استفاده از Web Workers برای پردازش‌های سنگین",
                      "ایجاد Fallback برای دستگاه‌های ضعیف",
                      "بهینه‌سازی برای Googlebot با ارائه محتوای جایگزین",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center ml-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* تصویر سه‌بعدی - FIXED HEIGHT */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] md:h-[500px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/3d-web-design-threejs.jpg"
                    alt="طراحی سایت سه بعدی با Three.js و تجربه کاربری تعاملی برای افزایش Engagement"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority={false} // lazy load پیش‌فرض
                  />
                </div>
              </div>
            </div>
          </div>

          {/* بخش پشتیبانی و نگهداری */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                پشتیبانی، بهینه‌سازی و رشد مداوم سایت
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                سئو یک فرآیند مداوم است، نه پروژه‌ای یک‌باره. تیم ما به‌صورت
                مستمر سایت شما را تحلیل و بهینه می‌کند.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-3 ml-4"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    آنالیز ماهانه سئو
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    <span>بررسی رتبه کلمات کلیدی در ۱۰۰+ کلمه</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    <span>تحلیل ترافیک ارگانیک در Google Analytics 4</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    <span>مانیتورینگ بک‌لینک‌های جدید و از دست رفته</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                    <span>بررسی خطاهای Crawling در Google Search Console</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-3 ml-4"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    بهینه‌سازی فنی مستمر
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full ml-3"></div>
                    <span>بهبود Core Web Vitals ماهانه</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full ml-3"></div>
                    <span>آپدیت محتوای قدیمی (Content Refresh)</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full ml-3"></div>
                    <span>بهینه‌سازی ساختار لینک‌های داخلی</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full ml-3"></div>
                    <span>امنیت و آپدیت‌های منظم CMS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* بخش فراخوان به اقدام */}
          <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-10 md:p-14 text-center text-white">
              <div
                className="inline-block bg-white/20 rounded-full p-4 mb-6"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                آماده رسیدن به رتبه اول گوگل هستید؟
              </h3>

              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                بیش از ۱۵۰ کسب‌وکار با کمک ما به صفحه اول گوگل رسیده‌اند. برای
                مشاوره رایگان طراحی سایت و سئو با ما تماس بگیرید.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="/contact-us"
                  className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="شروع همکاری حرفه‌ای با آژانس هزار"
                >
                  شروع همکاری حرفه‌ای
                </a>
                <a
                  href="/seo-audit"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1"
                  aria-label="درخواست سئو آدیت رایگان"
                >
                  دریافت سئو آدیت رایگان
                </a>
              </div>

              <div className="border-t border-white/30 pt-8 mt-8">
                <p className="text-blue-200 mb-2">
                  یا با شماره زیر تماس بگیرید
                </p>
                <a
                  href="tel:02112345678"
                  className="text-2xl font-bold hover:text-white transition-colors"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
                <p className="text-blue-200 mt-4 text-sm">
                  شنبه تا پنجشنبه • ۹ صبح تا ۶ عصر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

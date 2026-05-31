// app/components/SEOArticlePage.tsx
export default function SEOArticlePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "آموزش جامع سئو (SEO) از صفر تا پیشرفته | راهنمای کامل رتبه ۱ گوگل",
            "description": "راهنمای عملی و جامع آموزش سئو برای کسب رتبه اول در گوگل، افزایش ترافیک ارگانیک و رشد کسب‌وکار",
            "author": { "@type": "Organization", "name": "تیم متخصص سئو" },
            "datePublished": "2024-01-20",
            "dateModified": "2024-01-20",
            "image": "https://example.com/images/seo-guide-cover.jpg",
            "publisher": {
              "@type": "Organization",
              "name": "آکادمی سئو",
              "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" }
            }
          })
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                  <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-white font-medium text-sm">راهنمای تخصصی سئو ۲۰۲۴</span>
                </div>

                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  آموزش جامع
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 block">
                    سئو (SEO)
                  </span>
                  از صفر تا پیشرفته
                </h2>
                
                {/* Subtitle */}
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  راهنمای عملی و جامع برای کسب <span className="font-bold text-green-300">رتبه اول در گوگل</span>، 
                  افزایش ترافیک ارگانیک و رشد تصاعدی کسب‌وکار
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      <div className="text-2xl font-bold text-white">۹۳٪</div>
                    </div>
                    <div className="text-sm text-blue-100">تجربه کاربری با سئو شروع می‌شود</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <div className="text-2xl font-bold text-white">۷۵٪</div>
                    </div>
                    <div className="text-sm text-blue-100">کاربران صفحه اول گوگل را انتخاب می‌کنند</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                      <div className="text-2xl font-bold text-white">۶۰٪+</div>
                    </div>
                    <div className="text-sm text-blue-100">افزایش ترافیک با سئو صحیح</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <div className="text-2xl font-bold text-white">۵۰٪+</div>
                    </div>
                    <div className="text-sm text-blue-100">صرفه‌جویی در هزینه بازاریابی</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 gap-3 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                    </svg>
                    <span>شروع آموزش رایگان</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    <span>مشاهده ویدیو آموزشی</span>
                  </button>
                </div>
              </div>

              {/* Hero Visual - Google Search Mockup */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Google Header */}
                  <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded-full w-3/4" />
                      <div className="h-2 bg-gray-100 rounded-full w-1/2 mt-2" />
                    </div>
                  </div>
                  
                  {/* Search Results */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 p-3 rounded-lg mb-2 bg-blue-50 border-r-4 border-blue-500">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm bg-blue-500 text-white">
                        1
                      </div>
                      <div>
                        <div className="font-medium text-blue-700">بهترین آموزش سئو رایگان فارسی</div>
                        <div className="text-sm text-green-700 mt-1">www.seo-academy.com</div>
                        <div className="text-xs text-gray-500 mt-1">۱۰۰٪ رایگان - آموزش کامل از مبتدی تا پیشرفته</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg mb-2 hover:bg-gray-50">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm bg-gray-200 text-gray-600">
                        2
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">آموزش سئو از پایه تا پیشرفته</div>
                        <div className="text-sm text-green-700 mt-1">www.seo-master.com</div>
                        <div className="text-xs text-gray-500 mt-1">یادگیری کامل تکنیک‌های سئو در ۳۰ روز</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg mb-2 hover:bg-gray-50">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm bg-gray-200 text-gray-600">
                        3
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">دوره تخصصی سئو سایت</div>
                        <div className="text-sm text-green-700 mt-1">www.seo-expert.ir</div>
                        <div className="text-xs text-gray-500 mt-1">تبدیل شدن به متخصص سئو در ۶ ماه</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Article Content */}
            <div className="lg:col-span-3">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 آموزش کامل سئو در یک مقاله</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  در این راهنمای جامع، تمام آنچه برای موفقیت در سئو نیاز دارید را قدم به قدم آموزش می‌دهیم. 
                  از مفاهیم پایه تا تکنیک‌های پیشرفته‌ای که توسط متخصصان استفاده می‌شود.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ مزایای سئو برای کسب‌وکار شما</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">کلمات کلیدی هدفمند</h4>
                    <p className="text-gray-600">جذب کاربر واقعی با نیت مشخص خرید و تبدیل بالا</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">رشد پایدار و ارگانیک</h4>
                    <p className="text-gray-600">ترافیک مداوم بدون نیاز به تبلیغات پرهزینه</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">اعتماد گوگل و کاربران</h4>
                    <p className="text-gray-600">افزایش اعتبار دامنه و اعتماد کاربران به برند شما</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">دسترسی جهانی ۲۴/۷</h4>
                    <p className="text-gray-600">نمایش در نتایج بین‌المللی و جذب مخاطب همیشگی</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8S16.42 2 12 2c-1.09 0-2.12.21-3.06.59.15-.46.36-1.05.58-1.65C10.44 1.31 11.16.67 13.5.67z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">سرعت و UX عالی</h4>
                    <p className="text-gray-600">بهبود تجربه کاربری و کاهش نرخ پرش (Bounce Rate)</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">تحلیل و بهینه‌سازی</h4>
                    <p className="text-gray-600">داده‌های دقیق برای تصمیم‌گیری‌های استراتژیک</p>
                  </div>
                </div>
              </div>

              {/* SEO Types Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 انواع سئو: کدام یک برای شما مهم‌تر است؟</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">سئو داخلی (On-Page)</h3>
                    </div>
                    <p className="text-gray-600 mb-4">بهینه‌سازی محتوا، تگ‌ها، متادیتا و ساختار صفحات</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>تگ Title و Meta Description</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>ساختار Heading</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>بهینه‌سازی محتوا</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>لینک‌سازی داخلی</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>URL SEO-Friendly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">سئو فنی (Technical)</h3>
                    </div>
                    <p className="text-gray-600 mb-4">بهبود زیرساخت فنی سایت برای خزیدن و ایندکس شدن بهتر</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>سرعت سایت</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>Core Web Vitals</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>اسکیما مارک‌آپ</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>XML Sitemap</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>Mobile Friendly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">سئو خارجی (Off-Page)</h3>
                    </div>
                    <p className="text-gray-600 mb-4">افزایش اعتبار سایت از طریق لینک‌های معتبر</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>بک‌لینک سازی</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>برندسازی</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>رسانه‌های اجتماعی</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>نظرات کاربران</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>Citation Building</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">⏳ مراحل اجرای سئو</h3>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-indigo-300 hidden md:block" />
                  <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
                    <div className="relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border-4 border-blue-500 rounded-full text-blue-600 font-bold text-lg mb-4">
                          ۱
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">تحلیل وضعیت فعلی سایت</h4>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          <span className="text-sm">۱-۲ هفته</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border-4 border-blue-500 rounded-full text-blue-600 font-bold text-lg mb-4">
                          ۲
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">تحقیق کلمات کلیدی هدفمند</h4>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          <span className="text-sm">۱-۲ هفته</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border-4 border-blue-500 rounded-full text-blue-600 font-bold text-lg mb-4">
                          ۳
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">ایجاد استراتژی محتوایی</h4>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          <span className="text-sm">۱-۲ هفته</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border-4 border-blue-500 rounded-full text-blue-600 font-bold text-lg mb-4">
                          ۴
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">بهبود فنی و لینک‌سازی</h4>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          <span className="text-sm">۱-۲ هفته</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Article Content */}
              <div className="space-y-12">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">💡 سئو چیست و چرا مهم است؟</h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      سئو (SEO) یا بهینه‌سازی برای موتورهای جستجو، مجموعه‌ای از تکنیک‌ها و استراتژی‌هایی است که برای بهبود رتبه سایت در نتایج جستجوی ارگانیک گوگل استفاده می‌شود. هدف نهایی سئو، جذب ترافیک هدفمند و افزایش نرخ تبدیل است.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      در دنیای دیجیتال امروز، ۹۳٪ تجربه آنلاین کاربران با موتورهای جستجو شروع می‌شود. سئو نه تنها ترافیک ارگانیک را افزایش می‌دهد، بلکه اعتبار برند شما را نیز تقویت می‌کند. کسب‌وکارهایی که در صفحه اول گوگل قرار دارند، ۷۵٪ کلیک‌ها را دریافت می‌کنند.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">📈 اهمیت سئو در دنیای امروز</h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      با افزایش رقابت در فضای دیجیتال، سئو به یک ضرورت برای بقای کسب‌وکارها تبدیل شده است. در سال ۲۰۲۴، کسب‌وکارهایی که سئو را جدی نمی‌گیرند، به سرعت از رقبای خود عقب می‌مانند.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                      <h4 className="font-bold text-gray-900 mb-2">📊 آمارهای کلیدی:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span>۶۰٪ افزایش ترافیک با سئو صحیح</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span>۵۰٪ صرفه‌جویی در هزینه بازاریابی</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span>۸۰٪ کاربران نتایج ارگانیک را به تبلیغات ترجیح می‌دهند</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">🔧 سئو فنی - قلب تپنده سایت شما</h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      سئو فنی شامل بهینه‌سازی زیرساخت فنی سایت برای بهبود عملکرد، سرعت و قابلیت خزیدن موتورهای جستجو است. این بخش از سئو ممکن است به‌طور مستقیم دیده نشود، اما تأثیر عمیقی بر رتبه‌بندی سایت دارد.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-bold text-gray-900 mb-2">سرعت سایت</div>
                        <p className="text-sm text-gray-600">سایت‌های سریع‌تر نرخ تبدیل بالاتری دارند و توسط گوگل ترجیح داده می‌شوند.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-bold text-gray-900 mb-2">Mobile-Friendly</div>
                        <p className="text-sm text-gray-600">۶۰٪ جستجوها از موبایل انجام می‌شود. سایت شما باید برای موبایل بهینه باشد.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">🚀 همین امروز سئو سایت خود را شروع کنید!</h3>
                <p className="mb-6 opacity-90">
                  با اجرای صحیح سئو، می‌توانید در کمتر از ۳ ماه نتایج قابل‌توجهی ببینید.
                </p>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 6h14v2H5V6zm2 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                  </svg>
                  <span>رزرو مشاوره رایگان</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">⏱️ زمان مطالعه</h3>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>۱۵ دقیقه</span>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">📅 تاریخ به‌روزرسانی</h3>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 6h14v2H5V6zm2 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                    </svg>
                    <span>۲۰ دی ۱۴۰۲</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">🎓 سطح آموزش</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>مبتدی تا پیشرفته</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      مناسب برای صاحبان کسب‌وکار، مدیران سایت و علاقه‌مندان به سئو
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">📋 محتوای آموزشی</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>آموزش مفاهیم پایه</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>تکنیک‌های پیشرفته</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>تحلیل و آنالیز</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>کسب درآمد از سئو</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">آماده صعود به رتبه اول گوگل هستید؟</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              همین امروز با تیم متخصص سئو ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
                <span>درخواست مشاوره رایگان</span>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                </svg>
                <span>بیشتر بخوانید</span>
              </button>
            </div>
            
            {/* Footer Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
                <div>
                  <div className="font-bold text-white mb-2">📞 تماس با ما</div>
                  <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">📧 ایمیل</div>
                  <p>info@seo-academy.com</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">🕒 ساعات کاری</div>
                  <p>شنبه تا چهارشنبه</p>
                  <p>۹ صبح تا ۶ عصر</p>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">📍 آدرس</div>
                  <p>تهران، خیابان ولیعصر</p>
                </div>
              </div>
              
              <p className="mt-8 text-xs text-gray-500">
                © ۱۴۰۲ - آکادمی سئو. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
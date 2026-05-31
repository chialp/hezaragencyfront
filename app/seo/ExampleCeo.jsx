export default function SeoPortfolio() {
  const projects = [
    {
      id: 1,
      title: 'سایت فروشگاهی پیشرفته',
      description: 'بهینه‌سازی کامل سایت فروشگاهی با افزایش 300% ترافیک ارگانیک و کاهش 70% نرخ پرش',
      category: 'تجارت الکترونیک',
      industry: 'فروش پوشاک',
      timeline: '۳ ماه',
      theme: 'gradient-retail',
      results: {
        traffic: '+300%',
        conversions: '+180%',
        speed: '0.8s',
        bounceRate: '-70%'
      },
      lighthouse: {
        performance: 98,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
        pwa: 92
      },
      technologies: ['Next.js 14', 'SSG', 'ISR', 'GraphQL', 'Redis'],
      features: [
        'ساختار داده‌های سازمان‌یافته',
        'بارگذاری تصاویر بهینه',
        'مسیردهی استاتیک',
        'کش‌سازی پیشرفته',
        'AMP صفحات محصول'
      ],
      metrics: [
        { label: 'رتبه گوگل', value: '۱-۳', change: '+2' },
        { label: 'بک‌لینک طبیعی', value: '۱,۲۰۰+', change: '+400%' },
        { label: 'کلیک ارگانیک', value: '۵۰K/ماه', change: '+300%' },
        { label: 'نرخ تبدیل', value: '۴.۸%', change: '+180%' }
      ],
      challenges: [
        'سرعت بارگذاری بالای 4 ثانیه',
        'عدم ایندکس صحیح محصولات',
        'ساختار نامناسب URL',
        'نداشتن محتوای بهینه'
      ],
      solutions: [
        'اجرای SSG + ISR',
        'استفاده از WebP + Lazy Loading',
        'بازطراحی معماری اطلاعات',
        'تولید محتوای آموزشی مرتبط'
      ],
      dashboard: {
        dailyVisitors: 2850,
        organicTraffic: 154200,
        keywords: 1250,
        backlinks: 1243,
        topKeywords: ['خرید لباس', 'فروشگاه آنلاین', 'مد روز', 'پوشاک زنانه', 'لباس مردانه']
      },
      layout: 'ecommerce'
    },
    {
      id: 2,
      title: 'پورتال خبری و رسانه',
      description: 'بهینه‌سازی سایت خبری با افزایش 500% ایندکس‌گذاری و کاهش 80% زمان بارگذاری',
      category: 'رسانه و خبر',
      industry: 'خبرگزاری',
      timeline: '۴ ماه',
      theme: 'gradient-news',
      results: {
        traffic: '+450%',
        conversions: '+220%',
        speed: '1.2s',
        bounceRate: '-65%'
      },
      lighthouse: {
        performance: 96,
        accessibility: 98,
        bestPractices: 99,
        seo: 100,
        pwa: 85
      },
      technologies: ['Nuxt.js', 'SSR', 'CDN', 'ElasticSearch', 'Redis'],
      features: [
        'خبرهای لحظه‌ای با SSR',
        'ساختار Breadcrumb',
        'ریچ اسنیپت',
        'اکسلریتد موبایل پیج',
        'سوشال متا تگ'
      ],
      metrics: [
        { label: 'نمایش در نتایج', value: '۲۵K/روز', change: '+500%' },
        { label: 'CTR', value: '۸.۲%', change: '+320%' },
        { label: 'تعامل کاربر', value: '۴.۵ دقیقه', change: '+200%' },
        { label: 'اشتراک‌گذاری', value: '۱۲K/ماه', change: '+400%' }
      ],
      challenges: [
        'بارگذاری کند محتوای داینامیک',
        'نداشتن ساختار مناسب برای اخبار',
        'مشکلات کراول بودجه',
        'نداشتن AMP'
      ],
      solutions: [
        'پیاده‌سازی ISR برای اخبار',
        'ساختار NewsArticle Schema',
        'بهینه‌سازی robots.txt و sitemap',
        'اجرای AMP برای تمام صفحات'
      ],
      dashboard: {
        dailyVisitors: 12500,
        organicTraffic: 385000,
        keywords: 4500,
        backlinks: 3245,
        topKeywords: ['اخبار روز', 'خبر فوری', 'تحلیل خبر', 'اخبار اقتصادی', 'سیاسی']
      },
      layout: 'news'
    },
    {
      id: 3,
      title: 'سایت خدمات B2B',
      description: 'بهینه‌سازی سایت خدماتی با رشد 800% لید و قرارگیری در 10 کلمه کلیدی اصلی',
      category: 'خدمات تخصصی',
      industry: 'مشاوره مدیریت',
      timeline: '۲ ماه',
      theme: 'gradient-consulting',
      results: {
        traffic: '+250%',
        conversions: '+800%',
        speed: '0.9s',
        bounceRate: '-75%'
      },
      lighthouse: {
        performance: 99,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
        pwa: 88
      },
      technologies: ['Gatsby', 'Contentful', 'Netlify', 'Algolia', 'Markdown'],
      features: [
        'کاملاً استاتیک',
        'جستجوی داخلی بهینه',
        'ساختار FAQ',
        'نقشه سایت XML',
        'Open Graph کامل'
      ],
      metrics: [
        { label: 'کلمات کلیدی رتبه ۱', value: '۱۵', change: '+800%' },
        { label: 'لید ماهانه', value: '۴۵۰', change: '+800%' },
        { label: 'دامین اتوریتی', value: '۴۸', change: '+35' },
        { label: 'ارزش ترافیک', value: '۱۲K$/ماه', change: '+400%' }
      ],
      challenges: [
        'عدم نمایش در جستجوهای محلی',
        'محتوای تکراری در صفحات خدمات',
        'سرعت پایین در موبایل',
        'نداشتن ریدایرکت 301 صحیح'
      ],
      solutions: [
        'پیاده‌سازی Local SEO',
        'تولید محتوای اختصاصی هر خدمات',
        'بهینه‌سازی Core Web Vitals',
        'ریدایرکت‌های هوشمند'
      ],
      dashboard: {
        dailyVisitors: 850,
        organicTraffic: 25400,
        keywords: 850,
        backlinks: 856,
        topKeywords: ['مشاوره مدیریت', 'خدمات کسب و کار', 'مشاوره سازمانی', 'برنامه ریزی استراتژیک', 'مدیریت پروژه']
      },
      layout: 'service'
    }
  ];

  // تعریف تم‌های مختلف برای هر پروژه
  const themes = {
    'gradient-retail': {
      primary: 'from-pink-500 to-rose-600',
      secondary: 'from-pink-100 to-rose-100',
      light: 'from-pink-50 to-rose-50',
      text: 'text-pink-600',
      border: 'border-pink-200',
      bg: 'bg-pink-50',
      icon: '🛍️',
      pattern: 'bg-pattern-shopping'
    },
    'gradient-news': {
      primary: 'from-blue-500 to-cyan-600',
      secondary: 'from-blue-100 to-cyan-100',
      light: 'from-blue-50 to-cyan-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      icon: '📰',
      pattern: 'bg-pattern-news'
    },
    'gradient-consulting': {
      primary: 'from-indigo-500 to-purple-600',
      secondary: 'from-indigo-100 to-purple-100',
      light: 'from-indigo-50 to-purple-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      bg: 'bg-indigo-50',
      icon: '💼',
      pattern: 'bg-pattern-consulting'
    }
  };

  const ProgressBar = ({ value, label, theme }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-700">{label}</span>
        <span className={`text-sm font-bold ${themes[theme].text}`}>{value}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          style={{ width: `${value}%` }} 
          className={`h-full rounded-full bg-gradient-to-r ${themes[theme].primary}`}
        />
      </div>
    </div>
  );

  // کامپوننت‌های مختلف برای هر نوع پروژه
  const EcommerceProject = ({ project, theme }) => (
    <div className="space-y-8">
      {/* هدر پروژه */}
      <div className="relative overflow-hidden rounded-3xl p-8 shadow-lg">
        <div className={`absolute inset-0 bg-gradient-to-r ${themes[theme].light}`} />
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-500/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-4 py-2 bg-gradient-to-r ${themes[theme].secondary} rounded-full text-sm border ${themes[theme].border} ${themes[theme].text}`}>
              {project.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              صنعت: {project.industry}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              ⏱️ مدت: {project.timeline}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
            <span className="text-2xl">{themes[theme].icon}</span>
            {project.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
          
          {/* نتایج سریع */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(project.results).map(([key, value]) => (
              <div key={key} className="bg-white/80 backdrop-blur-sm border border-white/40 p-4 rounded-xl">
                <div className={`text-2xl font-bold ${themes[theme].text}`}>
                  {value}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {key === 'traffic' && 'افزایش ترافیک'}
                  {key === 'conversions' && 'افزایش تبدیل'}
                  {key === 'speed' && 'سرعت بارگذاری'}
                  {key === 'bounceRate' && 'کاهش نرخ پرش'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ویژگی‌های خاص فروشگاهی */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>🛒</span>
            تجربه خرید کاربر
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>توصیه‌های هوشمند محصولات</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>جستجوی پیشرفته محصولات</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>فیلترهای پیشرفته قیمت و دسته‌بندی</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>📊</span>
            تحلیل‌های فروش
          </h3>
          <div className="space-y-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const NewsProject = ({ project, theme }) => (
    <div className="space-y-8">
      {/* هدر پروژه */}
      <div className="relative overflow-hidden rounded-3xl p-8 shadow-lg">
        <div className={`absolute inset-0 bg-gradient-to-r ${themes[theme].light}`} />
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-500/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-4 py-2 bg-gradient-to-r ${themes[theme].secondary} rounded-full text-sm border ${themes[theme].border} ${themes[theme].text}`}>
              {project.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              صنعت: {project.industry}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              ⏱️ مدت: {project.timeline}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
            <span className="text-2xl">{themes[theme].icon}</span>
            {project.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
          
          {/* نتایج سریع */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(project.results).map(([key, value]) => (
              <div key={key} className="bg-white/80 backdrop-blur-sm border border-white/40 p-4 rounded-xl">
                <div className={`text-2xl font-bold ${themes[theme].text}`}>
                  {value}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {key === 'traffic' && 'افزایش ترافیک'}
                  {key === 'conversions' && 'افزایش تعامل'}
                  {key === 'speed' && 'سرعت بارگذاری'}
                  {key === 'bounceRate' && 'کاهش نرخ خروج'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ویژگی‌های خاص خبری */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>🚨</span>
            پوشش لحظه‌ای
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>آپدیت‌های لحظه‌ای با SSR</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>ساختار خبری Schema.org</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>اشتراک‌گذاری آسان در شبکه‌های اجتماعی</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>📈</span>
            آمارهای خبری
          </h3>
          <div className="space-y-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceProject = ({ project, theme }) => (
    <div className="space-y-8">
      {/* هدر پروژه */}
      <div className="relative overflow-hidden rounded-3xl p-8 shadow-lg">
        <div className={`absolute inset-0 bg-gradient-to-r ${themes[theme].light}`} />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-500/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-4 py-2 bg-gradient-to-r ${themes[theme].secondary} rounded-full text-sm border ${themes[theme].border} ${themes[theme].text}`}>
              {project.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              صنعت: {project.industry}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-200 text-gray-700">
              ⏱️ مدت: {project.timeline}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
            <span className="text-2xl">{themes[theme].icon}</span>
            {project.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
          
          {/* نتایج سریع */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(project.results).map(([key, value]) => (
              <div key={key} className="bg-white/80 backdrop-blur-sm border border-white/40 p-4 rounded-xl">
                <div className={`text-2xl font-bold ${themes[theme].text}`}>
                  {value}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {key === 'traffic' && 'افزایش ترافیک'}
                  {key === 'conversions' && 'افزایش لید'}
                  {key === 'speed' && 'سرعت بارگذاری'}
                  {key === 'bounceRate' && 'کاهش نرخ پرش'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ویژگی‌های خاص خدمات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>🎯</span>
            هدف‌گیری مشتریان
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>جستجوی محلی بهینه‌شده</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>فرم‌های تماس هوشمند</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className={`w-8 h-8 rounded-full ${themes[theme].bg} flex items-center justify-center`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>تحلیل رفتار مشتریان</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span className={`p-2 rounded-lg ${themes[theme].bg}`}>💼</span>
            آمارهای کسب‌وکار
          </h3>
          <div className="space-y-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "نمونه‌کارهای سئو حرفه‌ای",
            "description": "پروژه‌های موفق سئو با نتایج قابل اندازه‌گیری",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "industry": project.industry,
                "duration": project.timeline
              }
            }))
          })
        }}
      />


      {/* هدر */}
      <div className="relative pt-12 pb-16 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/5 via-transparent to-blue-500/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-600/10 border border-[#1e40af]/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-[#1e40af]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-medium text-[#1e40af]">نمونه‌کار تخصصی سئو</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              پروژه‌های <span className="text-[#1e40af]">سئو حرفه‌ای</span>
              <br />
              با تم‌های <span className="relative">
                متفاوت
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-indigo-500" />
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              هر پروژه شامل طراحی، چالش‌ها و راه‌حل‌های کاملاً اختصاصی با توجه به نیاز صنعت
            </p>
          </div>

          {/* آمار سریع */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-pink-600">+۳۰۰٪</div>
              <div className="text-gray-600 mt-2">افزایش ترافیک فروشگاهی</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600">+۴۵۰٪</div>
              <div className="text-gray-600 mt-2">افزایش تعامل خبری</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">+۸۰۰٪</div>
              <div className="text-gray-600 mt-2">رشد لید خدمات</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#1e40af]">۱۰۰٪</div>
              <div className="text-gray-600 mt-2">رضایت مشتری</div>
            </div>
          </div>
        </div>
      </div>

      {/* محتوای اصلی - نمایش همه پروژه‌ها با تم‌های متفاوت */}
      <main className="container mx-auto px-4 pb-20">
        <div className="space-y-16">
          {projects.map((project, projectIndex) => (
            <div key={project.id} className="space-y-8">
              {/* نمایش پروژه با تم و ساختار مخصوص */}
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
                {project.layout === 'ecommerce' && (
                  <EcommerceProject project={project} theme={project.theme} />
                )}
                {project.layout === 'news' && (
                  <NewsProject project={project} theme={project.theme} />
                )}
                {project.layout === 'service' && (
                  <ServiceProject project={project} theme={project.theme} />
                )}
              </div>

              {/* بخش‌های مشترک همه پروژه‌ها */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ستون سمت چپ */}
                <div className="lg:col-span-2 space-y-8">
                  {/* چالش‌ها و راه‌حل‌ها */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${themes[project.theme].light} flex items-center justify-center`}>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">چالش‌های اصلی</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className={`w-2 h-2 rounded-full ${themes[project.theme].text} mt-2 flex-shrink-0`} />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${themes[project.theme].light} flex items-center justify-center`}>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">راه‌حل‌های پیاده‌سازی شده</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className={`w-2 h-2 rounded-full ${themes[project.theme].text} mt-2 flex-shrink-0`} />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ستون سمت راست */}
                <div className="space-y-8">
                  {/* امتیازات Lighthouse */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${themes[project.theme].light} flex items-center justify-center`}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8S16.42 2 12 2c-1.09 0-2.12.21-3.06.59.15-.46.36-1.05.58-1.65C10.44 1.31 11.16.67 13.5.67z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">امتیازات Lighthouse</h3>
                        <p className="text-sm text-gray-500">نتایج تست عملکرد</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <ProgressBar value={project.lighthouse.performance} label="کارایی" theme={project.theme} />
                      <ProgressBar value={project.lighthouse.accessibility} label="دسترسی‌پذیری" theme={project.theme} />
                      <ProgressBar value={project.lighthouse.bestPractices} label="بهترین روش‌ها" theme={project.theme} />
                      <ProgressBar value={project.lighthouse.seo} label="سئو" theme={project.theme} />
                      <ProgressBar value={project.lighthouse.pwa} label="PWA" theme={project.theme} />
                    </div>
                  </div>
                </div>
              </div>

              {/* جداکننده بین پروژه‌ها */}
              {projectIndex < projects.length - 1 && (
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="px-4 bg-white">
                      <div className={`px-6 py-2 rounded-full border ${themes[project.theme].border} ${themes[project.theme].bg}`}>
                        <span className={`text-sm font-medium ${themes[project.theme].text}`}>
                          پروژه بعدی ↓
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
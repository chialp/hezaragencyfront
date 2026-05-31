// components/Footer.js
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  Shield,
  FileText,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Footer({ className = "" }) {
  const texts = {
    companyName: "آژانس سایت هزار",
    companyDesc: "آژانس طراحی و توسعه ی سایت",
    companyBio:
      "آژانس تخصصی ما در طراحی، توسعه و سئو سایت فعالیت می‌کند. با ترکیب خلاقیت، فناوری روز و بهینه‌سازی اصولی، راهکارهای وب‌سایت سفارشی برای رشد آنلاین برند شما ارائه می‌دهیم.",
    quickLinks: "دسترسی سریع",
    home: "صفحه اصلی",
    services: "طراحی سایت",
    threed: "سایت سه بعدی",
    support: "پشتیبانی",
    seo: "سئو",
    team: "تیم ما",
    contact: "تماس با ما",
    contactInfo: "راه‌های ارتباطی",
    email: "ایمیل",
    phone: "تلفن",
    workHours: "ساعات کاری",
    hoursValue: "شنبه تا پنج شنبه: ۹-۱۸",
    copyright: "© تمام حقوق محفوظ است"
  };

  const quickLinks = [
    { name: texts.home, href: "/" },
    { name: texts.services, href: "/fa/web" },
    { name: texts.threed, href: "/fa/3d" },
    { name: texts.support, href: "/fa/support" },
    { name: texts.seo, href: "/fa/seo" },
    { name: texts.team, href: "/aboutus" },
    { name: texts.contact, href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: texts.email,
      value: "info@hezaragency.com",
      href: "mailto:info@hezaragency.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: texts.phone,
      value: "0991-0111132",
      href: "tel:+989910111132",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: texts.workHours,
      value: texts.hoursValue,
      href: "#",
    },
  ];

  const socialLinks = [
    { name: "اینستاگرام", src: "/icon/instagram.png", href: "https://instagram.com/hezaragency" },
    { name: "تلگرام", src: "/icon/telegram.png", href: "https://t.me/hezaragency" },
    { name: "ایمیل", src: "/icon/gmail.png", href: "mailto:info@hezaragency.com" },
  ];

  return (
    <footer className={`bg-white border-t border-gray-200 mt-auto ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2 space-y-6">

              <div className="flex items-center gap-3">
                <Image
                  src="/logo/logo.webp"
                  alt="لوگو هزار"
                  width={100}
                  height={50}
                  priority
                  style={{ height: "50px", width: "auto" }}
                  className="hover:opacity-70 border-b-[1px] border-blue-600"
                />

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {texts.companyName}
                  </h3>
                  <p className="text-sm text-blue-600">{texts.companyDesc}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-right">
                {texts.companyBio}
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="hidden md:flex flex-col space-y-4 text-right">

              <h4 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
                {texts.quickLinks}
              </h4>

              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 group flex-row-reverse"
                    >
                      <span className="text-blue-500 transition-transform group-hover:scale-110">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-right">

              <h4 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
                {texts.contactInfo}
              </h4>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Link
                    key={index}
                    href={contact.href}
                    className="flex items-start gap-3 group flex-row-reverse"
                  >
                    <span className="text-blue-600 mt-0.5 flex-shrink-0">
                      {contact.icon}
                    </span>

                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">
                        {contact.title}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="py-6 border-t border-gray-200 text-right text-sm text-gray-600">
          {texts.copyright}
        </div>

      </div>
    </footer>
  );
}
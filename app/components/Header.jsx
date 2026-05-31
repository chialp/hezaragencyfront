"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Layout,
  Smartphone,
  TrendingUp,
  Users,
  Palette,
  Package,
  BookOpen,
  Rotate3d,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const IconRenderer = ({ iconName, className = "w-5 h-5" }) => {
  const icons = {
    Smartphone,
    TrendingUp,
    Users,
    Palette,
    Package,
    Home,
    Rotate3d,
    BookOpen,
    Layout,
  };
  const IconComponent = icons[iconName] || Layout;
  return <IconComponent className={className} />;
};

export default function HeaderClient({
  serverProducts = [],
  serverProjects = [],
  ctaInfo = {},
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProjectsOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
          scrolled
            ? "shadow-xl bg-white/95 backdrop-blur-md"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 xl:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.webp"
                alt="Logo"
                width={160}
                height={60}
                priority
                quality={65}
                className="h-11 w-auto object-contain"
                sizes="160px"
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              <Link
                href="/"
                className={`font-bold text-sm 2xl:text-base ${
                  isActiveLink("/")
                    ? "text-blue-800"
                    : "text-gray-700 hover:text-blue-800"
                }`}
              >
                خانه
              </Link>
              <Link
                href="/articles"
                className={`font-bold text-sm 2xl:text-base ${
                  isActiveLink("/articles")
                    ? "text-blue-800"
                    : "text-gray-700 hover:text-blue-800"
                }`}
              >
                مقالات
              </Link>

              {/* خدمات Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button className="flex items-center font-bold text-sm 2xl:text-base text-gray-700 hover:text-blue-800 py-4">
                  خدمات <ChevronDown className="mr-1 w-4 h-4" />
                </button>
                {productsDropdownOpen && (
                  <div className="absolute top-full right-0 min-w-[260px] rounded-2xl shadow-2xl bg-white border border-gray-100 p-2 animate-fadeIn">
                    {serverProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={p.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                      >
                        <IconRenderer
                          iconName={p.iconType}
                          className="w-5 h-5 text-blue-700"
                        />
                        <span className="font-semibold text-gray-800 text-sm">
                          {p.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* نمونه‌کارها Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                <button className="flex items-center font-bold text-sm 2xl:text-base text-gray-700 hover:text-blue-800 py-4">
                  نمونه‌کارها <ChevronDown className="mr-1 w-4 h-4" />
                </button>
                {projectsDropdownOpen && (
                  <div className="absolute top-full right-0 min-w-[240px] rounded-2xl shadow-2xl bg-white border border-gray-100 p-2 animate-fadeIn">
                    {serverProjects.map((p) => (
                      <Link
                        key={p.id}
                        href={p.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                      >
                        <IconRenderer
                          iconName={p.iconType}
                          className="w-5 h-5 text-gray-600"
                        />
                        <span className="font-semibold text-gray-800 text-sm">
                          {p.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/aboutus"
                className="font-bold text-sm 2xl:text-base text-gray-700 hover:text-blue-800"
              >
                درباره ما
              </Link>
              <Link
                href="/contact"
                className="font-bold text-sm 2xl:text-base text-gray-700 hover:text-blue-800"
              >
                تماس با ما
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden xl:flex">
              <Link
                href="/3d"
                className="px-7 py-3 rounded-2xl shadow-lg bg-blue-800 text-white font-bold hover:scale-105 transition-all"
              >
                {ctaInfo.buttonText || "بخش سه بعدی"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                type="button"
                aria-label="باز کردن منو"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-xl bg-blue-800 text-white shadow-lg"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <button
                type="button"
                aria-label="بستن"
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X aria-hidden="true" />
              </button>
              <Image
                width={80}
                height={80}
                src="/logo/logo.webp"
                alt="Logo"
                className="w-auto h-8"
              />
            </div>

            {/* Menu Items */}
            <div className="space-y-3 flex-grow">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  isActiveLink("/") ? "bg-blue-50 text-blue-800" : ""
                }`}
              >
                <Home size={20} /> <span className="font-semibold">خانه</span>
              </Link>

              {/* خدمات */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Layout size={20} />
                  <span className="font-semibold">خدمات</span>
                </div>
                <ChevronDown
                  size={18}
                  className={mobileServicesOpen ? "rotate-180" : ""}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pr-4 space-y-1">
                  {serverProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
                    >
                      <IconRenderer
                        iconName={p.iconType}
                        className="w-5 h-5 text-blue-700"
                      />
                      <span className="text-sm">{p.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* نمونه کارها */}
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={20} />
                  <span className="font-semibold">نمونه کارها</span>
                </div>
                <ChevronDown
                  size={18}
                  className={mobileProjectsOpen ? "rotate-180" : ""}
                />
              </button>
              {mobileProjectsOpen && (
                <div className="pr-4 space-y-1">
                  {serverProjects.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
                    >
                      <IconRenderer
                        iconName={p.iconType}
                        className="w-5 h-5 text-gray-600"
                      />
                      <span className="text-sm">{p.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/aboutus"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 p-3 rounded-xl"
              >
                <Users size={20} />{" "}
                <span className="font-semibold">درباره ما</span>
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 p-3 rounded-xl"
              >
                <Smartphone size={20} />{" "}
                <span className="font-semibold">تماس با ما</span>
              </Link>
              <Link
                href="/articles"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 p-3 rounded-xl"
              >
                <BookOpen size={20} />{" "}
                <span className="font-semibold">مقالات</span>
              </Link>
            </div>

            {/* CTA بخش سه بعدی */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/3d"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-800 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-all"
              >
                <Rotate3d size={20} />
                <span>{ctaInfo.buttonText || "ورود به بخش سه بعدی"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

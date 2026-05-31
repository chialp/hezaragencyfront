// components/IconRenderer.js
import React from 'react';

// تمام آیکون‌های مورد نیاز به صورت SVG خالص و بهینه
const icons = {
  // آیکون خانه
  Home: () => (
    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),

  // آیکون لایه/طراحی سایت
  Layout: () => (
    <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),

  // آیکون سه بعدی/چرخش
  Rotate3d: () => (
    <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v18M3 12h18M12 12l3-3M12 12l3 3M12 12l-3-3M12 12l-3 3" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),

  // آیکون رشد/سئو
  TrendingUp: () => (
    <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8 10 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),

  // آیکون کاربران/پشتیبانی
  Users: () => (
    <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),

  // آیکون پالت/طراحی
  Palette: () => (
    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M22 12h-4M12 20v2M4 12H2M12 4l2 2-2 2M8 8l-2-2M16 16l2 2M8 16l-2 2" />
    </svg>
  ),

  // آیکون بسته/محصول
  Package: () => (
    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="22" x2="12" y2="12" />
      <polyline points="12 12 20 8 12 4 4 8 12 12" />
      <path d="M20 16v-8M4 16v-8" />
    </svg>
  ),

  // آیکون کتاب/مقالات
  BookOpen: () => (
    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),

  // آیکون گوشی/موبایل
  Smartphone: () => (
    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),

  // آیکون پلی/پخش ویدیو
  Play: () => (
    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  ),

  // آیکون جرقه/ویژه
  Sparkles: () => (
    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v18M3 12h18M12 12l3-3M12 12l3 3M12 12l-3-3M12 12l-3 3" />
      <path d="M18 6l2 2-2 2M6 18l-2-2 2-2" />
    </svg>
  ),

  // آیکون منو
  Menu: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),

  // آیکون بستن/X
  X: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  // آیکون فلش پایین
  ChevronDown: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

// کامپوننت اصلی با پشتیبانی از className دلخواه
export default function IconRenderer({ iconName, className = "w-5 h-5" }) {
  const Icon = icons[iconName] || icons.Layout;
  
  // اگر آیکون پیدا نشد، از Layout استفاده کن
  if (!icons[iconName]) {
    console.warn(`آیکون "${iconName}" یافت نشد، از آیکون پیش‌فرض استفاده می‌شود`);
  }

  // clone element برای اضافه کردن className
  const iconElement = Icon();
  
  // اضافه کردن className به SVG
  return React.cloneElement(iconElement, {
    className: `${iconElement.props.className} ${className}`.trim()
  });
}

// export جداگانه برای هر آیکون (در صورت نیاز به استفاده مستقیم)
export const HomeIcon = icons.Home;
export const LayoutIcon = icons.Layout;
export const Rotate3dIcon = icons.Rotate3d;
export const TrendingUpIcon = icons.TrendingUp;
export const UsersIcon = icons.Users;
export const PaletteIcon = icons.Palette;
export const PackageIcon = icons.Package;
export const BookOpenIcon = icons.BookOpen;
export const SmartphoneIcon = icons.Smartphone;
export const PlayIcon = icons.Play;
export const SparklesIcon = icons.Sparkles;
export const MenuIcon = icons.Menu;
export const XIcon = icons.X;
export const ChevronDownIcon = icons.ChevronDown;
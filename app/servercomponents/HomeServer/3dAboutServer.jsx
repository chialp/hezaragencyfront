import { Box, Shield, ArrowRight, Phone } from "lucide-react";
import ThreeDVideo from "../../components/Home/3dAbout";
import Link from "next/link";

export default function ThreeDServicesServer() {
  return (
    <section className="w-full bg-white overflow-hidden h-[80rem] md:h-auto pb-12">
    

      {/* محتوای اصلی - حل مشکل بازه 1016px تا 1350px */}
      <div className="max-w-7xl mx-auto  px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-16">
          {/* متن - عرض منعطف در بازه دسکتاپ کوچک */}
          <div className="order-2 lg:order-1 w-full lg:w-[45%] xl:w-[50%] lg:ml-5 text-right">
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-gray-900 mb-6 leading-snug">
              هزار اولین آژانس طراحی و توسعه ی{" "}
              <span className="text-blue-700">سایت‌های سه بعدی</span> در ایران
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-[1.2rem]">
              در دنیای شلوغ دیجیتال، دیده شدن سخت است. طراحی سه بعدی به کاربر
              اجازه می‌دهد با محصول شما "تعامل" داشته باشد، آن را بچرخاند و حس
              واقعی‌تری دریافت کند.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                href="/3d"
                className="bg-[#1e40af] text-white px-8 py-4 rounded-2xl flex items-center gap-3 justify-center hover:scale-105 transition-transform shadow-lg font-bold"
              >
                 رفتن به قسمت سه بعدی <ArrowRight size={20} />
              </Link>
              <Link
                href="tel:09910111132"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl flex items-center gap-3 justify-center hover:bg-gray-50 transition-all font-bold"
              >
                مشاوره <Phone size={20} />
              </Link>
            </div>
          </div>

          {/* تلویزیون سه‌بعدی - کانتینر منعطف */}
          <div className="order-1 lg:order-2 w-full lg:w-[55%] xl:w-[60%] flex justify-center items-center">
            <ThreeDVideo />
          </div>
        </div>
      </div>
    </section>
  );
}

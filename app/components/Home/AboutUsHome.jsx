"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Linkedin,
  MessageCircle,
  Phone,
  MapPin,
  Target,
  Zap,
  Heart,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cardAnim = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -10 },
};

const AboutSectionClient = ({
  contactMethods = [],
  quickContacts = [],
  tabs = [],
  tabContent = {},
}) => {
  const [activeTab, setActiveTab] = useState("vision");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactIcons = {
    1: <Instagram className="w-5 h-5" />,
    2: <MessageCircle className="w-5 h-5" />,
    3: <Mail className="w-5 h-5" />,
    4: <Linkedin className="w-4 h-4" />,
    5: <Phone className="w-4 h-4" />,
    6: <MapPin className="w-4 h-4" />,
  };

  const tabIcons = {
    vision: <Target className="w-4 h-4" />,
    mission: <Zap className="w-4 h-4" />,
    values: <Heart className="w-4 h-4" />,
  };

  const tabContentIcons = {
    vision: <Globe className="w-6 h-6" />,
    mission: <Target className="w-6 h-6" />,
    values: <Shield className="w-6 h-6" />,
  };

  return (
    <section className="relative py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              درباره آژانس طراحی سایت
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            تیمی از{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              متخصصان خلاق
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            با ترکیب هنر و تکنولوژی، سایت‌هایی می‌سازیم که کسب‌وکار شما را رشد می‌دهند.
          </motion.p>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden mb-8">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
            منوی ارتباطات
          </motion.button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDE */}
          <div className={`lg:w-2/5 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>

            {/* TABS */}
            <motion.div
              variants={cardAnim}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-blue-100 shadow-xl p-6 mb-8"
            >
              <h3 className="font-bold text-lg mb-6">
                چشم‌انداز و ماموریت
              </h3>

              <div className="flex flex-col gap-2 mb-6">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                      activeTab === tab.id
                        ? "bg-blue-50 border-r-4 border-blue-600"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {tabIcons[tab.id]}
                      {tab.label}
                    </div>

                    {activeTab === tab.id && (
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-blue-50 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  {tabContentIcons[activeTab]}
                  <h4 className="font-bold">
                    {tabContent?.[activeTab]?.title}
                  </h4>
                </div>

                <p className="text-gray-700">
                  {tabContent?.[activeTab]?.description}
                </p>
              </motion.div>
            </motion.div>

            {/* QUICK CONTACT */}
            <motion.div
              variants={cardAnim}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-blue-50 rounded-2xl border border-blue-200 p-6"
            >
              <h3 className="font-bold mb-6">ارتباط سریع</h3>

              <div className="space-y-3">
                {quickContacts.map((contact) => (
                  <Link key={contact.id} href={contact.link} target="_blank">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border"
                    >
                      <div className="p-2 bg-blue-600 text-white rounded-lg">
                        {contactIcons[contact.id]}
                      </div>

                      <div className="flex-1 text-right">
                        <div className="font-bold">{contact.name}</div>
                        <div className="text-sm text-blue-600">
                          {contact.role}
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-3/5">

            <motion.div
              variants={cardAnim}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-blue-100 shadow-xl p-6"
            >
              <h3 className="font-bold text-xl mb-8">
                شبکه‌های اجتماعی
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {contactMethods.map((method) => (
                  <Link
                    key={method.id}
                    href={method.link}
                    target="_blank"
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white border rounded-xl p-5 text-center"
                    >
                      <div className="relative w-14 h-14 mx-auto mb-4">
                        {method.image && (
                          <Image
                            src={method.image}
                            alt={method.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        )}
                      </div>

                      <h4 className="font-bold">{method.name}</h4>

                      <p className="text-blue-600 text-sm">
                        {method.role}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionClient;

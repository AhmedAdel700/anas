"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Share2, Check, X, ArrowRight } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

import image1 from "@/app/assets/Capture.png";
import image2 from "@/app/assets/Capture1.png";
import image3 from "@/app/assets/Capture2.png";
import image4 from "@/app/assets/Capture3.png";
import image5 from "@/app/assets/Capture4.png";
import image6 from "@/app/assets/Capture5.png";
import image7 from "@/app/assets/Capture6.png";
import image8 from "@/app/assets/Capture7.png";
import image9 from "@/app/assets/Capture8.png";

const menuItems = [
  {
    id: 1,
    title: "Grills & Meals",
    image: image1,
  },
  {
    id: 2,
    title: "Chicken Meals & Soups",
    image: image2,
  },
  {
    id: 3,
    title: "Casseroles",
    image: image3,
  },
  {
    id: 4,
    title: "Sandwiches & Meals",
    image: image4,
  },
  {
    id: 5,
    title: "Special Orders",
    image: image5,
  },
  {
    id: 6,
    title: "Bakery",
    image: image6,
  },
  {
    id: 7,
    title: "1",
    image: image7,
  },
  {
    id: 8,
    title: "2",
    image: image8,
  },
  {
    id: 9,
    title: "3",
    image: image9,
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E4405F",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@anas.com",
    color: "#d4a574",
  },
  { icon: Phone, label: "Phone", href: "tel:+201288881943", color: "#25D366" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"menu" | "links">("links");
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof image1 | null>(
    null
  );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#2d0a0a]"
    >
      <div className="sticky top-0 z-50 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#2d0a0a] backdrop-blur-xl border-b border-accent/10 shadow-2xl shadow-black/50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Logo - Made bigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="text-center">
              <h1 className="text-7xl md:text-8xl font-bold text-foreground">
                Anas <span className="text-accent">Grill</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-3 font-medium">
                Premium Dining & Butchering
              </p>
              <p className="text-muted-foreground/80 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
                Discover our exquisite menu featuring authentic grilled specialties, 
                fresh ingredients, and traditional flavors that will transport you 
                to culinary excellence.
              </p>
            </div>
          </motion.div>

          {/* Share Button - Moved after description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 transition-all duration-300"
              title="Copy link"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-accent" />
                  <span className="text-accent font-medium text-sm">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <Share2 size={18} className="text-accent" />
                  <span className="text-accent font-medium text-sm">Share</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Navigation Buttons - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <div className="flex gap-2 w-full">
              {["links", "menu"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab as "menu" | "links")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex-1 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden group"
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent/80 rounded-xl shadow-lg shadow-accent/30"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Background for inactive tabs */}
                  {activeTab !== tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a]/50 to-[#1a1a1a]/50 border border-accent/20 rounded-xl group-hover:border-accent/40 group-hover:from-[#333333]/50 group-hover:to-[#222222]/50 transition-all duration-300" />
                  )}

                  <span
                    className={`relative z-10 font-bold tracking-wide flex items-center justify-center gap-3 ${
                      activeTab === tab
                        ? "text-background"
                        : "text-foreground group-hover:text-accent"
                    } transition-colors duration-300`}
                  >
                    {tab === "links" ? (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        Links
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Menu
                      </>
                    )}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Menu Tab */}
      {activeTab === "menu" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-square bg-card border border-accent/20 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {activeTab === "links" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-[90%] xl:w-[46%] mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.06, x: 12 }}
                    whileTap={{ scale: 0.94 }}
                    className="relative flex items-center gap-4 p-4 rounded-xl overflow-hidden group"
                  >
                    {/* Background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] border-2 border-accent/30 rounded-xl"
                      whileHover={{
                        borderColor: "rgba(212, 165, 116, 0.8)",
                        backgroundColor: "rgba(212, 165, 116, 0.08)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon container with glow */}
                    <motion.div
                      className="relative p-3 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 group-hover:from-accent group-hover:to-accent/80 transition-all duration-300 shadow-lg"
                      style={{
                        boxShadow: `0 0 20px ${social.color}33`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 30px ${social.color}66`,
                      }}
                    >
                      <Icon
                        size={24}
                        className="text-accent group-hover:text-background transition-colors duration-300"
                      />
                    </motion.div>

                    {/* Label */}
                    <span className="relative font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                      {social.label}
                    </span>

                    {/* Animated arrow */}
                    <motion.div
                      className="relative text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight />
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl"
            >
              <div className="relative w-full aspect-auto rounded-xl overflow-hidden border border-accent/30">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Full menu item"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute cursor-pointer top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110 hover:rotate-90 group"
                >
                  <X size={24} className="group-hover:text-red-400 transition-colors duration-300" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

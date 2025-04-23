"use client";

import { Button } from "@/components/ui/button";
import { Home, Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

// TopHeader Component
const TopHeader = () => {
  return (
    <div className="bg-white shadow-sm py-2 border-b border-gray-200 text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[180px]">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Currency Exchange Center */}
        <div className="flex items-center gap-6 text-gray-800 font-medium">
          <div className="flex items-center gap-1">
            <span className="text-gray-600 font-semibold">Dollar:</span>
            <span className="text-gray-700">35,4789</span>
            <FaArrowUp className="text-green-600 text-xs mt-0.5" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 font-semibold">Euro:</span>
            <span className="text-gray-700">36,6475</span>
            <FaArrowUp className="text-green-600 text-xs mt-0.5" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 font-semibold">Altın:</span>
            <span className="text-gray-700">36,6475</span>
            <FaArrowDown className="text-red-600 text-xs mt-0.5" />
          </div>
        </div>

        {/* Search & Social Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="px-4 py-1.5 pl-5 pr-10 border border-gray-300 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="absolute right-3 top-1.5 text-gray-500">
              🔍
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Google">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Navigation Component
const MainNavigation = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      icon: <Home size={18} />,
    },
    { title: "SON DAKİKA", href: "/son-dakika" },
    { title: "GÜNDEM", href: "/gundem" },
    { title: "SPOR", href: "/spor" },
    { title: "EKONOMİ", href: "/ekonomi" },
    { title: "TEKNOLOJİ", href: "/teknoloji" },
    { title: "WEB TV", href: "/web-tv" },
    { title: "FOTO GALERİ", href: "/foto-galeri" },
    { title: "YAZARLAR", href: "/yazarlar" },
    { title: "NEVBAHAR", href: "/nevbahar" },
  ];

  return (
    <header className="w-full bg-[#eceff4] border-b-4 border-orange-500">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between py-2">
          <div className="flex items-center space-x-16 w-full overflow-x-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`relative px-3 py-2 flex items-center text-sm font-semibold uppercase whitespace-nowrap ${
                    isActive ? "bg-blue-200" : ""
                  }`}
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden ml-4">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex justify-between items-center"
            >
              <span>{item.title}</span>
              <MoveRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

// Combined Header Component
export default function CombinedHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <TopHeader />
      <MainNavigation />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Home, Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
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
    <header className="w-full fixed top-0 left-0 z-50 bg-[#eceff4] border-b-4 border-orange-500">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <nav className="flex space-x-6 items-center">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`relative px-3 py-2 flex items-center text-sm font-bold uppercase ${
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
        </nav>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
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
}

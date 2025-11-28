"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const url = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const menuNavbar = [
    { name: "Beranda", url: "/" },
    { name: "Buku", url: "/books" },
    { name: "Komunitas", url: "/community" },
    { name: "Riwayat", url: "/borrowing-history" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [url]);

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            LAVAPUS
          </Link>

          {/* Menu tengah */}
          <div className="hidden md:flex space-x-8">
            {menuNavbar.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={
                  url === item.url
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tombol kanan */}
          <div className="hidden md:flex space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Daftar
            </Link>
          </div>

          {/* Tombol menu (mobile) */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown menu (mobile) with transition */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 shadow-sm transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="flex flex-col px-4 py-3 space-y-3">
            {menuNavbar.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={
                  url === item.url
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <hr className="my-2" />
            <Link
              href="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Daftar
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

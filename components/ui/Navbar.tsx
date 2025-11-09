"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          LAVAPUS
        </Link>

        {/* Menu tengah */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Beranda
          </Link>
          <Link
            href="/books"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Buku
          </Link>
          <Link
            href="/community"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Komunitas
          </Link>
          <Link
            href="/borrowing-history"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Riwayat
          </Link>
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
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
              strokeWidth="2"
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

      {/* Dropdown menu (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col px-4 py-3 space-y-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Beranda
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-blue-600">
              Buku
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-blue-600"
            >
              Komunitas
            </Link>
            <Link
              href="/borrowing-history"
              className="text-gray-700 hover:text-blue-600"
            >
              Riwayat
            </Link>
            <hr className="my-2" />
            <Link
              href="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center hover:bg-blue-50"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

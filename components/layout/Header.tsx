"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Bell, Menu } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">
                PerpusVel
              </span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari buku, penulis, atau kategori..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="w-6 h-6 text-gray-600" />
            </button>

            <Link
              href="/notifications"
              className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors"
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>

            <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden ml-2 cursor-pointer">
              <Avatar.Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                alt="User"
              />
              <Avatar.Fallback className="bg-blue-600 text-white flex items-center justify-center w-full h-full">
                U
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden p-4 border-t">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari buku..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Clock,
  MessageSquare,
  Bell,
  LogOut,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/admin",
    },
    { id: "books", icon: BookOpen, label: "Kelola Buku", href: "/admin/books" },
    {
      id: "users",
      icon: Users,
      label: "Kelola Pengguna",
      href: "/admin/users",
    },
    {
      id: "borrowing",
      icon: Clock,
      label: "Peminjaman",
      href: "/admin/borrowing",
    },
    {
      id: "community",
      icon: MessageSquare,
      label: "Komunitas",
      href: "/admin/community",
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notifikasi",
      href: "/admin/notifications",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-gray-900 text-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-64`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">PerpusVel Admin</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-800 mt-4">
            <Link href="/" className=" cursor-pointer">
              <button className="flex items-center cursor-pointer gap-3 px-4 py-3 rounded-lg hover:bg-red-900 text-red-400 w-full transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Keluar</span>
              </button>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;

"use client";

import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface AdminHeaderProps {
  onMenuClick: () => void;
}
const AdminHeader: React.FC<AdminHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition-colors">
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
                  <Avatar.Fallback className="bg-blue-600 text-white flex items-center justify-center w-full h-full">
                    A
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">admin@perpusvel.com</p>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-gray-600" />
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-2 min-w-[200px] z-50">
                  <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer outline-none">
                    Profil
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />
                  <DropdownMenu.Item className="px-4 py-2 hover:bg-red-50 text-red-600 rounded cursor-pointer outline-none">
                    <Link href="/"> Keluar</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AdminHeader;

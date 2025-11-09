import React from "react";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">PerpusVel</span>
            </div>
            <p className="text-sm">
              Platform perpustakaan digital yang menghubungkan pembaca dengan
              ribuan koleksi buku.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/books"
                  className="hover:text-blue-400 transition-colors"
                >
                  Koleksi Buku
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-blue-400 transition-colors"
                >
                  Komunitas
                </Link>
              </li>
              <li>
                <Link
                  href="/borrowing-history"
                  className="hover:text-blue-400 transition-colors"
                >
                  Riwayat
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@perpusvel.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 PerpusVel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

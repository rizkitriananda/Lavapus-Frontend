"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "@/types";
import { Button } from "@/components/ui/Button";

interface BooksTableProps {
  books: Book[];
  loading: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

export const BooksTable: React.FC<BooksTableProps> = ({
  books,
  loading,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">Judul</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">Penulis</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">Kategori</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">Tersedia</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="py-6 px-4 text-center text-gray-500" colSpan={5}>Memuat data…</td>
              </tr>
            ) : books.length === 0 ? (
              <tr>
                <td className="py-6 px-4 text-center text-gray-500" colSpan={5}>Tidak ada data</td>
              </tr>
            ) : (
              <AnimatePresence initial={false}>
                {books.map((book) => (
                  <motion.tr
                    key={book.id}
                    className="border-t"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">{book.title}</td>
                    <td className="py-3 px-4 text-gray-700">{book.author}</td>
                    <td className="py-3 px-4 text-gray-700">{book.category}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${book.available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                        {book.available ? "Ya" : "Tidak"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => onView(book.id)}>Lihat</Button>
                        <Button variant="secondary" size="sm" onClick={() => onEdit(book.id)}>Edit</Button>
                        <Button variant="danger" size="sm" onClick={() => onDelete(book.id)}>Hapus</Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

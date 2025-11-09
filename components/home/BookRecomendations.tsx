"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BookCard from "../books/BookCard";
import type { Book } from "@/types";

export const BookRecommendations: React.FC = () => {
  // Mock data - akan diganti dengan API call
  const books: Book[] = [
    {
      id: 1,
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      cover: "",
      category: "Fiksi",
      available: true,
    },
    {
      id: 2,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      cover: "",
      category: "Fiksi",
      available: true,
    },
    {
      id: 3,
      title: "Negeri 5 Menara",
      author: "Ahmad Fuadi",
      cover: "",
      category: "Inspirasi",
      available: false,
    },
    {
      id: 4,
      title: "Hujan",
      author: "Tere Liye",
      cover: "",
      category: "Fiksi",
      available: true,
    },
  ];

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Rekomendasi Buku</h2>
        <Link
          href="/books"
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
        >
          Lihat Semua <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

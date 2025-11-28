/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Search, Filter, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { BooksTable } from "@/components/admin/BooksTable";
import { AddBookDialog } from "@/components/admin/AddBookDialog";
import { booksAPI } from "@/libs/api";
import { exportTableToExcel } from "@/libs/utils";
import { Book } from "@/types";
import toast from "react-hot-toast";

export default function BooksManagementPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [currentPage, searchQuery]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await booksAPI.getAll({
        page: currentPage,
        search: searchQuery,
      });
      setBooks(response.data);
    } catch (error: any) {
      toast.error(error.message || "Gagal memuat data buku");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus buku ini?")) return;

    try {
      // await booksAPI.delete(id);
      toast.success("Buku berhasil dihapus");
      fetchBooks();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus buku");
    }
  };

  const handleExport = () => {
    const data = books.length ? (books as any) : (dummyBooks as any);
    exportTableToExcel("Buku", [
      { key: "title", label: "Judul" },
      { key: "author", label: "Penulis" },
      { key: "category", label: "Kategori" },
      { key: "available", label: "Tersedia", formatter: (v) => (v ? "Ya" : "Tidak") },
    ], data);
    toast.success("Export Excel berhasil");
  };

  const dummyBooks = [
    {
      id: 1,
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      category: "Novel",
      available: true,
    },
    {
      id: 2,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      category: "Inspirasi",
      available: false,
    },
    {
      id: 3,
      title: "Negeri 5 Menara",
      author: "Ahmad Fuadi",
      category: "Fiksi",
      available: true,
    },
    {
      id: 4,
      title: "Hujan",
      author: "Tere Liye",
      category: "Drama",
      available: true,
    },
    {
      id: 5,
      title: "Ayat Ayat Cinta",
      author: "Habiburrahman El Shirazy",
      category: "Romansa",
      available: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Buku</h1>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Cari buku..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleExport}
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Tambah Buku
          </Button>
        </div>
      </div>

      <BooksTable
        books={dummyBooks}
        loading={loading}
        onDelete={handleDelete}
        onEdit={(id) => console.log("Edit", id)}
        onView={(id) => console.log("View", id)}
      />

      <AddBookDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onSuccess={fetchBooks}
      />
    </div>
  );
}

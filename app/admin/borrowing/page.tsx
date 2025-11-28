/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import RecentBorrowings from "@/components/admin/RecentBorrowings";
import { borrowingsAPI } from "@/libs/api";
import { exportTableToExcel } from "@/libs/utils";
import { BorrowRecord } from "@/types";
import toast from "react-hot-toast";

export default function BorrowingManagementPage() {
  const [borrowings, setBorrowings] = useState<BorrowRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBorrowings = async () => {
    try {
      setLoading(true);
      const res = await borrowingsAPI.getAll({
        page: currentPage,
        search: searchQuery,
      });
      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setBorrowings(data as BorrowRecord[]);
    } catch (e: any) {
      toast.error(e?.message || "Gagal memuat data peminjaman");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorrowings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  const handleExport = () => {
    const data = borrowings as any;
    exportTableToExcel("Peminjaman", [
      { key: "userName", label: "Pengguna" },
      { key: "bookTitle", label: "Buku" },
      { key: "borrowDate", label: "Tgl Pinjam" },
      { key: "returnDate", label: "Tgl Kembali" },
      { key: "status", label: "Status", formatter: (v) => {
        if (v === "borrowed") return "Dipinjam";
        if (v === "returned") return "Dikembalikan";
        if (v === "overdue") return "Terlambat";
        return String(v);
      } },
    ], data);
    toast.success("Export Excel berhasil");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Peminjaman</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Cari peminjaman..."
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
        </div>
      </div>

      <RecentBorrowings data={borrowings} />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Button from "@/components/admin/Button";
import Select from "@/components/admin/Select";
import StatCard from "@/components/admin/StatCard";
import {
  BookOpen,
  Users,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Clock,
  MoreVertical,
} from "lucide-react";
import { BorrowRecord, Stats } from "@/types";
export default function AdminDashboard() {
  const recentBorrowings: BorrowRecord[] = [
    {
      id: 1,
      userName: "Budi Santoso",
      bookTitle: "Bumi Manusia",
      borrowDate: "2025-01-20",
      returnDate: "2025-02-03",
      status: "borrowed",
    },
    {
      id: 2,
      userName: "Siti Nurhaliza",
      bookTitle: "Laskar Pelangi",
      borrowDate: "2025-01-18",
      returnDate: "2025-02-01",
      status: "overdue",
    },
    {
      id: 3,
      userName: "Ahmad Fauzi",
      bookTitle: "Negeri 5 Menara",
      borrowDate: "2025-01-15",
      returnDate: "2025-01-25",
      status: "returned",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "borrowed":
        return "bg-blue-100 text-blue-800";
      case "returned":
        return "bg-green-100 text-green-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "borrowed":
        return "Dipinjam";
      case "returned":
        return "Dikembalikan";
      case "overdue":
        return "Terlambat";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Buku"
          value={stats.totalBooks}
          change={stats.change.books}
          icon={BookOpen}
          trend="up"
        />
        <StatCard
          title="Total Pengguna"
          value={stats.totalUsers}
          change={stats.change.users}
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Peminjaman Aktif"
          value={stats.activeBorrowings}
          change={stats.change.borrowings}
          icon={Clock}
          trend="down"
        />
        <StatCard
          title="Total Postingan"
          value={stats.totalPosts}
          change={stats.change.posts}
          icon={MessageSquare}
          trend="up"
        />
      </div> */}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">
              Aktivitas Peminjaman
            </h3>
            <Select
              options={[
                { value: "7days", label: "7 Hari Terakhir" },
                { value: "30days", label: "30 Hari Terakhir" },
                { value: "90days", label: "90 Hari Terakhir" },
              ]}
              className="w-auto text-sm"
            />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <BarChart3 className="w-16 h-16 text-gray-300" />
            <span className="ml-4 text-gray-500">
              Grafik akan ditampilkan di sini
            </span>
          </div>
        </div>

        {/* Popular Books */}
        {/* <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Buku Populer</h3>
          <div className="space-y-4">
            {[
              { title: "Bumi Manusia", borrowed: 45, trend: "up" },
              { title: "Laskar Pelangi", borrowed: 38, trend: "up" },
              { title: "Negeri 5 Menara", borrowed: 32, trend: "down" },
              { title: "Hujan", borrowed: 28, trend: "up" },
            ].map((book, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{book.title}</p>
                    <p className="text-sm text-gray-500">
                      {book.borrowed} peminjaman
                    </p>
                  </div>
                </div>
                {book.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Recent Borrowings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Peminjaman Terbaru
          </h3>
          <Button variant="outline" size="sm">
            Lihat Semua
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Pengguna
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Buku
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Tgl Pinjam
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Tgl Kembali
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {recentBorrowings.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {record.userName}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {record.bookTitle}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {record.borrowDate}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {record.returnDate}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        record.status
                      )}`}
                    >
                      {getStatusLabel(record.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

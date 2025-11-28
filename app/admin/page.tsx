"use client";

import React from "react";
import { DashboardStats } from "@/components/admin/DashboardStats";
// import { ActivityChart } from '@/components/admin/ActivityChart';
// import { PopularBooks } from '@/components/admin/PopularBooks';
// import { RecentBorrowings } from '@/components/admin/RecentBorrowings';
import { BorrowRecord } from "@/types/index";

import ActivityChart from "@/components/admin/ActivityChart";
import PopularBooks from "@/components/admin/PopularBooks";
import RecentBorrowings from "@/components/admin/RecentBorrowings";
export default function AdminDashboard() {
  // const stats: Stats = {
  //   totalBooks: 1234,
  //   totalUsers: 856,
  //   activeBorrowings: 143,
  //   totalPosts: 289,
  //   change: {
  //     books: 12,
  //     users: 8,
  //     borrowings: -5,
  //     posts: 15,
  //   },
  // };

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

  const books = [
    { title: "Bumi Manusia", borrowed: 45, trend: "up" },
    { title: "Laskar Pelangi", borrowed: 38, trend: "up" },
    { title: "Negeri 5 Menara", borrowed: 32, trend: "down" },
    { title: "Hujan", borrowed: 28, trend: "up" },
  ];

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">{today}</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />

        <PopularBooks books={books} />
      </div>

      <RecentBorrowings data={recentBorrowings} />
    </div>
  );
}

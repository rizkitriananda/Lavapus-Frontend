/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import NotificationList from "@/components/notifications/NotificationList";
import { notificationsAPI } from "@/libs/api";
import { exportTableToExcel } from "@/libs/utils";
import { Notification } from "@/types";
import toast from "react-hot-toast";

export default function NotificationsManagementPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await notificationsAPI.getAll({
        page: currentPage,
        search: searchQuery,
      });
      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setNotifications(data as Notification[]);
    } catch (e: any) {
      toast.error(e?.message || "Gagal memuat notifikasi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  const handleExport = () => {
    exportTableToExcel(
      "Notifikasi",
      [
        { key: "title", label: "Judul" },
        { key: "message", label: "Pesan" },
        { key: "type", label: "Tipe" },
        {
          key: "isRead",
          label: "Dibaca",
          formatter: (v) => (v ? "Ya" : "Tidak"),
        },
        { key: "createdAt", label: "Dibuat" },
      ],
      notifications as any
    );
    toast.success("Export Excel berhasil");
  };

  const markRead = async (id: number) => {
    try {
      await notificationsAPI.markRead(id);
      fetchNotifications();
    } catch (e: any) {
      toast.error(e?.message || "Gagal menandai dibaca");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus notifikasi ini?")) return;
    try {
      await notificationsAPI.delete(id);
      toast.success("Notifikasi dihapus");
      fetchNotifications();
    } catch (e: any) {
      toast.error(e?.message || "Gagal menghapus notifikasi");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Notifikasi</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Cari notifikasi..."
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

      {loading ? (
        <div className="bg-white rounded-xl shadow-sm p-6 text-gray-600">
          Memuat data…
        </div>
      ) : (
        <NotificationList
          data={notifications}
          onMarkRead={markRead}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

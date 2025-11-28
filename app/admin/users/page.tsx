"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, Download, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { UsersTable } from "@/components/admin/UsersTable";
import toast from "react-hot-toast";
import { usersAPI } from "@/libs/api";
import { User } from "@/types";
import { exportTableToExcel } from "@/libs/utils";

export default function UsersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await usersAPI.getAll({ search: searchQuery, page: 1 });
      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setUsers(data as User[]);
    } catch (e: any) {
      toast.error(e?.message || "Gagal memuat data pengguna");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Pengguna</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Cari pengguna..."
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
            onClick={() => {
              exportTableToExcel("Pengguna", [
                { key: "name", label: "Nama" },
                { key: "email", label: "Email" },
                { key: "booksRead", label: "Buku Dibaca" },
                { key: "createdAt", label: "Terdaftar" },
              ], users as any);
              toast.success("Export Excel berhasil");
            }}
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      <UsersTable searchQuery={searchQuery} />
    </div>
  );
}

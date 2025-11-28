/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { User } from "@/types";
import { usersAPI } from "@/libs/api";
import toast from "react-hot-toast";

interface UsersTableProps {
  searchQuery: string;
}

export const UsersTable: React.FC<UsersTableProps> = ({ searchQuery }) => {
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

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus pengguna ini?")) return;
    try {
      await usersAPI.delete(id);
      toast.success("Pengguna dihapus");
      fetchUsers();
    } catch (e: any) {
      toast.error(e?.message || "Gagal menghapus pengguna");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Nama
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Buku Dibaca
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Terdaftar
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-right">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="py-6 px-4 text-center text-gray-500" colSpan={5}>
                  Memuat data…
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td className="py-6 px-4 text-center text-gray-500" colSpan={5}>
                  Tidak ada pengguna
                </td>
              </tr>
            ) : (
              <AnimatePresence initial={false}>
                {users.map((u) => (
                  <motion.tr
                    key={u.id}
                    className="border-t"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      {u.name}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{u.email}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {u.booksRead ?? 0}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Lihat
                        </Button>
                        <Button variant="secondary" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(u.id)}
                        >
                          Hapus
                        </Button>
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

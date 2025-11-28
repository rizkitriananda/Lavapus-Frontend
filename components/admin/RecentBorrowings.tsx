"use client";
import { BorrowRecord } from "@/types";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical } from "lucide-react";
type Borrowings = {
  data: BorrowRecord[];
};

const RecentBorrowings = ({ data }: Borrowings) => {
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
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Peminjaman Terbaru</h3>
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
            <AnimatePresence initial={false}>
              {data.map((record) => (
                <motion.tr
                  key={record.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
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
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBorrowings;

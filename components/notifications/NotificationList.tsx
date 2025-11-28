"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Notification } from "@/types";
import { Button } from "@/components/ui/Button";
import { Bell, AlertCircle, MessageSquare, Heart } from "lucide-react";

interface NotificationListProps {
  data: Notification[];
  onMarkRead?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const iconForType = (type: Notification["type"]) => {
  switch (type) {
    case "borrow":
      return Bell;
    case "return":
      return Bell;
    case "overdue":
      return AlertCircle;
    case "comment":
      return MessageSquare;
    case "like":
      return Heart;
    default:
      return Bell;
  }
};

const NotificationList: React.FC<NotificationListProps> = ({
  data,
  onMarkRead,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Notifikasi</h3>
      <div className="divide-y">
        {data.length === 0 ? (
          <p className="text-sm text-gray-600 py-4">Tidak ada notifikasi</p>
        ) : (
          <AnimatePresence initial={false}>
            {data.map((n) => {
              const Icon = iconForType(n.type);
              return (
                <motion.div
                  key={n.id}
                  className="flex items-start gap-3 py-3"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      n.type === "overdue" ? "bg-red-100" : "bg-blue-100"
                    }`}
                  >
                    <Icon
                      className={`${
                        n.type === "overdue" ? "text-red-600" : "text-blue-600"
                      } w-5 h-5`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{n.title}</p>
                    <p className="text-sm text-gray-600">{n.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(n.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!n.isRead && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onMarkRead?.(n.id)}
                      >
                        Tandai Dibaca
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => onDelete?.(n.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default NotificationList;

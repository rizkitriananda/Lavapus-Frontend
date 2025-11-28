/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useEffect, useState } from "react";

import {
  BookOpen,
  Users,
  Clock,
  MessageSquare,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  icon: any;
  trend: "up" | "down";
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  trend,
}) => {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    setFormatted(value.toLocaleString("id-ID"));
  }, [value]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${
            trend === "up" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          />
        </div>

        {change !== 0 && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              change > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change > 0 ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>

      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{formatted}</p>
    </div>
  );
};

export const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: "Total Buku",
      value: 1234,
      change: 12,
      icon: BookOpen,
      trend: "up" as const,
    },
    {
      title: "Total Pengguna",
      value: 856,
      change: 8,
      icon: Users,
      trend: "up" as const,
    },
    {
      title: "Peminjaman Aktif",
      value: 143,
      change: -5,
      icon: Clock,
      trend: "down" as const,
    },
    {
      title: "Total Postingan",
      value: 289,
      change: 15,
      icon: MessageSquare,
      trend: "up" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

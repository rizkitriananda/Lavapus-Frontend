/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrendingUp, TrendingDown } from "lucide-react";
const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`p-3 rounded-lg ${
          trend === "up"
            ? "bg-green-100"
            : trend === "down"
            ? "bg-red-100"
            : "bg-blue-100"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            trend === "up"
              ? "text-green-600"
              : trend === "down"
              ? "text-red-600"
              : "text-blue-600"
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
    <p className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</p>
  </div>
);

export default StatCard;

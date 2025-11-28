import { BarChart3 } from "lucide-react";
import Select from "@/components/admin/Select";
const ActivityChart = () => {
  return (
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
  );
};

export default ActivityChart;

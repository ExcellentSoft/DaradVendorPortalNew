import React, { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Phone Numbers", revenue: 380000, fill: "#6B21A8" },
  { name: "Tutorials", revenue: 420000, fill: "#0E7490" },
  { name: "Gift Items", revenue: 500000, fill: "#BE185D" },
  { name: "Digital Courses", revenue: 500000, fill: "#EA580C" },
  { name: "Logs", revenue: 230000, fill: "#15803D" },
];

const RevenuePromotion = () => {
  const [timeRange, setTimeRange] = useState("7 months");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
  };

  return (
    <div className="col-span-2 p-8 bg-white rounded-2xl shadow-md w-full">
    <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-gray-800">Revenue Breakdown</h2>
  <select
    value={timeRange}
    onChange={handleChange}
    className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md cursor-pointer"
  >
    <option value="7 months">Last 7 months</option>
    <option value="1 month">Last 1 month</option>
    <option value="1 year">Last 1 year</option>
  </select>
</div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} barCategoryGap={40}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={true} />
          <YAxis
            tickFormatter={(value) => `₦${value.toLocaleString()}`}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={true}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="#3B82F6" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenuePromotion;

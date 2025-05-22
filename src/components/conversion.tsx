import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Loyal Customers", value: 40 },
  { name: "First-Time Buyers", value: 35 },
  { name: "High-Spenders", value: 25 }
];

const COLORS = ["#5A55FE", "#B6B2FF", "#0B0B3B"];

const CustomerConversionCard = () => {
  return (
    <div className="w-96 rounded-2xl bg-white shadow-md p-4 flex flex-col items-center">
      <h2 className="text-center font-medium text-gray-700 mb-4">
        Customer Conversion
      </h2>
      <div className="relative w-40 h-40 mb-4">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={65}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs text-gray-500">TOTAL CUSTOMERS</p>
            <p className="text-xl font-semibold text-gray-800">5,000</p>
          </div>
        </div>
      </div>
      <div className="w-full space-y-3">
        <div className="bg-[#5A55FE] text-white rounded-xl py-2 px-4 flex items-center space-x-2">
          <span className="font-bold text-lg">40%</span>
          <span className="text-sm">Loyal Customers</span>
        </div>
        <div className="bg-white rounded-xl py-2 px-4 flex items-center space-x-2 shadow-sm">
          <div className="w-1.5 h-6 rounded-l-full bg-[#5A55FE]" />
          <span className="font-bold text-lg text-gray-800">35%</span>
          <span className="text-sm text-gray-600">First-Time Buyers</span>
        </div>
        <div className="bg-white rounded-xl py-2 px-4 flex items-center space-x-2 shadow-sm">
          <div className="w-1.5 h-6 rounded-l-full bg-[#B6B2FF]" />
          <span className="font-bold text-lg text-gray-800">25%</span>
          <span className="text-sm text-gray-600">High-Spenders</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerConversionCard;

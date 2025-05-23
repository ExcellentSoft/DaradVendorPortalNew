import React from "react";
import Image from "next/image";
import OrdersOverTimeChart from "./promotionovertime";
import CustomerConversion from "./conversion";

import {
  BarChart,
  CartesianGrid,
  Bar,

  ResponsiveContainer,
  
  XAxis,
  YAxis,
  Tooltip
 
} from "recharts";






const data = [
  {
    name: "Phone Numbers",
    revenue: 380000,
    fill: "#6B21A8",
  },
  {
    name: "Tutorials",
    revenue: 420000,
    fill: "#0E7490",
  },
  {
    name: "Gift Items",
    revenue: 500000,
    fill: "#BE185D",
  },
  {
    name: "Digital Courses",
    revenue: 500000,
    fill: "#EA580C",
  },
  {
    name: "Logs",
    revenue: 230000,
    fill: "#15803D",
  },
];













const promotionDashboard = () => {
 

  return (
    <div className="">
    

      {/* Breakdown Section */}
   
  <div className="col-span-2 p-8 bg-white rounded-2xl shadow-md w-full">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Revenue Breakdown</h2>
      <div className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md cursor-pointer">
        Last 7 days
      </div>
    </div>
<ResponsiveContainer width="100%" height={340}>
  <BarChart data={data} barCategoryGap={40}>
    {/* Keep only horizontal grid lines */}
    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
    
    {/* Show X-axis line and labels */}
    <XAxis
      dataKey="name"
      tick={{ fontSize: 12 }}
      tickLine={false}
      axisLine={true}  
    />
    
    {/* Show Y-axis line and labels */}
    <YAxis
      tickFormatter={(value) => `₦${value.toLocaleString()}`}
      tick={{ fontSize: 12 }}
      tickLine={false}
      axisLine={true}  
    />

    <Tooltip />

    {/* Bars with rounded tops */}
    <Bar dataKey="revenue" fill="#3B82F6" radius={[10, 10, 0, 0]} />
  </BarChart>
</ResponsiveContainer>


  </div>



      {/* Orders Over Time */}
    


    
    </div>
  );
};

export default promotionDashboard;

import React from "react";
import Image from "next/image";
import OrdersOverTimeChart from "./orderovertime";

import OrderHistoryTable from "./ordertable";
import {
  BarChart,
  CartesianGrid,
  Bar,

  ResponsiveContainer,
  
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
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

const CircleData = [
  { name: 'Week 1', value: 1000 },
  { name: 'Week 2', value: 1500 },
  { name: 'Week 3', value: 1200 },
  { name: 'Week 4', value: 1300 }
];


const ordersChartData = [
  { name: 'Jan', orders: 100 },
  { name: 'Feb', orders: 250 },
  { name: 'Mar', orders: 500 },
  { name: 'Apr', orders: 700 },
  { name: 'May', orders: 300 },
  { name: 'Jun', orders: 350 },
  { name: 'Jul', orders: 300 },
  { name: 'Aug', orders: 400 },
  { name: 'Sep', orders: 650 },
  { name: 'Oct', orders: 950 }, 
  { name: 'Nov', orders: 400 },
  { name: 'Dec', orders: 500 },
];








const OrdersDashboard = () => {
    const COLORS = ["#EF4444", "#FACC15", "#10B981"];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold">Orders</h2>
        <p className="text-sm text-gray-500 mt-1">
          Track, manage, and fulfill orders seamlessly with real-time updates and smart insights.
        </p>
      </div>

      {/* Stats */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
      {/* Orders Completed */}
      <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow">
        <Image src="/progress.png" alt="Darads Logo" width={100} height={100} />
        <div>
          <p className="text-sm text-gray-500">Orders Completed</p>
          <h2 className="text-xl font-bold">65%</h2>
        </div>
      </div>

      {/* Total Orders */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
        <Image src="/line.png" alt="Darads Logo" width={100} height={100} />
        <div>
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-xl font-bold">5,000</h2>
        </div>
      </div>

      {/* Total Revenue */}
      <div className="flex items-center gap-4 px-12 py-6 bg-white rounded-2xl shadow">
        <div className="p-3  rounded-full">
           <Image src="/wallet.png" alt="Darads Logo" width={100} height={100} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-xl font-bold">₦5,000,000</h2>
        </div>
      </div>
    </div>

      {/* Breakdown Section */}
   <div className="grid grid-cols-3 gap-6 max-h-[600px] overflow-y-auto">
  {/* Left Side - 2/3 width */}
  <div className="col-span-2 p-6 bg-white rounded-2xl shadow-md w-full">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Revenue Breakdown</h2>
      <div className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md cursor-pointer">
        Last 7 days
      </div>
    </div>
<ResponsiveContainer width="100%" height={300}>
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
      axisLine={true}  // ✅ Show vertical line at left
    />

    <Tooltip />

    {/* Bars with rounded tops */}
    <Bar dataKey="revenue" fill="#3B82F6" radius={[10, 10, 0, 0]} />
  </BarChart>
</ResponsiveContainer>


  </div>

  {/* Right Side - 1/3 width */}
  <div className="col-span-1 max-w-xs mx-auto p-4 bg-white rounded-xl shadow-md">
    <div className="flex justify-end">
      <div className="text-sm border px-2 py-1 rounded">Last 7 days</div>
    </div>
    <div className="flex items-center gap-3">
      <div className="h-full w-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={CircleData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-red-500 font-semibold text-sm mb-8">
        40%
      </div>
    </div>
    <div className="mt-4 text-center font-semibold text-lg">Order Completion Rate</div>
    <div className="mt-2 flex flex-col gap-4 text-sm">
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span>Canceled</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span>In Progress</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span>Completed</span>
      </div>
    </div>
  </div>
</div>

      {/* Orders Over Time */}
    <OrdersOverTimeChart ordersData={ordersChartData} />


      {/* Order History Table */}
     <OrderHistoryTable/>
    </div>
  );
};

export default OrdersDashboard;

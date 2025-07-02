import React, { useState } from "react";
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
   const [timeRange, setTimeRange] = useState("7 months");
  
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setTimeRange(e.target.value);
    };
    const COLORS = ["#EF4444", "#FACC15", "#10B981"];

  return (
   <div className="p-4 md:p-6 space-y-6 min-h-screen">
  {/* Header */}
  <div className="bg-white rounded-xl shadow p-4 md:p-6">
        <h2 className="text-[24px] font-bold text-[#121212]">Orders</h2>
        <p className="text-sm text-[#121212CC] mt-1">
          Track, manage, and fulfill orders seamlessly with real-time updates and smart insights.
        </p>
      </div>

      {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {/* Orders Completed */}
    <div className="flex items-center gap-4 p-4 md:p-6 bg-white rounded-2xl shadow">
        <Image src="/progress.png" alt="Darads Logo" width={100} height={100} />
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">65%</h2>
           <p className="text-[16px] text-[#161A4187]">Orders Completed</p>
        </div>
      </div>

      {/* Total Orders */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
        <Image src="/line.png" alt="Darads Logo" width={100} height={100} />
        <div>
          
          <h2 className="text-[36px] text-[#3B3D53] font-bold">5,000</h2>
          <p className="text-[16px] text-[#161A4187]">Total Orders</p>
        </div>
      </div>

      {/* Total Revenue */}
    <div className="flex items-center gap-4 p-4 md:px-12 md:py-6 bg-white rounded-2xl shadow">
        <div className="p-3  rounded-full">
           <Image src="/wallet.png" alt="Darads Logo" width={100} height={100} />
        </div>
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">₦5,000,000</h2>
         <p className="text-[16px] text-[#161A4187]">Total Revenue</p>
        </div>
      </div>
    </div>

      {/* Breakdown Section */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {/* Left Chart */}
    <div className="col-span-1 md:col-span-2 p-4 bg-white rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Revenue Breakdown</h2>
    <div className="flex justify-end mb-2">
  <select
    value={timeRange}
    onChange={handleChange}
    className="text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded-md cursor-pointer"
  >
    <option value="7 months">Last 7 months</option>
    <option value="1 month">Last 1 month</option>
    <option value="1 year">Last 1 year</option>
  </select>
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
    <div className="col-span-1 w-full md:max-w-xs mx-auto p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-end mb-2">

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
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full sm:w-56 h-56 mx-auto sm:mx-0">
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
      {CircleData.map((entry, index) => (
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
    <div className="mt-4 text-center text-[#121212] font-bold text-[16px]">Order Completion Rate</div>
    <div className="mt-2 flex flex-col gap-4 text-[14px] font-semibold text-[#121212CC]">
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

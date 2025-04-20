// components/RecentOrders.jsx
import React from "react";
import {
  CalendarDays,
  Filter,
  ArrowDownWideNarrow,
  PackageSearch,
  Download,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const orders = [
  {
    id: "#Ord-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Digital Course",
    customer: "Adamu Bello",
    amount: "₦15,000",
    status: "Completed",
  },
  {
    id: "#Ord-1024",
    date: "22 Feb 2025, 2:30 PM",
    product: "Mini Importation Mastery",
    customer: "Chinwe Uche",
    amount: "₦5,500",
    status: "Completed",
  },
  {
    id: "#Ord-1025",
    date: "22 Feb 2025, 2:30 PM",
    product: "Forex & Crypto Trading 101",
    customer: "Tunde Ajayi",
    amount: "₦150,000",
    status: "Failed",
  },
  {
    id: "#Ord-1026",
    date: "22 Feb 2025, 2:30 PM",
    product: "Customized Cake",
    customer: "Micheal Ade",
    amount: "₦250,000",
    status: "Failed",
  },
  {
    id: "#Ord-1027",
    date: "22 Feb 2025, 2:30 PM",
    product: "Luxury Leather Wristwatch",
    customer: "Ngozi Okechukwu",
    amount: "₦350,000",
    status: "Failed",
  },
];

const statusColor = {
  Completed: "bg-green-100 text-green-600",
  Failed: "bg-red-100 text-red-600",
};

export default function RecentOrders() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="bg-gray-100 p-5 rounded-lg space-y-3">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-[#121212]">Recent Orders</h2>
          <RefreshCcw size={16} className="text-[#121212] cursor-pointer opacity-70 hover:opacity-100" />
        </div>

        <div className="flex justify-between">
          <p className="text-[#121212CC] text-[14px]">Search, filter, and download reports of all past transactions.</p>
          <div className="flex text-[#12121299] gap-5">
            <span>Page 1 of 5</span>
            <ChevronLeft size={16} className="cursor-pointer hover:opacity-80 mt-1 border rounded-full" />
            <ChevronRight size={16} className="cursor-pointer hover:opacity-80 mt-1 border rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-b pb-4 sm:flex-row sm:items-center sm:justify-between gap- mt-10  mb-4">
        {/* Left - Search */}
        <input
          type="text"
          placeholder="Search Transaction..."
          className="border border-[#E5E7EB] rounded-md px-3 py-2 text-sm w-full sm:w-60 placeholder:text-[#9CA3AF]"
        />

        {/* Right - Filters + Export */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Date Range */}
          <div className="relative w-full sm:w-40">
            <select className="appearance-none border border-[#E5E7EB] rounded-md px-3 py-2 pl-9 text-sm w-full">
              <option>Date Range</option>
            </select>
            <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Status */}
          <div className="relative w-full sm:w-32">
            <select className="appearance-none border border-[#E5E7EB] rounded-md px-3 py-2 pl-9 text-sm w-full">
              <option>Status</option>
            </select>
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Sort By */}
          <div className="relative w-full sm:w-40">
            <select className="appearance-none border border-[#E5E7EB] rounded-md px-3 py-2 pl-9 text-sm w-full">
              <option>Sort By</option>
            </select>
            <ArrowDownWideNarrow size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Product Category */}
          <div className="relative w-full sm:w-52">
            <select className="appearance-none border border-[#E5E7EB] rounded-md px-3 py-2 pl-9 text-sm w-full">
              <option>Product Category</option>
            </select>
            <PackageSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 bg-[#7C3AED] text-white text-sm px-4 py-2 rounded-md hover:bg-[#6B21A8]">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow mx-auto my-4 max-w-full">
  <table className="w-full text-sm text-left table-fixed">
    <thead>
      <tr className="bg-gray-200 text-gray-500 rounded-t-lg">
        <th className="p-6 font-medium text-[#121212]">Order I.D</th>
        <th className="p-6 font-black">Date & Time</th>
        <th className="p-6 font-black">Product Name</th>
        <th className="p-6 font-black">Customer Name</th>
        <th className="p-6 font-black">Total Price</th>
        <th className="p-6 font-black">Status</th>
        <th className="p-6 font-black ">Action</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, idx) => (
        <tr key={idx} className=" border border-[#D2D1D6]">
          <td className="p-4 text-[#121212] flex gap-6 font-semibold">
            <span className="border px-2">{idx + 1}</span>{order.id}
          </td>
          <td className="p-4  text-[#121212B2]">{order.date}</td>
          <td className="p-4 text-[#121212]">{order.product}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.customer}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.amount}</td>
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status as keyof typeof statusColor]}`}
            >
              {order.status}
            </span>
          </td>
          <td className="py-3 px-4 text-gray-500 text-[24px]">⋮</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

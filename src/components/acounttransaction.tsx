'use client';

import React from 'react';
import {
  CalendarDays,
  Search as MagnifyingGlassIcon,
  Download,
   ChevronLeft,
    RefreshCcw,
  ChevronRight,
} from "lucide-react";


const orders = [
  {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Digital Course",
    customer: "Adamu Bello",
    amount: "₦15,000",
    wallet: "₦15,000",
    status: "Completed",
  },
  {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Mini Importation Mastery",
    customer: "Chinwe Uche",
    amount: "₦5,500",
    wallet: "₦15,000",
    status: "Completed",
  },
  {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Forex & Crypto Trading 101",
    customer: "Tunde Ajayi",
    amount: "₦150,000",
    wallet: "₦15,000",
    status: "Failed",
  },
  {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Customized Cake",
    customer: "Micheal Ade",
    amount: "₦250,000",
    wallet: "₦15,000",
    status: "Failed",
  },
   {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Customized Cake",
    customer: "Micheal Ade",
    amount: "₦250,000",
    wallet: "₦15,000",
    status: "Pending",
  },
  {
    id: "#Mdd-1023",
    date: "22 Feb 2025, 2:30 PM",
    product: "Luxury Leather Wristwatch",
    customer: "Ngozi Okechukwu",
    amount: "₦350,000",
    wallet: "₦15,000",
    status: "Failed",
  },
];

const statusColor = {
  Completed: "bg-green-100 text-green-600",
  Failed: "bg-red-100 text-red-600",
};

const SalesTransactions = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div>
        <div className='bg-white p-6'>
        <h1 className="text-2xl text-gray-800 font-bold flex items-center space-x-2">
         
          <span> Account Wallet Transactions</span>
        </h1>
        <p className="text-gray-600 mt-1">
          View all sales payments, including timestamps, transaction status, payment methods, transfers, and withdrawals.
        </p>
        </div>

        {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
<div className="bg-white p-6 rounded-2xl min-h-[150px] flex flex-col items-center justify-center text-center">


            <p className="text-gray-800 font-semibold text-md">Total Amount</p>
            <p className="font-semibold text-gray-800 text-md">Deposited</p>
          </div>
        <div className="bg-white p-6 rounded-2xl min-h-[150px] flex flex-col items-center justify-center text-center">

            <p className="text-gray-800 font-semibold text-md">Total Amount</p>
            <p className="font-semibold text-gray-800 text-md">Transferred</p>
          </div>
         <div className="bg-white p-6 rounded-2xl min-h-[150px] flex flex-col items-center justify-center text-center">

            <p className="text-gray-800 font-semibold text-md">Pending Monthly</p>
            <p className="font-semibold text-gray-800 text-md">Maintainance Fee</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-lg space-y-3">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#121212]">Transaction History</h2>
                <RefreshCcw size={16} className="text-[#121212] cursor-pointer opacity-70 hover:opacity-100" />
              </div>
      
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="text-[#121212CC] text-[14px]">
                  View, manage, and track all your logs in one place.
                </p>
                <div className="flex gap-2 sm:gap-5 items-center text-[#12121299]">
                  <span>Page 1 of 5</span>
                  <ChevronLeft size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
                  <ChevronRight size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
                </div>
              </div>
            </div>

      {/* Filter/Search Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 mb-4 font-sans text-sm">
        <div className="relative w-full sm:w-60">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search Transaction..."
            className="pl-10 pr-3 py-2 border border-[#E5E7EB] rounded-md w-full placeholder:text-[#6E6B7B] focus:outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 sm:gap-3">
          <div className="relative w-full sm:w-40">
            <select className="border border-[#E5E7EB] rounded-md px-6 py-2 pl-9 text-sm text-[#12121299] w-full">
              <option>Date Range</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          <div className="relative w-full sm:w-32">
            <select className="border border-[#E5E7EB] rounded-md pl-9 px-6 py-2 text-sm text-[#12121299] w-full">
              <option>Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>

          <div className="relative w-full sm:w-40">
            <select className="border border-[#E5E7EB] rounded-md px-6 py-2 pl-9 text-sm text-[#12121299] w-full">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Amount</option>
              <option>Lowest Amount</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white text-sm px-4 py-2 rounded-md hover:bg-[#6B21A8] w-full sm:w-auto">
            Export As Csv/Pdf
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* Transactions Table */}
   <div className="hidden sm:block overflow-x-auto rounded-lg shadow mx-auto my-6 max-w-full text-gray-800">
  <table className="w-full text-sm table-fixed">
    <thead className="font-semibold">
      <tr className="bg-gray-200 text-gray-800 text-[16px]">
        <th className="p-4 text-left">Transaction I.D</th>
        <th className="p-4 text-left">Date & Time</th>
        <th className="p-4 text-left">Type</th>
        <th className="p-4 text-left">Description</th>
        <th className="p-4 text-left">Amount</th>
        <th className="p-4 text-left">Wallet Balance</th>
        <th className="p-4 text-center">Status</th>
        <th className="p-4 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, idx) => (
        <tr key={idx} className="border-b border-[#D2D1D6] text-center">
          <td className="py-4 px-4 flex items-center gap-3 font-semibold text-left">
            <span className="border px-2 py-1 rounded text-xs">{idx + 1}</span>
            {order.id}
          </td>
          <td className="p-4 text-left">{order.date}</td>
          <td className="p-4 text-left">{order.product}</td>
          <td className="p-4 font-semibold text-left">{order.customer}</td>
          <td className="p-4 font-semibold text-left">{order.amount}</td>
          <td className="p-4 text-left">{order.wallet}</td>
          <td className="p-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status as keyof typeof statusColor]}`}>
              {order.status}
            </span>
          </td>
          <td className="p-4 text-[24px] text-gray-800">⋮</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default SalesTransactions;

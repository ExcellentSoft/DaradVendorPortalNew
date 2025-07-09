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
  Pending: "bg-[#F68D2B1A] text-[#F68D2B]"
};

const SalesTransactions = () => {
  return (
   <div className="p-6 space-y-6 bg-[#F1F0F2] min-h-screen rounded-lg">
  {/* Header Section */}
  <div>
    <div className="bg-white p-6 rounded-lg">
      <h1 className="font-urbanist font-semibold text-[32px] leading-[100%] tracking-[1%] capitalize text-[#121212] flex items-center space-x-2">
        <span>📊</span>
        <span>Sales Transactions</span>
      </h1>
      <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[1%] text-[#121212CC] mt-6">
        View all sales payments, including timestamps, transaction status, payment methods, transfers, and withdrawals.
      </p>
    </div>

    {/* ✅ Summary Cards - responsive grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-6 rounded-2xl min-h-[150px]">
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[1%] text-center capitalize text-black text-center">Total Revenue Generated</p>
       
      </div>
      <div className="bg-white p-6 rounded-2xl">
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[1%] text-center capitalize text-black text-center">Total Amount Withdrawn</p>
        
      </div>
      <div className="bg-white p-6 rounded-2xl">
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[1%] text-center capitalize text-black text-center">Total Revenue Generated</p>
      
      </div>
    </div>
  </div>

<div className='bg-white p-6 rounded-2xl'>
  {/* History Header */}
  <div className="bg-[#F1F0F266] p-5 rounded-lg space-y-3 border border-[#1212121A]">
    <div className="flex flex-col sm:flex-row justify-between gap-2">
      <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize text-[#121212CC]">Transaction History</h2>
      <RefreshCcw size={16} className="text-[#121212] cursor-pointer opacity-70 hover:opacity-100" />
    </div>

    <div className="flex flex-col sm:flex-row justify-between gap-2">
      <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[0%] text-[#121212CC] mt-2">
        Search, filter, and download reports of all past transactions.
      </p>
      <div className="flex gap-2 sm:gap-5 items-center text-[#12121299]">
        <span>Page 1 of 5</span>
        <ChevronLeft size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
        <ChevronRight size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
      </div>
    </div>
  </div>

  {/* ✅ Filters & Search */}
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 mb-4 font-sans text-sm">
        <div className="relative w-full sm:w-60 bg-[#FBFCFC] border-0.5 border-[#12121233] rounded-xl">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6B7B]" size={16} />
          <input
            type="text"
            placeholder="Search Transaction..."
            className="pl-10 pr-3 py-2 border border-[#E5E7EB] rounded-lg w-full placeholder:text-[#6E6B7B] focus:outline-none font-inter font-normal text-[12px] leading-[100%] tracking-[0%]"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 sm:gap-3">
          <div className="relative w-full sm:w-40">
            <select className="border border-[#E5E7EB] rounded-lg px-6 py-2 pl-9 text-sm text-[#12121299] w-full">
              <option>Date Range</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          <div className="relative w-full sm:w-32">
            <select className="border border-[#E5E7EB] rounded-lg pl-9 px-6 py-2 text-sm text-[#12121299] w-full">
              <option>Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>

          <div className="relative w-full sm:w-50">
            <select className="border border-[#E5E7EB] rounded-lg px-6 py-2 pl-9 text-sm text-[#12121299] w-full">
              <option>Transaction Type</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Amount</option>
              <option>Lowest Amount</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-2 bg-[#5604F6] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#6B21A8] w-full sm:w-auto">
            Export As Csv/Pdf
            <Download size={16} />
          </button>
        </div>
      </div>

  {/* ✅ Desktop Table View */}
  <div className="hidden sm:block overflow-x-auto rounded-lg shadow mx-auto my-6 max-w-full text-gray-800">
<table className=" w-full table-auto text-left text-[16px]">
  <thead className="bg-[#C2C3C580] text-center">
    <tr>
      {[
        'Transaction I.D',
        'Date & Time',
        'Type',
        'Name/Customer',
        'Amount',
        'Wallet Balance',
        'Status',
        'Action',
      ].map((header, i, arr) => (
        <th
          key={header}
          className={`px-8 py-5 whitespace-nowrap text-[#121212] text-sm font-semibold ${
            i === 0 ? 'rounded-tl-3xl' : ''
          } ${i === arr.length - 1 ? 'rounded-tr-3xl' : ''}`}
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>

  <tbody className="text-[#121212]">
    {orders.map((order, idx) => (
      <tr
        key={idx}
        className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50"
      >
        <td className="px-8 py-4 font-semibold text-[#121212] ">
          <div className="flex items-center gap-4 whitespace-nowrap text-center">
            <span className="inline-block px-2 py-1 border border-[#D2D1D6] rounded-md text-xs">
              {idx + 1}
            </span>
            <span className="whitespace-nowrap text-center text-[#121212]">
              {order.id}
            </span>
          </div>
        </td>
        <td className="px-8 py-4 text-[#121212CC] font-medium whitespace-nowrap text-center">
          {order.date}
        </td>
        <td className="px-8 py-4 text-[#121212B2] font-medium whitespace-normal text-center">
          {order.product}
        </td>
        <td className="px-8 py-4 text-[#121212E5] font-semibold whitespace-nowrap text-center">
          {order.customer}
        </td>
        <td className="px-8 py-4 text-[#121212] font-semibold whitespace-nowrap text-center">
          {order.amount}
        </td>
         <td className="px-8 py-4 text-[#121212] font-semibold whitespace-nowrap text-center">
          {order.amount}
        </td>
        <td className="px-8 py-4 whitespace-nowrap text-center">
          <span
            className={`px-3 py-2 rounded text-xs font-medium ${
              statusColor[order.status as keyof typeof statusColor]
            }`}
          >
            {order.status}
          </span>
        </td>
        <td className="px-8 py-4 text-[#121212] text-lg cursor-pointer whitespace-nowrap text-center">
          ⋮
        </td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
  </div>

  {/* ✅ Mobile-Friendly View */}
  <div className="sm:hidden space-y-4 mt-6">
    {orders.map((order, idx) => (
      <div key={idx} className="bg-white rounded-lg p-4 shadow">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">#{order.id}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status as keyof typeof statusColor]}`}>
            {order.status}
          </span>
        </div>
        <p className="text-xs text-gray-500">{order.date}</p>
        <div className="mt-2 space-y-1 text-sm">
          <div><strong>Type:</strong> {order.product}</div>
          <div><strong>Customer:</strong> {order.customer}</div>
          <div><strong>Amount:</strong> {order.amount}</div>
          <div><strong>Balance:</strong> {order.wallet}</div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default SalesTransactions;

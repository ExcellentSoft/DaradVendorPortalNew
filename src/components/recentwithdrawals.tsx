import React from "react";
import {
  CalendarDays,

   Search as MagnifyingGlassIcon,
  
  Download,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
 
} from "lucide-react";

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
    <div className="container mx-auto bg-white shadow rounded-lg p-4 sm:p-6">
      <div className="bg-gray-100 p-5 rounded-lg space-y-3">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <h2 className="text-lg font-semibold text-[#121212]">Recent Orders</h2>
          <RefreshCcw size={16} className="text-[#121212] cursor-pointer opacity-70 hover:opacity-100" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[#121212CC] text-[14px]">
            Search, filter, and download reports of all past transactions.
          </p>
          <div className="flex gap-2 sm:gap-5 items-center text-[#12121299]">
            <span>Page 1 of 5</span>
            <ChevronLeft size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
            <ChevronRight size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
          </div>
        </div>
      </div>

      {/* Filters and Search section */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 mb-4 font-sans text-sm"> 
  {/* Search Input with Icon */}
  <div className="relative w-full sm:w-60">
    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
    <input
      type="text"
      placeholder="Search Transaction..."
      className="pl-10 pr-3 py-2 border border-[#E5E7EB] rounded-md w-[180px] placeholder:text-[#6E6B7B] focus:outline-none"
    />
  </div>

  {/* Filters and Export */}
  <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 sm:gap-3">

    {/* Date Range */}
    <div className="relative text-center w-[120px] sm:w-40">
<select className=" border border-[#E5E7EB] rounded-md px-6 py-2 pl-9 text-sm text-[#12121299] w-full">

        <option>Date Range</option>
        <option>Today</option>
        <option>This Week</option>
        <option>This Month</option>
        <option>Custom Range</option>
      </select>
      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
    </div>

    {/* Status */}
    <div className="relative w-full sm:w-32">
      <select className=" border border-[#E5E7EB] rounded-md pl-9 px-6 py-2 text-sm text-[#12121299] w-full">
        <option>Status</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Failed</option>
      </select>
    
    </div>

    {/* Sort By */}
    <div className="relative w-full sm:w-40">
    <select className=" border border-[#E5E7EB] rounded-md px-6 py-2 pl-9 text-sm text-[#12121299] w-full">
        <option>Sort By</option>
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Amount</option>
        <option>Lowest Amount</option>
      </select>

    
    </div>

    {/* Product Category */}
    <div className="relative w-full sm:w-52">
     <select className="text-center border border-[#E5E7EB] rounded-md pl-9 px-6 py-2 text-sm text-[#12121299] w-full">
         <option>Select Category</option>
        <option>Digital Course</option>
        <option>Phone Numbers</option>
        <option>Logs</option>
        <option>Gift Items</option>
        <option>Tutorials</option>
      </select>

    </div>

    {/* Export Button */}
    <button className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white text-sm px-4 py-2 rounded-md hover:bg-[#6B21A8] w-full sm:w-auto">
      <Download size={16} />
      Export
    </button>
  </div>
</div>



      {/* Table Section */}
    
<div className="hidden sm:block overflow-x-auto rounded-lg shadow mx-auto my-6 max-w-full">
  <table className="w-full text-sm  table-fixed">
    <thead className="font-semibold ">
      <tr className="bg-gray-200 text-[#121212]  text-[16px] rounded-t-lg">
        <th className="p-6 font-semibold text-[#121212] ">Order I.D</th>
        <th className="p-6 font-semibold text-[16px]">Date & Time</th>
        <th className="p-6 font-semibold text-[16px]">Product Name</th>
        <th className="p-6 font-semibold text-[16px]">Customer Name</th>
        <th className="p-6 font-semibold text-[16px]">Total Price</th>
        <th className="p-6 font-semibold text-[16px]">Status</th>
        <th className="p-6 font-semibold text-[16px]">Action</th>
      </tr>
    </thead>
    <tbody className="text-center">
      {orders.map((order, idx) => (
        <tr key={idx} className="border-b  border-[#D2D1D6]">
          <td className="py-8 px-4 text-[#121212] flex gap-6 font-semibold">
            <span className="border px-2  ">{idx + 1}</span>
            {order.id}
          </td>
          <td className="p-4 text-[#121212B2]">{order.date}</td>
          <td className="p-4 text-[#121212]">{order.product}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.customer}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.amount}</td>
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                statusColor[order.status as keyof typeof statusColor]
              }`}
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

{/* Mobile Cards - visible only below small screens */}
<div className="block sm:hidden space-y-4 mt-4">
  {orders.map((order, idx) => (
    <div key={idx} className="border border-[#D2D1D6] rounded-lg p-5 ">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">{order.id}</span>
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColor[order.status as keyof typeof statusColor]}`}>
          {order.status}
        </span>
      </div>
      <div className="text-sm text-[#121212]">
        <p><span className="font-semibold">Date:</span> {order.date}</p>
        <p><span className="font-semibold">Product:</span> {order.product}</p>
        <p><span className="font-semibold">Customer:</span> {order.customer}</p>
        <p><span className="font-semibold">Amount:</span> {order.amount}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

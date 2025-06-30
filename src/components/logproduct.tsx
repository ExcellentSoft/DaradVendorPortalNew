"use client";
import React from 'react';
import { useState } from "react";
import bgImage from '../../public/assets/doodle.png';
import { ChevronDown,ChevronRight,ChevronLeft } from "lucide-react";

interface LogProductProps {
  onGoBack: () => void;
}

const LogProductComponent: React.FC<LogProductProps> = ({ onGoBack }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
   const [viewLogType, setViewLogType] = useState(false);


const logsData = [
  { name: "Facebook Ad Logs", type: "Social media", date: "31/04/2024", price: "₦10,000.00", sales: "12 Pcs", value: "Add Your Log Value Content" },
  { name: "Nigerian Email Campaign", type: "Email marketing", date: "22/05/2025", price: "₦5,000.00", sales: "20 Pcs", value: "Add Your Log Value Content" },
  { name: "TikTok Engagement Logs", type: "Social media", date: "31/05/2025", price: "₦8,000.00", sales: "8 Pcs", value: "Add Your Log Value Content" },
  { name: "Facebook Ad Logs", type: "Social media", date: "15/05/2025", price: "₦10,000.00", sales: "7 Pcs", value: "Add Your Log Value Content" },
  ...Array(6).fill({
    name: "WhatsApp Group Logs",
    type: "Messaging",
    date: "10/05/2025",
    price: "₦10,000.00",
    sales: "5 Pcs",
    value: "Add Your Log Value Content",
  }),
];


const logtypeData = [
  { name: "Social media", type: "Advertising", date: "12/03/2024", price: "₦15,000.00", sales: "25 Pcs", value: "Add Your Log Value Content" ,action:"⋮"},
  { name: "Email marketing", type: "Social media", date: "18/04/2025", price: "₦12,000.00", sales: "10 Pcs", value: "Add Your Log Value Content",action:"⋮" },
  { name: "Messaging", type: "Email marketing", date: "25/05/2025", price: "₦7,500.00", sales: "18 Pcs", value: "Add Your Log Value Content",action:"⋮" },
  { name: "Facebook Ad Leads", type: "Social media", date: "05/06/2025", price: "₦9,000.00", sales: "14 Pcs", value: "Add Your Log Value Content",action:"⋮" },
  ...Array(6).fill({
    name: "Facebook Ad Leads",
    type: "Messaging",
    date: "20/05/2025",
    price: "₦11,000.00",
    sales: "6 Pcs",
    value: "Add Your Log Value Content",
    action:"⋮"
  }),
];

  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div className=''>
          <h1 className="text-[24px] font-bold text-[#121212] mb-3">Upload & Manage Logs For Sale</h1>
          <p className="text-[14px] text-[#121212CC]">Sell logs efficiently with seamless uploads and easy management.</p>
        </div>
         <div className="flex gap-4">
          <button className="bg-[#E6D9FE]  text-[#5604F6] px-6 py-3 rounded-md text-sm font-medium"> Log Type</button>
          <button className="bg-[#5604F6] text-white px-6 py-3 rounded-md text-[14px] font-medium">Upload New Log</button>
        </div>
      </div>

      {/* Stats */}
<div
  className="grid grid-cols-4 bg-[#1E0156] text-white p-16 rounded-2xl mb-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
  {[
  ['Total Logs Uploaded', 25],
    ['Available Logs For Sale', 10],
    ['Total Log Type Name', 20],
    ['Pending Customer Requests', 5],
  ].map(([label, value], index, arr) => (
    <div
      key={label}
      className={`flex flex-col items-center px-2 ${index !== arr.length - 1 ? 'border-r-2 border-white' : ''}`}
    >
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm text-center">{label}</span>
    </div>
  ))}
</div>


      {/* Log Product Section */}
   
 

        {/* Logs Table */}
 {/* Logs Table */}
{viewLogType ? (
  // Log Type Name Table
 <div className=" p-8 rounded-2xl  border border-[#1212121A] bg-white">
    <div className='bg-[#F1F0F233] border rounded-2xl p-4 mb-4'>
        <div className=" border p-4 rounded-2xl  relative">
    
   <div className="flex justify-between items-center mt-2 mb-2 relative">
  <div
    className="flex gap-6 items-center cursor-pointer"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    <h2 className="text-[32px] font-semibold text-[#000000]">
      {viewLogType ? 'Log Type Name' : 'Log Products'}
    </h2>
    <ChevronDown className="w-6 h-6 text-gray-500" />
  </div>

  {/* Dropdown */}
  {dropdownOpen && (
    <div className="absolute top-14 left-4 w-56 bg-white border rounded-md shadow-md z-10">
      <button
        onClick={() => setViewLogType(false)}
        className="w-full text-left px-4 py-3 text-[14px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Log Product
      </button>
      <button
        onClick={() => setViewLogType(true)}
        className="w-full text-left px-4 py-3 text-[16px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Log Type Name
      </button>
      <button
        onClick={onGoBack}
        className="w-full text-left px-4 py-3 text-[1px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Product
      </button>
    </div>
  )}

  <div className="flex items-center space-x-2 text-[18px] font-semibold text-[#000000]">
    <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
      <ChevronLeft className="w-4 h-4" />
    </button>
    <span>Page 1 of 5</span>
    <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
</div>

      {/* Pagination and description */}
      
        <p className="text-[16px] text-[#121212CC]">
          View, manage, and track all your logs in one place.
        </p>
        
      </div>
  

        {/* Tabs and Filters */}

 <div className="flex items-center justify-between w-full px-4 py-2 mt-5">
  {/* Search Input */}
  <div className="flex items-center w-[320px] border border-gray-300  rounded-md px-3 py-2 bg-[#FBFCFC]">
    <svg
      className="w-5 h-5 text-gray-400 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
      />
    </svg>
    <input
      type="text"
      placeholder="Search logs by name, date, or type..."
      className="w-full outline-none text-[16px] text-[#6E6B7B] placeholder-gray-400 bg-transparent"
    />
  </div>

  {/* Filters */}
  <div className="flex items-center space-x-4 ml-4">
    <button className="flex items-center space-x-1 text-sm text-gray-700 font-medium">
      <span>Date Created</span>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <button className="flex items-center space-x-1 text-sm text-gray-700 font-medium">
      <span>Product Unit</span>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</div>


</div>
 <div className="overflow-x-auto rounded-3xl border mt-12 border border-gray-200">
       
 
       
     <table className="max-w-[1350px] w-full table-auto text-left text-[16px]">
 <thead className="bg-[#C2C3C580] text-center">
  <tr>
    {[
      "Log type name",
      "Date Created",
      "Price Per Unit",
      "Fee Deducted",
      "products stock",
      "Action",
    ].map((header, i, arr) => (
      <th
        key={header}
        className={`px-8 py-5 whitespace-nowrap text-[#121212] text-sm font-semibold ${
          i === 0 ? "rounded-tl-3xl" : ""
        } ${i === arr.length - 1 ? "rounded-tr-3xl" : ""}`}
      >
        {header}
      </th>
    ))}
  </tr>
</thead>

<tbody className="text-[#121212]">
  {[
    "Social Media",
    "Email Marketing",
    "Messaging",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
    "Facebook Ad Leads",
  ].map((type, idx) => (
    <tr key={idx} className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50">
      <td className="px-8 py-4 font-semibold text-[#121212] align-top">
        <div className="flex items-center gap-4 whitespace-nowrap text-center">
          <span className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
            {idx + 1}
          </span>
          <span className="text-[#121212] whitespace-nowrap text-center">{type}</span>
        </div>
      </td>
      <td className="px-8 py-4 text-[#121212B2] text-[16px] font-medium whitespace-nowrap text-center">
        31/04/2024
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold whitespace-nowrap text-center">
        ₦10,000.00
      </td>
      <td className="px-8 py-4 text-[#ED0423] text-[16px] font-semibold whitespace-nowrap text-center">
        -₦500
      </td>
      <td className="px-8 py-4 text-[#121212] text-[16px] font-semibold whitespace-nowrap text-center">
        12
      </td>
      <td className="px-8 py-4 text-[#B6B6B6] text-[16px] font-semibold cursor-pointer whitespace-nowrap text-center">
        ⋮
      </td>
    </tr>
  ))}
</tbody>


  </table>
      </div>
      </div>
) : (
  // Default Logs Table

   <div className=" p-8 rounded-2xl  border border-[#1212121A] bg-white">
<div className='bg-[#F1F0F233] border rounded-2xl p-4 mb-4'>
        <div className="  border p-4 rounded-2xl  relative">
    
   <div className="flex justify-between items-center mt-2 mb-2 relative">
  <div
    className="flex gap-6 items-center cursor-pointer"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    <h2 className="text-[32px] font-semibold text-[#000000]">
      {viewLogType ? 'Log Type Name' : 'Log Products'}
    </h2>
    <ChevronDown className="w-6 h-6 text-gray-500" />
  </div>

  {/* Dropdown */}
  {dropdownOpen && (
    <div className="absolute top-14 left-4 w-56 bg-white border rounded-md shadow-md z-10">
      <button
        onClick={() => setViewLogType(false)}
        className="w-full text-left px-4 py-3 text-[16px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Log Product
      </button>
      <button
        onClick={() => setViewLogType(true)}
        className="w-full text-left px-4 py-3 text-[16px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Log Type Name
      </button>
      <button
        onClick={onGoBack}
        className="w-full text-left px-4 py-3 text-[16px] font-semibold text-[#000000] hover:bg-gray-100"
      >
        Product
      </button>
    </div>
  )}

  <div className="flex items-center space-x-2 text-[18px] font-semibold text-[#000000]">
    <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
      <ChevronLeft className="w-4 h-4" />
    </button>
    <span>Page 1 of 5</span>
    <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
</div>

      {/* Pagination and description */}
      
        <p className="text-[16px] text-[#121212CC]">
          View, manage, and track all your logs in one place.
        </p>
        
      </div>
  

        {/* Tabs and Filters */}

  <div className="flex items-center justify-between mb-2  mt-6 border-b pb-5 ">
    <div className="flex gap-4">
      <button className="bg-[#5604F6] text-white px-6 py-3 rounded-lg text-[14px]">Uploaded Logs</button>
      <button className="border border-[#12121266] text-[#121212CC] px-5 py-2 rounded-lg text-[14px]">Sold Logs</button>
      <button className=" border border-[#12121266]  text-[#121212CC] px-5 py-2 rounded-lg text-sm">Log Request</button>
    </div>
    <div className="flex gap-8 items-center   ">

     <select id="logType" className="border-gray-300 text-[#121212CC] font-semibold rounded-md text-[16px]">
        <option className='text-[#121212CC]  '>Log Type</option>
      </select>
      <select id="logType" className="border-gray-300 text-[#121212CC] rounded-md font-semibold flex text-[16px]">
        <option className='text-[#121212CC]  '>All Status</option>
      </select>
    </div>
  </div>

</div>
 <div className="overflow-x-auto rounded-3xl mt-12 border border-gray-200">

  
  <table className="max-w-[1350px]  table-auto text-[16px] text-left">
 <thead className="bg-[#C2C3C580] text-center">
  <tr>
    {[
      'Log Name',
      'Log Type',
      'Date Uploaded',
      'Price Per Unit',
      'Total Sales',
      'Log Value',
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
  {logsData.map((log, idx) => (
    <tr key={idx} className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50">
      <td className="px-8 py-4 font-semibold text-[#121212] align-top">
        <div className="flex items-center gap-4 whitespace-nowrap text-center">
          <span className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
            {idx + 1}
          </span>
          <span className="text-[#121212] whitespace-nowrap text-center">
            {log.name}
          </span>
        </div>
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-medium whitespace-nowrap text-center">
        {log.type}
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-medium whitespace-nowrap text-center">
        {log.date}
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold whitespace-nowrap text-center">
        {log.price}
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold whitespace-nowrap text-center">
        {log.sales}
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold cursor-pointer whitespace-nowrap text-center">
        {log.value}
      </td>
    </tr>
  ))}
</tbody>

  </table>
</div>
</div>
)}



      </div>
      

  
  );
};

export default LogProductComponent;
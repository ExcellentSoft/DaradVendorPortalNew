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



  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div className=''>
          <h1 className="font-urbanist font-bold text-2xl leading-[100%] tracking-[0.04em] capitalize text-[#121212]">Manage & Sell Your Tutorials Easily</h1>
          <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-[#121212CC] w-[436px] mt-4">Upload, track, and organize your educational content for maximum engagement and sales.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#EEE6FE] text-[#5604F6] px-4 py-3 rounded-md text-sm font-medium w-[205px]">Create tutorial type</button>
          <button className="bg-[#5604F6] text-white px-4 py-3 rounded-md text-sm font-medium w-[180px]">Upload Tutorial</button>
        </div>
      </div>

      {/* Stats */}
<div
  className="grid grid-cols-4 bg-[#1E0156] text-white p-16 rounded-2xl mb-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
  {[
  ['Total tutorials Uploaded', 25],
    ['Available tutorials for Sale', 10],
    ['total tutorials type name', 20],
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
<div className="p-8 rounded-2xl border border-[#1212121A] bg-white">
  <div className="bg-[#F1F0F233] border rounded-2xl p-4 mb-4">
    <div className="border p-4 rounded-2xl relative">
      <div className="flex justify-between items-center mt-2 mb-2 relative">
        <div
          className="flex gap-6 items-center cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <h2 className="text-[32px] font-semibold text-[#000000]">
            {viewLogType ? 'Tutorial Type Name' : 'Tutorial Products'}
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
              Tutorial Product
            </button>
            <button
              onClick={() => setViewLogType(true)}
              className="w-full text-left px-4 py-3 text-[16px] font-semibold text-[#000000] hover:bg-gray-100"
            >
              Tutorial Type Name
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
      <div className="w-full flex justify-between items-center gap-4">
  <p className="text-[16px] text-[#121212CC]">
    View, manage, and track all your logs in one place.
  </p>

  <div className="flex items-center w-[320px] border border-gray-300 rounded-md px-3 py-2 bg-[#FBFCFC]">
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
      placeholder="Search Tutorial name"
      className="w-full outline-none text-[16px] text-[#6E6B7B] placeholder-gray-400 bg-transparent"
    />
  </div>
</div>

    </div>
     {/* Tabs and Filters */}
        <div className="flex items-center justify-between mb-4 mt-8">
          <div className="flex gap-2">
<button className="bg-[#5604F6] text-white px-4 py-2 rounded-md text-[14px] leading-[100%] tracking-normal capitalize font-medium font-inter"> Most sold</button>
            <button className="border border-[#12121266] text-[#121212CC] px-4 py-2 rounded-md text-[14px] leading-[100%] tracking-normal capitalize font-medium font-inter">Recently Added</button>

          </div>
          <div className="flex gap-4 items-center">
           <div className="flex gap-2 items-center">
  <select
    id="tutorialType"
    className="text-[#121212CC] rounded-md text-sm px-3 py-1.5 focus:outline-none"
  >
    <option value="all" className="text-[#121212CC]">Tutorial type</option>
  </select>
</div>
            <select id="logType" className="text-[#121212CC] rounded-md text-sm">
              <option className='text-[#121212CC]'>All Status</option>
            </select>
          </div>
        </div>
  </div>
</div>

  

       

        {/* Logs Table */}
 {/* Logs Table */}
{viewLogType ? (
  // Log Type Name Table
  <div className="overflow-x-auto rounded-lg border border-gray-200">
<table className="max-w-[1350px] w-full table-auto text-left text-[16px]">
 <thead className="bg-[#C2C3C580] text-center">
  <tr>
    {[
      "Tutorial type name",
      "Date Created",
      "Price Per Unit",
      "Fee Deducted",
      "Products Qty",
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
) : (
  // Default Logs Table
  <div className="overflow-x-auto rounded-lg border border-gray-200">
   <table className="max-w-[1350px] w-full table-auto text-left text-[16px]">
 <thead className="bg-[#C2C3C580] text-center">
  <tr>
    {[
      '',
      'Tutorial Name',
      'Tutorial Type',
      'Date Uploaded',
      'Price Per Unit',
      'Total Sales',
      'Status / QTY',
      'Action',
    ].map((header, i, arr) => (
      <th
        key={header || `index-${i}`}
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
  {[...Array(10)].map((_, idx) => (
    <tr key={idx} className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50">
      <td className="px-8 py-4 font-semibold text-[#121212] align-top">
        <div className="flex items-center gap-4 whitespace-nowrap text-center">
          <span className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
            {idx + 1}
          </span>
        </div>
      </td>
      <td className="px-8 py-4 text-[#121212] text-[16px] font-semibold whitespace-nowrap text-center">
        Facebook Ad Mastery
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-medium whitespace-nowrap text-center">
        Social Media
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-medium whitespace-nowrap text-center">
        31/04/2024
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold whitespace-nowrap text-center">
        ₦10,000.00
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold whitespace-nowrap text-center">
        12 Units Sold
      </td>
      <td className="px-8 py-4 whitespace-nowrap text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-green-600 text-[16px] font-semibold">Available</span>
          <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md">
            12
          </span>
        </div>
      </td>
      <td className="px-8 py-4 text-[#121212CC] text-[16px] font-semibold cursor-pointer whitespace-nowrap text-center">
        ⋮
      </td>
    </tr>
  ))}
</tbody>
</table>

  </div>
)}



      </div>
      

    
  );
};

export default LogProductComponent;
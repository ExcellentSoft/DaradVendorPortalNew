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
          <h1 className="text-xl font-bold text-gray-800">Upload & Manage Logs For Sale</h1>
          <p className="text-sm text-gray-500">Sell logs efficiently with seamless uploads and easy management.</p>
        </div>
         <div className="flex gap-2">
          <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">Create New Log Type</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">Upload New Log</button>
        </div>
      </div>

      {/* Stats */}
<div
  className="grid grid-cols-4 bg-[#1E0156] text-white p-6 rounded-md mb-6 bg-cover bg-center"
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
   
  <div className="bg-white p-8 rounded-lg shadow">
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm relative">
    
    <div className="flex justify-between items-center mt-2 mb-2">  {/* Header section with dropdown toggle */}
      <div
        className="flex gap-6 items-center space-x-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
    <h2 className="text-lg font-semibold text-[#000000]">
  {viewLogType ? 'Log Type Name' : 'Log Products'}
</h2>

        <ChevronDown className="w-6 h-6 text-gray-500" />
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-14 text-[#000000] left-4 w-48 bg-white border rounded-md shadow-md z-10">
        
        
        <button
  onClick={() => setViewLogType(false)}
  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
>
  Log Product
</button>

         <button
  onClick={() => setViewLogType(true)}
  className="w-full text-left px-4 py-2 text-sm"
>
  Log Type Name
</button>

<button
           
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={onGoBack}
          >
            Product
          </button>

        </div>
      )}
<div className="flex items-center space-x-2 text-sm text-gray-600">
          <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
            <ChevronLeft className="w-6 h-6 text-gray-500" />
          </button>
          <span>Page 1 Of 5</span>
          <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
          <ChevronRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        </div>
      {/* Pagination and description */}
      
        <p className="text-sm text-gray-600">
          View, manage, and track all your logs in one place.
        </p>
        
      </div>
  

        {/* Tabs and Filters */}
       {viewLogType ? (
  <div className="flex justify-between items-center mb-4">
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search logs by name, date, or type..."
        className="border px-4 py-2 rounded-md text-sm w-72"
      />
    </div>
    <div className="flex gap-4">
      <div className="text-sm text-gray-700">Date Created ▼</div>
      <div className="text-sm text-gray-700">Product Unit ▼</div>
    </div>
  </div>
) : (
  <div className="flex items-center justify-between mb-4">
    <div className="flex gap-2">
      <button className="bg-[#5604F6] text-white px-4 py-1.5 rounded-md text-sm">Uploaded Logs</button>
      <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Sold Logs</button>
      <button className=" border border-[#12121266]  text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Log Request</button>
    </div>
    <div className="flex gap-2 items-center">
      <label htmlFor="logType" className="text-sm text-[#121212CC]">Tutorial type</label>
      <select id="logType" className="border-gray-300 text-[#121212CC] rounded-md text-sm">
        <option className='text-[#121212CC]'>All Status</option>
      </select>
    </div>
  </div>
)}


        {/* Logs Table */}
 {/* Logs Table */}
{viewLogType ? (
  // Log Type Name Table
 <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "",
                "Log Type Name",
                "Date Created",
                "Price Per Unit",
                "Fee Deducted",
                "Products Stock",
                "Action",
              ].map((header, idx, arr) => (
                <th
                  key={header}
                  className={`px-4 py-4 whitespace-nowrap bg-[#C2C3C5] text-[#121212] ${
                    idx === 0 ? "rounded-tl-lg" : ""
                  } ${idx === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#121212]">
            {[...Array(10)].map((_, idx) => (
              <tr key={idx} className="border-b bg-white hover:bg-gray-50">
                <td className="px-4 py-2">
            <div className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
              {idx + 1}
            </div>
          </td>
                <td className="px-4 py-3">
                  {idx < 3
                    ? ["Social Media", "Email Marketing", "Messaging"][idx]
                    : "Facebook Ad Leads"}
                </td>
                <td className="px-4 py-3">31/04/2024</td>
                <td className="px-4 py-3">₦10,000.00</td>
                <td className="px-4 py-3 text-red-500">-₦500</td>
                <td className="px-4 py-3">12</td>
                <td className="px-4 py-3">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
) : (
  // Default Logs Table
  <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full table-auto text-sm text-left">
    <thead>
      <tr>
        {['', 'Log Name', 'Log Type', 'Date Uploaded', 'Price Per Unit', 'Total Sales', 'Log Value'].map((header, i, arr) => (
          <th
            key={header}
            className={`px-4 py-4 whitespace-nowrap bg-[#C2C3C5] text-[#121212] ${
              i === 0 ? 'rounded-tl-lg' : ''
            } ${i === arr.length - 1 ? 'rounded-tr-lg' : ''}`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>

    <tbody className="text-[#121212]">
      {[...Array(10)].map((_, idx) => (
        <tr key={idx} className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50">
          <td className="px-4 py-2">
            <div className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
              {idx + 1}
            </div>
          </td>
          <td className="px-4 py-3">Facebook Ad Logs</td>
          <td className="px-4 py-3">Messaging</td>
          <td className="px-4 py-3">10/05/2025</td>
          <td className="px-4 py-3">₦10,000.00</td>
          <td className="px-4 py-3">5 Pcs</td>
          <td className="px-4 py-3 text-purple-600 cursor-pointer">
            Add Your Log Value Content
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
)}



      </div>
      

    </div>
  );
};

export default LogProductComponent;
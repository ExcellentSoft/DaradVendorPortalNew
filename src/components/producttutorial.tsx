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
          <h1 className="text-xl font-bold text-gray-800">Manage & Sell Your Tutorials Easily</h1>
          <p className="text-sm text-gray-500">Upload, track, and organize your educational content for maximum engagement and sales.</p>
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
    ['Total tutorials Uploaded', 25],
    ['Available tutorials for Sale', 10],
    ['Total tutorials type name', 20],
    [' Pending Customer Requests', 5],
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
  {viewLogType ? 'Tutorial Type Name' : 'Tutorial Products'}
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
  Tutorial Product
</button>

         <button
  onClick={() => setViewLogType(true)}
  className="w-full text-left px-4 py-2 text-sm"
>
  Product Type Name
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

        {/* Logs Table */}
 {/* Logs Table */}
{viewLogType ? (
  // Log Type Name Table
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full table-auto text-sm text-left">
      <thead>
        <tr>
          {['', 'Tutorial Type Name', 'Date Created', 'Price Per Unit', 'Fee Deducted', 'Products Qty', 'Action'].map(
            (header, i, arr) => (
              <th
                key={header}
                className={`px-4 py-4 whitespace-nowrap bg-[#C2C3C5] text-[#121212] font-semibold ${
                  i === 0 ? 'rounded-tl-lg' : ''
                } ${i === arr.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {header}
              </th>
            )
          )}
        </tr>
      </thead>

      <tbody className="text-[#121212]">
        {[
          'Social Media',
          'Email Marketing',
          'Messaging',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
          'Facebook Ad Leads',
        ].map((type, idx) => (
          <tr
            key={idx}
            className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50"
          >
            <td className="px-4 py-3">
              <div className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold text-sm">
                {idx + 1}
              </div>
            </td>
            <td className="px-4 py-3">{type}</td>
            <td className="px-4 py-3">31/04/2024</td>
            <td className="px-4 py-3">₦10,000.00</td>
            <td className="px-4 py-3 text-red-600 font-semibold">₦500</td>
            <td className="px-4 py-3 font-semibold">12</td>
            <td className="px-4 py-3 text-lg font-bold cursor-pointer">⋮</td>
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
          {['', 'Tutorial name', 'Tutorial type', 'Date Uploaded', 'Price Per Unit', 'Total Sales', 'Status/QTY', 'Action'].map((header, i, arr) => (
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
          <tr
            key={idx}
            className="border-b border-[#D2D1D6] bg-white hover:bg-gray-50"
          >
            <td className="px-4 py-3">
              <div className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold text-sm">
                {idx + 1}
              </div>
            </td>
            <td className="px-4 py-3">Facebook Ad Mastery</td>
            <td className="px-4 py-3">Social media</td>
            <td className="px-4 py-3">31/04/2024</td>
            <td className="px-4 py-3">₦10,000.00</td>
            <td className="px-4 py-3">12 Unit Sold</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-semibold">Available</span>
                <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                  12
                </span>
              </div>
            </td>
            <td className="px-4 py-3 text-lg font-bold cursor-pointer">⋮</td>
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
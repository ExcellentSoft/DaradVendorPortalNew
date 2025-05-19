"use client";
import React, { useState } from "react";
import bgImage from '../../public/assets/doodle.png';
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

interface GiftCategory {
  id: number;
  name: string;
  dateCreated: string;
  stockStatus: 'In Stock' | 'Out Of Stock';
  productsUnit: number;
}

const data: GiftCategory[] = [
  { id: 1, name: 'Cultural & Traditional Gifts', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 2, name: 'Birthday Gifts', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 3, name: 'Tech & Gadgets', dateCreated: '30/04/2024', stockStatus: 'Out Of Stock', productsUnit: 12 },
  { id: 4, name: 'Wedding & Engagement', dateCreated: '30/04/2024', stockStatus: 'Out Of Stock', productsUnit: 12 },
  { id: 5, name: 'Corporate & Appreciation', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 6, name: 'Luxury & Exclusive', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 7, name: 'Owambe Souvenirs', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 8, name: 'Baby & Kids’ Gifts', dateCreated: '30/04/2024', stockStatus: 'Out Of Stock', productsUnit: 12 },
  { id: 9, name: 'Health & Wellness', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
  { id: 10, name: 'Home & Decoration', dateCreated: '30/04/2024', stockStatus: 'In Stock', productsUnit: 12 },
];

type GiftItem = {
  name: string
  category: string
  dateAdded: string
  price: string
  totalSales: string
  status: 'In Stock' | 'Out Of Stock'
  quantity: number
}

const gifts: GiftItem[] = [
  { name: "Customized Cake", category: "Birthday Gifts", dateAdded: "31/05/2025", price: "₦10,000.00", totalSales: "120 Unit", status: "In Stock", quantity: 45 },
  { name: "Customized Ankara...", category: "Cultural & Tradit...", dateAdded: "1/06/2025", price: "₦10,000.00", totalSales: "100 Unit", status: "In Stock", quantity: 45 },
  { name: "Custom Ankara S...", category: "Fashion & Acc...", dateAdded: "02/06/2025", price: "₦10,000.00", totalSales: "90 Unit", status: "In Stock", quantity: 45 },
  { name: "Luxury Leather W...", category: "Fashion & Acc...", dateAdded: "03/05/2025", price: "₦10,000.00", totalSales: "80 Unit", status: "In Stock", quantity: 45 },
  { name: "Power Bank (20,0...", category: "Gadgets & Tech", dateAdded: "04/06/2025", price: "₦10,000.00", totalSales: "70 Unit", status: "In Stock", quantity: 45 },
  { name: "Premium Jollof Ri...", category: "Food & Drinks", dateAdded: "05/06/2025", price: "₦10,000.00", totalSales: "60 Unit", status: "Out Of Stock", quantity: 0 },
  { name: "Locally Sourced P...", category: "Food & Drinks", dateAdded: "06/06/2025", price: "₦10,000.00", totalSales: "50 Unit", status: "Out Of Stock", quantity: 0 },
  { name: "Wireless Earbuds", category: "Gadgets & Tech", dateAdded: "07/06/2025", price: "₦10,000.00", totalSales: "240 Unit", status: "Out Of Stock", quantity: 0 },
  { name: "Gold Wristwatch", category: "Luxury & Exclus...", dateAdded: "08/06/2025", price: "₦10,000.00", totalSales: "102 Unit", status: "Out Of Stock", quantity: 0 },
  { name: "Ankara Notepad", category: "Owambe Souve...", dateAdded: "09/06/2025", price: "₦10,000.00", totalSales: "152 Unit", status: "Out Of Stock", quantity: 0 }
]

interface LogProductProps {
  onGoBack: () => void;
}

const GiftDashboard: React.FC<LogProductProps> = ({ onGoBack }) => {


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewLogType, setViewLogType] = useState(false);

 

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Manage Gift Products For Sale.</h1>
          <p className="text-sm text-gray-500">Effortlessly add, track, and manage your physical and digital gift inventory to boost sales and streamline operations.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">Create Category</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">Add New Gift Item</button>
        </div>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-4 bg-[#1E0156] text-white p-6 rounded-md mb-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {[
          ['Total Gift Item Uploaded', 25],
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
          <div className="flex justify-between items-center mt-2 mb-2">
            <div className="flex gap-6 items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <h2 className="text-lg font-semibold text-[#000000]">
                {viewLogType ? 'Gift Item Product' : 'Gift Item Category'}
              </h2>
              <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-14 text-[#000000] left-4 w-48 bg-white border rounded-md shadow-md z-10">
                <button
                  onClick={() => setViewLogType(false)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Gift Item Category
                </button>
                <button
                  onClick={() => setViewLogType(true)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Gift Item Product
                </button>
                <button
                  onClick={onGoBack}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Product
                </button>
              </div>
            )}

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span>Page 1 Of 5</span>
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            View, manage, and track all your logs in one place.
          </p>
        </div>

        {/* Filters */}
        {viewLogType ? (
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search logs by name, date, or type..."
              className="border px-4 py-2 rounded-md text-sm w-72"
            />
            <div className="flex gap-4">
              <div className="text-sm text-gray-700">Date Created ▼</div>
              <div className="text-sm text-gray-700">Product Unit ▼</div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button className="bg-[#5604F6] text-white px-4 py-1.5 rounded-md text-sm">Best Sellers</button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Recently Added</button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Most Sold</button>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="logType" className="text-sm text-[#121212CC]">All Categories</label>
              <select id="logType" className="border-gray-300 text-[#121212CC] rounded-md text-sm">
                <option className='text-[#121212CC]'>All Status</option>
              </select>
            </div>
          </div>
        )}


{viewLogType ? (
  // Log Type Name Table
 <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-left">
           <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Gift Name</th>
              <th className="p-4">Gift Category</th>
              <th className="p-4">Date Added</th>
              <th className="p-4">Price Per Unit</th>
              <th className="p-4">Total Sales</th>
              <th className="p-4">Status/Qty</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {gifts.map((gift, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 truncate max-w-[180px]">{gift.name}</td>
                <td className="p-4 truncate max-w-[180px]">{gift.category}</td>
                <td className="p-4">{gift.dateAdded}</td>
                <td className="p-4">{gift.price}</td>
                <td className="p-4">{gift.totalSales}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      gift.status === 'In Stock'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {gift.status}
                  </span>
                  {gift.status === 'In Stock' && (
                    <span className="ml-2 inline-block px-2 py-0.5 text-xs bg-gray-100 rounded-md">
                      {gift.quantity}
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <button className="text-gray-500 hover:text-gray-700">⋮</button>
                </td>
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
                <tr className="bg-gray-200 text-gray-700">
                  {["", "Log Type Name", "Date Created", "Price Per Unit", "Fee Deducted", "Products Stock", "Action"].map(
                    (header, idx, arr) => (
                      <th
                        key={header}
                        className={`px-4 py-4 bg-[#C2C3C5] text-[#121212] ${
                          idx === 0 ? "rounded-tl-lg" : ""
                        } ${idx === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                      >
                        {header}
                      </th>
                    )
                  )}
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
                    <td className="px-4 py-3">Product {idx + 1}</td>
                    <td className="px-4 py-3">30/04/2024</td>
                    <td className="px-4 py-3">₦12,000</td>
                    <td className="px-4 py-3">₦500</td>
                    <td className="px-4 py-3">In Stock</td>
                    <td className="px-4 py-3">Edit | Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
)}
        {/* Table Placeholder (incomplete originally) */}
      </div>
    </div>
  );
};

export default GiftDashboard;

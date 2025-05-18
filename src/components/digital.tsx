"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

type ProductCourse = {
  id: number;
  category: string;
  dateCreated: string;
  feeDeducted: string;
  stockStatus: "In Stock" | "Out of Stock";
  productUnit: number;
};

const productCourses: ProductCourse[] = [
  { id: 1, category: 'Business & E-Commerce', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 2, category: 'Finance & Investment', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 3, category: 'Tech & Design', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'Out of Stock', productUnit: 12 },
  { id: 4, category: 'Digital Skills', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'Out of Stock', productUnit: 12 },
  { id: 5, category: 'Writing & Content', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 6, category: 'Luxury & Exclusive', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 7, category: 'Finance & Investment', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 8, category: 'Creative & Media', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'Out of Stock', productUnit: 12 },
  { id: 9, category: 'Creative Skills', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
  { id: 10, category: 'Home & Decoration', dateCreated: '30/04/2024', feeDeducted: '-₦500', stockStatus: 'In Stock', productUnit: 12 },
];


type DigitalCourse = {
  id: number;
  name: string;
  category: string;
  date: string;
  price: string;
  totalSales: string;
  status: "In Stock" | "Out Of Stock";
};


const digitalCourses: DigitalCourse[] = [
  { id: 1, name: 'Mini Importation...', category: 'Business & E-commerce', date: '31/05/2025', price: '₦10,000.00', totalSales: '120 Unit', status: 'In Stock' },
  { id: 2, name: 'Forex & Crypto Tr...', category: 'Finance & Investment', date: '1/06/2025', price: '₦10,000.00', totalSales: '100 Unit', status: 'In Stock' },
  { id: 3, name: 'UI/UX Design Wit...', category: 'Tech & Design', date: '02/06/2025', price: '₦10,000.00', totalSales: '90 Unit', status: 'In Stock' },
  { id: 4, name: 'Social Media Mar...', category: 'Digital Skills', date: '03/05/2025', price: '₦10,000.00', totalSales: '80 Unit', status: 'In Stock' },
  { id: 5, name: 'Copywriting For J...', category: 'Writing & Content', date: '04/06/2025', price: '₦10,000.00', totalSales: '70 Unit', status: 'In Stock' },
  { id: 6, name: 'Real Estate Invest...', category: 'Finance & Investment', date: '05/06/2025', price: '₦10,000.00', totalSales: '60 Unit', status: 'Out Of Stock' },
  { id: 7, name: '2025 Baking & Pa...', category: 'Creative Skills', date: '06/06/2025', price: '₦10,000.00', totalSales: '50 Unit', status: 'Out Of Stock' },
  { id: 8, name: 'Film & Video Edit...', category: 'Creative & Media', date: '07/06/2025', price: '₦10,000.00', totalSales: '240 Unit', status: 'Out Of Stock' },
  { id: 9, name: 'How To Relocate...', category: 'Immigration & Tr...', date: '08/06/2025', price: '₦10,000.00', totalSales: '102 Unit', status: 'Out Of Stock' },
  { id: 10, name: 'How To Start A P...', category: 'Entrepreneurship', date: '09/06/2025', price: '₦10,000.00', totalSales: '152 Unit', status: 'Out Of Stock' },
];

const Digitaldashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewLogType, setViewLogType] = useState(true);

  const onGoBack = () => setDropdownOpen(false);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Digital Courses</h1>
          <p className="text-sm text-gray-500">
            Empower learners and grow your revenue with seamless course management. Upload, track, and optimize your digital courses effortlessly.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">Create Category</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">Add New Digital Course</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 bg-[#1E0156] text-white p-6 rounded-md mb-6 bg-cover bg-center" style={{ backgroundImage: `url('/assets/doodle.png')` }}>
        {[['Total Digital Course Uploaded', 25], ['Available Digital Course For Sale', 10], ['Total Digital Course Type Name', 20], ['Pending Customer Requests', 5]].map(([label, value], index, arr) => (
          <div key={label} className={`flex flex-col items-center px-2 ${index !== arr.length - 1 ? 'border-r-2 border-white' : ''}`}>
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-sm text-center">{label}</span>
          </div>
        ))}
      </div>

      {/* Table Header & Dropdown */}
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm relative">
          <div className="flex justify-between items-center mt-2 mb-2">
            <div className="flex gap-6 items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <h2 className="text-lg font-semibold text-[#000000]">
                {viewLogType ? 'Digital course products' : 'Digital course categories'}
              </h2>
              <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-14 text-[#000000] left-4 w-48 bg-white border rounded-md shadow-md z-10">
                <button onClick={() => { setViewLogType(false); onGoBack(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Digital course categories
                </button>
                <button onClick={() => { setViewLogType(true); onGoBack(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Digital course products
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
          <p className="text-sm text-gray-600">View, manage, and track all your logs in one place.</p>
        </div>

        {/* Filters */}
        {viewLogType ? (
          <div className="flex justify-between items-center mb-4">
            <input type="text" placeholder="Search logs by name, date, or type..." className="border px-4 py-2 rounded-md text-sm w-72" />
            <div className="flex gap-4">
              <div className="text-sm text-gray-700">Date Created ▼</div>
              <div className="text-sm text-gray-700">Product Unit ▼</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button className="bg-[#5604F6] text-white px-4 py-1.5 rounded-md text-sm">Best Sellers</button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Recently Added</button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Highest Rated</button>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="logType" className="text-sm text-[#121212CC]">All Categories</label>
              <select id="logType" className="border-gray-300 text-[#121212CC] rounded-md text-sm">
                <option className='text-[#121212CC]'>All Status</option>
              </select>
            </div>
          </div>
        )}

        {/* Table Data */}
        {viewLogType ? (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-3">Digital Course Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date Added</th>
                  <th className="px-4 py-3">Price Per Unit</th>
                  <th className="px-4 py-3">Total Sales</th>
                  <th className="px-4 py-3">Status/Qty</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {digitalCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{`${course.id}. ${course.name}`}</td>
                    <td className="px-4 py-3">{course.category}</td>
                    <td className="px-4 py-3">{course.date}</td>
                    <td className="px-4 py-3">{course.price}</td>
                    <td className="px-4 py-3">{course.totalSales}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${course.status === 'In Stock' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {course.status}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded">45</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-500">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="px-4 py-3">Digital Course Category</th>
                  <th className="px-4 py-3">A-Z</th>
                  <th className="px-4 py-3">Date Created</th>
                  <th className="px-4 py-3">Fee Deducted</th>
                  <th className="px-4 py-3">Stock Status</th>
                  <th className="px-4 py-3">Products Unit</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-sm">
                {productCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{course.category}</td>
                    <td className="px-4 py-3">{course.id}</td>
                    <td className="px-4 py-3">{course.dateCreated}</td>
                    <td className="px-4 py-3 text-red-600">{course.feeDeducted}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded font-medium ${course.stockStatus === 'In Stock' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {course.stockStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3">{course.productUnit}</td>
                    <td className="px-4 py-3 text-gray-400">⋮</td>
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

export default Digitaldashboard;

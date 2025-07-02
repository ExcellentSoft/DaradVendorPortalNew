"use client";




import { IoArrowBack } from "react-icons/io5";
import React, { useState } from "react";
import bgImage from '../../public/assets/doodle.png';
import { ChevronDown,ChevronRight,ChevronLeft } from "lucide-react";
import { FaEllipsisV } from 'react-icons/fa';

interface LogProductProps {
  onGoBack: () => void;
}

const LogProductComponent: React.FC<LogProductProps> = ({ onGoBack }) => {


    type PhoneSale = {
  phone: string;
  country: string;
  flag: string;
  date: string;
  price: string;
  sales: string;
  status: 'Active' | 'Blocked' | 'Available' | 'Sold';
};

const data: PhoneSale[] = [
  {
    phone: '+1 (415)-555-6789',
    country: 'United States',
    flag: '🇺🇸',
    date: '31/04/2024',
    price: '₦10,000.00',
    sales: '12 Pcs',
    status: 'Active',
  },
  {
    phone: '+44 07400-123456',
    country: 'United Kingdom',
    flag: '🇬🇧',
    date: '22/05/2025',
    price: '₦5,000.00',
    sales: '20 Pcs',
    status: 'Blocked',
  },
  {
    phone: '+234 080-34567-890',
    country: 'Nigeria',
    flag: '🇳🇬',
    date: '31/05/2025',
    price: '₦8,000.00',
    sales: '8 Pcs',
    status: 'Blocked',
  },
  {
    phone: '+91 98765-43210',
    country: 'India',
    flag: '🇮🇳',
    date: '15/05/2025',
    price: '₦10,000.00',
    sales: '7 Pcs',
    status: 'Active',
  },
  {
    phone: '+61 0412-345-678',
    country: 'Australia',
    flag: '🇦🇺',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Pcs',
    status: 'Active',
  },
  {
    phone: '+420 728-456-798',
    country: 'Czech Republic',
    flag: '🇨🇿',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Pcs',
    status: 'Active',
  },
  {
    phone: '+51 987-654-321',
    country: 'Peru',
    flag: '🇵🇪',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Pcs',
    status: 'Active',
  },
  {
    phone: '+30 694-123-4567',
    country: 'Greece',
    flag: '🇬🇷',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Pcs',
    status: 'Active',
  },
  {
    phone: '+380 67-987-6543',
    country: 'Ukraine',
    flag: '🇺🇦',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Pcs',
    status: 'Available',
  },
  {
    phone: '+41 70-123-45-67',
    country: 'Switzerland',
    flag: '🇨🇭',
    date: '10/05/2025',
    price: '₦10,000.00',
    sales: '5 Unit Sold',
    status: 'Active',
  },
];

const statusColor = {
  Active: 'text-green-600 bg-green-100',
  Blocked: 'text-red-600 bg-red-100',
  Available: 'text-blue-600 bg-blue-100',
  Sold: 'text-gray-600 bg-gray-100',
};






interface Country {
  id: number;
  name: string;
  flag: string;
  dialCode: string;
  dateCreated: string;
  pricePerUnit: string;
  productsQty: number;
}

const countries: Country[] = [
  { id: 1, name: 'United States', flag: '/flags/us.svg', dialCode: '+1', dateCreated: '31/04/2024', pricePerUnit: '₦5,000.00', productsQty: 10 },
  { id: 2, name: 'United Kingdom', flag: '/flags/gb.svg', dialCode: '+44', dateCreated: '31/04/2024', pricePerUnit: '₦7,000.00', productsQty: 11 },
  { id: 3, name: 'Nigeria', flag: '/flags/ng.svg', dialCode: '+234', dateCreated: '31/04/2024', pricePerUnit: '₦8,000.00', productsQty: 12 },
  { id: 4, name: 'India', flag: '/flags/in.svg', dialCode: '+91', dateCreated: '31/04/2024', pricePerUnit: '₦9,000.00', productsQty: 15 },
  { id: 5, name: 'Australia', flag: '/flags/au.svg', dialCode: '+61', dateCreated: '31/04/2024', pricePerUnit: '₦3,000.00', productsQty: 20 },
  { id: 6, name: 'Greece', flag: '/flags/gr.svg', dialCode: '+30', dateCreated: '31/04/2024', pricePerUnit: '₦4,000.00', productsQty: 25 },
  { id: 7, name: 'Czech Republic', flag: '/flags/cz.svg', dialCode: '+420', dateCreated: '31/04/2024', pricePerUnit: '₦2,000.00', productsQty: 30 },
  { id: 8, name: 'Peru', flag: '/flags/pe.svg', dialCode: '+51', dateCreated: '31/04/2024', pricePerUnit: '₦6,000.00', productsQty: 35 },
  { id: 9, name: 'Ukraine', flag: '/flags/ua.svg', dialCode: '+380', dateCreated: '31/04/2024', pricePerUnit: '₦1,000.00', productsQty: 40 },
  { id: 10, name: 'Switzerland', flag: '/flags/ch.svg', dialCode: '+41', dateCreated: '31/04/2024', pricePerUnit: '₦1,500.00', productsQty: 45 },
];






    const [dropdownOpen, setDropdownOpen] = useState(false);
   const [viewLogType, setViewLogType] = useState(false);



  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
        <button
              onClick={onGoBack}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-[#000000] hover:bg-gray-100 flex items-center gap-2"
            >
              <IoArrowBack size={18} />
              Back
            </button>
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div className=''>
          <h1 className="text-xl font-bold text-gray-800">Phone Numbers</h1>
          <p className="text-sm text-gray-500">Sell phone numbers efficiently with seamless uploads and easy management.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">create new category</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">upload phone numbers</button>
        </div>
      </div>

      {/* Stats */}
<div
  className="grid grid-cols-4 bg-[#1E0156] text-white p-16 rounded-md mb-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
  {[
    ['Total phone no’s Uploaded', 25],
    ['Total Order ', 10],
    ['Total phone no’s categories', 20],
    ['  Pending Customer Requests', 5],
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
  {viewLogType ? 'Country Dial Codes' : 'Phone Numbers'}
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
  Phone Numbers
</button>

         <button
  onClick={() => setViewLogType(true)}
  className="w-full text-left px-4 py-2 text-sm"
>
  Country Dial Codes
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
          Sell phone numbers efficiently with seamless uploads and easy management
        </p>
        
      </div>
  

        {/* Tabs and Filters */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button className="bg-[#5604F6] text-white px-4 py-1.5 rounded-md text-sm">Most Sold</button>
            <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Recently Added</button>
            <button className=" border border-[#12121266]  text-[#121212CC] px-4 py-1.5 rounded-md text-sm">Low Product Unit</button>
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="logType" className="text-sm text-[#121212CC]">Country</label>
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
      <thead className="px-10 py-5 whitespace-nowrap text-[#121212] text-sm font-semibold rounded-tl-3xl bg-[#C2C3C5]">
          
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Countries</th>
            <th className="px-4 py-3">Dial Code</th>
            <th className="px-4 py-3">Date Created</th>
            <th className="px-4 py-3">Price Per Unit</th>
            <th className="px-4 py-3">Products Qty</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

      <tbody className="divide-y divide-gray-200">
          {countries.map((country, index) => (
            <tr key={country.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-[#121212] text-[16px]">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-2">
                  <span className="px-4 py-3 text-[#121212] text-[16px] ">{country.flag}</span>
                <div className='px-4 py-3 text-[#121212] text-[16px]'>{country.name}</div>
                
              </td>
              <td className="px-4 py-3 text-[#121212] text-[16px] ">{country.dialCode}</td>
              <td className="px-4 py-3  text-[#121212] text-[16px]">{country.dateCreated}</td>
              <td className="px-4 py-3  text-[#121212] text-[16px]">{country.pricePerUnit}</td>
              <td className="px-4 py-3  text-[#121212] text-[16px]">{country.productsQty}</td>
              <td className="px-4 py-3  text-[#121212] text-[16px]">
                <button className="text-blue-600 hover:underline text-sm">View</button>
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
      <thead className="px-10 py-5 whitespace-nowrap text-[#121212] text-sm font-semibold rounded-tl-3xl bg-[#C2C3C5]">
          
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Phone Numbers</th>
            <th className="px-4 py-3 text-left font-semibold">Countries</th>
            <th className="px-4 py-3 text-left font-semibold">Date Uploaded</th>
            <th className="px-4 py-3 text-left font-semibold">Price Per Unit</th>
            <th className="px-4 py-3 text-left font-semibold">Total Sales</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
            <th className="px-4 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>

      <tbody className="divide-y divide-gray-200 text-sm">
          {data.map((item, index) => (
            <tr key={index}>
              <td className=" px-4 py-3 text-[#121212] text-[16px]">{item.phone}</td>
              <td className="px-4 py-3 flex items-center gap-2">
                <span>{item.flag}</span>
                <span className='px-4 py-3 text-[#121212] text-[16px]'>{item.country}</span>
              </td>
              <td className="px-4 py-3 text-[#121212] text-[16px]">{item.date}</td>
              <td className="px-4 py-3 text-[#121212] text-[16px]">{item.price}</td>
              <td className="px-4 py-3 text-[#121212] text-[16px]">{item.sales}</td>
              <td className="px-4 py-3 text-[#121212] text-[16px]">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
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
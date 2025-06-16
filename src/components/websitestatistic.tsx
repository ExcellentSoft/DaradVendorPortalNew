import React, { useState } from 'react';
import ExportDataModal from './editcustomer'; 
import Image from 'next/image';
import StatisticsModal from './statisticmodal';

import {
  CalendarDays,

   Search as MagnifyingGlassIcon,
  
  Download,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
 
} from "lucide-react";












const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700", 
};


const orders = [
  {
    email: "Ismailidris@Zoho.Com",
    customer: "Ismail Idris",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Active",
  },
  {
    email: "Chinweuche@Outlook.Com",
    customer: "Chinwe Uche",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "TundeAjayi@Aol.Com",
    customer: "Tunde Ajayi",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "Michaelade@Hotmail.Com",
    customer: "Michael Ade",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "Ngoziokechukwu@Yandex.Com",
    customer: "Ngozi Okechukwu",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "Adebayojohn@Gmail.Com",
    customer: "Adebayo John",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Active",
  },
  {
    email: "Yusufibrahim@Mail.Com",
    customer: "Yusuf Ibrahim",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "Estherojo@Gmail.Com",
    customer: "Esther Ojo",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Inactive",
  },
  {
    email: "Chinweamesachi@Zoho.Com",
    customer: "Chinwe Amesachi",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Active",
  },
  {
    email: "Brandiedarlington@Protonmail.Com",
    customer: "Brandie Darlington",
    date: "22 Feb 2025",
    orders: 1,
    amount: "₦15,000",
    status: "Active",
  },
];




// --- Interfaces ---
interface PerformanceMetric {
  title: string;
  iconSrc: string; 
  iconBgColor: string;
  iconColor: string;
  mainValue: string;
  valueUnit?: string;
  description: string;
  valueTextColor: string;
}





interface Customer {
  id: string;
  email: string;
  customerName: string;
  dateJoined: string;
  orders: number;
  totalSpend: string;
  status: 'Active' | 'Inactive' | 'Pending';
}



const performanceMetrics: PerformanceMetric[] = [
  {
    title: 'CUSTOMER COUNT',
    iconSrc: '/customer.png',
    iconBgColor: 'bg-[#F5EEFF]',
    iconColor: 'text-[#6F3F97]', 
    mainValue: '350',
    valueUnit: 'customers',
    description: 'New sign-ups this week',
    valueTextColor: '#8E44AD',
  },
  {
    title: 'WEBSITE VISITS',
    iconSrc: '/website.svg',
    iconBgColor: 'bg-[#EEFFF6]',
    iconColor: 'text-[#3F976F]', 
    mainValue: '8,700',
    valueUnit: 'Visits',
    description: 'Traffic for the last 7 days',
    valueTextColor: '#16A085',
  },
  {
    title: 'TOTAL ORDERS',
    iconSrc: '/package.svg',
    iconBgColor: 'bg-[#F5EEFF]',
    iconColor: 'text-[#6F3F97]',
    mainValue: '1,250',
    valueUnit: '',
    description: 'Orders received today',
    valueTextColor: '#121212',
  },
];



const customers: Customer[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    customerName: 'John Doe',
    dateJoined: '2023-01-15',
    orders: 5,
    totalSpend: '$250.00',
    status: 'Active',
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    customerName: 'Jane Smith',
    dateJoined: '2023-02-20',
    orders: 3,
    totalSpend: '$120.50',
    status: 'Active',
  },
  {
    id: '3',
    email: 'bob.johnson@example.com',
    customerName: 'Bob Johnson',
    dateJoined: '2023-03-10',
    orders: 1,
    totalSpend: '$45.00',
    status: 'Inactive',
  },
  {
    id: '4',
    email: 'alice.williams@example.com',
    customerName: 'Alice Williams',
    dateJoined: '2023-04-01',
    orders: 8,
    totalSpend: '$500.00',
    status: 'Active',
  },
  {
    id: '5',
    email: 'charlie.brown@example.com',
    customerName: 'Charlie Brown',
    dateJoined: '2023-05-22',
    orders: 2,
    totalSpend: '$75.00',
    status: 'Pending',
  },
  {
    id: '6',
    email: 'diana.prince@example.com',
    customerName: 'Diana Prince',
    dateJoined: '2023-06-01',
    orders: 10,
    totalSpend: '$1200.00',
    status: 'Active',
  },
  {
    id: '7',
    email: 'clark.kent@example.com',
    customerName: 'Clark Kent',
    dateJoined: '2023-07-10',
    orders: 0,
    totalSpend: '$0.00',
    status: 'Inactive',
  },
  {
    id: '8',
    email: 'bruce.wayne@example.com',
    customerName: 'Bruce Wayne',
    dateJoined: '2023-08-05',
    orders: 6,
    totalSpend: '$300.00',
    status: 'Active',
  },
  {
    id: '9',
    email: 'lois.lane@example.com',
    customerName: 'Lois Lane',
    dateJoined: '2023-09-18',
    orders: 4,
    totalSpend: '$180.00',
    status: 'Active',
  },
  {
    id: '10',
    email: 'arthur.curry@example.com',
    customerName: 'Arthur Curry',
    dateJoined: '2023-10-25',
    orders: 1,
    totalSpend: '$60.00',
    status: 'Pending',
  },
];


// --- Sub-components ---
const PerformanceCard: React.FC<{ metric: PerformanceMetric }> = ({ metric }) => {
 

  
  return (
    <div className="bg-white w-[350px] h-[150px] rounded-[16px] shadow-sm p-4 flex flex-col justify-between">
      {/* Top Part: Header (Title, Icon, Dropdown) */}
      <div className="flex justify-between items-center">
        {/* Card's icon and Title */}
        <div className="flex items-center space-x-3 flex-grow min-w-0">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${metric.iconBgColor}`}>
  <Image src={metric.iconSrc} alt={metric.title} width={24} height={24} />
</div>

          <h3 className="font-inter font-medium text-base leading-none tracking-normal uppercase text-[#121212]/60">
            {metric.title}
          </h3>
        </div>
        {/* Dropdown Menu */}
        <div className="relative flex-shrink-0">
          <select
            className="
              appearance-none
              bg-white
              w-[81px] h-[32px]
              rounded-[8px]
              border-[0.5px] border-[#121212]/10
              p-[8px] pr-8
              font-inter font-normal text-xs leading-none tracking-normal capitalize text-[#161A41]/53
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            "
            defaultValue="Weekly"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annually</option>
          </select>
        
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#121212]/40">

            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>


      <div className="ml-[52px]">
     
        <div>
          <p
            className="font-urbanist font-bold text-4xl leading-none tracking-normal inline-block"
            style={{ color: metric.valueTextColor }}
          >
            {metric.mainValue}
          </p>
          {metric.valueUnit && (
            <span className="font-urbanist font-medium text-2xl leading-none tracking-wide ml-1 text-[#121212]/40">
              {metric.valueUnit}
            </span>
          )}
        </div>


        {/* Div for Description */}
        <div className="mt-2 font-inter font-normal text-base leading-none tracking-normal text-[#161A41]/53">
          {metric.description}
        </div>
      </div>
    </div>
  );
};





const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
const [exportModalOpen, setExportModalOpen] = useState(false);

  const handleExport = () => {
    console.log("Exporting data...");
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 
  return (
    <div className="min-h-screen bg-gray-100 p-8">
  
      <div className="mb-8">
      
        <div className="w-full min-h-[99px] px-6 py-5 rounded-[8px] bg-white border-[0.5px] border-[#121212]/10 flex flex-col justify-center gap-2">
      
          <h1 className="font-urbanist font-bold text-2xl leading-[100%] tracking-[0.02em] capitalize text-[#121212]">
            Track Your Store Performance
          </h1>
        
          <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-[#121212]/80">
            Analyze sales, website visits, and customer insights to grow your business.
          </p>
        </div>


        {/* Performance Metrics Grid Container */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((metric, index) => (
            <PerformanceCard key={index} metric={metric} />
          ))}
        </div>
      </div>


     

      
          <div className="container mx-auto bg-white shadow rounded-lg p-4 sm:p-6">
     
        

  <div className="bg-gray-100 p-5 rounded-lg space-y-3">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <h2 className="text-lg font-semibold text-[#121212]">Your Customers</h2>
          <RefreshCcw size={16} className="text-[#121212] cursor-pointer opacity-70 hover:opacity-100" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[#121212CC] text-[14px]">
 Manage your customer data, review orders, and track spending.
          </p>
          <div className="flex gap-2 sm:gap-5 items-center text-[#12121299]">
            <span>Page 1 of 5</span>
            <ChevronLeft size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
            <ChevronRight size={16} className="cursor-pointer hover:opacity-80 border rounded-full" />
          </div>
        </div>
      </div>
   
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
                <option>Product Category</option>
               <option>Digital Course</option>
               <option>Phone Numbers</option>
               <option>Logs</option>
               <option>Gift Items</option>
               <option>Tutorials</option>
             </select>
       
           </div>
       
           {/* Export Button */}
    <button
              onClick={openModal}
              className="flex items-center gap-2  rounded-md px-4 py-2 text-sm text-[#FFFFF] bg-[#5604F6]"
            >
              <Download size={16} />
              Export
            </button>


         </div>
       </div>
        </div>
<div className="hidden sm:block overflow-x-auto rounded-lg shadow mx-auto my-6 max-w-full">
  <table className="w-full text-sm table-fixed">
    <thead className="font-semibold">
      <tr className="bg-gray-200 text-[#121212] text-[16px] rounded-t-lg">
        <th className="p-6 font-semibold text-[#121212] w-[250px]">Email</th>
        <th className="p-6 font-semibold text-[16px] w-[200px]">Customer Name</th>
        <th className="p-6 font-semibold text-[16px] w-[150px]">Date Joined</th>
        <th className="p-6 font-semibold text-[16px] w-[100px]">Orders</th>
        <th className="p-6 font-semibold text-[16px] w-[160px]">Total Spend (₦)</th>
        <th className="p-6 font-semibold text-[16px] w-[120px]">Status</th>
        <th className="p-6 font-semibold text-[16px] w-[80px]">Action</th>
      </tr>
    </thead>
    <tbody className="text-center">
      {orders.map((order, idx) => (
        <tr key={idx} className="border-b border-[#D2D1D6]">
          <td className="py-8 px-4 text-[#121212] flex gap-6 font-semibold">
            <span className="border px-2">{idx + 1}</span>
            <span className="truncate">{order.email}</span>
          </td>
          <td className="p-4 text-[#121212B2] truncate">{order.customer}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.date}</td>
          <td className="p-4 text-[#121212]">{order.orders}</td>
          <td className="p-4 text-[#121212] font-semibold">{order.amount}</td>
          <td className="p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                statusColor[order.status]
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
{/* Modal */}
      {isModalOpen && (
        <StatisticsModal isOpen={isModalOpen} onClose={closeModal} onExport={handleExport} />
      )}


 <ExportDataModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        onExport={() => setExportModalOpen(false)}
      />
        
      </div>
   
  );
};


export default Dashboard;

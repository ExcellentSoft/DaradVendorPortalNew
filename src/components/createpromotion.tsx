'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt,FaSearch  } from 'react-icons/fa';
import Notificationpage from "@/components/notificationspage";

export default function CreatePromotion() {
  const [category, setCategory] = useState('Logs Type Name');
  const [logType, setLogType] = useState('Social Media');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

const [selectedProducts] = useState<string[]>([
  'Facebook Ad Leads',
  'TikTok Engagement Log',
  'TikTok Engagement Log',
]);

 
  const [showModal, setShowModal] = useState(false);

  const numberOfProducts = selectedProducts.length;
  const costPerDay = 500;
  const numberOfDays = startDate && endDate ? Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))) : 14;
  const totalCost = numberOfProducts * numberOfDays * costPerDay;
const [confirmed, setConfirmed] = useState(false);


  const handlePromotionCreation = () => {
    
    console.log('Promotion confirmed.');
    setShowModal(false);
    setConfirmed(true); 
  };

    if (confirmed) {
    return <Notificationpage />;
  }

  return (
    <div className="min-h-screen bg-white relative w-[1150px] pb-8 ">
      {/* Header */}
      <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-lg">
        <h1 className="text-[24px] font-semibold">Create New Promotion</h1>
        <p className="text-[14px] mt-2">Set up discounts, flash sales, or special offers to boost your sales.</p>
      </div>

      {/* Body */}

      <div className=' w-full flex justify-center gap-8'>
<div className="flex flex-col gap-6 px-10 w-1/2">
        {/* Category Section */}
        <div className="space-y-2 border border-[#12121233] rounded-lg p-6">
          <div className="border border-[#12121233] rounded-lg p-8">
         <h2 className="font-semibold text-[16px] text-[#101928] mb-5">
  Select One Product Category To Apply
</h2>
<div className="flex flex-col space-y-4">
  {[
    'Logs Type Name',
    'Tutorial Type Name',
    'Digital Course Categories',
    'International Phone Number Categories',
    'Gift Items Categories',
  ].map((cat) => (
    <label key={cat} className="flex items-center gap-2 text-sm text-[#121212CC]">
      <input
        type="radio"
        name="category"
        value={cat}
        checked={category === cat}
        onChange={() => setCategory(cat)}
      />
      {cat}
    </label>
  ))}
</div>

            <div className="mt-6">
              <label className="block text-[16px] mb-2 text-[#101928] font-semibold">Log Type Name To Promote</label>
              <select
                value={logType}
                onChange={(e) => setLogType(e.target.value)}
                className="w-full border border-[#1E0156] rounded-md text-[#121212CC] px-3 py-4 text-[16px]"
              >
                <option>Social Media</option>
                <option>Crypto Leads</option>
                <option>Email Campaign</option>
              </select>
            </div>
          </div>

         
        </div>

 {/* Schedule */}
          <div className="border border-[#1212121A] rounded-lg p-6">
            <h2 className="font-medium mb-2 text-[#101928]">Schedule Promotion</h2>
           <div className="flex gap-4 text-sm text-[#98A2B3]">
    <div className="relative w-full ">
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    placeholderText="Select Start Date"
    className="border border-[#D0D5DD] px-6 py-3 rounded-md w-full text-black pr-10"
    dateFormat="yyyy-MM-dd"
  />
  <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
</div>
<div className="relative w-full">
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Select End Date"
        className="border border-[#D0D5DD] px-6 py-3 rounded-md w-full text-black"
        dateFormat="yyyy-MM-dd"
      />
       <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>

 <div className="flex bg-[#FCE4B1] px-2 mt-5 rounded-md ">
              
<div className='mt-4'>
                      <Image src="assets/info.svg" alt="Darads Logo" width={40} height={40} />
                       </div>
             <div className="flex  p-3   ">
              
                     
                     
            <p className="text-[#563A01]  ">
              Every promoted product costs ₦500 per day. For example, promoting 10 products for 10 days is calculated as 10 products × 10 days × ₦500 = ₦50,000.
            </p>
          
            </div>
            </div>
          </div>

</div>


<div className="flex flex-col gap-6 px-10 w-1/2">
        {/* Product Selection */}
                <div className="space-y-4 border border-[#12121233] rounded-lg px-10 py-6">
         <div className="relative w-full">
  <label className="block text-[16px] mb-2 text-[#101928] font-semibold">
    Search Products Under Selected Log Type
  </label>
  <input
    type="text"
    placeholder="Select promotion type"
    className="w-full border px-3 py-3 rounded text-[#98A2B3] text-md pr-10"
  />
  <FaSearch className="absolute right-3 top-1/2 transform translate-y-1/2 text-[#98A2B3]" />
</div>
          <div className=' border border-[#1212121A] rounded-md mt-8 p-6'>
            <h3 className="font-semibold text-[14px] text-[#101928] mb-4">Selected Products Under {logType} Log</h3>
            <div className="space-y-6  text-[#121212CC] font-semibold text-sm">
  {selectedProducts.map((product, index) => (
  <label key={index} className="flex items-center mb-3 cursor-pointer">
    <input
      type="checkbox"
      checked
      readOnly
      className="mr-2 w-3 h-3 rounded  bg-[#5604F6]"
    />
    {product}
  </label>
))}


            </div>
          </div>
        </div>









        {/* Check Out */}
        <div className="border rounded-lg  space-y-7 text-sm">
          <h2 className="font-bold text-[#000000] text-[20px] px-10 py-6">Check Out Details</h2>
          <div className="flex justify-between border-b pb-4 px-10">
            <span className='text-[#121212CC]'>Number Of Days</span>
            <span className="text-[#000000] font-semibold">{numberOfDays} Days</span>
          </div>
          <div className="flex justify-between border-b pb-4 px-10 ">
            <span className='text-[#121212CC]'>Number Of Product</span>
            <span className="text-[#000000] font-semibold">{numberOfProducts} Products</span>
          </div>
          <div className="flex justify-between  px-10">
            <span className='text-[#121212CC]'>Promotional Cost Per Day</span>
            <span className="text-[#000000] font-semibold">₦{costPerDay.toLocaleString()}.00</span>
          </div>
          <div className="flex justify-between bg-[#F8F8F8] border-t px-10  py-6 font-semibold text-base">
            <span className='text-[#121212CC] '>Total</span>
            <span className='text-[#000000] font-semibold'>₦{totalCost.toLocaleString()}.00</span>
          </div>
        </div>
      </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <button className="px-16 py-3 border rounded-md text-gray-700 ">Cancel</button>
        <button
          className="px-12 py-3 bg-[#5604F6] text-white rounded-md"
          onClick={() => setShowModal(true)}
        >
          Create Promotion
        </button>
      </div>

      {/* Modal */}
     {showModal && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md text-center">
      <h2 className="text-xl text-[#000000] font-semibold mb-2">Confirm Promotion</h2>
      <p className="text-sm text-[#121212CC] mb-6">Are you sure you want to create this promotion?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowModal(false)}
          className="px-8 py-3 border rounded-md text-gray-700 "
        >
          Cancel
        </button>
        <button
          onClick={handlePromotionCreation}
          className="px-8 py-3 bg-[#5604F6] text-white rounded-md "
        >
          Yes Confirm
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

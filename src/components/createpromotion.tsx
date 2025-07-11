'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt,FaSearch, FaCheck } from 'react-icons/fa';
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
    <div className=" bg-white relative w-[full] pb-8 ">
      {/* Header */}
      <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-xl">
        <h1 className="font-urbanist font-bold text-[24px] leading-[100%] tracking-[2%] capitalize text-white">Create New Promotion</h1>
        <p className="font-inter font-normal text-[14px] leading-[160%] tracking-[0%] mt-2">Set up discounts, flash sales, or special offers to boost your sales.</p>
      </div>

      {/* Body */}

      <div className=' w-full flex justify-center gap-x-2 mt-12 px-10'>
<div className="flex flex-col px-10 w-1/2">
        {/* Category Section */}
        <div className="space-y-2 border border-[#12121233] rounded-2xl p-6 px-10">
          <div className="border border-[#1E015680] rounded-2xl p-4">
         <h2 className="font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#101928] mb-5">
  Select One Product Category To Apply
</h2>
<div className="flex flex-col space-y-5">
  {[
    'Logs Type Name',
    'Tutorial Type Name',
    'Digital Course Categories',
    'International Phone Number Categories',
    'Gift Items Categories',
  ].map((cat) => (
    <label
      key={cat}
      className="flex items-center gap-2 font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC] cursor-pointer"
    >
      <input
        type="radio"
        name="category"
        value={cat}
        checked={category === cat}
        onChange={() => setCategory(cat)}
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-200
          ${
            category === cat
              ? 'border-[#5604F6] bg-white'
              : 'border-[#D2D1D6] bg-white'
          }`}
      >
        {category === cat && (
          <span className="w-2 h-2 rounded-full bg-[#5604F6]"></span>
        )}
      </span>
      {cat}
    </label>
  ))}
</div>



          </div>
                      <div className="mt-6">
              <label className="font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#101928] mb-2">Log Type Name To Promote</label>
              <select
                value={logType}
                onChange={(e) => setLogType(e.target.value)}
                className="w-full border border-[#1E0156] rounded-lg font-inter font-normal text-[14px] leading-[145%] tracking-[0%] align-middle capitalize text-[#121212CC] px-3 py-4"
              >
                <option>Social Media</option>
                <option>Crypto Leads</option>
                <option>Email Campaign</option>
              </select>
            </div>

         
        </div>

 {/* Schedule */}
          <div className="border border-[#1212121A] rounded-2xl p-6 py-4 mt-8">
            <h2 className="font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#101928] mb-2">Schedule Promotion</h2>
           <div className="flex gap-4 font-inter font-normal text-[14px] leading-[145%] tracking-[0%] align-middle text-[#98A2B3]">
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

 <div className="flex bg-[#FEF6E6] px-2 mt-5 rounded-xl border border-[#FCE4B1]">
              
<div className='mt-4'>
                      <Image src="assets/info.svg" alt="Darads Logo" width={40} height={40} />
                       </div>
             <div className="flex  p-3   ">
              
                     
                     
            <p className="font-inter font-medium text-[12px] leading-[180%] tracking-[0%] text-[#563A01]">
              Every promoted product costs ₦500 per day. For example, promoting 10 products for 10 days is calculated as 10 products × 10 days × ₦500 = ₦50,000.
            </p>
          
            </div>
            </div>
          </div>

</div>


<div className="flex flex-col gap-6 px-10 w-1/2">
        {/* Product Selection */}
                <div className="space-y-2 border border-[#12121233] rounded-2xl p-6 px-10">
<div className="relative w-full">
  <label className="font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#101928] mb-1 block">
    Search Products Under Selected Log Type
  </label>
<div className="flex items-center justify-between w-full border border-[#1212121A] rounded-lg px-3 py-4">
  <input
    type="text"
    placeholder="Select promotion type"
    className="w-full font-inter font-normal text-[14px] leading-[145%] tracking-[0%] align-middle capitalize text-[#121212CC] outline-none"
  />
  <FaSearch className="ml-3 text-[#121212CC]" />
</div>

</div>

          <div className='border border-[#1212121A] rounded-xl p-4 mt-8'>
            <h3 className="font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#101928] mb-5">Selected Products Under {logType} Log</h3>
  

<div className="flex flex-col space-y-5">
  {selectedProducts.map((product, index) => (
    <label
      key={index}
      className="flex items-center gap-2 font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC] cursor-pointer"
    >
      <input
        type="checkbox"
        checked
        readOnly
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors duration-200
          border-[#5604F6] bg-white`}
      >
        <FaCheck className="text-[#5604F6] text-[10px]" />
      </span>
      {product}
    </label>
  ))}
</div>

          </div>
        </div>









        {/* Check Out */}
        <div className="border rounded-xl  space-y-4 text-sm">
          <h2 className="font-urbanist font-semibold text-[20px] leading-[145%] tracking-[0.02em] align-middle capitalize text-black px-10 py-4">Check Out Details</h2>
          <div className="flex justify-between border-b pb-3 px-10">
            <span className='font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC]'>Number Of Days</span>
            <span className="text-[#000000] font-semibold">{numberOfDays} Days</span>
          </div>
          <div className="flex justify-between border-b pb-3 px-10 ">
            <span className='font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC]'>Number Of Product</span>
            <span className="text-[#000000] font-semibold">{numberOfProducts} Products</span>
          </div>
          <div className="flex justify-between pb-3 px-10">
            <span className='font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC]'>Promotional Cost Per Day</span>
            <span className="text-[#000000] font-semibold">₦{costPerDay.toLocaleString()}.00</span>
          </div>
          <div className="flex justify-between bg-[#F8F8F8] border-t px-10  py-4 font-semibold text-base">
            <span className='font-inter font-medium text-[14px] leading-[100%] tracking-[0%] align-middle capitalize text-[#121212CC]'>Total</span>
            <span className='text-[#000000] font-semibold'>₦{totalCost.toLocaleString()}.00</span>
          </div>
        </div>
      </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4 mt-20 mb-8">
        <button className="px-16 py-2 border border-[#E6E7EA] rounded-md font-urbanist font-semibold text-[16px] leading-[24px] tracking-[0] align-middle capitalize text-[#121212CC]  w-330px">Cancel</button>
        <button
          className="px-12 py-2 bg-[#5604F6] font-urbanist font-semibold text-[16px] leading-[24px] tracking-[0] align-middle capitalize text-white rounded-md w-330px"
          onClick={() => setShowModal(true)}
        >
          Create Promotion
        </button>
      </div>

      {/* Modal */}
     {showModal && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 min-h-screen">
    <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-center">
      <h2 className="text-xl text-[#000000] font-semibold mb-2">Confirm Promotion</h2>
      <p className="text-sm text-[#121212CC] mb-6">Are you sure you want to create this promotion?</p>
      <div className="flex justify-center gap-4 w-full">
        <button
          onClick={() => setShowModal(false)}
          className="px-8 py-2 border border-[#E6E7EA] rounded-md font-urbanist font-semibold text-[16px] leading-[24px] tracking-[0] align-middle capitalize text-[#121212CC]  w-330px"
        >
          Cancel
        </button>
        <button
          onClick={handlePromotionCreation}
          className="px-8 py-2 bg-[#5604F6] font-urbanist font-semibold text-[16px] leading-[24px] tracking-[0] align-middle capitalize text-white rounded-md w-330px"
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

import React, { useState } from 'react';
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import { FiInfo } from "react-icons/fi"; 
import WalletChart from "./chartwallet";
import { FiArrowRight } from 'react-icons/fi';
const OrdersDashboard = () => {
  const [filter, setFilter] = useState('Monthly');

  const total = 750000;


  const segments = [
  { percent: 40, color: '#6976EB' },  // Bank Transfer
  { percent: 30, color: '#ADB4F3' },  // Card Payments
  { percent: 15, color: '#2B3695' },  // USSD & Others
];

const radius = 16;
const circumference = 2 * Math.PI * radius;

// Compute cumulative offsets ahead of render
const getSegmentProps = () => {
  let offset = 0;
  return segments.map((segment) => {
    const dash = (segment.percent / 100) * circumference;
    const segmentProps = {
      ...segment,
      dash,
      offset,
    };
    offset += dash;
    return segmentProps;
  });
};

const segmentProps = getSegmentProps();

  return (
    <div className="p-6 space-y-6 w-full">

      {/* Header */}
<div className="bg-white rounded-xl border border-[#1212121A] px-6 py-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
  {/* Text Content */}
  <div className="flex-1">
    <h2 className="text-[20px] leading-[100%] text-[#101928] font-inter font-medium capitalize mb-2">
      account wallet
    </h2>
    <p className="text-[14px] leading-[160%] text-[#121212CC] font-inter font-normal">
      Top up your wallet to boost ads, subscriptions, and in-app purchases—built for <br />
      business, not withdrawals.
    </p>
  </div>

  {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
  <button
    className="w-full sm:w-auto h-[41px] px-4 bg-white text-[#5604F6] border border-[#E6D9FE] rounded-lg font-inter text-[14px] font-medium capitalize hover:bg-[#f4efff] transition"
  >
    View Transactions
  </button>
  <button
    className="w-full sm:w-auto h-[41px] px-4 bg-[#5604F6] text-white rounded-lg font-inter text-[14px] font-medium capitalize hover:bg-[#4a03d1] transition"
  >
    Fund Wallet
  </button>
</div>

</div>


      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {[
          { amount: '₦75,000', label: 'Available balance' },
          { amount: '₦15,000', label: 'Total spend this month' },
          { amount: '₦50,000', label: ' Total Promotions Funded' }
        ].map((stat, index) => (
          <div key={index} className="flex flex-col gap-4 py-4 px-6 bg-white rounded-xl">
            <Image src="/assets/wallet.svg" alt="Wallet Icon" width={40} height={40} />
            <div>
              <h2 className="text-[36px] text-[#121212] font-bold">{stat.amount}</h2>
              <p className="font-inter font-normal text-[16px] leading-[160%] text-[#121212CC]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
         <div className='py-4 px-6 bg-white rounded-xl'>
                 <Image src="/assets/wallet.svg" alt="Wallet Icon" width={40} height={40} />
              <p className="font-inter font-normal text-[16px] leading-[160%] text-[#121212CC] mt-6">
                Subscription Status
              </p>
                <p className="font-inter font-normal text-[14px] leading-[160%] text-[#F68D2B] mt-5">
                (Next renewal: March 1, 2025)
              </p>
            </div>
      </div>

      {/* Breakdown Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 w-full">
  {/* Left Panel – 30% on md+, full on mobile */}
  <div className="w-full md:w-[30%] bg-white p-5 rounded-xl shadow-md h-[500px]">
    <h2 className="text-lg font-semibold text-center text-[#161A41C7] mb-4">
      Account Wallet Insights
    </h2>

    {/* Circular Progress */}
    <div className="relative w-32 h-32 mx-auto mb-6">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
        />
        {segmentProps.map((segment, index) => (
          <circle
            key={index}
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth="4"
            strokeDasharray={`${segment.dash} ${circumference - segment.dash}`}
            strokeDashoffset={-segment.offset}
            strokeLinecap="round"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs text-gray-400">TOTAL</p>
          <p className="text-lg font-bold text-gray-800">₦{total.toLocaleString()}</p>
        </div>
      </div>
    </div>

    {/* Percentages */}
    <div className="space-y-6 mt-20">
      <div className="flex items-center bg-[#6976EB] text-white px-4 py-2 rounded-lg justify-between">
        <span className="font-semibold">40%</span>
        <span className="text-sm">Bank Transfer</span>
      </div>
      <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg justify-between shadow-sm">
        <span className="font-semibold text-gray-700">30%</span>
        <span className="text-sm text-gray-600">Card Payments</span>
      </div>
      <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg justify-between shadow-sm">
        <span className="font-semibold text-gray-700">15%</span>
        <span className="text-sm text-gray-600">USSD & Others</span>
      </div>
    </div>
  </div>

  {/* Right Panel – 70% on md+, full on mobile */}
  <div className="w-full md:w-[70%] bg-white p-6 rounded-xl shadow pb-4">
    <h2 className="font-inter font-normal text-[16px] leading-[160%] text-[#121212CC] mb-4">Transactions</h2>

    <div className="flex flex-wrap gap-2 mb-4 text-sm border-b pb-4">
      {['All', 'Withdrawal', 'Transfer To Account Wallet', 'Sales'].map((tab) => (
        <button
          key={tab}
          className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-md text-gray-700 font-medium"
        >
          {tab}
        </button>
      ))}
    </div>

    <div className="space-y-4">
      {[
        { title: 'Transfer', desc: '₦30,000 Added Via Bank Transfer' },
        { title: 'Promotion', desc: '₦10,000 Spent On Ad Promotion' },
        { title: 'Subscriptions', desc: '₦5,000 Deducted For Subscription Renewal' },
        { title: 'Subscriptions', desc: '₦5,000 Deducted For Subscription Renewal' },
        { title: 'Subscriptions', desc: '₦5,000 Deducted For Subscription Renewal' },
      ].map((txn, i) => (
        <div key={i} className="flex items-start gap-4 border-b pb-2">
          <div className="w-12 h-12 bg-gray-100 rounded-full" />
          <div className="flex-1">
            <p className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize text-[#121212] mb-4">
              {txn.title}
            </p>
            <div className="flex justify-between items-center w-full">
              <p className="font-inter font-normal text-[12px] leading-[100%] capitalize text-[#121212CC]">
                {txn.desc}
              </p>
              <span className="font-inter font-normal text-[12px] leading-[100%] capitalize text-[#121212CC]">
                12-Feb-2025, 10:20pm
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  
    <div className="w-full">
  {/* Top Section: Header + Features */}
  <div className="w-full p-4 sm:p-6 md:p-10 bg-[#FFFFFF] font-inter rounded-xl border border-[#1212121A]">
      <h2 className="font-urbanist font-bold text-[24px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#000000] mb-6">
        What Can You Do With The Account Wallet?
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-[#E4E4E7]">
        <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
          <h3 className="font-urbanist font-bold text-[18px] leading-[120%] text-[#121212] flex items-center gap-2 mb-2">
            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#121212]">1.</span>
            Promote Your Products & Increase Sales 🚀
          </h3>
          <p className="font-inter font-normal text-[12px] leading-[100%] tracking-normal align-middle text-[#121212CC]">Want more visibility for your products? Use your Account Wallet to run ads and attract more customers.</p>
        </div>

          <button
            className="bg-[#5604F6] font-urbanist font-semibold text-[12px] leading-[100%] tracking-[0.02em] align-middle capitalize text-white px-6 py-3 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap"
          >
            Pay For Promotion
          </button>
        
      </div>

       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-[#E4E4E7]">
        <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
          <h3 className="font-urbanist font-bold text-[18px] leading-[120%] text-[#121212] flex items-center gap-2 mb-2">
            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#121212]"> 2.</span>
           Stay Subscribed to Premium Features
          </h3>
          <p className="font-inter font-normal text-[12px] leading-[100%] tracking-normal align-middle text-[#121212CC]">Maintain access to exclusive platform tools and business analytics by keeping your subscription active.</p>
        </div>

          <button
            className="bg-[#5604F6] font-urbanist font-semibold text-[12px] leading-[100%] tracking-[0.02em] align-middle capitalize text-white px-6 py-3 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap"
          >
            Pay For Subscription
          </button>
        
      </div>

       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6">
        <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
          <h3 className="font-urbanist font-bold text-[18px] leading-[120%] text-[#121212] flex items-center gap-2 mb-2">
            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#121212]">3.</span>
             Cover Transaction & Platform Fees Effortlessly
          </h3>
          <p className="font-inter font-normal text-[12px] leading-[100%] tracking-normal align-middle text-[#121212CC]">Want more visibility for your products? Use your Account Wallet to run ads and attract more customers.</p>
        </div>
        
      </div>
  </div>


</div>

    </div>
  );
};

export default OrdersDashboard;

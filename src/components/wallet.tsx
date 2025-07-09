import React, { useState } from 'react';
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import { FiInfo } from "react-icons/fi"; 
import WalletChart from "./chartwallet";

const OrdersDashboard = () => {
  const [filter, setFilter] = useState('Monthly');

  return (
    <div className="p-6 space-y-6 w-full">

      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-urbanist font-bold text-[24px] leading-[100%] tracking-[0.02em] capitalize text-[#121212] mb-4">
          Sales Wallet – Your Earnings, Your Control
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[160%] text-[#121212CC]">
          Track your sales revenue and withdraw your earnings whenever you need.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {[
          { amount: '₦75,000', label: 'Available balance' },
          { amount: '₦750,000', label: 'Total Sales This Month' },
          { amount: '₦350,000', label: 'Total Withdrawals' },
          { amount: '₦120,000', label: 'Pending Orders Revenue' }
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
      </div>

      {/* Breakdown Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 w-full">
  {/* Left Panel – 40% on md+, full on mobile */}
  <div className="w-full md:w-[50%] bg-white p-6 rounded-xl shadow">
    <p className="font-inter font-normal text-[16px] leading-[160%] text-[#121212CC] mb-4">
      Available Balance
    </p>
    <h1 className="font-urbanist font-extrabold text-[52px] leading-[100%] tracking-[0.04em] capitalize text-[#121212] mb-6">
      ₦280,000.00
    </h1>

    <div className="flex flex-wrap gap-4 mb-6">
      <button className="border border-[#E6D9FE] text-[#5604F6] px-4 py-2 rounded-lg flex gap-3 items-center">
        Transfer To Account Wallet
        <Image src="/assets/ArrowsLeftRight.svg" alt="Transfer Icon" width={24} height={24} />
      </button>
      <button className="bg-[#5604F6] text-white px-6 py-2 rounded-lg flex items-center gap-2">
        Withdraw <FaArrowDown size={20} className="text-[#5604F6] bg-white rounded-sm py-1" />
      </button>
    </div>

    {/* Withdrawals */}
    <div className="bg-white border rounded-lg p-8 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold flex items-center text-[#121212] gap-2">
          <div className="bg-[#EEE6FE80] w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <FaArrowDown size={15} className="text-white bg-[#5604F6] p-1 rounded-sm" />
          </div>
          Withdrawals
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#ffffff] text-[#000000B3] text-sm border border-gray-200 px-3 py-1 rounded-md inline-flex items-center gap-1"
        >
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>

      <p className="text-sm mb-3 flex gap-2 text-[#12121214] bg-white shadow-[0px_4px_4px_0px_#12121214]
        w-full max-w-[220px] px-4 py-2 rounded-md font-medium mt-8">
        <span className='text-[#12121299]'>Total Withdrawals</span>
        <span className="font-semibold text-[#121212]">₦355,000</span>
      </p>

      <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="flex-1 h-2 bg-green-500 rounded" style={{ width: '80%' }} />
        <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '20%' }} />
      </div>

      <div className="flex justify-between font-inter font-semibold text-[12px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#121212CC] mb-6">
        <span>₦285,000</span>
        <span>₦75,000</span>
      </div>

      <div className="flex font-urbanist font-medium text-[12px] leading-[100%] tracking-[0.02em] align-middle capitalize text-[#12121299] mb-6 gap-6">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Available Withdrawals
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Pending Withdrawals
        </span>
      </div>

      <p className="text-xs bg-[#FEF6E6] text-[#F6A704] px-3 py-2 rounded-[16px] font-inter font-medium text-[12px] leading-[100%] tracking-normal align-middle flex justify-center items-center gap-2">
        <FiInfo className="w-4 h-4" />
        Your next withdrawal will be available in the next 4 hours
      </p>
    </div>
  </div>

  {/* Right Panel – 60% on md+, full on mobile */}
  <div className="w-full md:w-[50%] bg-white p-6 rounded-xl shadow pb-4">
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



    </div>
  );
};

export default OrdersDashboard;

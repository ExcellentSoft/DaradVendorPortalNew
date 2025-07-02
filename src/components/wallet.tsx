
import React, { useState } from 'react';
import Image from "next/image";
import { FaArrowDown} from 'react-icons/fa';
import { FiInfo } from "react-icons/fi"; 
import WalletChart from "./chartwallet";




















const OrdersDashboard = () => {
    const [filter, setFilter] = useState('Monthly');
    
  return (
    <div className="p-6 space-y-6  ">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-[24px] font-bold text-[#121212]">Sales Wallet – Your Earnings, Your Control</h2>
        <p className="text-sm text-[#121212CC] mt-1">
Track your sales revenue and withdraw your earnings whenever you need.
        </p>
      </div>

      {/* Stats */}
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6  ">
      {/* Orders Completed */}
      <div className="flex flex-col gap-4 py-4 px-8 bg-white rounded-md">
            <Image src="assets/wallet.svg" alt="Darads Logo" width={40} height={40} />
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">₦75,000</h2>
           <p className="text-[16px] text-[#161A4187]">Available balance </p>
        </div>
      </div>

      {/* Total Orders */}
       <div className="flex flex-col gap-4 py-4 px-6 bg-white rounded-md ">
            <Image src="assets/wallet.svg" alt="Darads Logo" width={40} height={40} />
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">₦750,000</h2>
           <p className="text-[16px] text-[#161A4187]">Total Sales This Month </p>
        </div>
      </div>

      {/* Total Revenue */}
       <div className="flex flex-col gap-4 py-4 px-6 bg-white rounded-md ">
            <Image src="assets/wallet.svg" alt="Darads Logo" width={40} height={40} />
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">₦350,000</h2>
           <p className="text-[16px] text-[#161A4187]">Total Withdrawals </p>
        </div>
      </div>
        <div className="flex flex-col gap-4 py-4 px-6 bg-white rounded-md ">
            <Image src="assets/wallet.svg" alt="Darads Logo" width={40} height={40} />
        <div>
         
          <h2 className="text-[36px] text-[#3B3D53] font-bold">₦120,000</h2>
           <p className="text-[16px] text-[#161A4187]"> Pending Orders Revenue </p>
        </div>
      </div>
    </div>

      {/* Breakdown Section */}
  <div className="grid md:grid-cols-2 gap-6">
      {/* Left Panel */}
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-[#121212CC] mb-1">Available Balance</p>
        <h1 className="text-4xl text-[#121212] font-bold mb-4">₦280,000.00</h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <button className="border border-[#E6D9FE] text-[#5604F6] px-4 py-2 rounded-md flex gap-3 items-center ">
            Transfer To Account Wallet
            <Image src="assets/ArrowsLeftRight.svg" alt="Darads Logo" width={24} height={24} />
            
          </button>
          <button className="bg-[#5604F6] text-white px-6 py-2 rounded-md flex items-center gap-2">
            Withdraw <FaArrowDown size={20} className='text-[#5604F6] bg-white  py-1' />
          </button>
        </div>

        {/* Withdrawals */}
        <div className="bg-white border rounded-lg p-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold flex items-center  text-[#121212] gap-2">
            <FaArrowDown size={20} className='text-white bg-[#5604F6] p-1  ' />
              Withdrawals
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-[#12121233] text-[#12121299] rounded-full text-sm px-2 py-1"
            >
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

         <p className="text-sm mb-3 flex gap-2 text-[#12121214] bg-white shadow w-full max-w-[220px] px-4 py-2 rounded-md font-medium">
  <span>Total Withdrawals</span>
  <span className="font-semibold text-[#121212]">₦355,000</span>
</p>


          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-2 bg-green-500 rounded" style={{ width: '80%' }} />
            <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '20%' }} />
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span>₦285,000 Available Withdrawals</span>
            <span>₦75,000 Pending Withdrawals</span>
          </div>
         <div className="flex justify-between text-sm text-gray-600 mb-6">
  <span className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-green-500"></span>
    Available Withdrawals
  </span>

  <span className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-red-500"></span>
    Pending Withdrawals
  </span>
</div>


         <p className="text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full font-medium flex justify-center items-center gap-2">
  <FiInfo className="w-4 h-4" />
  Your next withdrawal will be available in the next 4 hours
</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-[#121212CC] text-lg mb-4">Transactions</h2>

        <div className="flex flex-wrap gap-2 mb-4 text-sm">
          {['All', 'Withdrawal', 'Transfer To Account Wallet', 'Sales'].map((tab) => (
            <button
              key={tab}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-gray-700 font-medium"
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
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full" />
              <div className="flex-1 ">
                <p className="font-semibold text-[#121212]">{txn.title}</p>
                <p className="text-sm text-[#121212CC]">{txn.desc}</p>
              </div>
              <span className="text-xs text-[#121212CC] mt-6">12-Feb-2025, 10:20pm</span>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Orders Over Time */}
   


     
    </div>
  );
};

export default OrdersDashboard;

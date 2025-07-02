import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PaymentSettings() {
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  return (
   <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans w-full">
  <div className=" gap-4 w-full">
        {/* Left Panel */}

          <div className="bg-white  h-[550px] rounded-t-md ">
        {/* Header */}
        <div className="bg-[#2E0234] rounded-t-xl  w-full max-w-lg text-white text-center p-4 mb-6">
            <h2 className="text-lg font-semibold">
              💳 Payment Settings – Manage Your Payouts
            </h2>
            <p className="text-sm mt-1">
              Set up your bank account, update payout details, and track payments easily.
            </p>
          </div>

          <form className="space-y-8 p-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
              <select className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-3 text-sm">
                <option value="">Select your bank</option>
                <option value="gtb">GTBank</option>
                <option value="access">Access Bank</option>
                <option value="uba">UBA</option>
                <option value="zenith">Zenith Bank</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
              <input
                type="text"
                maxLength={10}
                placeholder="Enter your 10-digit account number"
                className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-3 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Set Transfer Pin</label>
                <input
                  type={showPin ? 'text' : 'password'}
                  maxLength={4}
                  placeholder="Create a 4-digit PIN"
                  className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-500"
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Transfer Pin</label>
                <input
                  type={showConfirmPin ? 'text' : 'password'}
                  maxLength={4}
                  placeholder="Re-enter PIN"
                  className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-500"
                  onClick={() => setShowConfirmPin(!showConfirmPin)}
                >
                  {showConfirmPin ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5F04F6] text-white hover:bg-purple-800  py-3 px-4 rounded-md text-sm font-medium"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Right Panel */}
        {/* <div className="md:col-span-4 bg-white rounded-lg px-3 py-2">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Recent Payment</h3>
            <div className="flex gap-2 text-xs text-gray-600">
              <button className="bg-gray-200 p-1 rounded">All</button>
              <button className="bg-white px-1 border border-[#1212121A] rounded">Withdrawal</button>
              <button className="bg-white px-1 border border-[#1212121A] rounded">Transfer To Account Wallet</button>
            </div>
          </div>

          <ul className="space-y-3 max-h-[600px]  text-sm">
            {Array(6).fill(null).map((_, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium text-gray-800">
                    {i === 0 ? 'Transfer' : i === 1 ? 'Promotion' : 'Subscriptions'}
                  </p>
                  <p className="text-gray-500">
                    ₦10,000 Spent On Ad Promotion
                  </p>
                  <p className="text-xs text-gray-400">12-Feb-2025, 10:20pm</p>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

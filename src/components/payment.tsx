import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PaymentSettings() {
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  return (
    <div className="min-h-screen md:py-8 font-sans w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Left Panel */}
        <div className="bg-white rounded-xl flex flex-col w-full md:w-[60%]">
          {/* Header */}
          <div className="bg-[#100112] rounded-t-xl text-white text-center p-4 pb-6 mb-6">
            <h2 className="font-urbanist font-semibold text-[20px]">💳 Payment Settings – Manage Your Payouts</h2>
            <p className="font-inter text-[14px] mt-1">
              Set up your bank account, update payout details, and track payments easily.
            </p>
          </div>

          <form className="space-y-8 p-6 flex-1">
            <div>
              <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">Bank Name</label>
              <select className="w-full border border-[#D0D5DD] font-inter font-normal text-[14px] leading-[145%] text-[#98A2B3] rounded-md px-3 py-3">
                <option value="">Select your bank</option>
                <option value="gtb">GTBank</option>
                <option value="access">Access Bank</option>
                <option value="uba">UBA</option>
                <option value="zenith">Zenith Bank</option>
              </select>
            </div>

            <div>
              <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">Account Number</label>
              <input
                type="text"
                maxLength={10}
                placeholder="Enter your 10-digit account number"
                className="w-full border border-[#D0D5DD] font-inter font-normal text-[14px] leading-[145%] text-[#98A2B3] rounded-md px-3 py-3"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">Set Transfer Pin</label>
                <input
                  type={showPin ? 'text' : 'password'}
                  maxLength={4}
                  placeholder="Create a 4-digit PIN"
                  className="w-full border border-[#D0D5DD] font-inter font-normal text-[14px] leading-[145%] text-[#98A2B3] rounded-md px-3 py-3 pr-10"
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
                <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">Confirm Transfer Pin</label>
                <input
                  type={showConfirmPin ? 'text' : 'password'}
                  maxLength={4}
                  placeholder="Re-enter PIN"
                  className="w-full border border-[#D0D5DD] font-inter font-normal text-[14px] leading-[145%] text-[#98A2B3] rounded-md px-3 py-3 pr-10"
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
              className="w-full bg-[#5F04F6] hover:bg-[#4E03D1] text-white py-3 px-4 rounded-xl font-urbanist text-[16px] tracking-wide transition"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-xl flex flex-col w-full md:w-[40%]">
          <div className="mb-4 border-b border-[#1212121A] pb-3 px-4 pt-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Recent Payment</h3>
            <div className="flex gap-2 text-xs text-gray-600 items-center">
              <button className="bg-[#1212121A] px-4 py-2 rounded-lg">All</button>
              <button className="bg-white px-4 py-2 border border-[#1212121A] rounded-lg">Withdrawal</button>
              <button className="bg-white px-4 py-2 border border-[#1212121A] rounded-lg whitespace-nowrap">
                Transfer To Account Wallet
              </button>
            </div>
          </div>

          <ul className="space-y-3 text-sm px-4 pb-6 overflow-y-auto">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <li key={i} className="flex items-start gap-3 mb-6 border-b border-[#1212121A] pb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                  <div className="w-full space-y-3">
                    {/* Title and Date */}
                    <div className="flex items-center justify-between w-full">
                      <p className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize text-[#121212]">
                        {i === 0 ? 'Transfer' : i === 1 ? 'Promotion' : 'Subscriptions'}
                      </p>
                      <p className="font-inter font-normal text-[10px] leading-[100%] tracking-normal capitalize text-[#121212CC]">
                        12-Feb-2025, 10:20pm
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-inter font-normal text-[12px] leading-[100%] tracking-normal capitalize text-[#121212CC]">
                      ₦10,000 Spent On Ad Promotion
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

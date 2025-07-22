
"use client";
import {  useState } from 'react';
import Image from 'next/image';



interface SalesWallet {
  balance: number;
  dailySalesToday: number;
  pendingWithdrawal: number;
  nextPaymentDate: string;
}

interface AccountWallet {
  totalBalance: number;
  dailyCredit: number;
  totalTransactionCount: number;
}

interface Promotion {
  totalPromotionsCount: number;
  activePromotionsCount: number;
  inactivePromotionsCount: number;
}

interface VendorOverview {
  salesWallet: SalesWallet;
  accountWallet: AccountWallet;
  promotion: Promotion;
}

export default function Home() {
const [overviewData, setOverviewData] = useState<VendorOverview | null>(null);

  const [loading, setLoading] = useState(true);








  if (loading) {
    return <div>Loading metrics...</div>;
  }

  if (!overviewData) {
    return <div>Failed to load metrics</div>;
  }

  // Destructure data
  const { salesWallet, accountWallet, promotion } = overviewData;

  return (
    <div className="container min-h-screen">
      <h1 className="text-[24px] font-bold text-[#5604F6] mb-2">Good Morning Temitope,</h1>
      <p className="text-lg text-[#121212CC] mb-8 pb-4 border-b border-[#1212121A]">
        Your store is performing great! Here’s what’s happening today.
      </p>

      <h1 className="text-[24px] font-bold text-[#000000] mb-2">Wallet & Payment Metrics</h1>
      <p className="text-lg text-[#121212CC] mb-8">
        Monitor your earnings and manage transactions effortlessly
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-20">
        {/* Sale Wallet Balance */}
        <div className="w-full max-w-[500px] min-h-[500px] bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/fund.svg" alt="Wallet Icon" width={40} height={40} />
              <h2 className="text-[#161A41C7] font-semibold">Sale Wallet Balance</h2>
            </div>
            <p className="text-[40px] font-bold text-center text-[#121212]">
              ₦{salesWallet.balance.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-center space-x-3 border-b border-gray-200 w-full pb-4 mt-6">
            <button className="border border-[#5604F6] text-indigo-600 font-medium py-1.5 px-6 rounded-md">
              Transfer
            </button>
            <button className="bg-indigo-700 text-white font-medium py-1.5 px-6 rounded-md">
              Withdraw
            </button>
          </div>

          <div className="flex justify-between items-center bg-[#F8F8F8] p-4 mt-4 rounded-md">
            <div>
              <p className="text-gray-500 text-sm">Daily Sales Stats</p>
              <p className="font-medium text-gray-500">
                ₦{salesWallet.dailySalesToday.toLocaleString()} Sales Today
              </p>
            </div>
            <Image src="/Line.svg" alt="trend" width={96} height={24} />
          </div>

          <div className="bg-[#F8F8F8] p-4 rounded-md">
            <p className="text-gray-500 text-sm">Pending Withdrawal</p>
            <p className="text-sm text-gray-500">
              Next Withdrawal Available On{' '}
              {new Date(salesWallet.nextPaymentDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex justify-end items-center mt-6">
            <button className="text-sm text-gray-700 flex items-center space-x-2">
              <span>Recent Transaction</span>
              <span className="text-lg">{'>'}</span>
            </button>
          </div>
        </div>

        {/* Account Wallet Balance */}
        <div className="w-full max-w-[500px] min-h-[500px] bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/yellowwallet.svg" alt="Wallet Icon" width={40} height={40} />
              <h2 className="text-[#161A41C7] font-semibold">Account Wallet Balance</h2>
            </div>
            <p className="text-[40px] font-bold text-center text-[#121212]">
              ₦{accountWallet.totalBalance.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-[#5604F6] text-white font-medium py-2 px-6 rounded-md">
              Fund Wallet
            </button>
          </div>

          <div className="bg-[#F8F8F8] p-4 mt-4 rounded-md">
            <p className="text-gray-500 text-sm">Daily Credit</p>
            <p className="font-medium text-gray-500">
              ₦{accountWallet.dailyCredit.toLocaleString()} credited today
            </p>
          </div>

          <div className="bg-[#F8F8F8] p-4 mt-4 rounded-md">
            <p className="text-gray-500 text-sm">Transaction Count</p>
            <p className="font-medium text-gray-500">
              {accountWallet.totalTransactionCount} transactions today
            </p>
          </div>

          <div className="flex justify-end items-center mt-4">
            <button className="text-sm text-gray-700 flex items-center space-x-2">
              <span>Recent Transaction</span>
              <span className="text-lg">{'>'}</span>
            </button>
          </div>
        </div>

        {/* Promotion Performance */}
        <div className="w-full max-w-[500px] min-h-[500px] bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/notify.svg" alt="Promotion Icon" width={40} height={40} />
              <h2 className="text-gray-700 font-semibold">Promotion Performance</h2>
            </div>
            <p className="text-[40px] font-bold text-center text-[#121212]">
              {promotion.activePromotionsCount}
            </p>
            <p className="text-sm text-center text-[#12121299]">Active Promotions</p>
          </div>

          <div className="bg-[#F8F8F8] p-4 mt-4 rounded-md">
            <p className="text-gray-500 text-sm">Total Promotions</p>
            <p className="font-medium text-gray-500">
              {promotion.totalPromotionsCount}
            </p>
          </div>

          <button className="bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-4 self-center">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

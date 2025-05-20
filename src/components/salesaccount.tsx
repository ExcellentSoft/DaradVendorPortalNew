'use client';

import React from 'react';
import { Download } from 'lucide-react';

const SalesTransactions = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <span>📊</span>
          <span>Sales Transactions</span>
        </h1>
        <p className="text-gray-600 mt-1">
          View all sales payments, including timestamps, transaction status, payment methods, transfers, and withdrawals.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Revenue Generated</p>
            <p className="font-semibold text-xl">₦0.00</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Amount Withdrawn</p>
            <p className="font-semibold text-xl">₦0.00</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Revenue Generated</p>
            <p className="font-semibold text-xl">₦0.00</p>
          </div>
        </div>
      </div>

      {/* Filter/Search Section */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Search Transaction..."
              className="border px-3 py-2 rounded-md text-sm"
            />
            <input type="date" className="border px-3 py-2 rounded-md text-sm" />
            <select className="border px-3 py-2 rounded-md text-sm">
              <option>Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select className="border px-3 py-2 rounded-md text-sm">
              <option>Transaction Type</option>
              <option>Sale</option>
              <option>Transfer</option>
              <option>Withdrawal</option>
            </select>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Export As Csv/Pdf
          </button>
        </div>
        <p className="text-xs text-right text-gray-400 mt-2">Page 1 of 5</p>
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-4 rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Transaction I.D</th>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Name/Account</th>
              <th>Amount</th>
              <th>Wallet Balance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: '#M4dx-1023',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Sale',
                name: 'Chinedu Okonkwo',
                amount: '+₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
              {
                id: '#M4dx-1024',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Transfer',
                name: 'Account Wallet',
                amount: '+₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
              {
                id: '#M4dx-1025',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Withdrawal',
                name: 'GTBank (****5678)',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Failed',
              },
              {
                id: '#M4dx-1026',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Transfer',
                name: 'Account Wallet',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Failed',
              },
              {
                id: '#M4dx-1027',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Sale',
                name: 'Ngozi Okechukwu',
                amount: '+₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
              {
                id: '#M4dx-1028',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Sale',
                name: 'Ngozi Okechukwu',
                amount: '+₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
              {
                id: '#M4dx-1029',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Transfer',
                name: 'Account Wallet',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Pending',
              },
              {
                id: '#M4dx-1030',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Transfer',
                name: 'Account Wallet',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Pending',
              },
              {
                id: '#M4dx-1031',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Withdrawal',
                name: 'GTBank (****5678)',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
              {
                id: '#M4dx-1032',
                date: '22 Feb 2025, 2:30 PM',
                type: 'Withdrawal',
                name: 'GTBank (****5678)',
                amount: '-₦50,000',
                balance: '₦500,000',
                status: 'Completed',
              },
            ].map((tx, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="py-2">{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.type}</td>
                <td>{tx.name}</td>
                <td>{tx.amount}</td>
                <td>{tx.balance}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === 'Completed'
                        ? 'bg-green-100 text-green-600'
                        : tx.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td>
                  <button className="text-gray-400 hover:text-black">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTransactions;

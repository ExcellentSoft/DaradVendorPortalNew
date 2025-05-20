'use client';

import React from 'react';
import { Download } from 'lucide-react';

const AccountWalletTransactions = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <span>Account Wallet Transactions </span>
        </h1>
        <p className="text-gray-600 mt-1">
          View all sales payments, including timestamps, transaction status, payment methods, transfers, and withdrawals.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Amount Deposited</p>
            <p className="font-semibold text-xl">₦0.00</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Total Amount Transfered</p>
            <p className="font-semibold text-xl">₦0.00</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Pending Monthly Maintanance Fee</p>
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
      <th>Description</th>
      <th>Amount</th>
      <th>Wallet Balance</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
         <tbody>
    {[
      {
        id: 'TXN-34562',
        date: '31 Mar 2025, 2:30 PM',
        type: 'Deposit',
        description: 'Wallet Deposit',
        amount: '+₦100,000',
        balance: '₦500,000',
        status: 'Successful',
      },
      {
        id: 'TXN-34563',
        date: '31 Mar 2025, 2:30 PM',
        type: 'Deposit',
        description: 'Wallet Deposit',
        amount: '+₦100,000',
        balance: '₦500,000',
        status: 'Successful',
      },
      {
        id: 'TXN-34564',
        date: '30 Mar 2025, 2:30 PM',
        type: 'Platform Charge',
        description: 'Monthly Maintenance Fee',
        amount: '-₦500',
        balance: '₦500,000',
        status: 'Failed',
      },
      {
        id: 'TXN-34565',
        date: '30 Mar 2025, 2:30 PM',
        type: 'Platform Charge',
        description: 'Transaction Fee Deduction',
        amount: '-₦500',
        balance: '₦500,000',
        status: 'Failed',
      },
      {
        id: 'TXN-34566',
        date: '29 Mar 2025, 2:30 PM',
        type: 'Transfer',
        description: 'Incoming transfer from bank',
        amount: '+₦50,000',
        balance: '₦500,000',
        status: 'Pending',
      },
      {
        id: 'TXN-34564',
        date: '29 Mar 2025, 2:30 PM',
        type: 'Transfer',
        description: 'Incoming transfer from bank',
        amount: '+₦50,000',
        balance: '₦500,000',
        status: 'Pending',
      },
      {
        id: 'TXN-34565',
        date: '28 Mar 2025, 2:30 PM',
        type: 'Refund',
        description: 'Failed Deposit Refund',
        amount: '+₦12,500',
        balance: '₦500,000',
        status: 'Completed',
      },
      {
        id: 'TXN-34566',
        date: '28 Mar 2025, 2:30 PM',
        type: 'Refund',
        description: 'Failed Deposit Refund',
        amount: '+₦12,500',
        balance: '₦500,000',
        status: 'Completed',
      },
      {
        id: 'TXN-34567',
        date: '27 Mar 2025, 2:30 PM',
        type: 'Promotion Charge',
        description: 'Promotion Fee - Home page',
        amount: '-₦5,000',
        balance: '₦500,000',
        status: 'Deducted',
      },
      {
        id: 'TXN-34568',
        date: '27 Mar 2025, 2:30 PM',
        type: 'Promotion Charge',
        description: 'Promotion Fee - Home page',
        amount: '-₦5,000',
        balance: '₦500,000',
        status: 'Deducted',
      },
    ].map((tx, idx) => (
      <tr key={idx} className="border-b last:border-none">
        <td className="py-2">{tx.id}</td>
        <td>{tx.date}</td>
        <td>{tx.type}</td>
        <td>{tx.description}</td>
        <td>{tx.amount}</td>
        <td>{tx.balance}</td>
        <td>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              tx.status === 'Successful' || tx.status === 'Completed'
                ? 'bg-green-100 text-green-600'
                : tx.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-700'
                : tx.status === 'Deducted'
                ? 'bg-gray-100 text-gray-700'
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

export default AccountWalletTransactions;

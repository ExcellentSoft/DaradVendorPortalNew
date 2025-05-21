'use client';
import { useState } from 'react';

const TopUpForm = () => {
  const [tab, setTab] = useState<'airtime' | 'data'>('airtime');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const isAmountValid = /^\d+$/.test(amount) && Number(amount) > 0;
  const isFormValid = isMobileValid && isAmountValid && operator;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowModal(true);
    }
  };

  return (
    <div className="p-6  ">
      {/* Top Title */}
      <div className="mb-6 bg-white p-4">
        <h1 className="text-lg font-semibold text-gray-800">Utilities & API Services</h1>
        <p className="text-sm text-gray-500">
          Recharge, pay bills, and integrate advanced features—exclusively for vendors.
        </p>
      </div>
      

      {/* Main Flex Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full h-48 md:w-96 bg-white p-4 rounded-lg shadow">
         <ul className="space-y-4 text-sm">
  <li className="flex justify-center items-center space-x-6 p-2 rounded-md text-white bg-purple-700 font-medium text-center">
    <span className="w-3 h-3 rounded-full inline-block bg-white"></span>
    <span>Airtime & Data Top-Up</span>
  </li>
  <li className="text-gray-500 flex justify-center items-center text-center">
    Electricity Bill Payments
  </li>
  <li className="text-gray-500 flex justify-center items-center text-center">
    API Services Integration
  </li>
</ul>

        </div>

        {/* Main Content/Form Card */}
        <div className="w-full max-w-xl">
          <div className="bg-white rounded-xl shadow w-full max-w-md mx-auto">
            {/* Purple Header */}
            <div className="bg-purple-900 text-white text-center p-4 rounded-t-xl">
              <h2 className="text-lg font-semibold">Airtime & Data Top-Up</h2>
              <p className="text-sm text-purple-200">Recharge mobile numbers instantly with ease.</p>
            </div>

            {/* Tab Switcher */}
            <div className="flex justify-center mt-4 space-x-4 border-b border-gray-200 px-6">
              <button
                className={`pb-2 text-sm font-medium ${
                  tab === 'airtime'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500'
                }`}
                onClick={() => setTab('airtime')}
              >
                Airtime Top Up
              </button>
              <button
                className={`pb-2 text-sm font-medium ${
                  tab === 'data'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500'
                }`}
                onClick={() => setTab('data')}
              >
                Data Top Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <span
                    className={`inline-flex items-center px-4 ${
                      !isMobileValid ? 'bg-purple-300 text-white' : 'bg-purple-700 text-white'
                    } text-sm font-medium rounded-l-md border border-r-0 ${
                      isMobileValid ? 'border-purple-700' : 'border-purple-300'
                    }`}
                  >
                    +234
                  </span>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="9091234567"
                    className={`flex-1 block w-full px-3 py-2 border ${
                      mobile && !isMobileValid ? 'border-red-500' : 'border-purple-700'
                    } rounded-r-md text-sm text-black focus:outline-none focus:ring-1 ${
                      mobile && !isMobileValid ? 'focus:ring-red-500' : 'focus:ring-purple-700'
                    } placeholder-black`}
                  />
                </div>
                {mobile && !isMobileValid && (
                  <p className="text-red-500 text-xs mt-1">Enter a valid 10-digit number.</p>
                )}
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount ₦"
                  className={`block w-full px-3 py-2 border ${
                    amount && !isAmountValid ? 'border-red-500' : 'border-gray-300'
                  } rounded-md text-sm text-black placeholder-black focus:outline-none focus:ring-1 ${
                    amount && !isAmountValid ? 'focus:ring-red-500' : 'focus:ring-purple-700'
                  }`}
                />
                {amount && !isAmountValid && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid amount.</p>
                )}
              </div>

              {/* Operator */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Operator</label>
                <select
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-700"
                >
                  <option value="">Select Operator</option>
                  <option value="Mtn Nigeria">Mtn Nigeria</option>
                  <option value="Airtel">Airtel</option>
                  <option value="Glo">Glo</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full text-white text-sm font-medium py-2 rounded-md transition ${
                  !isFormValid
                    ? 'bg-purple-300 cursor-not-allowed'
                    : 'bg-purple-700 hover:bg-purple-800'
                }`}
              >
                Recharge Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-2">Confirm Airtime Top-Up</h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to recharge <span className="font-medium">+234{mobile}</span>
              <br />
              with <span className="font-bold text-purple-700">₦{amount}</span> on {operator}?
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  alert('Recharge Confirmed!');
                }}
                className="px-4 py-2 bg-purple-700 text-white rounded-md text-sm hover:bg-purple-800"
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopUpForm;

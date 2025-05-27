'use client';

import { useState } from 'react';

export default function CreatePromotion() {
  const [category, setCategory] = useState('Logs Type Name');
  const [logType, setLogType] = useState('Social Media');
const [selectedProducts] = useState<string[]>([
  'Facebook Ad Leads',
  'TikTok Engagement Log',
  'TikTok Engagement Log',
]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const numberOfProducts = selectedProducts.length;
  const costPerDay = 500;
  const numberOfDays = startDate && endDate ? Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))) : 14;
  const totalCost = numberOfProducts * numberOfDays * costPerDay;

  const handlePromotionCreation = () => {
    // TODO: Call your API or promotion logic here
    console.log('Promotion confirmed.');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <div className="bg-purple-900 text-white p-6 rounded-b-lg">
        <h1 className="text-xl font-semibold">Create New Promotion</h1>
        <p className="text-sm mt-1">Set up discounts, flash sales, or special offers to boost your sales.</p>
      </div>

      {/* Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Category Section */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h2 className="font-medium mb-2">Select One Product Category To Apply</h2>
            {[
              'Logs Type Name',
              'Tutorial Type Name',
              'Digital Course Categories',
              'International Phone Number Categories',
              'Gift Items Categories',
            ].map((cat) => (
              <label key={cat} className="flex items-center gap-2 mt-1 text-sm">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                />
                {cat}
              </label>
            ))}
            <div className="mt-4">
              <label className="block text-sm mb-1 font-medium">Log Type Name To Promote</label>
              <select
                value={logType}
                onChange={(e) => setLogType(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option>Social Media</option>
                <option>Crypto Leads</option>
                <option>Email Campaign</option>
              </select>
            </div>
          </div>

          {/* Schedule */}
          <div className="border rounded-lg p-4">
            <h2 className="font-medium mb-2">Schedule Promotion</h2>
            <div className="flex gap-2 text-sm">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border px-2 py-1 rounded w-full"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border px-2 py-1 rounded w-full"
              />
            </div>
            <p className="text-yellow-700 bg-yellow-100 text-xs mt-3 p-2 rounded">
              Every promoted product costs ₦500 per day. <br />
              Example: 10 products × 10 days × ₦500 = ₦50,000.
            </p>
          </div>
        </div>

        {/* Product Selection */}
        <div className="border rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Search Products Under Selected Log Type</label>
            <input
              type="text"
              placeholder="Select promotion type"
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm mb-1">Selected Products Under {logType} Log</h3>
            <div className="border rounded p-2 bg-gray-50 text-sm">
              {selectedProducts.map((product, index) => (
                <label key={index} className="block">
                  <input type="checkbox" checked readOnly className="mr-2" />
                  {product}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Check Out */}
        <div className="border rounded-lg p-4 space-y-3 text-sm">
          <h2 className="font-medium text-base">Check Out Details</h2>
          <div className="flex justify-between">
            <span>Number Of Days</span>
            <span className="font-semibold">{numberOfDays} Days</span>
          </div>
          <div className="flex justify-between">
            <span>Number Of Product</span>
            <span className="font-semibold">{numberOfProducts} Products</span>
          </div>
          <div className="flex justify-between">
            <span>Promotional Cost Per Day</span>
            <span className="font-semibold">₦{costPerDay.toLocaleString()}.00</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-semibold text-base">
            <span>Total</span>
            <span>₦{totalCost.toLocaleString()}.00</span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <button className="px-6 py-2 border rounded text-gray-700 hover:bg-gray-100">Cancel</button>
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => setShowModal(true)}
        >
          Create Promotion
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-2">Confirm Promotion</h2>
            <p className="text-sm mb-6">Are you sure you want to create this promotion?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border rounded text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handlePromotionCreation}
                className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

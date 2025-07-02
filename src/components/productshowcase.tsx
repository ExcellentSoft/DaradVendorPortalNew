'use client';

import React, { useState } from 'react';

type ProductTab = 'Logs' | 'Gift Items' | 'Tutorials' | 'Phone Number' | 'Digital Courses' | 'Ecommerce';

const ProductShowcase: React.FC = () => {
  const productCounts: Record<ProductTab, number> = {
    Logs: 24,
    'Gift Items': 16,
    Tutorials: 8,
    'Phone Number': 12,
    'Digital Courses': 6,
    Ecommerce: 10,
  };

  const [selectedTabs, setSelectedTabs] = useState<ProductTab[]>([]);

  const handleCheckboxChange = (tab: ProductTab) => {
    setSelectedTabs((prev) =>
      prev.includes(tab) ? prev.filter((item) => item !== tab) : [...prev, tab]
    );
  };

  const handleSubmit = () => {
    alert(`Selected: ${selectedTabs.join(', ')}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <div className="bg-[#2E0234] text-white p-6 rounded-t-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-1">Showcase Your Best Products</h1>
        <p className="text-purple-200 text-sm">
          Select and add featured products to highlight on your homepage.
        </p>
      </div>

      {/* Tab Selection Area */}
      <div className="px-6 py-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(productCounts).map(([tab, count]) => (
            <label
              key={tab}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition text-sm 
                ${
                  selectedTabs.includes(tab as ProductTab)
                    ? 'bg-purple-100 text-purple-800 font-semibold'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                }`}
            >
              <input
                type="checkbox"
                checked={selectedTabs.includes(tab as ProductTab)}
                onChange={() => handleCheckboxChange(tab as ProductTab)}
                className="form-checkbox h-4 w-4 text-purple-600"
              />
              <span>{tab}</span>
              <span className="text-xs bg-white text-gray-600 px-2 py-0.5 rounded-full border">
                {count}
              </span>
            </label>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSubmit}
          className="w-full max-w-md px-6 py-3 bg-gray-900 text-white rounded-lg font-medium disabled:opacity-50"
          disabled={selectedTabs.length === 0}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;

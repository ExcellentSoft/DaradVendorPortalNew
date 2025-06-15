// components/StorePreview.tsx
'use client';

import React from 'react';

const StorePreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-purple-950 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold mb-2">Preview Your Store</h1>
          <p className="text-purple-200 text-sm">
            Enhance your brand with your default store link.
          </p>
        </div>

        {/* Main Content Area (Placeholder - Add your store preview content here) */}
        <div className="p-6">
          <p className="text-gray-700">
            This is where a preview of your store would be displayed. You can add an iframe or other
            components to render the store preview here.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 bg-gray-50 flex justify-center rounded-b-lg border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Publish Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorePreview;
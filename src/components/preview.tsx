'use client';

import React, { useState } from 'react';

const StorePreview: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePublishClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmPublish = () => {
    setShowModal(false);
    // Add your publish logic here
    console.log('Store published!');
  };

  return (
    <>
      <div className="bg-white mt-5 rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#2E0234] text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold mb-2">Preview Your Store</h1>
          <p className="text-purple-200 text-sm">
            Enhance your brand with your default store link.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="p-6">
          {/* Add store preview content here */}
        </div>

        {/* Footer Buttons */}
        <div className="p-6 bg-gray-50 flex justify-center rounded-b-lg border-t border-gray-200">
          <button
            type="button"
            onClick={handlePublishClick}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Publish Store
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg  shadow-xl w-full max-w-md">
            <h2 className="text-lg text-[#000000] text-center font-semibold mb-2">Confirm Publish</h2>
            <p className="mb-6 text-[#121212CC] text-center">Are you sure you want to publish your store? Once published, your store will be live for customers to view.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPublish}
                className="px-4 py-2 bg-[#5604F6] text-white rounded-lg hover:bg-blue-700"
              >
                Yes, Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StorePreview;

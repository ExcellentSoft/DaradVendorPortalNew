'use client';

import { useState } from 'react';

export default function exportmodal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Export Customers
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-2 text-center">Export Customer Data</h2>
            <p className="text-center text-gray-600 mb-6">
              Do you want to export the current customer list as a CSV/PDF file?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Future logic for exporting
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Yes, Export
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

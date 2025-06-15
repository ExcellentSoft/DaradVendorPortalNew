// components/StoreLinkClaim.tsx
'use client';

import React, { useState } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'; // Icon for copying

const StoreLinkClaim: React.FC = () => {
  const [defaultStoreLink, setDefaultStoreLink] = useState('www.mydarads.com/ayomidehub');
  const [customStoreLink, setCustomStoreLink] = useState(''); // New state for the editable input
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    try {
      // Use defaultStoreLink for copying as per the image
      await navigator.clipboard.writeText(defaultStoreLink);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-purple-950 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold mb-2">Claim Your Unique Store Link</h1>
          <p className="text-purple-200 text-sm">
            Enhance your brand with your default store link.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="p-6">
          {/* Existing "Your Default Store Link" section */}
          <label htmlFor="default-store-link" className="block text-gray-700 text-sm font-medium mb-2">
            Your Default Store Link
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 pr-0 focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200">
            <input
              type="text"
              id="default-store-link"
              readOnly
              value={defaultStoreLink}
              className="flex-grow bg-transparent outline-none text-gray-800 text-base"
              aria-label="Your default store link"
            />
            <button
              onClick={handleCopy}
              className="p-3 text-gray-500 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg"
              title="Copy to clipboard"
            >
              <DocumentDuplicateIcon className="h-6 w-6" />
            </button>
          </div>
          {copySuccess && (
            <p className="text-xs text-green-600 mt-1">{copySuccess}</p>
          )}

          {/* NEW: Input box with "Your unique store link" placeholder */}
          <label htmlFor="custom-store-link" className="block text-gray-700 text-sm font-medium mt-6 mb-2">
            Customize your link
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200">
            <input
              type="text"
              id="custom-store-link"
              placeholder="Your unique store link"
              value={customStoreLink}
              onChange={(e) => setCustomStoreLink(e.target.value)}
              className="flex-grow bg-transparent outline-none text-gray-800 text-base py-2 px-3 rounded-lg"
              aria-label="Enter your unique store link"
            />
          </div>


          {/* Descriptive text */}
          <p className="text-sm text-gray-500 mt-3">
            This is your unique store link provided by the platform.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 bg-gray-50 flex justify-end rounded-b-lg border-t border-gray-200">
          {/* Removed the "Back" button as requested */}
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreLinkClaim;
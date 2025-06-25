import React, { useState } from 'react';

export default function BusinessSettings() {
  const [businessName, setBusinessName] = useState("Ayomide's Fashion Hub");
  const [storeURL] = useState("www.mydards.com/ayomidehub");
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className=" px-6">
        <h2 className="text-2xl font-semibold mb-1 text-center">Update Your Profile – Keep Your Account Up To Date</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Manage your personal details, contact information, and preferences effortlessly.
        </p>

        <div className="flex justify-center mb-6 space-x-2">
          {['Profile', 'Account Preference', 'Account Management', 'Business', 'Notification', 'Payment', 'Security'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${tab === 'Business' ? 'bg-purple-600 text-white' : 'bg-white text-black border border-gray-300'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Take Full Control Of Your Store</h3>
          <p className="text-sm text-gray-500 mb-6">Manage your store details, business operations, and visibility settings effortlessly.</p>

          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              {/* Placeholder for logo upload */}
              <span className="text-gray-500 text-sm">Logo</span>
            </div>
            <p className="text-sm text-purple-600 cursor-pointer">Upload Website Logo</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="flex-1 p-2 border rounded-md border-gray-300"
              />
              <button className="text-purple-600 text-sm">Edit</button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Store URL</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={storeURL}
                disabled
                className="flex-1 p-2 border rounded-md border-gray-300 bg-gray-100"
              />
              <button className="text-purple-600 text-sm">Edit</button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="Monday - Sunday (8 AM - 9 PM)"
                disabled
                className="flex-1 p-2 border rounded-md border-gray-300 bg-gray-100"
              />
              <button className="text-purple-600 text-sm">Edit</button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-700">Get Your Store Seen Online</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isOnline}
                onChange={() => setIsOnline(!isOnline)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all duration-300 relative">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5" />
              </div>
            </label>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-medium transition duration-300">
            Save Business Settings
          </button>
        </div>
      </div>
    </div>
  );
}

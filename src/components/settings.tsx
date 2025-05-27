'use client';

import { useState } from 'react';

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    'Profile',
    'Account Preference',
    'Account Management',
    'Business',
    'Notification',
    'Payment',
    'Security',
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow">
        {activeTab === 'Profile' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Profile Information Section</h2>
            <p className="mb-4 text-sm text-gray-500">Your profile details help us personalize your experience on My Darads.</p>
            {/* Form */}
            <form className="space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Upload</span>
                </div>
              </div>
              <div>
                <label>Full Name</label>
                <input type="text" defaultValue="Temitope Soremekun" className="input" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" defaultValue="temitopesoremekun2@gmail.com" className="input" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" defaultValue="09029717250" className="input" />
              </div>
              <div className="flex justify-between">
                <button type="button" className="btn-secondary">Discard Changes</button>
                <button type="submit" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'Account Preference' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Account Preference</h2>
            <p className="text-gray-500">Placeholder content for Account Preference tab.</p>
          </div>
        )}

        {activeTab === 'Account Management' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Download Data */}
            <div>
              <h3 className="font-bold text-lg mb-2">Download Account Data</h3>
              <select className="input mb-2">
                <option>PDF</option>
              </select>
              <input className="input mb-2" placeholder="Receive Also Via Email" />
              <ul className="text-sm text-gray-600 list-disc ml-5 mb-2">
                <li>Profile Data</li>
                <li>Sales Transactions</li>
                <li>Store Preferences</li>
              </ul>
              <button className="btn-primary w-full">Request Download</button>
            </div>

            {/* Deactivate / Delete */}
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2 text-yellow-600">Deactivate Account</h3>
                <ul className="text-sm text-gray-600 list-disc ml-5 mb-2">
                  <li>Your store will be hidden from customers.</li>
                  <li>New orders won't be accepted.</li>
                  <li>Pending transactions processed.</li>
                </ul>
                <button className="btn-secondary w-full">Deactivate My Account</button>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-red-600">Delete Account Permanently</h3>
                <ul className="text-sm text-gray-600 list-disc ml-5 mb-2">
                  <li>Store details</li>
                  <li>Order & transaction history</li>
                  <li>Customer interactions</li>
                </ul>
                <button className="btn-danger w-full">Request Account Deletion</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Business' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Business Settings</h2>
            <p className="text-gray-500">Placeholder for Business Settings UI.</p>
          </div>
        )}

        {activeTab === 'Notification' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Notifications – Choose What Matters</h2>
            <ul className="space-y-4">
              {['Transaction Alerts', 'Promotional Updates', 'Order Status Updates', 'Newsletter Subscription'].map(label => (
                <li className="flex justify-between items-center border-b pb-2" key={label}>
                  <span>{label}</span>
                  <input type="checkbox" className="toggle toggle-purple" />
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <button className="btn-primary">Save Preferences</button>
            </div>
          </div>
        )}

        {activeTab === 'Payment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Info */}
            <div>
              <h3 className="font-bold mb-4">Manage Your Payouts</h3>
              <select className="input mb-2"><option>Select your bank</option></select>
              <input className="input mb-2" placeholder="Enter account number" />
              <input className="input mb-2" placeholder="Create a 4-digit PIN" />
              <input className="input mb-4" placeholder="Re-enter PIN" />
              <button className="btn-primary w-full">Save Changes</button>
            </div>

            {/* Recent Payments */}
            <div>
              <h3 className="font-bold mb-4">Recent Payments</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>₦30,000 Added Via Bank Transfer</li>
                <li>₦10,000 Spent On Ad Promotion</li>
                <li>₦9,000 Spent On Ad Promotion</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'Security' && (
          <div className="space-y-6">
            {/* Change Password & 2FA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🔑 Change Password</h4>
                <input className="input mb-2" type="password" placeholder="Current Password" />
                <input className="input mb-2" type="password" placeholder="New Password" />
                <input className="input mb-2" type="password" placeholder="Confirm Password" />
                <button className="btn-primary">Update Password</button>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔐 Two-Factor Authentication (2FA)</h4>
                <label className="flex items-center gap-2">
                  Enable 2FA <input type="checkbox" className="toggle toggle-purple" />
                </label>
                <input className="input mt-2" placeholder="Email OTP" />
                <input className="input mt-2" placeholder="Phone OTP" />
                <button className="btn-secondary mt-2">Request OTP</button>
              </div>
            </div>

            {/* Devices & Recovery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🖥️ Active Devices & Login History</h4>
                <ul className="text-sm text-gray-600 list-disc ml-5">
                  <li>iPhone 13 – Lagos (Active Now)</li>
                  <li>MacBook Pro – Abuja (2 days ago)</li>
                  <li>Windows PC – Abuja (1 week ago)</li>
                </ul>
                <button className="btn-danger mt-4">Log Out From All Devices</button>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🛡️ Security Question & Backup Email</h4>
                <select className="input mb-2">
                <option>What is your mother&apos;s maiden name?</option>
                </select>
                <input className="input mb-2" placeholder="Your answer" />
                <input className="input" defaultValue="Temitope Soremekun" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable Tailwind classes
// .input: 'w-full p-2 border rounded-md'
// .btn-primary: 'bg-purple-600 text-white px-4 py-2 rounded'
// .btn-secondary: 'bg-gray-200 text-black px-4 py-2 rounded'
// .btn-danger: 'bg-red-600 text-white px-4 py-2 rounded'
// .toggle: 'form-toggle'
// .toggle-purple: 'accent-purple-600'

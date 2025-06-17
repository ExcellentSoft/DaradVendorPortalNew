'use client';

import { useState } from 'react';

import { FaShoppingBag } from 'react-icons/fa';

const notificationsList = [
  {
    id: 'transactionAlerts',
    title: ' Transaction Alerts',
    description: 'Get instant updates on successful payments, refunds, and account transactions.',
    icon: <FaShoppingBag className="" />,
  },
  {
    id: 'promotionalUpdates',
    title: '🔥 Promotional Updates',
    description: 'Be the first to know about exclusive discounts, new features, and special offers.',
    
  },
  {
    id: 'orderStatusUpdates',
    title: '📅 Order Status Updates',
    description: 'Receive real-time notifications on order confirmations, shipping, and delivery status.',
   
  },
  {
    id: 'newsletterSubscription',
    title: '📩 Newsletter Subscription',
    description: 'Get valuable insights, business tips, and industry updates in your inbox.',
    
  },
];


type PreferencesState = {
  [key: string]: boolean;
};

export default function NotificationPreferences() {
  const [preferences, setPreferences] = useState<PreferencesState>(
    notificationsList.reduce((acc, curr) => {
      acc[curr.id] = false;
      return acc;
    }, {} as PreferencesState)
  );

  const handleToggle = (id: string) => {
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
         <div className="w-full max-w-lg bg-white  shadow-md">
        {/* Header */}
        <div className="bg-[#2E0234] rounded-t-xl  w-full max-w-lg text-white text-center py-4 mb-6">
          <h2 className="text-lg font-semibold">📢 Notifications – Choose What Matters</h2>
          <p className="text-sm mt-1">
            Stay updated on your transactions, orders, and exclusive offers. Customize your notification settings to match your preferences.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {notificationsList.map((notification) => (
            <div key={notification.id} className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 font-medium text-gray-900">
                  <span>{notification.icon}</span>
                  <span>{notification.title}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
              </div>
             <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={preferences[notification.id]}
    onChange={() => handleToggle(notification.id)}
    className="sr-only peer"
  />
  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple-600 rounded-full peer transition-colors"></div>
  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
</label>

            </div>
          ))}

          <p className="text-sm text-[#563A01] bg-[#FEF6E680] p-2 rounded-full mt-2">
            ⚠️ Need full control? Adjust notification preferences anytime!
          </p>

          <button
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition"
            onClick={() => alert('Preferences saved!')}
          >
            Save Preferences
          </button>
        </div>
      </div>
 
  );
}

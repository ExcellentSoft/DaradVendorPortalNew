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
    <div className="w-[600px] max-w-lg bg-white rounded-xl pb-8">
      {/* Header */}
      <div className="bg-[#100112] rounded-t-xl w-full text-white text-left py-4 pb-6 mb-6 px-4">
        <h2 className="font-urbanist font-semibold text-[20px] text-white">
          📢 Notifications – Choose What Matters
        </h2>
        <p className="font-inter text-[16px] text-white mt-1">
          Stay updated on your transactions, orders, and exclusive offers. Customize your notification settings to match your preferences.
        </p>
      </div>

      <div className="p-6 space-y-5">
        {notificationsList.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between space-x-5 border-b border-[#1212121A] pb-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-urbanist font-medium text-[14px] leading-none tracking-wide text-[#121212]">
                <span>{notification.icon}</span>
                <span>{notification.title}</span>
              </div>
              <p className="font-inter font-normal text-[12px] leading-none tracking-normal text-[#121212CC] mt-1">
                {notification.description}
              </p>
            </div>

            {/* Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences[notification.id]}
                onChange={() => handleToggle(notification.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#EEE6FE] rounded-full peer peer-checked:bg-[#5F04F6] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        ))}

        <p className="text-sm text-[#563A01] bg-[#FEF6E680] p-2 rounded-full mt-10 text-center">
          📌 Need full control? Adjust notification preferences anytime!
        </p>

        {/* Centered Button */}
        <div className="flex justify-center mt-10">
          <button
            className="w-[324px] bg-[#5F04F6] hover:bg-[#4E03D1] text-white font-medium py-4 rounded-xl transition"
            onClick={() => alert('Preferences saved!')}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

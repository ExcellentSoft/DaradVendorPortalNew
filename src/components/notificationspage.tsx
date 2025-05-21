'use client';

import { useState } from 'react';
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaFireAlt, FaStar, FaBoxOpen, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type NotificationType = 'order' | 'payout' | 'system' | 'promo' | 'spotlight' | 'stock';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  actionLabel?: string;
}

const notificationsData: Notification[] = [
  {
    id: 1,
    type: 'order',
    title: 'New Order Received',
    message: 'Order #45321 from Adewale is ready for processing',
    time: '5 mins ago',
    actionLabel: 'View Order',
  },
  {
    id: 2,
    type: 'payout',
    title: 'Payout Processed',
    message: '₦50,000 has been transferred to your GTBank account.',
    time: 'Yesterday',
    actionLabel: 'View Transactions',
  },
  {
    id: 3,
    type: 'system',
    title: 'System Alert',
    message: 'Scheduled maintenance on March 30 from 2 AM - 4 AM. Expect downtime.',
    time: '3 days ago',
  },
  {
    id: 4,
    type: 'promo',
    title: 'Promotional Offer',
    message: 'Boost sales with a 10% discount on all store-wide purchases this weekend',
    time: '5 days ago',
    actionLabel: 'Boost Sales',
  },
  {
    id: 5,
    type: 'spotlight',
    title: 'Featured Vendor Spotlight',
    message: 'Congrats! Your store has been featured on the homepage this week',
    time: 'Today',
  },
  {
    id: 6,
    type: 'stock',
    title: 'Low Stock Alert',
    message: "Your product 'Wireless Earbuds' is running low on stock",
    time: '30 mins ago',
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData);

  const renderIcon = (type: NotificationType) => {
    switch (type) {
      case 'order':
        return <FaCheckCircle className="text-green-500 mt-1" />;
      case 'payout':
        return <FaInfoCircle className="text-green-600 mt-1" />;
      case 'system':
        return <FaExclamationTriangle className="text-orange-500 mt-1" />;
      case 'promo':
        return <FaFireAlt className="text-red-500 mt-1" />;
      case 'spotlight':
        return <FaStar className="text-yellow-500 mt-1" />;
      case 'stock':
        return <FaBoxOpen className="text-pink-600 mt-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-semibold text-purple-900 mb-1">Notifications</h1>
      <p className="text-sm text-gray-600 mb-6">
        Stay updated with the latest order alerts, payouts, and system updates.
      </p>

      {/* Notification List */}
      <div className="bg-white rounded-lg shadow p-4">
        {/* Pagination + Filter */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded disabled:opacity-50">
              <FaChevronLeft />
            </button>
            <span className="px-3 py-1 rounded text-white bg-purple-700 text-sm font-medium">1</span>
            <button className="p-2 border rounded disabled:opacity-50">
              <FaChevronRight />
            </button>
          </div>

          <select className="border px-3 py-2 rounded text-sm text-gray-600">
            <option>All notifications</option>
          </select>
        </div>

        <ul className="divide-y divide-gray-100">
          {notifications.map((notif) => (
            <li key={notif.id} className="flex items-start justify-between py-4">
              <div className="flex gap-3">
                {renderIcon(notif.type)}
                <div>
                  <p className="font-medium text-sm">{notif.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                </div>
              </div>
              <div className="text-right min-w-fit text-sm">
                <p className="text-gray-500 mb-2">{notif.time}</p>
                {notif.actionLabel && (
                  <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded font-medium hover:bg-purple-200">
                    {notif.actionLabel}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Footer buttons */}
        <div className="flex justify-end mt-6 gap-4">
          <button className="text-red-600 border border-red-500 px-4 py-2 rounded hover:bg-red-50">
            Delete All Notifications 🗑️
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Mark All As Read
          </button>
        </div>
      </div>
    </div>
  );
}

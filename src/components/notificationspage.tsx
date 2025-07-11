'use client';

import { useState } from 'react';
import { FaCheck , FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

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
const [notifications] = useState(notificationsData);


const iconsMap: Record<NotificationType, string> = {
  order: '/assets/order.svg',
  payout: '/assets/payout.svg',
  system: '/assets/system.svg',
  promo: '/assets/promo.svg',
  spotlight: '/assets/spotlight.svg',
  stock: '/assets/stock.svg',
};

const renderIcon = (type: NotificationType) => (
    <Image
      src={iconsMap[type]}
      alt={`${type} icon`}
      width={24}
      height={24}
      className="mt-1"
    />
  );

const typeColors: Record<NotificationType, string> = {
    order: 'text-[#1D9E34] ',
    payout: 'text-[#127123] ',
    system: 'text-[#F68D2B] ',
    promo: 'text-[#ED0423]',
    spotlight: 'text-[#FF8C00]',
    stock: 'text-[#0A0A0A]',
  };
 

  return (
    <div className="min-h-screen bg-white w-[950px] px-8 py-10">
      <h1 className="font-urbanist font-bold text-[28px] leading-[100%] tracking-[0%] capitalize text-[#5604F6]">Notifications</h1>
      <p className="font-urbanist mt-6 font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0A0A0ACC]">
        Stay updated with the latest order alerts, payouts, and system updates.
      </p>

      {/* Notification List */}
      <div className="bg-white p-4 border border-[#E7E7E7] rounded-2xl p-8 shadow-[0px_4px_60px_0px_#B3B3B326] mt-8 pb-20">
        {/* Pagination + Filter */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <p className='font-inter font-medium text-[16px] leading-[100%] tracking-[0%] text-center capitalize text-[#0A0A0ACC]'>Page</p>
            <div className='flex items-center justify-between gap-3'>
            <button className="p-2 bg-[#E9EBE8] text-[#1C1C1C33] rounded disabled:opacity-50">
              <FaChevronLeft />
            </button>
            <span className="py-2 px-4 rounded text-white bg-[#5604F6] text-sm font-medium">1</span>
            <button className="p-2 border border-[#EEE6FE] bg-[#FFFFFF] rounded disabled:opacity-50">
              <FaChevronRight />
            </button>
            </div>
          </div>

          <select className="px-4 py-2 rounded-xl shadow-[0px_4px_60px_0px_#B3B3B340] border border-[#E7E7E7] bg-white font-urbanist font-medium text-[14px] leading-[100%] tracking-[0%] text-[#0A0A0ACC]">
            <option>All notifications</option>
          </select>
        </div>

  <ul className="">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`flex items-start border-b border-[#E7E7E7] justify-between pb-4 pt-6 ${typeColors[notif.type]}`}
            >
              <div className="flex gap-3 items-start">
                {renderIcon(notif.type)}
                <div>
                  <p className="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] capitalize">{notif.title}</p>
                  <p className="font-inter font-normal text-[14px] leading-[160%] tracking-[0%] text-[#0A0A0ACC] mt-6">{notif.message}</p>
                </div>
              </div>
              <div className="text-right min-w-fit text-sm">
                <p className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#0A0A0A] mb-6">{notif.time}</p>
                {notif.actionLabel && (
                  <button className="bg-[#EEE6FE] font-urbanist font-semibold text-[16px] leading-[145%] tracking-[0%] capitalize text-[#5604F6] px-4 py-1 rounded-md">
                    {notif.actionLabel}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>


        {/* Footer buttons */}
        <div className="flex justify-center mt-10 gap-4">
       <button className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] align-middle capitalize text-black flex items-center gap-2 border border-[#12121266] px-4 py-2 rounded-lg text-center">
  Delete All Notifications
  <Image src="assets/trash.svg" alt="Trash Icon" width={20} height={20} />
</button>

         <button className="bg-[#5604F6] flex items-center gap-4 font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] align-middle capitalize text-white px-8 py-2 rounded-lg">
  <span className="bg-white text-black rounded p-1.5">
    <FaCheck size={8} />
  </span>
  Mark All As Read
</button>
        </div>
      </div>
    </div>
  );
}

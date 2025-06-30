import React, { useState } from 'react';
import { Search, CalendarDays, FileDown } from 'lucide-react';
import { FaEllipsisV } from 'react-icons/fa';

import Orderdetailscomplet from './orderdetailscompleted';
import Orderdetailspending from './orderdetailspending';
import Orderdetailsfailed from './orderdetailsfailed';

// Dummy Modal component for now
const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white p-6 rounded-lg relative max-w-[900px] w-full max-h-[80vh] overflow-y-auto">
      <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
      {children}
    </div>
  </div>
);



const orders = [
  { id: '#Ord-1023', product: 'Digital Course', customer: 'Adamu Bello', price: 15000, status: 'Completed' },
  { id: '#Ord-1024', product: 'Digital Course', customer: 'Adamu Bello', price: 15000, status: 'Completed' },
  { id: '#Ord-1025', product: 'Forex & Crypto Trading 101', customer: 'Tunde Ajayi', price: 15000, status: 'Failed' },
  { id: '#Ord-1026', product: 'Customized Cake', customer: 'Micheal Ade', price: 250000, status: 'Failed' },
  { id: '#Ord-1027', product: 'Luxury Leather Wristwatch', customer: 'Ngozi Okechukwu', price: 350000, status: 'Failed' },
  { id: '#Ord-1028', product: 'Facebook Ad Mastery', customer: 'Adebayo John', price: 8000, status: 'Pending' },
  { id: '#Ord-1029', product: 'TikTok Engagement Log', customer: 'Yusuf Ibrahim', price: 45000, status: 'Pending' },
  { id: '#Ord-1030', product: 'Social Media Marketing For Nigerians', customer: 'Esther Ojo', price: 22500, status: 'Pending' },
  { id: '#Ord-1031', product: 'Film & Video Editing For Nollywood', customer: 'Chinwe Amaechi', price: 10000, status: 'Completed' },
  { id: '#Ord-1032', product: 'Film & Video Editing For Nollywood', customer: 'Chinwe Amaechi', price: 10000, status: 'Completed' },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'Completed':
      return <div className="flex items-center justify-center gap-1 bg-[#1D9E3426] rounded-md p-2 text-[#1D9E34]">Completed</div>;
    case 'Failed':
      return <div className="flex items-center justify-center gap-1 bg-[#ED042326] rounded-md p-2 text-[#ED0423]">Failed</div>;
    case 'Pending':
      return <div className="flex items-center justify-center gap-1 bg-[#F68D2826] rounded-md p-2 text-[#F68D2B]">Pending</div>;
    default:
      return null;
  }
};

const OrderHistoryTable: React.FC = () => {
  const [selectedOrderStatus, setSelectedOrderStatus] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

 

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[18px] text-[#121212CC] font-semibold">Order History</h2>
            <p className="text-[16px] text-[#121212CC]">Search, filter, and download reports of all past transactions.</p>
          </div>
          <div className="text-sm text-gray-500">Page 1 Of 5</div>
        </div>

        <div className="flex justify-between flex-wrap gap-2">
          <div className="flex items-center bg-[#FBFCFC] border border-gray-100 rounded-md px-3 py-2 w-48">
            <Search size={16} className="text-gray-400 mr-2" />
            <input className="w-full focus:outline-none text-[14px] text-[#6E6B7B]" placeholder="Search Transaction..." />
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center border border-gray-100 rounded-md px-3 py-1.5 text-sm text-[#121212] gap-2">
              <CalendarDays size={16} /> Date Range
            </button>
            <select className="border border-gray-100 rounded-md px-3 py-1.5 text-sm text-[#121212]">
              <option>Status</option>
            </select>
            <select className="border border-gray-100 rounded-md px-3 py-1.5 text-sm text-[#121212]">
              <option>Sort By</option>
            </select>
            <select className="border border-gray-100 rounded-md px-3 py-1.5 text-sm text-[#121212]">
              <option>Select  Category</option>
            </select>
            <button
              
              className="flex items-center gap-2 bg-[#5604F6] text-white text-sm font-medium px-4 py-1.5 rounded-md"
            >
              <FileDown size={16} /> Export
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-sm">
                   <thead className="px-10 py-5 whitespace-nowrap text-[#121212] text-sm font-semibold rounded-tl-3xl bg-[#C2C3C5]">
            <tr className="">
              <th className="p-6">#</th>
              <th className="p-6">Order ID</th>
              <th className="p-6">Product Name</th>
              <th className="p-6">Customer Name</th>
              <th className="p-6">Total Price</th>
              <th className="p-6">Status</th>
              <th className="p-6">Action</th>
            </tr>
          </thead>
         <tbody>
  {orders.map((order, index) => (
    <tr
      key={order.id + index}
      className="border-t text-sm cursor-pointer"
      onClick={() => {
        setSelectedOrderStatus(order.status);
        setShowModal(true);
      }}
    >
      <td className="p-6 text-[14px] font-semibold text-[#121212]">{index + 1}</td>
      <td className="p-6 text-[14px] font-semibold text-[#121212]">{order.id}</td>
      <td className="p-6 text-[14px] text-[#121212B2]">{order.product}</td>
      <td className="p-6 text-[14px] font-semibold text-[#121212B2]">{order.customer}</td>
      <td className="p-6 text-[14px] font-bold text-[#121212B2]">₦{order.price.toLocaleString()}</td>
      <td className="p-6"><StatusIcon status={order.status} /></td>
      <td className="px-4 py-3">
        <FaEllipsisV className="text-gray-500 cursor-pointer" />
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {selectedOrderStatus === 'Completed' && <Orderdetailscomplet />}
          {selectedOrderStatus === 'Pending' && <Orderdetailspending />}
          {selectedOrderStatus === 'Failed' && <Orderdetailsfailed />}
        </Modal>
      )}
    </div>
  );
};

export default OrderHistoryTable;

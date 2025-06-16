import React, { useState } from 'react';

interface ExportDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: () => void;
}

type Tab = 'profile' | 'orders' | 'notes';

const ExportDataModal: React.FC<ExportDataModalProps> = ({ isOpen, onClose, onExport }) => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  // If not open, do not render
  if (!isOpen) return null;

  const user = {
    fullName: 'Tunde Balogun',
    email: 'tunde@example.com',
    phone: '+2348012345678',
  };

  const orders = [
    { id: 'Ord-1023', date: '22 Feb 2025', amount: '₦15,000', status: 'Completed' },
    { id: 'Ord-1024', date: '22 Feb 2025', amount: '₦5,500', status: 'Completed' },
    { id: 'Ord-1025', date: '22 Feb 2025', amount: '₦150,000', status: 'Failed' },
  ];

  const renderProfileInfo = () => (
    <div className="space-y-4">
      <div className="flex justify-end text-sm text-[#5604F6] font-medium cursor-pointer">Edit</div>

      <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>

      <div>
        <label className="block text-sm text-[#101928] font-semibold">Full Name</label>
        <input className="w-full border text-[#101928] border-[#1E015680] rounded p-2" value={user.fullName} readOnly />
      </div>
      <div>
        <label className="block text-sm text-[#101928] font-semibold">Email</label>
        <input className="w-full border text-[#101928] border-[#1E015680] rounded p-2" value={user.email} readOnly />
      </div>
      <div>
        <label className="block text-sm text-[#101928] font-semibold">Phone</label>
        <input className="w-full border text-[#101928] border-[#1E015680] rounded p-2" value={user.phone} readOnly />
      </div>
    </div>
  );

  const renderOrderHistory = () => (
    <div>
      <div className="text-right text-sm text-[#5604F6] font-medium cursor-pointer mb-4">
        View All Orders History
      </div>
  <div className="overflow-hidden rounded-t-lg">
  <table className="w-full border text-sm">
    <thead className="font-semibold">
      <tr className="bg-gray-200 text-[#121212] text-[16px]">
        <th className="p-2 rounded-tl-lg">Order I.D</th>
        <th className="p-2 text-[#121212B2]">Date & Time</th>
        <th className="p-2 text-[#121212] font-semibold">Amount</th>
        <th className="p-2 rounded-tr-lg">Status</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, idx) => (
        <tr key={idx} className="border-b">
          <td className="p-3 text-[#121212] font-semibold">#{order.id}</td>
          <td className="p-3 text-[#121212B2]">{order.date}</td>
          <td className="p-3 text-[#121212] font-semibold">{order.amount}</td>
          <td className="p-3">
            <span
              className={`px-3 py-2 rounded-full text-xs font-semibold ${
                order.status === 'Completed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {order.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );

  const renderAdditionalNotes = () => (
    <div className="text-sm text-gray-600">
      <p>This section can contain internal notes or comments about the customer.</p>
      <ul className="list-disc list-inside mt-2">
        <li>Frequent buyer with timely payments.</li>
        <li>Last support request was resolved quickly.</li>
        <li>Eligible for loyalty rewards.</li>
      </ul>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg text-[#000000] font-bold mb-4">Customer Details - Temitope Soremekun</h2>

        {/* Tabs */}
        <div className="flex border-b mb-4 text-sm font-medium gap-x-6">
          {(['profile', 'orders', 'notes'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500'
              }`}
            >
              {tab === 'profile'
                ? 'Profile Information'
                : tab === 'orders'
                ? 'Order History'
                : 'Additional Notes'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[200px]">
          {activeTab === 'profile' && renderProfileInfo()}
          {activeTab === 'orders' && renderOrderHistory()}
          {activeTab === 'notes' && renderAdditionalNotes()}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="border border-[#E6E7EA] px-4 py-2  text-[#121212CC] bg-white rounded text-sm" onClick={onClose}>
            Close
          </button>
          <button className="bg-[#5604F6] text-white px-4 py-2 rounded text-sm" onClick={onExport}>
            Fund Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportDataModal;

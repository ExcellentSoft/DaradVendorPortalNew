"use client";


import { useState } from "react";

interface CustomerDetailsProps {
  name: string;
}

const CustomerDetailsContent: React.FC<CustomerDetailsProps> = ({ name }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'notes'>('profile');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-center mb-4">
        {isEditing ? 'Edit Customer Details' : 'Customer Details'} - {name}
      </h2>

      {/* Tabs */}
      <div className="flex justify-between border-b mb-4 text-sm font-medium">
        {['profile', 'history', 'notes'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 capitalize ${
              activeTab === tab
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setActiveTab(tab as typeof activeTab);
              setIsEditing(false);
            }}
          >
            {tab === 'profile' ? 'Profile Information' : tab === 'history' ? 'Order History' : 'Additional Notes'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && (
        <div>
          <div className="flex justify-end">
            {!isEditing && (
              <button
                className="text-sm text-purple-600 font-medium"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
          <form className="space-y-4 mt-2">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                defaultValue="Tunde Balogun"
                className="w-full border rounded px-3 py-2 text-sm"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="tunde@example.com"
                className="w-full border rounded px-3 py-2 text-sm"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                defaultValue="+2348012345678"
                className="w-full border rounded px-3 py-2 text-sm"
                disabled={!isEditing}
              />
            </div>
            <div className="flex justify-between pt-4">
              <button className="border px-4 py-2 rounded text-sm">Close</button>
              {isEditing ? (
                <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                  Save Changes
                </button>
              ) : (
                <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                  Fund Wallet
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="text-right text-sm text-purple-600">View All Orders History</div>
          <div className="border rounded">
            <div className="grid grid-cols-4 bg-gray-100 text-sm font-medium p-2">
              <div>Order I.D</div>
              <div>Date & Time</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            {[
              { id: '#Ord-1023', date: '22 Feb 2025', amount: '₦15,000', status: 'Completed' },
              { id: '#Ord-1024', date: '22 Feb 2025', amount: '₦5,500', status: 'Completed' },
              { id: '#Ord-1025', date: '22 Feb 2025', amount: '₦150,000', status: 'Failed' },
            ].map((order, idx) => (
              <div key={idx} className="grid grid-cols-4 text-sm p-2 border-t">
                <div>{order.id}</div>
                <div>{order.date}</div>
                <div>{order.amount}</div>
                <div>
                  <span className={`px-2 py-1 rounded text-xs ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button className="border px-4 py-2 rounded text-sm">Export Data</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">Fund Wallet</button>
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-4">
          <textarea
            placeholder="Add additional notes here..."
            className="w-full border rounded px-3 py-2 text-sm h-32"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">Save Note</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function CustomerDetailsPage() {
  return (
   
 
        <main className="mt-20 p-4 overflow-y-auto">
          <CustomerDetailsContent name="Tunde Balogun" />
        </main>
      

  );
}

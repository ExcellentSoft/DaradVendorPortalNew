import React, { useState } from 'react';

interface ConfirmShipmentModalProps {
  orderId: string;
  customerName: string;
  deliveryEmail: string;
  deliveryPhone: string;
  onClose: () => void;
  onConfirm: (data: {
    email: string;
    phone: string;
    estimatedDate: string;
    trackingNumber: string;
  }) => void;
}

const ConfirmShipmentModal: React.FC<ConfirmShipmentModalProps> = ({
  orderId,
  customerName,
  deliveryEmail,
  deliveryPhone,
  onClose,
  onConfirm
}) => {
  const [estimatedDate, setEstimatedDate] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-lg p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-lg font-semibold">
            Confirm Shipment – <span className="text-gray-800">#{orderId}</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            &times;
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Review shipment details before updating the order status.
        </p>

        {/* Order Overview */}
        <div className="border border-gray-200 rounded-md p-4 mb-6">
          <h3 className="text-sm font-medium mb-2">Order Overview</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Order Status</p>
              <p className="text-green-600 font-semibold">Pending ✅</p>
            </div>
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">{customerName}</p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-600">Delivery Email</label>
            <input
              type="email"
              value={deliveryEmail}
              disabled
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Delivery Phone Number</label>
            <input
              type="text"
              value={deliveryPhone}
              disabled
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Estimated Delivery Date</label>
            <input
              type="date"
              value={estimatedDate}
              onChange={(e) => setEstimatedDate(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Generate Tracking Number</label>
            <input
              type="text"
              placeholder="e.g., TRK123456789"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        </div>

        {/* Alert */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 text-sm rounded-md mb-6">
          Are you sure you want to mark this order as shipped? This will notify the customer with the tracking details.
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onConfirm({ email: deliveryEmail, phone: deliveryPhone, estimatedDate, trackingNumber })
            }
            disabled={!estimatedDate || !trackingNumber}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            Confirm Shipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmShipmentModal;

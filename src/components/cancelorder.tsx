import React, { useState } from 'react';

interface CancelOrderModalProps {
  orderId: string;
  onCancel: (reason: string) => void;
  onClose: () => void;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({ orderId, onCancel, onClose }) => {
  const [reason, setReason] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">
            Cancel Order – <span className="text-gray-800">#{orderId}</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            &times;
          </button>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to cancel this order? Please provide a reason for cancellation.
        </p>

        {/* Reason Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Reason
          </label>
          <input
            type="text"
            placeholder="Select or type your cancellation reason here..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mb-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            No, Go Back
          </button>
          <button
            onClick={() => onCancel(reason)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
            disabled={!reason.trim()}
          >
            Confirm Cancellation
          </button>
        </div>

        {/* Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 text-sm rounded-md">
          Cancelling the order will notify the customer and update the order status immediately.
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;

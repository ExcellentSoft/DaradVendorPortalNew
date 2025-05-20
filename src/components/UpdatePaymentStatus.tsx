import React, { useState } from 'react';

interface UpdatePaymentStatusModalProps {
  orderId: string;
  currentStatus: 'Pending' | 'Paid' | 'Failed' | 'Returned';
  onClose: () => void;
  onSave: (newStatus: 'Pending' | 'Paid' | 'Failed' | 'Returned') => void;
}

const UpdatePaymentStatusModal: React.FC<UpdatePaymentStatusModalProps> = ({
  orderId,
  currentStatus,
  onClose,
  onSave
}) => {
  const [selectedStatus, setSelectedStatus] = useState<typeof currentStatus>(currentStatus);

  const statusClasses = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Paid: 'bg-green-100 text-green-800',
    Failed: 'bg-red-100 text-red-800',
    Returned: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl w-full max-w-md shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">Update Payment Status</h2>
          <button onClick={onClose} className="text-gray-400 text-xl hover:text-gray-600">&times;</button>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Changing the status will automatically update the order record and notify the customer.
        </p>

        {/* Current Status */}
        <div className="border border-gray-200 rounded-md p-4 mb-6">
          <p className="text-sm text-gray-500 mb-2">Current payment status</p>
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusClasses[currentStatus]}`}>
            {currentStatus}
          </div>
          <p className="text-sm text-gray-500 mt-4">Order I.D</p>
          <p className="text-sm font-semibold text-gray-800">Ord-{orderId}</p>
        </div>

        {/* New Status Selection */}
        <div className="border border-gray-200 rounded-md p-4 mb-6">
          <p className="text-sm font-medium mb-3">Select New Payment Status</p>
          <div className="flex flex-wrap gap-4">
            {(['Pending', 'Paid', 'Failed', 'Returned'] as const).map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={() => setSelectedStatus(status)}
                  className="accent-purple-600"
                />
                <span className="text-sm">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(selectedStatus)}
            className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePaymentStatusModal;

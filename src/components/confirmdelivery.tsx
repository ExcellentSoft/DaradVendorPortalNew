import React from 'react';

interface ConfirmDeliveryModalProps {
  orderId: string;
  customerName: string;
  deliveryDate: string;
  previousStatus: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeliveryModal: React.FC<ConfirmDeliveryModalProps> = ({
  orderId,
  customerName,
  deliveryDate,
  previousStatus,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
      {/* Modal Heading */}
      <h2 className="text-xl font-semibold mb-2">Confirm Delivery</h2>
      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to mark Order <span className="font-medium">#{orderId}</span> as delivered?
        This action will update the order status and notify the customer that their package has been received.
      </p>

      {/* Order Overview */}
      <div className="border rounded-md p-4 text-left text-sm text-gray-700 mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Order I.D</span>
          <span>#{orderId}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Name</span>
          <span>{customerName}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Order Status (Before)</span>
          <span>{previousStatus}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Delivery Date</span>
          <span>{deliveryDate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Confirm Delivery
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeliveryModal;

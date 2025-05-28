import React from 'react';

interface ConfirmDeliveryModalProps {
  orderId: string;
  customerName: string;     
  deliveryDate: string;  
  previousStatus: string;   
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
}


const ConfirmDeliveryModal: React.FC<ConfirmDeliveryModalProps> = ({

  orderId,
  customerName,
  deliveryDate,
  previousStatus,
  onCancel,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
      {/* Modal Heading */}
      <div className="flex justify-end mb-2">
        <button onClick={onClose} className="text-gray-400 text-[24px]">
          &times;
        </button>
      </div>
      <div className="border-b">
        <h2 className="text-[24px] text-[#000000] font-bold mb-2">Confirm Delivery</h2>
        <p className="text-[14px] text-[#121212CC] mb-6">
          Are you sure you want to mark Order <span className="font-medium">#{orderId}</span> as delivered?
          This action will update the order status and notify the customer that their package has been received.
        </p>
      </div>

      {/* Order Overview */}
      <div className="mb-8 mx-auto bg-white mt-4 rounded-lg border border-[#12121233] p-8 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Order Overview</h2>

        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm text-gray-600">Order ID</span>
          <p className="text-[#121212] font-bold">{orderId}</p>

          <p className="text-black">Name</p>
          <p className="font-bold text-black">{customerName}</p>
        </div>

        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm text-gray-600">Order Status (Before)</span>
          <p className="text-[#121212] font-bold">{previousStatus}</p>

          <p className="text-black">Delivery Date</p>
           <p className="font-bold text-black">{deliveryDate}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col mt-8 md:flex-row gap-6 justify-center items-center">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-[#5604F6] text-white rounded-md"
        >
          Confirm Delivery
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeliveryModal;

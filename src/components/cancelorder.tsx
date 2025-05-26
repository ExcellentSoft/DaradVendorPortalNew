import React, { useState } from 'react';
import Image from "next/image";
interface CancelOrderModalProps {
  onCancel: (reason: string) => void;
  onClose: () => void;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({ onCancel, onClose }) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const predefinedReasons = [
    'Out of Stock',
    'Customer Request',
    'Payment Not Received',
    'Other',
  ];

  const isCustom = selectedReason === 'Other';
  const finalReason = isCustom ? customReason : selectedReason;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[600px] rounded-lg p-8 ">
        {/* Header */}
        <div className="flex justify-end  mb-2">
         <button onClick={onClose} className="text-gray-400  text-[24px]">
            &times;
          </button>
          </div>
        <div className="bg-white p-4 text-center border border mb-6">
       
         <h2 className="text-[24px] text-[#000000] font-bold">
            Cancel Order – <span className="text-gray-800">#ORD1234</span>
          </h2>
         
       

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to cancel this order? Please provide a reason for cancellation.
        </p>
        </div>

        {/* Reason Dropdown */}
        <div className="mb-4">
          <label className="block text-[18px] font-bold text-[#101928] mb-2">
            Select Reasons
          </label>
        <select
  value={selectedReason}
  onChange={(e) => {
    setSelectedReason(e.target.value);
    if (e.target.value !== 'Other') setCustomReason('');
  }}
  className="w-full border border-gray-300 rounded-md px-4 py-2  text-black"
>

            <option value="" disabled>
             Select or type your cancellation reason here...
            </option>
            {predefinedReasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Reason Input */}
        {isCustom && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Type your custom reason here..."
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 "
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6 items-center">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            No, Go Back
          </button>
          <button
            onClick={() => onCancel(finalReason)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
            disabled={!finalReason.trim()}
          >
            Confirm Cancellation
          </button>
        </div>

        {/* Notice */}
        <div className="bg-yellow-50 flex gap-4 border-l-4 border-yellow-400 text-[#563A01] p-3 text-sm rounded-md">
         <Image src="assets/info.svg" alt="Transfer" width={20} height={20} /> 
         <span className='text-[#563A01]'>
          Cancelling the order will notify the customer and update the order status immediately.
       </span>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;

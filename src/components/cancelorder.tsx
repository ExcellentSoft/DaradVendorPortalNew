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
        <div className="bg-white p-2 border-b text-center">
       
         <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
            Cancel Order – #ORD1234
          </h2>
         
       

        {/* Message */}
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Are you sure you want to cancel this order? Please provide <br />a reason for cancellation.
        </p>
        </div>

        {/* Reason Dropdown */}
        <div className="mt-4 mx-20 mb-12">
          <label className="font-inter font-medium text-[14px] leading-[100%] align-middle capitalize text-[#101928] mb-2 block">
            Select Reasons
          </label>
        <select
  value={selectedReason}
  onChange={(e) => {
    setSelectedReason(e.target.value);
    if (e.target.value !== 'Other') setCustomReason('');
  }}
  className="w-full border border-[#D0D5DD] rounded-md px-4 py-2  text-[#98A2B3]"
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
<div className="flex flex-col md:flex-row gap-6 justify-center mb-6 items-center mx-30 mb-12">
  <button
    onClick={onClose}
    className="w-[206px] h-[41px] rounded-lg px-5 py-3 bg-white text-[#121212CC] text-sm font-medium font-inter leading-none tracking-[0.02em] capitalize border-[#E6E7EAw-full h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D] hover:bg-[#D1D5DB] whitespace-nowrap"
  >
    No, Go Back
  </button>
  <button
    onClick={() => onCancel(finalReason)}
    className="w-[206px] h-[41px] rounded-lg px-5 py-3 bg-[#000000] text-white text-sm font-medium font-inter leading-none tracking-[0.02em] capitalize hover:bg-[#111111] whitespace-nowrap"
    disabled={!finalReason.trim()}
  >
    Confirm Cancellation
  </button>
</div>

        {/* Notice */}
        <div className="bg-[#FEF6E6] flex gap-4 border-l-4 border-[#FCE4B1] text-[#563A01] p-3 text-sm rounded-md mx-20">
         <Image src="assets/info.svg" alt="Transfer" width={20} height={20} /> 
         <span className='font-inter font-normal text-[12px] leading-[160%] tracking-[0em]'>
          Cancelling the order will notify the customer and update the order status immediately.
       </span>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;

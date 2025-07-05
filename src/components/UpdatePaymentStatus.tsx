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
<div className="flex justify-end mb-2">
  <button onClick={onClose} className="text-gray-400 text-[24px]">
    &times;
  </button>
</div>

<div className="bg-white p-2 border-b text-center">
  <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
     Update Payment Status 
  </h2>

  <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
   Changing the status will automatically update the <br />order record and notify the customer.
  </p>
</div>


        {/* Current Status */}
        <div className="border border-gray-200 rounded-[16px] p-4 mb-6 flex flex-col gap-4 mt-6">
          <div className="w-full flex justify-between items-center gap-4">
          <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Current payment status</p>
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusClasses[currentStatus]}`}>
            {currentStatus}
             <span className="bg-[#F68D2826] text-[#F68D2B] border-[0.5px] border-[#F68D2B33] text-sm font-medium px-3 py-1 rounded-sm">
      Pending
    </span>
          </div>
          </div>
          <div className="w-full flex justify-between items-center gap-4">
          <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Order I.D</p>
          <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Ord-{orderId}</p>
          </div>
        </div>

        {/* New Status Selection */}
        <div className="border border-gray-200 rounded-[16px] p-4 mb-6 flex flex-col gap-4">
          <p className="font-inter font-medium text-[16px] leading-[100%] tracking-[0] capitalize text-[#121212]">Select New Payment Status</p>
          <div className="flex flex-wrap gap-4 justify-between">
            {(['Pending', 'Paid', 'Failed', 'Returned'] as const).map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={() => setSelectedStatus(status)}
                  className="accent-[#5604F6]"
                />
                <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
<div className="mt-6 flex justify-center items-center gap-6 w-[387px]">
  {/* Cancel Button */}
  <button
    onClick={onClose}
    className="w-full h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Cancel
  </button>

  {/* Save Changes Button */}
  <button
    onClick={() => onSave(selectedStatus)}
    className="w-full h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] flex items-center justify-center gap-2"
  >
    <span className="font-urbanist font-semibold text-[14px] leading-none tracking-[0.02em] align-middle capitalize text-white whitespace-nowrap">
      Save Changes
    </span>
  </button>
</div>

      </div>
    </div>
  );
};

export default UpdatePaymentStatusModal;

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
        <h1 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">Confirm Delivery</h1>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2 mb-4">
          Are you sure you want to mark Order <span className="font-medium">#{orderId}</span> as delivered?
          This action will <br /> update the order status and notify the customer that their package has been <br /> received.
        </p>
      </div>

      {/* Order Overview */}
      <div className="w-full mx-auto bg-white  rounded-lg border border-[#12121233] px-6 space-y-4 mt-6 py-4">
        <h2 className="font-urbanist font-semibold text-left leading-[160%] align-middle capitalize text-[#000000]">Order Overview</h2>

        <div className="flex items-center justify-between border-b pb-2">
          <div className='w-[320px] flex justify-between items-center gap-4'>
            <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Order ID</span>
           <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">{orderId}</p>
          </div>

          <div className='w-[320px] flex justify-between items-center gap-4'>
            <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Name</p>
            <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">{customerName}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-2">
          <div className='w-[320px] flex justify-between items-center gap-4'>
          <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Order Status (Before)</span>
          <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">{previousStatus}</p>
          </div>

         <div className='w-[320px] flex justify-between items-center gap-4'>
           <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Delivery Date</p>
           <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">{deliveryDate}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
<div className="mt-6 flex justify-center items-center gap-6 w-[387px] mx-auto mb-4">
  <button
    onClick={onCancel}
    className="w-full h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Cancel
  </button>

  <button
    onClick={onConfirm}
    className="w-full h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] flex items-center justify-center gap-2"
  >
    <span className="font-urbanist font-semibold text-[14px] leading-none tracking-[0.02em] align-middle capitalize text-white whitespace-nowrap">
      Confirm Delivery
    </span>
  </button>
</div>

    </div>
  );
};

export default ConfirmDeliveryModal;

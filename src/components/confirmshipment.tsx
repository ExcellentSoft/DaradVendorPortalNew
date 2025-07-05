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
    <div className="flex flex-col min-w-full p-6 space-y-6  min-h-screen justify-center items-center rounded-lg">
     
        {/* Header */}
        <div className="bg-white p-6 text-center border-b w-[740px] rounded-lg">
          <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black mt-10">
            Confirm Shipment – #{orderId}
          </h2>

        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Review shipment details before updating the order status.
        </p>

        {/* Order Overview */}
        <div className="  w-full mx-auto bg-white  rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-4">
          <h3 className="font-urbanist font-semibold text-base leading-[160%] text-left capitalize text-[#000000]">Order Overview</h3>
         <div className="grid grid-cols-2 gap-4 text-sm items-center">
  <div className="w-[280px] flex justify-between items-center gap-4">
    <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">
      Order Status
    </p>
    <div className="flex gap-2 items-center">
      <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        Pending
      </p>
      <svg
        className="w-4 h-4 text-white bg-green-600 rounded-full"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

  <div className="w-[280px] flex justify-between items-center gap-4">
    <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Name</p>
    <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
      {customerName}
    </p>
  </div>
</div>

        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left mt-6">
          <div>
            <label className="font-medium text-sm leading-[160%] text-left align-middle capitalize font-inter text-[#101928]">Delivery Email</label>
            <input
              type="email"
              value={deliveryEmail}
              disabled
              className="w-full mt-1 border border-[#D0D5DD] bg-white rounded-md px-4 py-2 font-inter font-normal text-[14px] leading-[145%] align-middle text-[#98A2B3]"
            />
          </div>
          <div>
            <label className="font-medium text-sm leading-[160%] text-left align-middle capitalize font-inter text-[#101928]">Delivery Phone Number</label>
            <input
              type="text"
              value={deliveryPhone}
              disabled
              className="w-full mt-1 border border-[#D0D5DD] bg-white rounded-md px-4 py-2 font-inter font-normal text-[14px] leading-[145%] align-middle text-[#98A2B3]"
            />
          </div>
          <div>
            <label className="font-medium text-sm leading-[160%] text-left align-middle capitalize font-inter text-[#101928]">Estimated Delivery Date</label>
            <input
              type="date"
              value={estimatedDate}
              onChange={(e) => setEstimatedDate(e.target.value)}
              className="w-full mt-1 border border-[#D0D5DD] bg-white rounded-md px-4 py-2 font-inter font-normal text-[14px] leading-[145%] align-middle text-[#98A2B3]"
            />
          </div>
          <div>
            <label className="font-medium text-sm leading-[160%] text-left align-middle capitalize font-inter text-[#101928]">Generate Tracking Number</label>
            <input
              type="text"
              placeholder="e.g., TRK123456789"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full mt-1 border border-[#D0D5DD] bg-white rounded-md px-4 py-2 font-inter font-normal text-[14px] leading-[145%] align-middle text-[#98A2B3]"
            />
          </div>
        </div>

        {/* Alert */}
              <div className="bg-[#FEF6E6] flex gap-4 border-l-4 border-[#FCE4B1] text-[#563A01] p-3 text-sm rounded-md mt-10">
                 <span className='font-inter font-normal text-[12px] leading-[160%] tracking-[0em]'>
                  Are you sure you want to mark this order as shipped? This will notify the customer with the tracking details.
               </span>
                </div>

        {/* Action Buttons */}
<div className="flex flex-col md:flex-row gap-6 justify-center items-center mx-30 mb-12 mt-12">
  <button
    onClick={onClose}
    className="w-[206px] h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D] hover:bg-[#D1D5DB] whitespace-nowrap bg-white"
  >
    Cancel
  </button>
  <button
    onClick={() =>
      onConfirm({ email: deliveryEmail, phone: deliveryPhone, estimatedDate, trackingNumber })
    }
    disabled={!estimatedDate || !trackingNumber}
    className="w-[206px] h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#5604F6] text-white text-sm font-medium font-inter leading-none tracking-[0.02em] capitalize whitespace-nowrap"
  >
    Confirm Shipment
  </button>
</div>

      </div>
    </div>
  );
};

export default ConfirmShipmentModal;

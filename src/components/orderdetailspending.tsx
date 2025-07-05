import React, { useState } from "react";
import CancelOrderModal from "./cancelorder"; 
import Confirm from "./confirmdelivery"

const OrderPending = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
   const [showConfirm, setShowConfirm] = useState(false);
   
const handleModalClose = () => {
  // do something like closing the modal
};
  return (
    <div className="flex flex-col min-w-full p-6 space-y-6  min-h-screen justify-center items-center">
      {/* Header */}
      <div className="bg-white p-6 text-center border-b w-[740px] rounded-lg">
        <h1 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
          Order Details – #ORD1234
        </h1>
    <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
        </p>

        {/* Order Overview */}



     <div className=" w-[full] mx-auto bg-white  rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-4 mt-6">
  <h2 className="font-urbanist font-semibold text-base leading-[160%] align-middle capitalize text-[#000000] text-left">Order Overview</h2>
  
<div className="flex items-center justify-between border-b pb-2">
  <div className="w-[280px] flex justify-between items-center gap-4">
    <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Order Status</span>
    <span className="bg-[#F68D2826] text-[#F68D2B] border-[0.5px] border-[#F68D2B33] text-sm font-medium px-3 py-1 rounded-sm">
      Pending
    </span>
  </div>
  <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">
    Awaiting vendor confirmation.
  </span>
</div>

<div className="flex flex-col gap-y-4 text-sm text-gray-700">
  <div className="flex justify-between border-b border-gray-100">
    <div className="w-[280px] flex justify-between items-center gap-4">
      <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Placed On</div>
      <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        March 10, 2025
      </div>
    </div>
    <div className="w-[300px] flex justify-between items-center gap-4">
      <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Expected Delivery</div>
      <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        March 10, 2025
      </div>
    </div>
  </div>

  <div className="flex justify-between mt-3 border-b border-gray-100 text-gray-700">
    <div className="w-[280px] flex justify-between items-center gap-4">
      <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Date Processed</div>
      <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        22nd February 2025
      </div>
    </div>
    <div className="w-[300px] flex justify-between items-center gap-4">
      <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Time Processed</div>
      <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        11:22pm
      </div>
    </div>
  </div>
</div>

</div>
        

        {/* Payment Details */}


<div className="w-full mx-auto bg-white rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-4 mt-6">
  <h2 className="font-urbanist font-semibold text-base leading-[160%] align-middle capitalize text-[#000000] text-left">
    Payment Details
  </h2>

  <div className="flex items-center justify-between border-b pb-2 ">
    <div className="w-[280px] flex justify-between items-center gap-4">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Payment Status</span>
      <span className=" flex items-center font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212] gap-2">
        Paid 
          <svg className="w-4 h-4 ml-1 text-white bg-green-600 rounded-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
      </span>
    </div>
    <div className="w-[300px] flex justify-between items-center gap-4">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Payment Method</span>
      <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        Card
      </span>
    </div>
  </div>

  <div className="flex justify-between border-b border-gray-100">
    <div className="w-[280px] flex justify-between items-center gap-4">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Transaction ID</span>
      <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        Trx-12345
      </span>
    </div>
    <div className="w-[300px] flex justify-between items-center gap-4">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Estimated Processing Time</span>
      <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        24 Hours
      </span>
    </div>
  </div>
</div>

        

        {/* Customer & Delivery Details */}
<div className="flex flex-row gap-6 w-full mt-8">
  {/* Customer Details */}
  <div className="w-[360px] bg-white rounded-lg border border-[#12121233] px-6 py-4 space-y-4">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] text-left">
      Customer Details
    </h2>

    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Name</span>
      <span className="font-inter font-medium text-sm leading-[160%] text-[#121212]">Adekunle Johnson</span>
    </div>

    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Phone No</span>
      <span className="font-inter font-medium text-sm leading-[160%] text-[#121212CC]">09029717250</span>
    </div>

    <div className="flex justify-between items-center">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Email</span>
      <span className="font-inter font-medium text-sm leading-[160%] text-[#121212]">Dhemmexroxy@Gmail.Com</span>
    </div>
  </div>

  {/* Delivery Details */}
  <div className="w-[360px] bg-white rounded-lg border border-[#12121233] px-6 py-4 space-y-4">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] text-left">
      Delivery Details
    </h2>

    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">🚛 Delivery Method</span>
      <span className="font-inter font-medium text-sm leading-[160%] text-[#121212]">Email</span>
    </div>

    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">📍 Tracking Number</span>
      <span className="font-inter font-medium text-sm leading-[160%] text-[#121212]">Mdd-4821X8Y72</span>
    </div>

    <div className="flex justify-between items-center">
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Status</span>
      <span className=" text-[#121212] text-sm font-medium px-3 py-1 rounded-sm">
        Delivered
      </span>
    </div>
  </div>
</div>



       
             {/* Action Buttons */}
<div className=" mx-auto overflow-hidden border border-gray-200 mt-8 mb-8 rounded-xl">
  <table className=" w-[740px] text-sm text-left text-gray-700">
    <thead>
      <tr className="bg-[#C2C3C580] text-[#121212] ">
        <th className="px-4 py-3 rounded-tl-xl">Product Name</th>
        <th className="px-4 py-3">Quantity</th>
        <th className="px-4 py-3">Price</th>
        <th className="px-4 py-3 rounded-tr-xl">Total Price</th>
      </tr>
    </thead>
    <tbody>
      <tr className="">
        <td className="px-4 py-4 flex items-center space-x-2">
          <span className="border border-gray-300 rounded-md px-2 py-1 text-xs text-gray-800">1</span>
          <span className="font-bold">Facebook Advertisement</span>
        </td>
        <td className="px-4 py-4 font-bold">1</td>
        <td className="px-4 py-4 text-gray-500">₦15,000</td>
        <td className="px-4 py-4 font-medium">₦15,000</td>
      </tr>
      <tr className="">
        <td className="px-4 py-4 font-bold">Total</td>
        <td className="px-4 py-4">-</td>
        <td className="px-4 py-4">-</td>
        <td className="px-4 py-4 font-bold text-gray-800">₦15,000</td>
      </tr>
    </tbody>
  </table>
</div>



{showCancelModal && (
  <CancelOrderModal
     onCancel={handleModalClose}
    onClose={() => setShowCancelModal(false)}
   
  />
)}


{showConfirm && (
  <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <Confirm
      orderId="ORD1234"
      customerName="Adekunle Johnson"
      deliveryDate="March 10, 2025"
      previousStatus="Pending"
      onCancel={() => setShowConfirm(false)}
      onConfirm={() => {
        // Handle confirmation logic here
        setShowConfirm(false);
      }}
      onClose={() => setShowConfirm(false)}
    />
  </div>
)}


        {/* Actions */}
       <div className="mt-6 flex justify-center items-center gap-6 w-full">
  {/* Cancel Order Button */}
  <button
    onClick={() => setShowCancelModal(true)}
    className="w-[150px] h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Cancel Order
  </button>

  {/* Confirm Order Button */}
  <button
    onClick={() => setShowConfirm(true)}
    className="w-[150px] h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] flex items-center justify-center gap-2"
  >
    <span className="font-urbanist font-semibold text-[14px] leading-none tracking-[0.02em] align-middle capitalize text-white whitespace-nowrap">
      Confirm Order
    </span>
  </button>
</div>

      </div>
    </div>
  );
};

export default OrderPending;

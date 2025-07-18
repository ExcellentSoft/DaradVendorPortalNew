import React, { useState } from "react";
import CancelOrderModal from "./cancelorder"; 

const OrderFailedNew = () => {
    const [showCancelModal, setShowCancelModal] = useState(false);
  const handleModalClose = () => {
    // do something like closing the modal
  };
  return (
     <div className="flex flex-col min-w-full p-8 space-y-6  min-h-screen">
      {/* Header */}
      <div className="bg-white p-6  border-b">
       <div className="text-center">
  <h2 className="text-[24px] text-[#000000] font-bold">
    Order Details – <span className="text-black">#ORD1234</span>
  </h2>
  <p className="text-[#121212CC] mt-1 mb-6 text-[14px]">
    Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
  </p>
</div>


        {/* Order Overview */}
        

          <div className="  w-[720px] mx-auto bg-white mt-4 rounded-lg border border-[#12121233] p-8 space-y-4">
  <h2 className="text-lg font-semibold text-gray-800">Order Overview</h2>
  
  <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Order Status</span>
  <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded inline-block">
                Failed
              </span>
               <span className="text-sm text-gray-600">Payment Status</span>
   <span className="text-green-600 font-bold">Paid ✅</span>
  </div>

  <div className="flex flex-col gap-y-4  text-sm text-gray-700 pt-2">
    <div className="flex justify-between border-b border-gray-100 pb-2">
    <div className="font-medium">Placed On</div>
    <div className="font-semibold text-gray-900">March 10, 2025</div>

    <div className="font-medium">Expected Delivery</div>
    <div className="font-semibold text-gray-900">March 10, 2025</div>
    </div>

 <div className="flex justify-between mt-3 border-b border-gray-100 pb-2 text-gray-700">
    <div className="font-medium">Date Processed</div>
    <div className="font-semibold text-gray-900">22nd February 2025</div>

    <div className="font-medium">Time Processed</div>
    <div className="font-semibold text-gray-900">11:22pm</div>
    </div>
  </div>
</div>

        {/* Payment Details */}
               <div className="  w-[720px] mx-auto bg-white mt-4 rounded-lg border border-[#12121233] p-8 space-y-4">
  <h2 className="text-lg font-semibold text-gray-800">Payment Details</h2>
  
  <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Transaction ID</span>
 <p className="text-[#121212] font-bold">Trx-12345</p>
    <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-bold text-black">Bank Transfer</p>
              </div>

  <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm text-[#121212CC]">Reasons for Failed Payment</p>
              <p className="font-semibold text-[#121212]">Insufficient funds, network error, system issue, etc.</p>
            </div>
</div>

        {/* Customer & Delivery Details */}
              <div className="flex flex-row gap-8 w-full mt-8">
 
   <div className="border rounded-lg   p-8 w-[400px] ">
    <h2 className="font-semibold text-lg mb-2 text-[#000000] mb-6 mt-3">Customer Details</h2>
    <div className="mb-6 border-b border-#1212121A flex justify-between ">
      <span className="text-[#121212CC]">Name</span>
      <span className="font-semibold text-[#121212]">Adekunle Johnson</span>
    </div>
    <div className="mb-6 border-b border-#1212121A flex justify-between">
      <span className="text-[#121212CC]">Phone No</span>
      <span className="font-semibold text-[#121212CC]">09029717250</span>
    </div>
    <div>
      <div className=" flex justify-between">
      <span className="text-[#121212CC]">Email</span>
      <span className="font-semibold text-[#121212]">Dhemmexroxy@Gmail.Com</span>
      </div>
    </div>
  </div>

 
  <div className="border rounded-lg  p-8 w-[450px]">
    <h2 className="font-semibold text-lg mb-2 text-[#000000] mb-6 mt-3">Delivery Details</h2>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]"> 🚛 Delivery Method</span>
      <span className="font-semibold text-[#121212]">Email</span>
    </div>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]">📍 Tracking Number</span>
      <span className="font-semibold text-[#121212]">Mdd-4821X8Y72</span>
    </div>
    <div className=" flex justify-between">
      <span className="text-[#121212CC]">Status:</span>
      <span className="font-semibold text-[#121212]">Delivered</span>
    </div>
  </div>
</div>

        {/* Product Table */}
     <div className=" mx-auto overflow-hidden border border-gray-200 mt-8 mb-8 rounded-xl">
  <table className=" w-[720px] text-sm text-left text-gray-700">
    <thead>
      <tr className="bg-[#C2C3C580] text-gray-700 ">
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







        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button   onClick={() => setShowCancelModal(true)} className=" border border-[#E6E7EA] hover:bg-gray-300 px-6 py-3 rounded-md text-sm font-medium text-gray-700">
            Cancel Order
          </button>
          <button className="bg-[#5604F6]  text-white px-8 py-3 rounded-lg text-sm font-medium">
            Notify Customer 
          </button>
        </div>


        {showCancelModal && (
  <CancelOrderModal
     onCancel={handleModalClose}
    onClose={() => setShowCancelModal(false)}
   
  />
)}
      </div>
      </div>
  
  );
};

export default OrderFailedNew;

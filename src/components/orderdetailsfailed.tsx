import React, { useState } from "react";

import Invoice from './invoicePreview';

export default function OrderDetails() {
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePrintInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <div className="flex flex-col min-w-full p-6 space-y-6  min-h-screen justify-center items-center bg-white rounded-lg">
      {/* Header */}
      <div className="bg-white p-6 text-center border-b w-[740px] ">
        <h1 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">Order Details – #ORD1234</h1>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Get a clear view of your order details! Track progress, take quick actions,
          and stay in <br />control—seamlessly.
        </p>
      </div>

      {/* Order Overview */}
     <div className="  w-[740px] mx-auto bg-white  rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-4">
  <h2 className="font-urbanist font-semibold text-base leading-[160%] align-middle capitalize text-[#000000]">Order Overview</h2>
  
  <div className="flex items-center justify-between border-b pb-2">
    <div className="w-[320px] flex justify-between items-center gap-4">
        <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Order Status</span>
    <span className="bg-[#ED04231A] text-[#ED0423] border-[0.5px] border-[#ED042326] text-sm font-medium px-3 py-1 rounded-sm  w-[104px] text-center">Failed</span>
    </div>
      <div className="mb-2 flex gap-20 items-center">
    <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Payment Status</span>
   <span className="flex items-center font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
  Completed
  <svg className="w-4 h-4 ml-1 text-white bg-green-600 rounded-full" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
</span>

  </div>
  </div>

  <div className="flex flex-col gap-y-4  text-sm text-gray-700">
    <div className="flex justify-between border-b border-gray-100">
      <div className="w-[320px] flex justify-between items-center gap-4">
    <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Placed On</div>
    <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">March 10, 2025</div>
    </div>
<div className="w-[300px] flex justify-between items-center gap-4">
    <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Expected Delivery</div>
    <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">March 10, 2025</div>
    </div>
    </div>

 <div className="flex justify-between mt-3 border-b border-gray-100 text-gray-700">
  <div className="w-[320px] flex justify-between items-center gap-4">
    <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Date Processed</div>
    <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">22nd February 2025</div>
    </div>
<div className="w-[300px] flex justify-between items-center gap-4">
    <div className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Time Processed</div>
    <div className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">11:22pm</div>
    </div>
    </div>
  </div>
</div>


      {/* Product Details */}
     <div className=" w-[740px] mx-auto bg-white  rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-3 gap-4">
  <h2 className="font-urbanist font-semibold text-base leading-[160%] align-middle capitalize text-[#000000]">Payment Details</h2>

  <div className=" flex gap-48 border-b border-#1212121A pb-3 ">
    
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Transaction I.D</span>
      <div className="flex gap-14">
      <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">Trx-12345</span>
    
    
      <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Payment Method</span>
      <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">Bank Transfer</span>
    </div>
  </div>

  <div className=" flex justify-between">
    <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">Reasons For Failed Payment</span>
    
    <span className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
      Insufficient Funds, Network Error, System Issue, Etc.
    </span>
  </div>
</div>

      {/* Main Info Section */}
<div className="flex flex-row gap-4 w-[740px] justify-between items-start mt-4">
  <div className="border rounded-lg px-6 py-2 border-[#12121233] flex-1">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] mb-4">Customer Details</h2>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Name</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">Adekunle Johnson</span>
    </div>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Phone No</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">09029717250</span>
    </div>
    <div className="flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Email</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">Dhemmexroxy@Gmail.Com</span>
    </div>
  </div>

  <div className="border rounded-lg px-6 py-2 border-[#12121233] flex-1">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] mb-4">Delivery Details</h2>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">🚛 Delivery Method:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">Email</span>
    </div>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">📍 Tracking Number:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">Mdd-4821X8Y72</span>
    </div>
    <div className="flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Status:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">Delivered</span>
    </div>
  </div>
</div>





      {/* Table */}
<div className=" mx-auto overflow-hidden border border-gray-200  rounded-xl">
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




 {/* Action Buttons */}
<div className="mt-6 flex justify-center items-center gap-6 w-[387px]">
  {/* Cancel Order Button */}
  <button
    className="w-full h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Cancel Order
  </button>

  {/* Notify Customer Button */}
  <button
    className="w-full h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] flex items-center justify-center gap-2"
  >
    <span className="font-urbanist font-semibold text-[14px] leading-none tracking-[0.02em] align-middle capitalize text-white whitespace-nowrap">
      Notify Customer
    </span>
  </button>
</div>

{/* Optional: Invoice modal remains as-is if needed */}
{showInvoice && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl relative">
      <button
        onClick={() => setShowInvoice(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
      >
        &times;
      </button>
      <Invoice
        orderId="ORD1234"
        customer={{
          name: "Adekunle Johnson",
          phone: "09029717250",
          email: "Dhemmexroxy@Gmail.Com",
        }}
        vendor={{
          name: "MyBusiness Ventures Ltd.",
          phone: "+2348000000000",
          website: "https://mybusiness.com",
        }}
        orderDate="March 10, 2025"
        paymentMethod="Bank Transfer"
        items={[
          {
            name: "Facebook Advertisement",
            quantity: 1,
            price: 15000,
          },
        ]}
      />
    </div>
  </div>
)}


    </div>
  );
}

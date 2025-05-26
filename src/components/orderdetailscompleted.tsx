import React, { useState } from "react";

import Invoice from './invoicePreview';

export default function OrderDetails() {
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePrintInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <div className="flex flex-col min-w-full p-8 space-y-6  min-h-screen">
      {/* Header */}
      <div className="bg-white p-6 text-center border-b">
        <h1 className="text-[24px] text-[#000000] font-bold">Order Details – #ORD1234</h1>
        <p className="text-[#121212CC] text-[14px] mt-1">
          Get a clear view of your order details! Track progress, take quick actions,
          and stay in control—seamlessly.
        </p>
      </div>

      {/* Order Overview */}
     <div className="  w-[740px] mx-auto bg-white  rounded-lg border border-[#12121233] p-8 space-y-4">
  <h2 className="text-lg font-semibold text-gray-800">Order Overview</h2>
  
  <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Order Status</span>
    <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 ">Completed</span>
    <span className="text-sm text-gray-600">The Order Has Been Fulfilled Successfully.</span>
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


      {/* Main Info Section */}
     <div className="flex flex-row gap-4 w-full">
 
   <div className="border rounded-lg ml-4  p-8 w-[360px] ">
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

 
  <div className="border rounded-lg  p-8 w-[360px]">
    <h2 className="font-semibold text-lg mb-2 text-[#000000] mb-6 mt-3">Delivery Details</h2>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]"> Delivery Method:</span>
      <span className="font-semibold text-[#121212]">Email</span>
    </div>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]">Tracking Number:</span>
      <span className="font-semibold text-[#121212]">Mdd-4821X8Y72</span>
    </div>
    <div className=" flex justify-between">
      <span className="text-[#121212CC]">Status:</span>
      <span className="font-semibold text-[#121212]">Delivered</span>
    </div>
  </div>
</div>


      {/* Product Details */}
     <div className=" rounded-lg p-8 border border-[#12121233]  max-w-[720px] ml-4 w-full ">
  <h2 className="font-bold text-[16px] text-gray-800 mb-4">Payment Details</h2>

  <div className="mb-2 flex gap-20 items-center mb-6">
    <span className="text-[#121212CC] mr-2">Payment Status</span>
    <span className="font-semibold text-black flex items-center">
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

  <div className=" flex gap-48 border-b border-#1212121A pb-3 mb-6 ">
    
      <span className="text-[#121212CC] text-[14px]">Transaction I.D</span>
      <div className="flex gap-14">
      <span className="font-semibold text-[14px] text-[#121212]">Trx-12345</span>
    
    
      <span className="text-[#121212CC] text-[14px]">Payment Method</span>
      <span className="font-semibold text-[14px] text-[#121212]">Bank Transfer</span>
    </div>
  </div>

  <div className="mt-2 flex justify-between">
    <span className="text-[#121212CC]">Reasons For Failed Payment</span>
    
    <span className="font-bold text-[16px] text-gray-800 block">
      Insufficient Funds, Network Error, System Issue, Etc.
    </span>
  </div>
</div>


      {/* Action Buttons */}
<div className=" mx-auto overflow-hidden border border-gray-200  rounded-xl">
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





<div className="mt-6 flex justify-center items-center gap-6">
    <button  onClick={handlePrintInvoice} className="px-4 py-4 border border-gray-300 rounded-md text-[16px] text-[#121212CC] font-bold hover:bg-gray-100">
      Print Invoice
    </button>
    <button className="flex items-center px-4 py-4 bg-[#5604F6] text-white text-[14px] font-bold rounded-md hover:bg-purple-700">
      Reorder For Customer
 <svg className="w-4 h-4 ml-4 text-white border border-white " fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
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

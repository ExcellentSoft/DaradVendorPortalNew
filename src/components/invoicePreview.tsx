import React from 'react';

interface InvoicePreviewProps {
  orderId: string;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  vendor: {
    name: string;
    phone: string;
    website: string;
  };
  orderDate: string;
  paymentMethod: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;

}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  orderId,
  customer,
  vendor,
  orderDate,
  paymentMethod,
 

}) => {
 

  return (
     <div className="flex flex-col min-w-full p-6 space-y-6  min-h-screen justify-center items-center bg-white rounded-lg">
      {/* Title */}
      <div className="bg-white p-6 text-center border-b w-[740px] ">
        <h1 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">Invoice Preview – Order #{orderId}</h1>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Get a clear view of your order details! Track progress, take quick actions, and stay in <br />control—seamlessly.
        </p>
      </div>

      {/* Info Section */}

<div className="flex flex-row gap-4 w-[740px] justify-between items-start mt-4">
  {/* Customer Details */}
  <div className="border rounded-lg px-6 py-2 border-[#12121233] flex-1">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] mb-4">Customer Details</h2>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Name</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{customer.name}</span>
    </div>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Phone No</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{customer.phone}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Email</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{customer.email}</span>
    </div>
  </div>

  {/* Vendor (as Delivery) Details */}
  <div className="border rounded-lg px-6 py-2 border-[#12121233] flex-1">
    <h2 className="font-urbanist font-semibold text-base leading-[160%] capitalize text-[#000000] mb-4">Vendor Details</h2>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Name:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{vendor.name}</span>
    </div>
    <div className="mb-6 border-b border-[#1212121A] flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Phone Number:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{vendor.phone}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-inter font-normal text-sm leading-[160%] text-[#121212CC]">Website:</span>
      <span className="font-medium text-sm leading-[160%] text-right capitalize font-inter text-[#121212]">{vendor.website}</span>
    </div>
  </div>
</div>





     

      {/* Order Details */}
<div className="w-full mx-auto bg-white rounded-lg border border-[#12121233] px-6 space-y-4 mt-2 py-4">
  <h3 className="font-urbanist font-semibold text-base leading-[160%] text-left capitalize text-[#000000]">
    Order Overview
  </h3>

  <div className="grid grid-cols-2 gap-4 text-sm items-center">
    {/* Order Date */}
    <div className="w-[280px] flex justify-between items-center gap-4">
      <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">
        Order Date
      </p>
      <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        {orderDate}
      </p>
    </div>

    {/* Payment Method */}
    <div className="w-[280px] flex justify-between items-center gap-4">
      <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">
        Payment
      </p>
      <p className="font-medium text-sm leading-[160%] text-right align-middle capitalize font-inter text-[#121212]">
        {paymentMethod}
      </p>
    </div>
  </div>
</div>


      {/* Product Table */}
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

      {/* Buttons */}
<div className="mt-6 flex justify-center items-center gap-6 w-[387px]">
  {/* Download PDF Button */}
  <button
    className="w-full h-[41px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-urbanist font-semibold text-[#121212CC] capitalize hover:bg-gray-100 border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
  >
    Download PDF
  </button>

  {/* Reorder For Customer Button */}
  <button 
  className="w-full h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] flex items-center justify-center gap-2">
    <span className="font-urbanist font-semibold text-[14px] leading-none tracking-[0.02em] align-middle capitalize text-white whitespace-nowrap">
      Print Invoice
    </span>
    <svg className="w-4 h-4 text-white border border-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>

    </div>
  );
};

export default InvoicePreview;

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
   <div className="w-full h-screen overflow-auto  p-4">
    <div className="w-full max-w-[800px] mx-auto bg-white rounded-xl p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-[#000000]">Invoice Preview – Order #{orderId}</h2>
        <p className="text-sm text-[#121212CC] mt-1">
          Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
        </p>
      </div>

      {/* Info Section */}

     <div className="flex flex-row gap-4 w-full mb-8">
 
   <div className="border rounded-lg ml-4  p-8 w-[450px] ">
    <h2 className="font-semibold text-lg mb-2 text-[#000000] mb-6 mt-3">Customer Information</h2>
    <div className="mb-6 border-b border-#1212121A flex justify-between ">
      <span className="text-[#121212CC]">Name</span>
      <span className="font-semibold text-[#121212]">{customer.name}</span>
    </div>
    <div className="mb-6 border-b border-#1212121A flex justify-between">
      <span className="text-[#121212CC]">Phone No</span>
      <span className="font-semibold text-[#121212CC]">{customer.phone}</span>
    </div>
    <div>
      <div className=" flex justify-between">
      <span className="text-[#121212CC]">Email</span>
      <span className="font-semibold text-[#121212]">{customer.email}</span>
      </div>
    </div>
  </div>

 
  <div className="border rounded-lg  p-8 w-[450px]">
    <h2 className="font-semibold text-lg mb-2 text-[#000000] mb-6 mt-3">Vendor Information</h2>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]"> Name:</span>
      <span className="font-semibold text-[#121212]">{vendor.name}</span>
    </div>
    <div className="mb-6 border-b border-#1212121A  flex justify-between">
      <span className="text-[#121212CC]">Phone Number:</span>
      <span className="font-semibold text-[#121212]">{vendor.phone}</span>
    </div>
    <div className=" flex justify-between">
      <span className="text-[#121212CC]">Website:</span>
      <span className="font-semibold text-[#121212]">{vendor.website}</span>
    </div>
  </div>
</div>




     

      {/* Order Details */}
      <div className="border p-4 rounded-md mb-6">
        <h4 className="font-bold mb-2 text-[16px] text-[#000000]">Order Details</h4>
        <div className='flex justify-between'>
        <p className="text-[16px]  text-[#121212CC]">Order Date </p>
                <p className="text-[16px] font-semibold text-[#121212]"> {orderDate}</p>
        <p className="text-[16px]  text-[#121212CC]">Payment</p>
        <p className="text-[16px] font-semibold text-[#121212]">  {paymentMethod} </p>
      </div>
      </div>

      {/* Product Table */}
     <div className=" mx-auto overflow-hidden border border-gray-200 mb-8  rounded-xl">
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

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          
          className="border border-gray-300 text-gray-700 bg-white px-8 py-2 rounded-md hover:bg-gray-100"
        >
          Download PDF
        </button>
       
<div className="mt-6 flex justify-center items-center gap-6"></div>
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
    </div>
    </div>
  );
};

export default InvoicePreview;

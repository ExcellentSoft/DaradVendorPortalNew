import React from 'react';

const OrderFailedNew = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center">
          Order Details – <span className="text-black">#ORD1234</span>
        </h1>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
        </p>

        {/* Order Overview */}
        <section className="border border-gray-200 rounded-md p-4 mb-6">
          <h2 className="font-medium mb-3">Order Overview</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Order Status</p>
              <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded inline-block">
                Failed
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Payment Status</p>
              <span className="text-green-600 font-bold">Paid ✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Placed On</p>
              <p className="font-medium">March 10, 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Expected Delivery</p>
              <p className="font-medium">March 10, 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date Processed</p>
              <p className="font-medium">22nd February 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Time Processed</p>
              <p className="font-medium">11:22pm</p>
            </div>
          </div>
        </section>

        {/* Payment Details */}
        <section className="border border-gray-200 rounded-md p-4 mb-6">
          <h2 className="font-medium mb-3">Payment Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Transaction ID</p>
              <p className="font-medium">Trx-12345</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-medium">Bank Transfer</p>
            </div>
          </div>
          <p className="text-sm text-red-600 mt-3">
            Reasons For Failed Payment: Insufficient Funds, Network Error, System Issue, etc.
          </p>
        </section>

        {/* Customer & Delivery Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-medium mb-2">Customer Details</h3>
            <p><span className="font-semibold">Name:</span> Adekunle Johnson</p>
            <p><span className="font-semibold">Phone No:</span> 0902917250</p>
            <p><span className="font-semibold">Email:</span> Dhemmexroxy@Gmail.Com</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-medium mb-2">Delivery Details</h3>
            <p><span className="font-semibold">Delivery Method:</span> Email</p>
            <p><span className="font-semibold">Tracking Number:</span> Mdd-4B21X8Y72</p>
            <p><span className="font-semibold">Status:</span> Delivered</p>
          </div>
        </div>

        {/* Product Table */}
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-4 py-2 border-b">Product Name</th>
                <th className="text-left px-4 py-2 border-b">Quantity</th>
                <th className="text-left px-4 py-2 border-b">Price</th>
                <th className="text-left px-4 py-2 border-b">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Facebook Advertisement</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">₦15,000</td>
                <td className="px-4 py-2">₦15,000</td>
              </tr>
              <tr className="font-semibold bg-gray-50 border-t">
                <td className="px-4 py-2" colSpan={3}>Total</td>
                <td className="px-4 py-2">₦15,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium">
            Cancel Order
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
            Notify Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFailedNew;

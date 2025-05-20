import React from "react";

const OrderPending = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Order Details – <span className="text-indigo-600 font-bold">#ORD1234</span>
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
        </p>

        {/* Order Overview */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-3">Order Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Order Status</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-medium">
                Pending
              </span>
              <p className="text-sm text-gray-500 mt-1">Awaiting Vendor Confirmation</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <p className="font-medium">11:22 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-3">Payment Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Payment Status</p>
              <p className="text-green-600 font-bold">Paid ✅</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-medium">Card</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Transaction ID</p>
              <p className="font-medium">Trx-12345</p>
              <p className="text-sm text-gray-500">Estimated Processing Time: 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Customer & Delivery Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Customer Details</h4>
            <p><span className="font-medium">Name:</span> Adekunle Johnson</p>
            <p><span className="font-medium">Phone No:</span> 0902917250</p>
            <p><span className="font-medium">Email:</span> Dhemmexroxy@Gmail.Com</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Delivery Details</h4>
            <p><span className="font-medium">Delivery Method:</span> Email</p>
            <p><span className="font-medium">Tracking Number:</span> Mdd-4B21X8Y72</p>
            <p><span className="font-medium">Status:</span> Delivered</p>
          </div>
        </div>

        {/* Product Summary */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Order Summary</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Facebook Advertisement</td>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">₦15,000</td>
                  <td className="py-2 px-4 border-b">₦15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-700">
            Cancel Order
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPending;

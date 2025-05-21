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
  onDownloadPdf: () => void;
  onPrint: () => void;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  orderId,
  customer,
  vendor,
  orderDate,
  paymentMethod,
  items,
  onDownloadPdf,
  onPrint,
}) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold">Invoice Preview – Order #{orderId}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Get a clear view of your order details! Track progress, take quick actions, and stay in control—seamlessly.
        </p>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded-md">
          <h4 className="font-medium mb-2 text-sm text-gray-700">Customer Information</h4>
          <p className="text-sm"><strong>Name:</strong> {customer.name}</p>
          <p className="text-sm"><strong>Phone No:</strong> {customer.phone}</p>
          <p className="text-sm"><strong>Email:</strong> {customer.email}</p>
        </div>

        <div className="border p-4 rounded-md">
          <h4 className="font-medium mb-2 text-sm text-gray-700">Vendor Information</h4>
          <p className="text-sm"><strong>Name:</strong> {vendor.name}</p>
          <p className="text-sm"><strong>Phone No:</strong> {vendor.phone}</p>
          <p className="text-sm"><strong>Website:</strong> {vendor.website}</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="border p-4 rounded-md mb-6">
        <h4 className="font-medium mb-2 text-sm text-gray-700">Order Details</h4>
        <p className="text-sm"><strong>Order Date:</strong> {orderDate}</p>
        <p className="text-sm"><strong>Payment:</strong> {paymentMethod}</p>
      </div>

      {/* Product Table */}
      <div className="border rounded-md overflow-hidden mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-600">Product Name</th>
              <th className="px-4 py-2 font-medium text-gray-600">Quantity</th>
              <th className="px-4 py-2 font-medium text-gray-600">Price</th>
              <th className="px-4 py-2 font-medium text-gray-600">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">₦{item.price.toLocaleString()}</td>
                <td className="px-4 py-2">₦{(item.price * item.quantity).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="border-t font-semibold">
              <td className="px-4 py-2" colSpan={3}>Total</td>
              <td className="px-4 py-2">₦{totalPrice.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onDownloadPdf}
          className="border border-gray-300 text-gray-700 bg-white px-4 py-2 rounded-md hover:bg-gray-100"
        >
          Download PDF
        </button>
        <button
          onClick={onPrint}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoicePreview;

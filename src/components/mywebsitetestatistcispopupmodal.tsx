// components/ExportDataModal.tsx
import React, { useState } from 'react';

// Close Icon for the modal (reusable)
const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ExportDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: () => void;
}

const ExportDataModal: React.FC<ExportDataModalProps> = ({ isOpen, onClose, onExport }) => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleExportAndShowDetails = () => {
    onExport();
    setShowCustomerDetails(true);
  };

  // Define types and sample data for Order History
  interface Order {
    id: number;
    orderId: string;
    dateTime: string;
    amount: string; // Using string for amount with currency symbol
    status: 'Completed' | 'Failed';
  }

  const orders: Order[] = [
    { id: 1, orderId: '#Ord-1023', dateTime: '22 Feb 2025', amount: '₦15,000', status: 'Completed' },
    { id: 2, orderId: '#Ord-1024', dateTime: '22 Feb 2025', amount: '₦5,500', status: 'Completed' },
    { id: 3, orderId: '#Ord-1025', dateTime: '22 Feb 2025', amount: '₦150,000', status: 'Failed' },
  ];

  // Component for Order History content
  const OrderHistoryContent: React.FC = () => {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-[420px] mx-auto flex justify-end mb-4">
          <a href="#" className="font-inter font-medium text-sm text-[#5604F6] hover:underline">
            View All Orders History
          </a>
        </div>

        <div className="rounded-[24px] border border-[#1E0156]/10 overflow-hidden bg-white">
          <table className="min-w-full table-auto divide-y divide-[#E6E7EA]">
            <thead className="bg-[#C2C3C5]/50 h-[49px] border-b border-[#E6E7EA]">
              <tr>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm leading-none tracking-[0.01em] capitalize text-[#121212] whitespace-nowrap">
                  Order I.D
                </th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm leading-none tracking-[0.01em] capitalize text-[#121212] whitespace-nowrap">
                  Date & Time
                </th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm leading-none tracking-[0.01em] capitalize text-[#121212] whitespace-nowrap">
                  Amount
                </th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm leading-none tracking-[0.01em] capitalize text-[#121212] whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E6E7EA]">
              {orders.map((order) => (
                <tr key={order.id} className="h-[84px] border-b border-[#D2D1D6]">
                  <td className="pt-[10px] pb-[10px] px-4 whitespace-nowrap text-sm font-inter font-medium text-[#121212] leading-[100%] tracking-normal capitalize">
                    <span className="inline-flex items-center justify-center w-[24px] h-[24px] mr-2 rounded-[6px] bg-white border border-[#D2D1D6] text-xs font-medium text-gray-700">
                      {order.id}
                    </span>
                    {order.orderId}
                  </td>
                  <td className="pt-[10px] pb-[10px] px-4 whitespace-nowrap text-sm font-inter font-normal text-[#121212]/70 leading-[100%] tracking-normal text-center">
                    {order.dateTime}
                  </td>
                  <td className="pt-[10px] pb-[10px] px-4 whitespace-nowrap text-sm font-inter font-medium text-[#121212] leading-[100%] tracking-normal capitalize">
                    {order.amount}
                  </td>
                  <td className="pt-[10px] pb-[10px] px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center justify-center w-[104px] h-[29px] rounded-[4px] py-[6px] px-[15px] gap-[12px] border text-xs font-medium
                      ${order.status === 'Completed'
                        ? 'bg-[#1D9E34]/10 border-[#1D9E34]/15 text-[#1D9E34]'
                        : 'bg-[#ED0423]/10 border-[#ED0423]/15 text-[#ED0423]'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };


  const CustomerDetailsView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState<'profile' | 'orderHistory' | 'additionalNotes'>('profile');

    // Define base and active/inactive styles for tabs
    const baseTabClasses = "h-[37px] p-[10px] whitespace-nowrap font-urbanist text-[14px] leading-[100%] tracking-normal capitalize";
    const selectedTabClasses = "font-semibold text-[#5604F6] border-b-[1px] border-[#5604F6]";
    const unselectedTabClasses = "font-medium text-black hover:text-gray-700";

    return (
      <div className="absolute top-[50px] left-[390px] bg-white w-[500px] px-8 py-[64px] rounded-[12px] flex flex-col items-center text-center">
        {/* Close Button for Customer Details Modal */}
        <button
          className="absolute top-[21px] right-[21px] p-1 rounded-full bg-[#E5E5E5] hover:bg-gray-300 transition-colors duration-200"
          onClick={() => {
            setShowCustomerDetails(false);
            onClose();
          }}
        >
          <CloseIcon className="h-4 w-4 text-gray-600" />
        </button>

        {/* Title Div (h2) */}
        <h2 className="h-[65px] pt-[24px] pr-[40px] pb-[12px] pl-[40px] whitespace-nowrap
                   font-urbanist font-semibold text-[24px] leading-[100%] tracking-normal text-black text-center capitalize mt-8 mb-6">
          Customer Details - Temitope Soremekun
        </h2>

        {/* CONDITIONAL TABS CONTAINER DIV - Renders 2 or 3 tabs based on activeTab */}
        {activeTab === 'profile' ? (
          // Two Tabs Layout (Profile, Order History)
          <div className="flex justify-center w-[302px] h-[53px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[32px] mb-8
                      border-b-[1px] border-[#121212]/10">
            {/* Profile Information Tab Button */}
            <button
              className={`w-[135px] ${baseTabClasses} ${activeTab === 'profile' ? selectedTabClasses : unselectedTabClasses}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </button>
            {/* Order History Tab Button */}
            <button
              className={`w-[103px] ${baseTabClasses} ${activeTab === 'orderHistory' ? selectedTabClasses : unselectedTabClasses}`}
              onClick={() => setActiveTab('orderHistory')}
            >
              Order History
            </button>
          </div>
        ) : (
          // Three Tabs Layout (Profile, Order History, Additional Notes)
          <div className="flex justify-center w-[420px] h-[53px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-x-4 mb-8
                      border-b-[1px] border-[#121212]/10 mx-auto">
            {/* Profile Information Tab Button (width adjusted for 3 tabs) */}
            <button
              className={`w-[134px] ${baseTabClasses} ${activeTab === 'profile' ? selectedTabClasses : unselectedTabClasses}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </button>
            {/* Order History Tab Button (width adjusted for 3 tabs) */}
            <button
              className={`w-[102px] ${baseTabClasses} ${activeTab === 'orderHistory' ? selectedTabClasses : unselectedTabClasses}`}
              onClick={() => setActiveTab('orderHistory')}
            >
              Order History
            </button>
            {/* Additional Notes Tab Button */}
            <button
              className={`w-[120px] ${baseTabClasses} ${activeTab === 'additionalNotes' ? selectedTabClasses : unselectedTabClasses}`}
              onClick={() => setActiveTab('additionalNotes')}
            >
              Additional Notes
            </button>
          </div>
        )}

        {/* Wrapper div for conditional content - width remains 420px */}
        {/* New wrapper div for Edit button, only for Profile tab */}
        {activeTab === 'profile' && (
          <div className="w-[420px] mx-auto flex justify-end">
            <button className="w-[157px] h-[44px] rounded-[8px] bg-white
                               font-urbanist font-semibold text-[16px] leading-[24px] tracking-[0.02em] capitalize text-[#5604F6] text-right">
              Edit
            </button>
          </div>
        )}

        {/* Conditional Tab Content Area div width remains 420px and centered */}
        <div className="w-[420px] mx-auto">
          {activeTab === 'profile' && (
            <div className="flex items-start gap-6 w-full">
              {/* Avatar Placeholder Div */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-200"></div>

              {/* Form Fields Wrapper Div */}
              <div className="flex-grow flex flex-col gap-y-5 text-left items-start">
                {/* Full Name Field Div */}
                <div className="w-full">
                  <label className="block font-inter font-medium text-sm leading-none tracking-normal capitalize text-[#101928] mb-2">Full Name</label>
                  <input
                    type="text"
                    value="Tunde Balogun"
                    readOnly
                    className="w-full h-[44px] py-[12px] px-[16px] rounded-[6px] border border-[#1E0156]/50 bg-white font-inter text-base text-gray-800
                               focus:outline-none placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:leading-[145%] placeholder:tracking-normal placeholder:text-[#121212]/80"
                  />
                </div>

                {/* Email Field Div */}
                <div className="w-full">
                  <label className="block font-inter font-medium text-sm leading-none tracking-normal capitalize text-[#101928] mb-2">Email</label>
                  <input
                    type="email"
                    value="tunde@example.com"
                    readOnly
                    className="w-full h-[44px] py-[12px] px-[16px] rounded-[6px] border border-[#1E0156]/50 bg-white font-inter text-base text-gray-800
                               focus:outline-none placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:leading-[145%] placeholder:tracking-normal placeholder:text-[#121212]/80"
                  />
                </div>

                {/* Phone Field Div */}
                <div className="w-full mb-8">
                  <label className="block font-inter font-medium text-sm leading-none tracking-normal capitalize text-[#101928] mb-2">Phone</label>
                  <input
                    type="tel"
                    value="+2348012345678"
                    readOnly
                    className="w-full h-[44px] py-[12px] px-[16px] rounded-[6px] border border-[#1E0156]/50 bg-white font-inter text-base text-gray-800
                               focus:outline-none placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:leading-[145%] placeholder:tracking-normal placeholder:text-[#121212]/80"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orderHistory' && <OrderHistoryContent />}

          {activeTab === 'additionalNotes' && (
            <div className="text-left text-gray-600">
              <p className="font-urbanist text-lg font-semibold">Additional Notes Content will go here.</p>
              <p className="font-inter text-sm mt-2">Space for customer-specific notes.</p>
            </div>
          )}
        </div>


        {/* EDITED: Bottom Buttons Container Div - Centered horizontally */}
        <div className="flex space-x-4 w-[316px] mx-auto justify-end mt-6">
          <button
            className="w-[146px] h-[44px] rounded-[8px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]
                       bg-white border border-[#E6E7EA] shadow-[0px_1px_2px_0px_rgba(5,32,81,0.05)]
                       font-urbanist font-semibold text-[16px] leading-[24px] tracking-normal capitalize text-[#121212]/80
                       hover:bg-gray-50 transition-colors duration-200"
            onClick={() => {
              setShowCustomerDetails(false);
              onClose();
            }}
          >
            Export data
          </button>

          <button
            className="w-[146px] h-[41px] rounded-[8px] pt-[12px] pr-[20px] pb-[12px] pl-[20px]
                       bg-[#5604F6]
                       font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize text-white
                       hover:bg-[#4a03d0] transition-colors duration-200"
            onClick={() => alert('Fund Wallet Clicked!')}
          >
            Fund Wallet
          </button>
        </div>
      </div>
    );
  };

  return (
    // Modal Overlay
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      {!showCustomerDetails ? (
        // Export Customer Data View
        <div className="absolute top-[275px] left-[390px] bg-white w-[500px] p-8 rounded-[12px] flex flex-col items-center text-center">
          {/* Close Button */}
          <button
            className="absolute top-[21px] right-[21px] p-1 rounded-full bg-[#E5E5E5] hover:bg-gray-300 transition-colors duration-200"
            onClick={onClose}
          >
            <CloseIcon className="h-4 w-4 text-gray-600" />
          </button>

          {/* Wrapper Div for Title/Description and Buttons */}
          <div className="flex flex-col gap-y-2 w-full">
            {/* Title and Description - Inner gap is 10px */}
            <div className="w-full h-[119px] pt-[24px] pb-[12px] flex flex-col items-center gap-y-[10px]">
              {/* Title Text */}
              <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] tracking-normal text-black capitalize">
                Export Customer Data
              </h2>
              {/* Subtitle Text */}
              <p className="font-inter font-normal text-[14px] leading-[160%] tracking-normal text-[#121212]/80 text-center">
                Do you want to export the current customer list as a CSV/PDF
                <br />
                file?
              </p>
            </div>

            {/* Buttons Container */}
            <div className="flex space-x-4 w-full px-8 mb-4 justify-center">
              {/* Cancel Button - Updated Layout, Color, Border, and Shadow */}
              <button
                className="w-[157px] h-[44px] rounded-[8px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]
                         bg-white border border-[#E6E7EA] shadow-[0px_1px_2px_0px_rgba(5,32,81,0.05)]
                         font-urbanist font-semibold text-[16px] leading-[24px] tracking-normal capitalize text-[#121212]/80
                         hover:bg-gray-50 transition-colors duration-200"
                onClick={onClose}
              >
                Cancel
              </button>
              {/* Yes, Export Button - Updated Layout and Background Color */}
              <button
                className="w-[157px] h-[41px] rounded-[8px] pt-[12px] pr-[20px] pb-[12px] pl-[20px]
                         bg-[#5604F6]
                         font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize text-white
                         hover:bg-[#4a03d0] transition-colors duration-200"
                onClick={handleExportAndShowDetails}
              >
                Yes, Export
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Customer Details View (Shown when showCustomerDetails is true)
        <CustomerDetailsView onClose={onClose} />
      )}
    </div>
  );
};

export default ExportDataModal;

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


 


  // Define types and sample data for Order History
  interface Order {
    id: number;
    orderId: string;
    dateTime: string;
    amount: string;
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




 

}


export default ExportDataModal;


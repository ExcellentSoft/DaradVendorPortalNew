import React, { FC } from 'react';
import { X } from 'lucide-react';

interface LogTypeDetailsProps {
  logTypeName: string;
  dateCreated: string;
  pricePerUnit: string;
  feesDeducted: string;
  onClose?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const LogTypeDetails: FC<LogTypeDetailsProps> = ({
  logTypeName,
  dateCreated,
  pricePerUnit,
  feesDeducted,
  onClose,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-[375px] max-w-md mx-auto mt-[70px] rounded-2xl  p-6 sm:py-8 px-6 font-sans relative bg-white">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="text-center border-b border-[#1212121A] pt-6 pb-4">
        <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
          Log Type Details
        </h2>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Review and manage the details of your log type.
        </p>
      </div>

      {/* Details Section */}
<div className="space-y-4 mt-4 border border-[#1212121A] rounded-2xl py-2 px-4 w-full">
  {logTypeName && (
    <div className="flex justify-between items-center py-2 border-b border-[#E4E4E7]">
      <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">
        Log Type Name
      </span>
      <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">
        {logTypeName}
      </span>
    </div>
  )}

  {dateCreated && (
    <div className="flex justify-between items-center py-2 border-b border-[#E4E4E7]">
      <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">
        Date Created
      </span>
      <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">
        {dateCreated}
      </span>
    </div>
  )}

  {pricePerUnit && (
    <div className="flex justify-between items-center py-2 border-b border-[#E4E4E7]">
      <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">
        Price Per Unit
      </span>
      <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">
        {pricePerUnit}
      </span>
    </div>
  )}

  {feesDeducted && (
    <div className="flex justify-between items-center py-2">
      <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">
        Fees Deducted
      </span>
      <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">
        {feesDeducted}
      </span>
    </div>
  )}
</div>


      {/* Action Buttons */}
 <div className="flex flex-col sm:flex-row justify-between gap-4 mt-20">
        {onEdit && (
          <button
            onClick={onEdit}
            className="w-full sm:w-[48%] h-[51px] rounded-lg bg-white border border-[#E6E7EA] text-[#121212CC] text-center font-semibold font-[Urbanist] hover:bg-gray-50"
          >
            Edit Log Type
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="w-full sm:w-[48%] h-[51px] rounded-lg bg-[#5604F6] text-white text-base font-semibold font-[Urbanist] hover:bg-[#4702d0] shadow-[0px_1px_2px_0px_#0520510D]"
          >
            Delete Log Type
          </button>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LogTypeDetails
        logTypeName="Social Media"
        dateCreated="Feb 15, 2025"
        pricePerUnit="₦10,000"
        feesDeducted="₦500"
        onClose={() => console.log('Close button clicked')}
        onEdit={() => console.log('Edit button clicked')}
        onDelete={() => console.log('Delete button clicked')}
      />
    </div>
  );
};

export default App;

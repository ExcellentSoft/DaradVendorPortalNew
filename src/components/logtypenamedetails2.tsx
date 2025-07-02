import React from 'react';
import { X } from 'lucide-react';

interface LogTypeDetailsProps {
  logTypeName?: string;
  dateCreated: string;
  pricePerUnit?: string;
  feesDeducted: string;
  logName?: string;
  dateUploaded?: string;
  availableCount?: number;
  onClose?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const LogTypeDetails: React.FC<LogTypeDetailsProps> = ({
  logTypeName,
  dateCreated,
  pricePerUnit,
  feesDeducted,
  logName,
  dateUploaded,
  availableCount,
  onClose,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-[375px] max-w-md mx-auto mt-[70px] rounded-2xl sm:py-8 px-6 font-sans relative bg-white">
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

<div className='mt-4'>
        {/* Date Created (always present) */}
        <div className="flex justify-between items-left py-2">
            <div className='flex items-center gap-3'>
          <span className="text-sm font-normal leading-none align-middle font-inter text-[#12121299]">Date Created</span>
          <span className="text-sm font-medium leading-none text-right align-middle font-inter text-[#121212]">{dateCreated}</span>
          </div>
          <div className="flex items-center gap-2">
            {availableCount !== undefined && (
              <>
                <span className="text-[#269B8F] text-xs font-semibold font-inter">Available</span>
                <span className="bg-[#1D9E34] text-white text-xs font-bold px-2 py-1 rounded-md">
                  {availableCount}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Fees Deducted (always present) */}
        <div className="flex justify-between items-center py-2">
         <span
  className="text-sm font-normal leading-none align-middle font-inter text-[#000000]"
  style={{ letterSpacing: '2%' }}
>
  Fees Deducted
</span>
          <span className="text-sm font-medium leading-none text-right align-middle font-inter text-[#121212CC]">{feesDeducted}</span>
        </div>
</div>

      {/* Details */}
      <div className="space-y-4 mt-4 border border-[#1212121A] rounded-2xl py-2 px-4 w-full">
        {logTypeName && (
          <div className="flex justify-between items-center py-2 border-b border-[#E4E4E7]">
            <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">Log Type Name</span>
            <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">{logTypeName}</span>
          </div>
        )}

        {logName && (
          <div className="flex justify-between items-center py-2 border-b border-[#E4E4E7]">
            <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">Log Name</span>
            <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">{logName}</span>
          </div>
        )}

        {dateUploaded && (
          <div className="flex justify-between items-center py-2 ">
            <span className="text-sm font-normal leading-none align-middle font-inter text-[#000000]">Date Uploaded</span>
            <span className="text-sm font-medium text-[#121212CC] text-right align-middle font-inter leading-none">{dateUploaded}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-50">
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

// Sample usage
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LogTypeDetails
        dateCreated="Feb 15, 2025"
        feesDeducted="₦500"
        logTypeName="Social Media"
        logName="TikTok Engagement Log"
        dateUploaded="Feb 15, 2025"
        availableCount={45}
        onClose={() => console.log('Close button clicked')}
        onEdit={() => console.log('Edit button clicked')}
        onDelete={() => console.log('Delete button clicked')}
      />
    </div>
  );
};

export default App;

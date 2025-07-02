import React from 'react';

// ConfirmModal component (Interface Only)
export default function ConfirmModal() {
  // Dummy interface modal (no functionality or props)
  return (
    <div className="fixed inset-0 bg-[#2E02341A] bg-opacity-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 z-50 font-inter">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative transition-all duration-300 h-[240px]">
        
        {/* Dummy Close Button (X icon) */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="font-urbanist font-semibold text-2xl leading-[100%] tracking-normal text-center capitalize text-[#000000] mb-2 mt-4">
          Confirmation Modal 
        </h2>

        {/* Message */}
        <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-center text-[#121212CC] mb-8">
          Are you sure you want to delete this log?
        </p>

        {/* Action Buttons (non-functional) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            className="w-[157px] h-[41px] rounded-lg px-5 py-3 bg-[#FFFFFF] text-[#121212CC] text-base font-medium flex items-center justify-center border border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D]"
          >
            Cancel
          </button>
        <button
  type="button"
  className="w-[157px] h-[41px] rounded-lg px-5 py-3 bg-[#5604F6] text-white text-base font-medium flex items-center justify-center"
>
   Confirm Delete
</button>

        </div>
      </div>
    </div>
  );
}

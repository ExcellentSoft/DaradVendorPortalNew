// components/WalletModal.tsx

import React from "react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-md shadow-xl w-full max-w-[400px] p-6 h-[240px] text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] tracking-[0] text-center capitalize text-black mb-2">
          Welcome To Your Wallet <span role="img" aria-label="party">🎉</span>
        </h2>

        <p className="font-inter font-normal text-[14px] leading-[160%] tracking-[0] text-center text-[#121212CC] mb-6">
          Here, you can manage funds, make withdrawals,
          <br />
          and track transactions seamlessly.
        </p>

        <button
          onClick={onClose}
          className="bg-[#5604F6] font-inter font-normal text-[14px] leading-[160%] tracking-[0] text-center text-[#FFFFFF] px-12 py-2 rounded-lg"
        >
          Got It
        </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;

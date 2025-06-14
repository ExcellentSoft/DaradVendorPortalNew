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
      <div className="bg-white rounded-md shadow-xl w-full max-w-[400px] p-6 h-[200px] text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl  text-[#000000] font-bold mb-2">
          Welcome To Your Wallet <span role="img" aria-label="party">🎉</span>
        </h2>

        <p className="text-gray-600 mb-6">
          Here, you can manage funds, make withdrawals,
          <br />
          and track transactions seamlessly.
        </p>

        <button
          onClick={onClose}
          className="bg-[#5604F6]  text-white font-medium px-12 py-2 rounded-lg"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default WalletModal;

import React, { useState } from 'react';
import ExportDataModal from './editcustomer'; 

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: () => void;  
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  if (!isOpen) return null;

 
  const handleExportClick = () => {
 
    
  
    setIsExportModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-md shadow-xl w-full max-w-[400px] p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>

          <h2 className="text-xl text-[#000000] font-bold mb-4">
            Export Customer Data
          </h2>

          <p className="text-gray-600 mb-6">
            Do you want to export the current customer list as a CSV/PDF file?
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              onClick={handleExportClick}
              className="bg-[#5604F6] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#4503cc]"
            >
              Yes, Export
            </button>
          </div>
        </div>
      </div>

      {/* Show ExportDataModal if isExportModalOpen is true */}
  <ExportDataModal
  isOpen={isExportModalOpen}
  onClose={() => {
    setIsExportModalOpen(false);
    onClose();  
  }}
  onExport={() => {
    setIsExportModalOpen(false);
    onClose();
  }}
/>


    </>
  );
};

export default WalletModal;

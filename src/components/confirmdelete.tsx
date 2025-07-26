// ConfirmationModal.tsx
import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0   flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <p className='text-black'>{message}</p>
        <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="bg-gray-300 text-black text-sm px-4 py-2 rounded-md">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-sm text-white px-4 py-2 rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

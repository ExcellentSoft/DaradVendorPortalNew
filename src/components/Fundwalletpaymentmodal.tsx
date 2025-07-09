import React from 'react';
import { X } from 'lucide-react';

interface ConfirmPaymentModalProps {
  amount: string;
  onClose?: () => void;
  onCancel?: () => void;
  onContinue?: () => void;
}

const ConfirmPaymentModal: React.FC<ConfirmPaymentModalProps> = ({
  amount,
  onClose,
  onCancel,
  onContinue,
}) => {
  return (
     <div className="relative w-full max-w-[500px] bg-white rounded-2xl px-6 py-8 shadow-lg">
        
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#121212CC] hover:text-[#101928] p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5604F6]"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}

        {/* Title */}
        <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] tracking-normal text-center capitalize text-[#000000] mt-6">
          Confirm Online Payment
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-center text-[#121212CC] mt-4 mb-8">
          You are about to be redirected to your bank's secure online portal to complete your payment of{' '}
          <span className="font-medium text-[#101928]">{amount}</span>. Please ensure you have your <br /> bank login credentials ready.
        </p>

        {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 w-[338px] mx-auto">
  {onCancel && (
    <button
      onClick={onCancel}
      className="flex-1 px-6 py-3 border border-[#E6E7EA] text-[#121212CC] bg-white rounded-lg font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize shadow-[0px_1px_2px_0px_#0520510D] hover:bg-[#EDEDED]"
    >
      Cancel
    </button>
  )}
  {onContinue && (
    <button
      onClick={onContinue}
      className="flex-1 px-6 py-3 bg-[#5604F6] text-white rounded-lg font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize transition hover:bg-[#4601d2]"
    >
      Continue
    </button>
  )}
</div>

      </div>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <ConfirmPaymentModal
      amount="₦5,000"
      onClose={() => console.log('Close button clicked')}
      onCancel={() => console.log('Cancel button clicked')}
      onContinue={() => console.log('Continue button clicked')}
    />
  );
};

export default App;

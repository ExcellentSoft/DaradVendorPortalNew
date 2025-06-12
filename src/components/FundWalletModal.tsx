// components/FundWalletModal.tsx

import React, { useState } from 'react';

interface FundWalletModalProps {
  onClose: () => void; // Function to close the main modal
}

const FundWalletModal: React.FC<FundWalletModalProps> = ({ onClose }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'onlineBanking' | 'manualDeposit'>('onlineBanking');

  const handleProceedToPayment = () => {
    setShowConfirmModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleContinuePayment = () => {
    // Logic for continuing with payment (e.g., redirect to bank portal)
    setShowConfirmModal(false);
    onClose();
  };

  // Function to handle copying text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: Add a small visual feedback like a tooltip
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // Main modal container classes - CONSISTENTLY 450px width
  const modalContainerClasses = `bg-white shadow-lg relative rounded-2xl w-[450px]`;

  // Header div classes - CONSISTENT ACROSS BOTH PAYMENT METHODS
  const headerDivClasses = `pt-8 pb-6 px-8 text-center border-b border-gray-200`;

  // Title text classes - CONSISTENT ACROSS BOTH PAYMENT METHODS
  const titleTextClasses = `font-urbanist font-semibold text-2xl leading-[24px] tracking-normal capitalize text-black mb-2`;

  // Subtitle text classes - CONSISTENT ACROSS BOTH PAYMENT METHODS
  const subtitleTextClasses = `font-inter font-normal text-sm leading-[160%] tracking-normal text-[#121212]/80`;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Main Fund Wallet Modal - Dynamic classes applied */}
      <div className={modalContainerClasses}>
        {/* Close Button for Fund Wallet Modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header - Dynamic classes applied */}
        <div className={headerDivClasses}>
          <h2 className={titleTextClasses}>
            Fund Your Wallet
          </h2>
          <p className={subtitleTextClasses}>
            Enter the amount you wish to add and select your preferred payment method.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col gap-6">
          {/* Payment Method Section */}
          <div>
            <h3 className="font-inter font-medium text-sm leading-none tracking-normal capitalize text-[#101928] mb-4">Payment Method</h3>
            <div className="flex gap-4">
              {/* Online Banking Radio */}
              <label
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200
                           ${selectedPaymentMethod === 'onlineBanking' ? 'bg-[#2E0234] text-white border-transparent' : 'bg-white border border-gray-300 text-[#121212]'}`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="onlineBanking"
                  className="
                    peer
                    h-5 w-5 mr-2
                    border-[0.4px] border-[#121212]/40 bg-transparent /* Unselected: 0.4px border #121212 40% opacity, transparent background */
                    checked:border-white checked:bg-white /* Selected: White border, white background for the dot/fill */
                    focus:ring-offset-0 focus:ring-0 /* Remove default focus rings */
                  "
                  checked={selectedPaymentMethod === 'onlineBanking'}
                  onChange={() => setSelectedPaymentMethod('onlineBanking')}
                />
                <span className="font-inter font-medium text-sm">Online Banking</span>
              </label>

              {/* Manual Deposit Radio */}
              <label
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200
                           ${selectedPaymentMethod === 'manualDeposit' ? 'bg-[#2E0234] text-white border-transparent' : 'bg-white border border-gray-300 text-[#121212]'}`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="manualDeposit"
                  className="
                    peer
                    h-5 w-5 mr-2
                    border-[0.4px] border-[#121212]/40 bg-transparent /* Unselected: 0.4px border #121212 40% opacity, transparent background */
                    checked:border-white checked:bg-white /* Selected: White border, white background for the dot/fill */
                    focus:ring-offset-0 focus:ring-0 /* Remove default focus rings */
                  "
                  checked={selectedPaymentMethod === 'manualDeposit'}
                  onChange={() => setSelectedPaymentMethod('manualDeposit')}
                />
                <span className="font-inter font-medium text-sm">Manual Deposit</span>
              </label>
            </div>

            {/* Line under the buttons - now spans full width */}
            <div className="border-b border-gray-200 mt-8 mx-[-32px]"></div>

            {/* Conditional Description Text Block */}
            {selectedPaymentMethod === 'onlineBanking' && (
              <div className="mt-8 rounded-lg w-full h-[54px] p-6 bg-[#F8F8F8] border-[0.5px] border-[#121212]/10 flex items-center">
                <p className="font-inter font-normal text-[15px] text-gray-700 text-center">
                  Securely complete your transaction via your bank's online service.
                </p>
              </div>
            )}

            {selectedPaymentMethod === 'manualDeposit' && (
              <div className="mt-8 rounded-lg w-full h-[88px] p-[10px] bg-[#F8F8F8] border-[0.5px] border-[#121212]/10 flex items-center">
                <p className="font-inter font-normal text-[12px] leading-[145%] text-[#121212]/80 text-center">
                  To fund your wallet via manual deposit, please transfer the desired amount to our bank account. Once completed, enter the deposit details below for verification.
                </p>
              </div>
            )}
          </div>
        {/* NEW: Grouping for Deposit Amount and subsequent fields */}
        <div className="flex flex-col gap-6">

            {/* Conditional Sections based on Payment Method */}
            {selectedPaymentMethod === 'onlineBanking' && (
            /* Select Your Bank Section */
            <>
              {/* Deposit Amount Section - Now inside onlineBanking block */}
              <div>
                  <label htmlFor="depositAmountOnline" className="block font-inter font-semibold text-sm text-[#101928] mb-2">
                    Deposit Amount (₦)
                  </label>
                  <input
                    id="depositAmountOnline" // Unique ID for online banking
                    type="text"
                    placeholder="enter the amount to fund"
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5604F6]
                                font-inter font-normal text-sm leading-[145%] tracking-normal placeholder-[#98A2B3]"
                  />
              </div>
              <div> {/* Select Your Bank Section */}
                  <label htmlFor="selectBank" className="block font-inter font-semibold text-sm text-[#101928] mb-2">
                  Select Your Bank
                  </label>
                  <div className="relative">
                  <select
                      id="selectBank"
                      className="w-full h-12 px-4 rounded-lg border border-gray-300 appearance-none bg-white
                              focus:outline-none focus:border-[#5604F6]
                              font-inter font-normal text-sm leading-[145%] tracking-normal text-[#98A2B3]
                              pr-10"
                  >
                      <option
                      value=""
                      className="w-[99px] h-[20px] text-[#98A2B3] font-inter font-normal text-sm leading-[145%] tracking-normal"
                      >
                      Choose a bank
                      </option>
                      {/* Add more bank options here */}
                      <option value="bank1">Bank A</option>
                      <option value="bank2">Bank B</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#98A2B3]">
                      <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                      </svg>
                  </div>
                  </div>
              </div>
            </>
            )}

            {selectedPaymentMethod === 'manualDeposit' && (
            <>
                {/* Manual Deposit - Reordered Sections */}

                {/* NEW: Wrapper for Bank Account Details and Important Note with 24px gap */}
                <div className="flex flex-col space-y-[24px]">
                    {/* Bank Account Details Section - MOVED TO TOP OF THIS BLOCK */}
                    <div>
                      <h3 className="font-inter font-medium text-sm leading-none tracking-normal capitalize text-[#101928] mb-4">Bank Account Details</h3>
                      <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                        {/* Account Name */}
                        <div className="flex justify-between items-center text-[#121212] w-full pt-2 pr-4 pb-2 pl-4 border-l-[0.5px] border-[#5604F6]">
                          <span className="font-inter font-normal text-sm w-1/3">Account Name</span>
                          <span className="font-inter font-semibold text-sm text-right flex-1 mr-2">Naija Vendor Services</span>
                          <button onClick={() => copyToClipboard('Naija Vendor Services')} className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v1.006a1.125 1.125 0 01-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m1.5 0h.75m-1.5 0H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V7.875c0-.621-.504-1.125-1.125-1.125z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zM15 9h.008v.008H15V9zm2.25 0h.008v.008h-.008V9zm2.25 0h.008v.008h-.008V9zM15 12h.008v.008H15V12zm2.25 0h.008v.008h-.008V12zm2.25 0h.008v.008h-.008V12zM15 15h.008v.008H15V15zm2.25 0h.008v.008h-.008V15zm2.25 0h.008v.008h-.008V15z" />
                            </svg>
                          </button>
                        </div>
                        {/* Account Number */}
                        <div className="flex justify-between items-center text-[#121212] w-full pt-2 pr-4 pb-2 pl-4 border-l-[0.5px] border-[#5604F6]">
                          <span className="font-inter font-normal text-sm w-1/3">Account Number</span>
                          <span className="font-inter font-semibold text-sm text-right flex-1 mr-2">1234567890</span>
                          <button onClick={() => copyToClipboard('1234567890')} className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v1.006a1.125 1.125 0 01-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m1.5 0h.75m-1.5 0H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V7.875c0-.621-.504-1.125-1.125-1.125z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zM15 9h.008v.008H15V9zm2.25 0h.008v.008h-.008V9zm2.25 0h.008v.008h-.008V9zM15 12h.008v.008H15V12zm2.25 0h.008v.008h-.008V12zm2.25 0h.008v.008h-.008V12zM15 15h.008v.008H15V15zm2.25 0h.008v.008h-.008V15zm2.25 0h.008v.008h-.008V15z" />
                            </svg>
                          </button>
                        </div>
                        {/* Bank Name */}
                        <div className="flex justify-between items-center text-[#121212] w-full pt-2 pr-4 pb-2 pl-4 border-l-[0.5px] border-[#5604F6]">
                          <span className="font-inter font-normal text-sm w-1/3">Bank Name</span>
                          <span className="font-inter font-semibold text-sm text-right flex-1 mr-2">GTBank</span>
                          <button onClick={() => copyToClipboard('GTBank')} className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v1.006a1.125 1.125 0 01-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m1.5 0h.75m-1.5 0H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V7.875c0-.621-.504-1.125-1.125-1.125z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zM15 9h.008v.008H15V9zm2.25 0h.008v.008h-.008V9zm2.25 0h.008v.008h-.008V9zM15 12h.008v.008H15V12zm2.25 0h.008v.008h-.008V12zm2.25 0h.008v.008h-.008V12zM15 15h.008v.008H15V15zm2.25 0h.008v.008h-.008V15zm2.25 0h.008v.008h-.008V15z" />
                            </svg>
                          </button>
                        </div>
                         {/* New Reference Code Div */}
                        <div className="flex justify-between items-center text-[#121212] w-full pt-2 pr-4 pb-2 pl-4 border-l-[0.5px] border-[#5604F6]">
                          <span className="font-inter font-normal text-sm w-1/3">Reference code</span>
                          <span className="font-inter font-semibold text-sm text-right flex-1 mr-2">GTBank</span>
                          <button onClick={() => copyToClipboard('GTBank')} className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v1.006a1.125 1.125 0 01-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m1.5 0h.75m-1.5 0H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V7.875c0-.621-.504-1.125-1.125-1.125z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zm2.25 0h.008v.008h-.008V6zM15 9h.008v.008H15V9zm2.25 0h.008v.008h-.008V9zm2.25 0h.008v.008h-.008V9zM15 12h.008v.008H15V12zm2.25 0h.008v.008h-.008V12zm2.25 0h.008v.008h-.008V12zM15 15h.008v.008H15V15zm2.25 0h.008v.008h-.008V15zm2.25 0h.008v.008h-.008V15z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Important Note - MOVED TO TOP OF THIS BLOCK (after Bank Account Details) */}
                    <p className="font-inter font-normal text-[12px] leading-[145%] tracking-normal text-[#F68D2B]">
                      <span className="font-semibold">Important:</span> Use the reference code provided to you for easier tracking.
                    </p>
                </div>

                {/* NEW: Wrapper for input fields with 18px gap */}
                <div className="flex flex-col space-y-[18px]">
                    {/* Deposit Amount Section - Now inside manualDeposit block */}
                    <div>
                        <label htmlFor="depositAmountManual" className="block font-inter font-semibold text-sm text-[#101928] mb-2">
                          Deposit Amount (₦)
                        </label>
                        <input
                          id="depositAmountManual" // Unique ID for manual deposit
                          type="text"
                          placeholder="enter the amount to fund"
                          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5604F6]
                                      font-inter font-normal text-sm leading-[145%] tracking-normal placeholder-[#98A2B3]"
                        />
                    </div>

                    {/* Transaction Reference Input - NOW AFTER INFO SECTIONS AND DEPOSIT AMOUNT */}
                    <div>
                      <label htmlFor="transactionReference" className="block font-inter font-semibold text-sm text-[#101928] mb-2">
                        Transaction Reference
                      </label>
                      <input
                        id="transactionReference"
                        type="text"
                        placeholder="Enter your bank transaction reference"
                        className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5604F6]
                                   font-inter font-normal text-sm leading-[145%] tracking-normal placeholder-[#98A2B3]"
                      />
                    </div>

                    {/* Upload Proof (Optional) Input - NOW AFTER INFO SECTIONS AND DEPOSIT AMOUNT */}
                    <div>
                      <label htmlFor="uploadProof" className="block font-inter font-semibold text-sm text-[#101928] mb-2">
                        Upload Proof (Optional)
                      </label>
                      <div className="relative">
                        <input
                          id="uploadProof"
                          type="text" // Using text for visual mock-up, can be changed to type="file"
                          placeholder="click to upload your deposit slip"
                          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#5604F6]
                                     font-inter font-normal text-sm leading-[145%] tracking-normal placeholder-[#98A2B3] pr-10"
                          readOnly // To prevent direct typing, implying click-to-upload
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-[#98A2B3] cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-18-8.25L12 1.5l9 6.75M9.75 1.5v12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                </div>

            </>
            )}
        </div>
        {/* Footer Button for Fund Wallet Modal */}
        <div className="p-8 pt-0">
          {selectedPaymentMethod === 'onlineBanking' && (
            <button
              onClick={handleProceedToPayment}
              className="w-full h-[56px] bg-[#5604F6] text-white font-urbanist font-semibold text-base rounded-lg
                         hover:bg-[#4a03e0] active:text-[#2E0234] transition-colors duration-200"
            >
              Proceed To Payment
            </button>
          )}
          {selectedPaymentMethod === 'manualDeposit' && (
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose} // Cancel button closes the main modal
                className="w-full h-[44px] bg-white border-[1px] border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D] text-[#121212]/80 font-urbanist font-semibold text-base leading-[24px] tracking-normal capitalize rounded-lg
                           hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                // onClick={handleSubmitDeposit} // Implement actual submit logic here
                className="w-full h-[44px] bg-[#5604F6] text-white font-urbanist font-semibold text-sm leading-none tracking-[0.02em] capitalize rounded-lg
                           hover:bg-[#4a03e0] active:text-[#2E0234] transition-colors duration-200"
              >
                Submit Deposit
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal - Conditionally rendered (remains unchanged) */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] shadow-lg w-[500px] h-[280px] relative">
            {/* Close Button for Confirmation Modal */}
            <button
              onClick={handleCancelConfirm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main content wrapper for title, subtitle, and buttons */}
            <div className="w-[490px] h-[209px] pt-6 pr-5 pb-3 pl-5 gap-6 absolute top-[35.5px] left-[5px] flex flex-col justify-center items-center">
              {/* Confirmation Modal Header */}
              <div className="text-center w-full">
                <h2 className="font-urbanist font-semibold text-2xl leading-[24px] tracking-normal capitalize text-black mb-2">
                  Confirm Online Payment
                </h2>
                <p className="font-inter font-normal text-sm text-[#121212]/80 text-center leading-[160%] w-[450px] h-[66px] mx-auto">
                  You are about to be redirected to your bank's secure online portal to
                  complete your payment of ₦5,000. Please ensure you have your
                  bank login credentials ready.
                </p>
              </div>

              {/* Confirmation Modal Buttons Wrapper */}
              <div className="w-[338px] h-[44px] flex justify-center gap-6">
                <button
                  onClick={handleCancelConfirm}
                  className="w-[157px] h-[44px] py-[10px] px-4 rounded-[8px] bg-white border-[1px] border-[#E6E7EA] shadow-[0px_1px_2px_0px_#0520510D] text-[#121212]/80 font-urbanist font-semibold text-base leading-[24px] tracking-normal capitalize hover:bg-gray-100 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinuePayment}
                  className="w-[157px] h-[41px] py-[12px] px-5 rounded-[8px] bg-[#5604F6] text-white font-urbanist font-semibold text-sm leading-none tracking-[0.02em] capitalize hover:bg-[#4a03e0] active:text-[#2E0234] transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default FundWalletModal;
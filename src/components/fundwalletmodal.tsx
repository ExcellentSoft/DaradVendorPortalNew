import React, { useState } from 'react';
import { X, Copy, UploadCloud } from 'lucide-react';

interface FundWalletFormProps {
  onClose?: () => void;
  onProceedToPayment?: (data: {
    paymentMethod: 'onlineBanking' | 'manualDeposit';
    depositAmount: string;
    selectedBank?: string;
    transactionReference?: string;
    uploadedFile?: File | null;
  }) => void;
  bankAccountName?: string;
  bankAccountNumber?: string;
  bankName?: string;
  referenceCode?: string;
}

const FundWalletForm: React.FC<FundWalletFormProps> = ({
  onClose,
  onProceedToPayment,
  bankAccountName = 'Naija Vendor Services',
  bankAccountNumber = '1234567890',
  bankName = 'GTBank',
  referenceCode = 'GTBank',
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'onlineBanking' | 'manualDeposit'>('onlineBanking');
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [transactionReference, setTransactionReference] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const banks = [
    { value: '', label: 'Choose a bank' },
    { value: 'bankA', label: 'Bank A' },
    { value: 'bankB', label: 'Bank B' },
    { value: 'bankC', label: 'Bank C' },
  ];

  const handleCopyClick = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadedFile(e.target.files[0]);
    } else {
      setUploadedFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onProceedToPayment) {
      onProceedToPayment({
        paymentMethod,
        depositAmount,
        selectedBank: paymentMethod === 'onlineBanking' ? selectedBank : undefined,
        transactionReference: paymentMethod === 'manualDeposit' ? transactionReference : undefined,
        uploadedFile: paymentMethod === 'manualDeposit' ? uploadedFile : undefined,
      });
    }
  };

  return (
     <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4 font-inter">
          <div className="w-full max-w-md bg-white rounded-2xl border border-[#121212]/10 p-6 sm:p-8 relative">
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 text-[#12121280] hover:text-[#121212]"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            )}
    
            <div className="text-center mb-6 mt-2 border-b border-[#D2D1D6] pb-4">
              <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] tracking-normal text-center capitalize text-[#000000]">
                Fund Your Wallet
              </h2>
              <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-center text-[#121212CC] mt-4">
                Enter the amount you wish to add and select your <br /> preferred payment method.
              </p>
            </div>
    
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="font-inter font-medium text-sm text-[#101928] mb-3">Payment Method</label>
                <div className="flex gap-3">
                  {[
                    { label: "Online Banking", value: "onlineBanking" },
                    { label: "Manual Deposit", value: "manualDeposit" },
                  ].map(({ label, value }) => (
                    <label
                      key={value}
                      className={`flex-1 rounded-lg px-4 py-3 text-xs font-medium flex mt-2 items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ${
                        paymentMethod === value
                          ? "bg-[#2E0234] text-white border border-[#D0D5DD]"
                          : "bg-[#FFFFFF] text-[#121212CC] hover:bg-[#EDEDED] border border-[#D0D5DD]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={value}
                        checked={paymentMethod === value}
                        onChange={() => setPaymentMethod(value as 'onlineBanking' | 'manualDeposit')}
                        className="hidden peer"
                      />
                      <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center border-current">
                        <span className={`w-2 h-2 rounded-full bg-current transition-all ${paymentMethod === value ? 'scale-100' : 'scale-0'}`} />
                      </span>
                      {label}
                    </label>
                  ))}
                </div>
              </div>
    
              
                        {/* Conditional Content based on Payment Method */}
                        {paymentMethod === 'onlineBanking' ? (
                          <>
                            <div className="mb-5 px-2 py-2 bg-[#F4F4F4] font-inter font-normal text-[14px] leading-[145%] tracking-normal text-center align-middle text-[#121212CC] rounded-lg">
                              Securely complete your transaction via your bank's <br /> online service.
                            </div>
              
                            {/* Deposit Amount Input */}
                            <div className="mb-5">
                              <label htmlFor="depositAmount" className="font-inter font-medium text-sm leading-[100%] tracking-normal align-middle capitalize text-[#101928] mb-3">
                                Deposit Amount (₦)
                              </label>
                              <input
                                type="text"
                                id="depositAmount"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                                placeholder="enter the amount to fund"
                                className="w-full px-4 py-3 rounded-lg border border-[#D2D1D6] text-sm text-[#121212] placeholder-[#12121266] focus:outline-none mt-2"
                              />
                            </div>
              
                            {/* Select Your Bank Dropdown */}
                            <div className="mb-8">
                              <label htmlFor="selectBank" className="font-inter font-medium text-sm leading-[100%] tracking-normal align-middle capitalize text-[#101928] mb-3">
                                Select Your Bank
                              </label>
                              <div className="relative">
                                <select
                                  id="selectBank"
                                  value={selectedBank}
                                  onChange={(e) => setSelectedBank(e.target.value)}
                                  className="block w-full appearance-none px-4 py-3 rounded-lg border border-[#D2D1D6] text-sm text-[#121212] bg-white focus:outline-none mt-2"
                                >
                                  {banks.map((bank) => (
                                    <option key={bank.value} value={bank.value} disabled={bank.value === ''}>
                                      {bank.label}
                                    </option>
                                  ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mb-6 px-2 py-2 bg-[#F4F4F4] font-inter font-normal text-[14px] leading-[145%] tracking-normal text-center align-middle text-[#121212CC] rounded-lg">
                              To fund your wallet via manual deposit, please transfer the desired amount to our bank account. Once
                              completed, enter the deposit details below for verification.
                            </div>
              
                            {/* Bank Account Details */}
              
                              <h3 className="font-urbanist font-semibold text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black mb-2">Bank Account Details</h3>
                            <div className="mb-6 border border-[#1212121A] rounded-xl py-4 px-2">
                              <div className="space-y-3 pl-3 gap-8">
                                <div className="flex justify-between items-center border-l-[0.5px] border-[#5604F6] px-2 h-[33px]">
                                  <span className="font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">Account Name</span>
                                  <span className="flex items-center font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">
                                    {bankAccountName}
                                    <button type="button" onClick={() => handleCopyClick(bankAccountName || '')} className="ml-2 font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black hover:text-gray-700 focus:outline-none">
                                      <Copy size={16} />
                                    </button>
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-l-[0.5px] border-[#5604F6] px-2 h-[33px]">
                                  <span className="font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">Account Number</span>
                                  <span className="flex items-center font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">
                                    {bankAccountNumber}
                                    <button type="button" onClick={() => handleCopyClick(bankAccountNumber || '')} className="ml-2 font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black hover:text-gray-700 focus:outline-none">
                                      <Copy size={16} />
                                    </button>
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-l-[0.5px] border-[#5604F6] px-2 h-[33px]">
                                  <span className="font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">Bank Name</span>
                                  <span className="flex items-center font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">
                                    {bankName}
                                    <button type="button" onClick={() => handleCopyClick(bankName || '')} className="ml-2 font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black hover:text-gray-700 focus:outline-none">
                                      <Copy size={16} />
                                    </button>
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-l-[0.5px] border-[#5604F6] px-2 h-[33px]">
                                  <span className="font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">Reference Code</span>
                                  <span className="flex items-center font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black">
                                    {referenceCode}
                                    <button type="button" onClick={() => handleCopyClick(referenceCode || '')} className="ml-2 font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle capitalize text-black hover:text-gray-700 focus:outline-none">
                                      <Copy size={16} />
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
              
                            <p className="font-inter font-normal text-[14px] leading-[145%] tracking-normal align-middle text-[#F68D2B] mb-6">
                              Important: Use the reference code provided to you for easier tracking.
                            </p>
              
                            {/* Deposit Amount Input (for manual deposit) */}
                            <div className="mb-6">
                              <label htmlFor="depositAmountManual" className="font-inter font-medium text-sm leading-[100%] tracking-normal align-middle capitalize text-[#101928] mb-3">
                                Deposit Amount (₦)
                              </label>
                              <input
                                type="text"
                                id="depositAmountManual"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                                placeholder="enter the amount to fund"
                                className="w-full px-4 py-3 rounded-lg border border-[#D2D1D6] text-sm text-[#121212] placeholder-[#12121266] focus:outline-none mt-2"
                              />
                            </div>
              
                            {/* Transaction Reference Input */}
                            <div className="mb-6">
                              <label htmlFor="transactionReference" className="font-inter font-medium text-sm leading-[100%] tracking-normal align-middle capitalize text-[#101928] mb-3">
                                Transaction Reference
                              </label>
                              <input
                                type="text"
                                id="transactionReference"
                                value={transactionReference}
                                onChange={(e) => setTransactionReference(e.target.value)}
                                placeholder="Enter your bank transaction reference"
                                className="w-full px-4 py-3 rounded-lg border border-[#D2D1D6] text-sm text-[#121212] placeholder-[#12121266] focus:outline-none mt-2"
                              />
                            </div>
              
                            {/* Upload Proof (Optional) */}
                            <div className="mb-8">
                              <label htmlFor="uploadProof" className="font-inter font-medium text-sm leading-[100%] tracking-normal align-middle capitalize text-[#101928] mb-3">
                                Upload Proof (Optional)
                              </label>
                              <div className="relative">
                                <input
                                  type="file"
                                  id="uploadProof"
                                  onChange={handleFileChange}
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  aria-label="Upload deposit slip"
                                />
                                <div className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-[#D2D1D6] text-sm text-[#12121266] focus:outline-none mt-2">
                                  <span className="truncate pr-2">
                                    {uploadedFile ? uploadedFile.name : 'Click to upload your deposit slip'}
                                  </span>
                                  <UploadCloud size={20} className="text-gray-500 flex-shrink-0" />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
    
              {/* Render Online Banking or Manual Deposit specific fields (omitted here for brevity) */}
    
              <div className="flex flex-col sm:flex-row gap-4 w-[338px] mx-auto">
                {paymentMethod === 'manualDeposit' && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-[#E6E7EA] text-[#121212CC] bg-white rounded-lg font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize shadow-[0px_1px_2px_0px_#0520510D] hover:bg-[#EDEDED]"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#5604F6] text-white rounded-lg font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0.02em] capitalize transition hover:bg-[#4601d2]"
                >
                  {paymentMethod === 'onlineBanking' ? 'Proceed To Payment' : 'Submit Deposit'}
                </button>
              </div>
            </form>
          </div>
        </div>
  );
};

const App: React.FC = () => (
  <FundWalletForm
    onClose={() => console.log('Close button clicked')}
    onProceedToPayment={(data) => console.log('Submit:', data)}
    bankAccountName="Naija Vendor Services"
    bankAccountNumber="1234567890"
    bankName="GTBank"
    referenceCode="GTBank"
  />
);

export default App;

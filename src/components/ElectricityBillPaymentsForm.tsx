// components/ElectricityBillPaymentsForm.tsx
import React, { useState, useEffect } from 'react';

// Reusing the Card component from UtilitiesForm.tsx
// In a real project, you'd import this from a shared components folder.
interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  disableStyles?: boolean;
}

const Card: React.FC<CardProps> = ({ title, subtitle, children, disableStyles = false }) => (
  <div className={disableStyles ? "" : "bg-white p-6 rounded-xl shadow-md border border-gray-100"}>
    <h3 className="text-[#121212] font-bold text-2xl leading-none tracking-wide capitalize mb-2">
      {title}
    </h3>
    {subtitle && (
      <p className="text-[#121212]/80 font-normal text-sm leading-relaxed mb-4">
        {subtitle}
      </p>
    )}
    {children}
  </div>
);


const ElectricityBillPaymentsForm: React.FC = () => {
  const [electricityProvider, setElectricityProvider] = useState<string>('Ikeja Electric');
  const [meterNumber, setMeterNumber] = useState<string>('');
  const [meterAccountNameDisplay, setMeterAccountNameDisplay] = useState<string | null>(null);
  const [billAmount, setBillAmount] = useState<string>('');

  // Error states
  const [meterNumberError, setMeterNumberError] = useState<string | null>(null);
  const [billAmountError, setBillAmountError] = useState<string | null>(null);

  // State to control button active/disabled state
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const electricityProviders = [
    'Ikeja Electric',
    'Eko Electric',
    'Abuja Electric',
    'Port Harcourt Electric',
  ];

  // Map of electricity provider names to their logo URLs
  const providerLogos: { [key: string]: string } = {
    'Ikeja Electric': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Ikeja_Electric_Logo.png/120px-Ikeja_Electric_Logo.png',
    'Eko Electric': 'https://eko.disco.ng/img/logo.png',
    'Abuja Electric': 'https://abujaelectricity.com/wp-content/uploads/2023/07/AEDC-Logo-Main.png',
    'Port Harcourt Electric': 'https://phed.com.ng/wp-content/uploads/2023/06/PHED-Logo.png',
  };

  const errorMessageClass = "font-['Inter'] font-normal text-xs leading-[145%] capitalize text-[#ED0423]";
  const accountNameClass = "font-['Inter'] font-normal text-xs leading-[145%] capitalize text-[#101928]/80";


  // Function to validate meter number and set account name
  const validateMeterNumberAndSetAccount = (num: string) => {
    setMeterNumber(num);

    if (!num.trim()) {
      setMeterNumberError(null);
      setMeterAccountNameDisplay(null);
    } else if (num.length < 5) {
      setMeterNumberError('Meter Number must be at least 5 digits.');
      setMeterAccountNameDisplay(null);
    } else {
      setMeterNumberError('Invalid Meter Number. No account found.');
      setMeterAccountNameDisplay(null);
    }
    // Specific valid meter number - This block should be checked after general validations
    if (num === '1234567890') { 
      setMeterNumberError(null);
      setMeterAccountNameDisplay('Temfrills Apartment');
    }
  };

  // Effect to re-evaluate form validity whenever relevant states change
  useEffect(() => {
    // Only consider the form valid if meter number passes its specific check AND account name is displayed
    const isMeterNumberValid = meterNumber.length >= 5 && meterAccountNameDisplay !== null;
    const isBillAmountValid = parseFloat(billAmount) > 0;

    setIsFormValid(isMeterNumberValid && isBillAmountValid);
  }, [meterNumber, meterAccountNameDisplay, billAmount]);


  const handlePayBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Re-run all validations on submit to ensure errors are shown before modal
    let currentMeterError: string | null = null;
    let currentBillAmountError: string | null = null;

    if (!meterNumber.trim()) {
      currentMeterError = 'Meter Number cannot be empty.';
    } else if (meterNumber.length < 5) {
      currentMeterError = 'Meter Number must be at least 5 digits.';
    } else if (meterNumber !== '1234567890') {
      currentMeterError = 'Invalid Meter Number. No account found.';
    }

    if (!billAmount || parseFloat(billAmount) <= 0) {
      currentBillAmountError = 'Please enter a valid Bill Amount.';
    }

    setMeterNumberError(currentMeterError);
    setBillAmountError(currentBillAmountError);

    // If no current errors, open the modal
    if (!currentMeterError && !currentBillAmountError && meterAccountNameDisplay) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmPayment = () => {
    // This is where your actual payment processing logic would go
    alert(`Payment Confirmed: Paying ₦${parseFloat(billAmount).toLocaleString()} for Meter ${meterNumber} (${meterAccountNameDisplay}) with ${electricityProvider}.`);
    console.log({
      electricityProvider,
      meterNumber,
      meterAccountName: meterAccountNameDisplay,
      billAmount: parseFloat(billAmount),
    });

    // Close modal and clear form after confirmation
    setIsModalOpen(false);
    setMeterNumber('');
    setMeterAccountNameDisplay(null);
    setBillAmount('');
    setMeterNumberError(null);
    setBillAmountError(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // ConfirmationModal component defined directly within ElectricityBillPaymentsForm
  const ConfirmationModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    billAmount: string;
    meterNumber: string;
    electricityProvider: string;
  }> = ({
    isOpen,
    onClose,
    onConfirm,
    billAmount,
    meterNumber,
    electricityProvider,
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-[#121212] font-['Urbanist'] font-semibold text-2xl leading-none tracking-wide capitalize mb-4 text-center">
            Confirm Bill Payment
          </h2>

          <p className="text-[#121212]/80 font-['Inter'] font-normal text-base leading-relaxed text-center mb-8">
            Are you sure you want to pay <span className="font-medium">₦{parseFloat(billAmount).toLocaleString()}</span> for meter <span className="font-medium">{meterNumber}</span> with <span className="font-medium">{electricityProvider}</span>?
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-white border border-gray-300 rounded-xl text-base font-medium text-[#101928] hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 px-6 bg-[#5604F6] text-white rounded-xl text-base font-medium hover:bg-[#4a03d1] transition-colors duration-200"
            >
              Yes, Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="bg-white rounded-xl h-full w-full flex flex-col relative overflow-hidden items-center gap-y-8">

      {/* Header Section */}
      <div className="bg-[#2E0234] w-full h-[103px] pt-[24px] pr-[60px] pb-[16px] pl-[60px] border-b border-[#121212]/10 flex flex-col justify-center items-center text-center rounded-t-xl">
        <h3 className="text-white font-['Urbanist'] font-semibold text-2xl leading-tight tracking-[0.02em] text-center capitalize w-[557px] h-[29px] mb-[12px]">
          Electricity Bill Payments
        </h3>
        <p className="text-white/80 font-['Inter'] font-normal text-sm leading-relaxed tracking-normal text-center w-[552px] h-[22px]">
          Pay your meter bills hassle-free.
        </p>
      </div>

      {/* Main Form Content Container */}
      <div className="w-[400px] rounded-3xl border-[0.5px] border-[#121212]/20 flex flex-col gap-6 py-[24px] px-8">
        <form onSubmit={handlePayBillSubmit} className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col gap-6 justify-center items-center w-[336px]">

            {/* Select Electricity Provider with Logo */}
            <div>
              <label htmlFor="electricityProvider" className="block text-[#101928] text-base font-semibold mb-2">
                Select Electricity Provider
              </label>
              <div className="relative w-[335px] mx-auto border border-[#D0D5DD] rounded-lg focus-within:border-[#1E0156]/50 overflow-hidden flex items-center">
                {/* Logo of the selected provider */}
                {electricityProvider && providerLogos[electricityProvider] && (
                  <img
                    src={providerLogos[electricityProvider]}
                    alt={`${electricityProvider} logo`}
                    className="h-6 w-6 ml-3 mr-2 object-contain flex-shrink-0"
                  />
                )}
                <select
                  id="electricityProvider"
                  value={electricityProvider}
                  onChange={(e) => setElectricityProvider(e.target.value)}
                  className="block w-full py-[15px] pl-2 pr-8 outline-none bg-white text-gray-700 appearance-none
                                  font-['Inter'] font-normal text-sm leading-[145%] cursor-pointer"
                  style={{ paddingLeft: electricityProvider && providerLogos[electricityProvider] ? '0.5rem' : '1rem' }}
                >
                  {electricityProviders.map((provider) => (
                    <option key={provider} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
                {/* Dropdown arrow icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#121212]/40">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Meter Number Input */}
            <div>
              <label htmlFor="meterNumber" className="block text-[#101928] text-base font-semibold mb-2">
                Meter Number
              </label>
              <input
                type="text"
                id="meterNumber"
                value={meterNumber}
                onChange={(e) => validateMeterNumberAndSetAccount(e.target.value)}
                className={`block w-[335px] mx-auto border rounded-lg py-[15px] px-4 focus:outline-none focus:border-[#1E0156]/50 text-gray-700
                                font-['Inter'] font-normal text-sm leading-[145%] placeholder-[#98A2B3]
                                ${meterNumberError ? 'border-[#ED0423]' : 'border-[#D0D5DD]'}`}
                placeholder="Enter Meter Number"
              />
              {meterNumberError && (
                <p className={errorMessageClass}>
                  {meterNumberError}
                </p>
              )}
              {/* Meter Account Name Display (Conditional) - Closer now */}
              {meterAccountNameDisplay && !meterNumberError && (
                <p className={accountNameClass}>
                  {meterAccountNameDisplay}
                </p>
              )}
            </div>

            {/* Bill Amount Input with persistent Naira icon */}
            <div>
              <label htmlFor="billAmount" className="block text-[#101928] text-base font-semibold mb-2">
                Bill Amount
              </label>
              <div className={`flex w-[335px] mx-auto border rounded-lg focus-within:border-[#1E0156]/50 overflow-hidden
                                ${billAmountError ? 'border-[#ED0423]' : 'border-[#D0D5DD]'}`}>
                {/* Naira icon - remains visible */}
                <span className="flex items-center px-4 text-gray-700 font-medium bg-gray-50 border-r border-gray-200">
                  ₦
                </span>
                <input
                  type="number"
                  id="billAmount"
                  value={billAmount}
                  onChange={(e) => {
                    setBillAmount(e.target.value);
                    setBillAmountError(null);
                  }}
                  className="outline-none py-[15px] pl-3 text-gray-700 flex-grow
                                font-['Inter'] font-normal text-sm leading-[145%] placeholder-[#98A2B3]
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Enter bill amount(₦)"
                  min="0"
                />
              </div>
              {billAmountError && (
                <p className={errorMessageClass}>
                  {billAmountError}
                </p>
              )}
            </div>

            {/* Pay Bill Button - Dynamically styled */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-8 w-[335px] py-[14px] text-white rounded-xl text-base font-medium font-['Urbanist'] leading-[150%] tracking-normal capitalize mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200
                                ${isFormValid ? 'bg-[#5604F6] focus:ring-[#5604F6]' : 'bg-[#5F04F6]/50 cursor-not-allowed focus:ring-[#5F04F6]/50'}`}
            >
              Pay Bill
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmPayment}
        billAmount={billAmount}
        meterNumber={meterNumber}
        electricityProvider={electricityProvider}
      />
    </div>
  );
};

export default ElectricityBillPaymentsForm;
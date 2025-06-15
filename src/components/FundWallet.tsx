import React, { useState } from 'react';
import FundWalletModal from './fundwalletmodal';
import Image from "next/image";


const FundWallet: React.FC = () => {
  const [showFundWalletModal, setShowFundWalletModal] = useState(false);

  const handleSendButtonClick = () => {
    setShowFundWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowFundWalletModal(false);
  };

  return (
    <>

    <div className='flex gap-8 w-full'>
      <div className="w-[750px] h-[900px] rounded-2xl bg-white">
        {/* Header */}
        <header className="w-full h-[107px] rounded-t-2xl bg-[#2E0234] text-white flex items-center justify-center py-6 px-[44px] border-b border-[#121212]/10">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-urbanist font-bold text-2xl leading-none tracking-[0.04em] capitalize whitespace-nowrap">
              Fund Customer Wallet – Quick & Secure Funding
            </h1>
            <p className="font-inter font-normal text-sm leading-[160%] tracking-normal text-gray-200">
              Easily credit your customer&apos;s wallet for seamless transactions and purchases.
            </p>
          </div>
        </header>

        {/* Main Form */}
        <div className="w-[500px] h-[605px] rounded-lg border border-[#121212]/20 relative p-10 mt-20 mx-auto">
          {/* Search Input with Icon */}
          <div className="relative w-[336px] h-[44px] mx-auto rounded-lg bg-[#FBFCFC] border border-[#121212]/20">
            <input
              type="text"
              placeholder="Enter customer name or email......"
              className="w-full h-full rounded-lg bg-transparent pl-4 pr-10 focus:outline-none placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-[#6E6B7B]"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          {/* Centered Divider */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[92px] w-[500px] h-[1px] rounded-md bg-[#121212]/10"></div>

          {/* Funding Details */}
          <div className="absolute w-[400px] left-1/2 transform -translate-x-1/2 top-[113px] p-6">
            <h2 className="font-urbanist font-bold text-base leading-[16px] tracking-[0.04em] capitalize text-[#121212] mb-2 text-center">
              Enter Funding Details
            </h2>
            <p className="font-inter font-normal text-xs leading-[160%] tracking-normal text-[#121212]/80 mb-6 text-center">
              Specify the amount and choose a funding method.
            </p>

            {/* Amount Input */}
            <div className="w-full mb-6">
              <label htmlFor="amountToCredit" className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80 mb-2">
                Amount to Credit
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#121212] font-semibold text-lg">₦</span>
                <input
                  id="amountToCredit"
                  type="text"
                  defaultValue="75,000"
                  className="w-full h-[43px] rounded-lg border border-[#1E0156] bg-[#FBFCFC] pl-9 pr-4 py-3 focus:outline-none text-lg text-[#121212] font-semibold"
                />
              </div>
            </div>

            {/* Confirm Email */}
            <div className="w-full mb-6">
              <label htmlFor="confirmEmail" className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80 mb-2">
                Confirm Customer Email
              </label>
              <input
                id="confirmEmail"
                type="email"
                defaultValue="Aymomide.Johnson@Email.Com"
                className="w-full h-[43px] rounded-lg border border-[#1E0156] bg-[#FBFCFC] pl-4 pr-4 py-3 focus:outline-none text-base text-[#121212] font-medium"
              />
            </div>

            {/* Transfer From Options */}
            <div className="w-[295px] h-[117px] rounded-lg flex flex-col gap-[17px] pt-2 pr-3 pb-2 pl-3 bg-[#F8F8F8] border border-[#121212]/10 mx-auto mb-6">
              <span className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80">
                Transfer From
              </span>
              <div className="flex flex-col gap-6">
                <label className="inline-flex items-center text-base text-[#121212]">
                  <input
                    type="radio"
                    name="transferFrom"
                    value="accountWallet"
                    className="form-radio text-[#5604F6] h-5 w-5 border-gray-300"
                    defaultChecked
                  />
                  <span className="ml-2 font-inter font-normal text-xs text-[#121212]/80">Account Wallet</span>
                  <span className="ml-2 font-inter font-normal text-xs text-[#121212]/80">(Current Balance: ₦120,000)</span>
                </label>
                <label className="inline-flex items-center text-base text-[#121212]">
                  <input
                    type="radio"
                    name="transferFrom"
                    value="onlineBanking"
                    className="form-radio text-[#5604F6] h-5 w-5 border-gray-300"
                  />
                  <span className="ml-2 font-inter font-normal text-xs text-[#121212]/80">Fund from online banking</span>
                </label>
              </div>
            </div>

            {/* Send Button */}
            <button
              className="w-full h-[56px] bg-[#5604F6] text-white rounded-lg flex items-center justify-center font-urbanist font-semibold text-sm tracking-[0.02em] capitalize"
              onClick={handleSendButtonClick}
            >
              Send ₦75,000 From Account Wallet
            </button>
          </div>
        </div>
      </div>
<div className="w-[250px] h-[350px] rounded-2xl bg-white shadow-sm p-4 flex flex-col items-center text-center">
      <div className="mb-2">
        <h2 className="text-sm font-semibold text-[#121212]">Watch Tutorial Video</h2>
        <p className="text-xs text-[#6E6B7B]">How to fund wallet</p>
      </div>
      <div className="rounded-xl overflow-hidden mt-2">
         <Image src="assets/man.svg" alt="man" width={400} height={400} />
      </div>
    </div>
    </div>
      {showFundWalletModal && <FundWalletModal onClose={handleCloseModal} />}
    </>
  );
};

export default FundWallet;

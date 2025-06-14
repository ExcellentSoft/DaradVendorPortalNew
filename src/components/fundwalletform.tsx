import React, { useState } from 'react';
import FundWalletModal from './fundwalletmodal';




interface FundWalletFormProps {
  onGoBack?: () => void;
}


const FundWalletForm: React.FC<FundWalletFormProps> = ({ onGoBack }) => {
  const [showFundWalletModal, setShowFundWalletModal] = useState(false);


  const handleSendButtonClick = () => {
    setShowFundWalletModal(true);
  };


  const handleCloseModal = () => {
    setShowFundWalletModal(false);
  };


  return (
    <>
      <div
        className="absolute w-[650px] h-[760px] top-[148px] left-[290px] rounded-2xl bg-white shadow-md
                   flex flex-col gap-0"
      >
        {/* Header */}
        <header
          className="w-full h-[107px] rounded-t-2xl bg-[#2E0234] text-white
                     flex items-center justify-center py-6 px-[44px]
                     border-b border-[#121212]/10"
        >
          <div className="flex flex-col gap-2 items-center">
            <h1
              className="font-urbanist font-bold text-2xl leading-none tracking-[0.04em] capitalize whitespace-nowrap"
            >
              Fund Customer Wallet – Quick & Secure Funding
            </h1>
            <p
              className="font-inter font-normal text-sm leading-[160%] tracking-normal text-gray-200"
            >
              Easily credit your customer's wallet for seamless transactions and purchases.
            </p>
          </div>
        </header>


     
        <div
          className="absolute w-[500px] h-[605px] top-[24px] left-[75px]
                     rounded-lg border border-[#121212]/20
                     relative pb-12" // Increased bottom padding by 24px (from pb-6 to pb-12)
        >
       
          <div
            className="absolute w-[336px] h-[44px] top-[24px] left-0 right-0 mx-auto
                       rounded-lg bg-[#FBFCFC] border border-[#121212]/20
                       pt-3 pr-[14px] pb-3 pl-[14px] relative"
          >
            <input
              type="text"
              placeholder="Enter customer name or email......"
              className="w-full h-full rounded-lg bg-transparent
                         pl-4 pr-10 focus:outline-none
                         placeholder:font-inter placeholder:font-normal placeholder:text-sm
                         placeholder:leading-none placeholder:tracking-normal placeholder:text-[#6E6B7B]"
            />
            <svg
              className="absolute right-[14px] top-1/2 transform -translate-y-1/2 text-gray-400"
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


       
          <div
            className="absolute w-[500px] h-[1px] top-[92px] left-0 right-0 mx-auto
                       rounded-md bg-[#121212]/10"
          ></div>


   
          <div className="absolute w-[400px] top-[113px] left-0 right-0 mx-auto
                           p-6">
            <h2 className="font-urbanist font-bold text-base leading-[16px] tracking-[0.04em] capitalize text-[#121212] mb-2 text-center">Enter Funding Details</h2>
            <p className="font-inter font-normal text-xs leading-[160%] tracking-normal text-[#121212]/80 mb-6 text-center">
              Specify the amount and choose a funding method.
            </p>


           
            <div className="w-full mb-6">
              <label htmlFor="amountToCredit" className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80 mb-2">
                Amount to Credit
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#121212] font-semibold text-lg">₦</span>
                <input
                  id="amountToCredit"
                  type="text"
                  defaultValue="75,000" // As per image
                  className="w-full h-[43px] rounded-lg border border-[#1E0156] bg-[#FBFCFC]
                             pl-9 pr-4 py-3 focus:outline-none text-lg text-[#121212] font-semibold"
                />
             
              </div>
            </div>




            <div className="w-full mb-6">
              <label htmlFor="confirmEmail" className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80 mb-2">
                Confirm Customer Email
              </label>
              <input
                id="confirmEmail"
                type="email"
                defaultValue="Aymomide.Johnson@Email.Com" // As per image
                className="w-full h-[43px] rounded-lg border border-[#1E0156] bg-[#FBFCFC]
                           pl-4 pr-4 py-3 focus:outline-none text-base text-[#121212] font-medium"
              />
            </div>


           
            <div className="w-[295px] h-[117px] rounded-lg flex flex-col gap-[17px] pt-2 pr-3 pb-2 pl-3
                            bg-[#F8F8F8] border border-[#121212]/10 mx-auto mb-6">
              <span className="block font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80">Transfer From</span>
              <div className="flex flex-col gap-6">
                <label className="inline-flex items-center text-base text-[#121212]">
                  <input
                    type="radio"
                    name="transferFrom"
                    value="accountWallet"
                    className="form-radio text-[#5604F6] h-5 w-5 border-gray-300"
                    defaultChecked // As per image
                  />
                  <span className="ml-2 font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80">Account Wallet</span>
                  <span className="ml-2 font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80">(Current Balance: ₦120,000)</span>
                </label>
                <label className="inline-flex items-center text-base text-[#121212]">
                  <input
                    type="radio"
                    name="transferFrom"
                    value="onlineBanking"
                    className="form-radio text-[#5604F6] h-5 w-5 border-gray-300"
                  />
                  <span className="ml-2 font-inter font-normal text-xs leading-[12px] tracking-normal text-[#121212]/80">Fund from online banking</span>
                </label>
              </div>
            </div>


         
            <button
              className="w-full h-[56px] bg-[#5604F6] text-white rounded-lg
                         flex items-center justify-center
                         font-urbanist font-semibold text-sm leading-[14px] tracking-[0.02em] capitalize
                         "
              onClick={handleSendButtonClick}
            >
              Send ₦75,000 From Account Wallet
            </button>
          </div>
        </div>
      </div>


     
      {showFundWalletModal && <FundWalletModal onClose={handleCloseModal} />}
    </>
  );
};


export default FundWalletForm;
import { useState } from 'react';
import Image from "next/image";

export default function ConfirmWithdrawalModal() {
  const [amount, setAmount] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleWithdrawal = () => {
    if (!confirmed) {
      alert('Please confirm details before proceeding.');
      return;
    }
    alert(`Processing withdrawal of ₦${amount}`);
  };

  return (
        <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg pb-12">
        {/* Header */}
        <div className="bg-white p-2 text-center border-b border-[#1212121A]">
          <h2 className="font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
            Transfer Funds
          </h2>
          <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
            Move funds from your Sales Wallet to your <br /> Account Wallet.
          </p>
        </div>

        {/* Balance Info */}
        <div className="w-full rounded-2xl border border-[#1212121A] px-5 py-4 mt-6 mb-4 shadow-[0px_8px_8px_-4px_#0A0D1208,0px_20px_24px_-4px_#0A0D1214] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-8 bg-[#1D9E34] rounded-full" />
              <span className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC]">
                Current Sales Wallet Balance
              </span>
            </div>
            <span className="font-inter font-medium text-[12px] leading-[145%] tracking-normal text-right align-middle capitalize text-[#121212]">
              ₦1,200,000
            </span>
          </div>
        </div>



        <p className='ont-inter font-normal text-[12px] leading-[160%] text-black text-left mt-6 mb-4'>Enter the amount you wish to transfer. This will add funds <br /> to your Account Wallet for operational expenses.</p>

        {/* Input */}
        <div className="mb-4">
          <label className="font-inter font-medium text-[14px] leading-[100%] tracking-normal align-left capitalize text-[#101928] mb-2">
            Transfer Amount (₦)
          </label>
          <input
            type="number"
            placeholder="e.g. 50000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-[#D0D5DD] rounded-md focus:outline-none placeholder:text-[#98A2B3] text-[#121212]"
          />
        </div>

        {/* Confirmation */}
    <div className="bg-[#FEF6E6] flex gap-2 border border-[#FCE4B1] text-[#563A01] p-2 text-sm rounded-xl W-[150px]  mt-6">
             <Image src="assets/info.svg" alt="Transfer" width={20} height={20} /> 
             <span className='font-inter font-normal text-[12px] leading-[160%] tracking-[0em]'>
              Review your details carefully before confirming.
           </span>
            </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
  <button
    className="w-full sm:w-1/2 px-4 py-2 border border-[#E6E7EA] rounded-md text-[#121212CC] font-inter font-medium text-[12px] leading-[145%] capitalize hover:bg-gray-100 transition shadow-[0px_1px_2px_0px_#0520510D]"
    onClick={() => alert('Withdrawal cancelled')}
  >
    Cancel
  </button>
  <button
    onClick={handleWithdrawal}
    className="w-full sm:w-1/2 px-4 py-2 bg-[#5604F6] text-white rounded-md font-inter font-medium text-[12px] leading-[145%] capitalize hover:bg-[#4a03d1] transition"
  >
    Confirm Transfer
  </button>
</div>

      </div>
  );
}

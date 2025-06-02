

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";



const ElectricityBillForm = () => {
  const [provider, setProvider] = useState('Ikeja Electric');
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!meterNumber.trim() || !amount.trim()) {
      alert('Please fill all fields.');
      return;
    }

    setShowModal(true); // Show confirmation modal
  };

  const confirmPayment = () => {
    setShowModal(false);
    alert(`Payment Confirmed: ₦${amount} for meter ${meterNumber} to ${provider}`);
    // Proceed with actual payment logic here
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">



    <div
      className="bg-white rounded-[12px]"
      style={{ width: '677px', height: '1650px' }}
    >
      {/* Top Banner */}
      <div
        className="bg-[#2E0234] text-white pt-[24px] pr-[57px] pb-[16px] pl-[57px] rounded-t-[12px] mb-6 flex items-center gap-[20px] border-b border-white mx-auto"
        
      >
       


        <div className="flex flex-col items-center flex-1 justify-center w-full h-full">
      
          <div className="flex items-center gap-x-[4px]">
           
            <h2
              className="text-lg font-semibold text-white capitalize"
              style={{
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0.02em', 
                textAlign: 'center',
              }}
            >
            Electricity Bill Payments
            </h2>
          </div>


          {/* Div for Subtitle text */}
          <div className="flex flex-col items-center justify-center mt-4">
            <p
              className="text-sm text-white whitespace-nowrap"
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '160%',
                letterSpacing: '0%', 
                textAlign: 'center',
              }}
            >
              Pay your meter bills hassle-free.
            </p>
          </div>
        </div>
      </div>


      {/* --- */}
  <div className="flex justify-center items-center  ">
  <div className="w-[400px] rounded-3xl border-[0.5px] mt-20 border-[#121212]/20 p-8">
 

      <form className="space-y-6 " onSubmit={handleSubmit} >
          
           <div>
  <label className="block text-[16px] font-semibold text-gray-700 mb-1">
    Select Electricity Provider
  </label>

  
  <div className="w-full flex items-center gap-3 border px-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700">
   
      <Image src="/assets/elect.svg" alt="Wallet Icon" width={40} height={40} />

    <div className="relative w-full flex ">
    
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="w-full appearance-none p-4  text-sm "
      >
        <option>Ikeja Electric</option>
        <option>Eko Electric</option>
        <option>Abuja Electric</option>
        <option>Kano Electric</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
    </div>
  </div>
</div>


            {/* Meter Number */}
         <div>
  <label htmlFor="meter" className="block text-[16px] font-semibold text-gray-700 mb-1">
    Meter Number
  </label>
  <input
    id="meter"
    type="text"
    value={meterNumber}
    onChange={(e) => setMeterNumber(e.target.value)}
    placeholder="1234567890"
    className="w-full p-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-700"
  />
  <p className="text-xs text-gray-400 mt-1">Tenfrills Apartment</p>
</div>


            {/* Amount */}
      
  <div>
  <label htmlFor="amount" className="block text-[16px] font-semibold text-gray-700 mb-1">
    Bill Amount
  </label>
  <div className="w-full p-4 flex items-center gap-3 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-purple-700">
    <Image src="/assets/naira.png" alt="Wallet Icon" width={20} height={20} />
    <input
  id="amount"
  type="number"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  placeholder="3,000"
  className="w-full text-sm  outline-none border-none bg-transparent no-spinner"
/>

  </div>
</div>


            <div/>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-4 rounded-md hover:bg-purple-800 transition"
            >
              Pay Now
            </button>
          </form>
</div>
</div>



             {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Confirm Payment</h3>
            <p className="text-sm text-gray-600 mb-4">
              Proceed to pay <strong>₦{amount}</strong> to <strong>{provider}</strong> for meter number{' '}
              <strong>{meterNumber}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-700 text-white rounded-md text-sm hover:bg-purple-800"
                onClick={confirmPayment}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    );
};
export default ElectricityBillForm;


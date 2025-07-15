import React, { useRef } from 'react';
import { AlertTriangle, Info  } from 'lucide-react';
import Image from "next/image";
import jsPDF from 'jspdf';

export default function SecuritySettingsPage() {
   const pdfRef = useRef<HTMLDivElement>(null);
 const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Download Account Data", 10, 10);
    doc.text("Profile Data: Name, contact details, business settings", 10, 20);
    doc.text("Sales Transactions: Order history, revenue breakdown", 10, 30);
    doc.text("Store Preferences: Language, saved configurations", 10, 40);
    doc.save("account-data.pdf");
  };
  return (
         <div className="w-[1200px] bg-white  shadow-md">
        {/* Header */}
        <div className="bg-[#100112] rounded-t-xl  w-full text-white text-left p-4 px-8 pb-6">
      <h1 className="font-urbanist font-semibold text-[20px] leading-[100%] tracking-[0.02em] capitalize text-white mb-1">Account Management – Your Data, Your Control</h1>
      <p className="mt-2 max-w-2xl font-inter font-normal text-[16px] leading-[160%] tracking-[0%] text-white">
Manage your data, temporarily deactivate your account, or request permanent deletion.
      </p>
</div>
           <div className="flex flex-col md:flex-row gap-6 mb-6 p-4">
 <div className="md:w-[55%] w-full mx-auto mt-10 bg-white border border-[#1212121A] rounded-xl pt-6 space-y-6" ref={pdfRef}>
   <div className="border-b border-[#1212121A] flex flex-col items-center justify-center text-center py-2 px-4">
  <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-[#000000] mb-2">
    📂 Download Account Data
  </h2>
  <p className="font-inter font-normal text-[12px] leading-[160%] text-center text-[#12121299]">
    Get a copy of your transaction history, profile info, and store <br /> settings.
  </p>
</div>

<div className='px-6 mt-20'>
      <div className="shadow-[0px_4px_4px_0px_#00000040] border-2 mb-6 border-dashed border-[#5604F6] rounded-lg p-8 flex flex-col items-center justify-center space-y-5 bg-white">
        <div className="">
         <Image src="/assets/upload.svg" alt="Wallet Icon" width={40} height={40} />
        </div>
        <div className="font-secondary font-normal text-sm leading-[1.6] tracking-wide text-[#12121299] border border-[#12121233] rounded-md px-4 py-1">
          File Format
          <select className="ml-2 px-2 py-1 focus:outline-none border-l border-[#12121233]">
            <option value="pdf">PDF</option>
          </select>
        </div>
      </div>

      <div>
        <label className="font-inter font-medium text-[14px] leading-[100%] tracking-[0px] align-middle capitalize text-[#101928]">Receive Also Via Email</label>
        <input
          type="email"
          placeholder='temitopesoremekun2@gmail.com'
          className="mt-1 w-full border text-[#121212CC] border-[#39265980] rounded-lg px-3 py-2 font-inter font-normal text-[14px] leading-[145%] tracking-[0px] align-middle text-[#121212CC]"
        />
      </div>


           <div className="bg-[#FEF6E64D] border border-[#FEF2D9] rounded-lg p-4  mt-10 space-y-4">
             <div className="flex ">
            <p className='text-red-600 text-md mb-2'>📌</p>
        <h2 className="text-md font-semibold text-gray-800"> Your Download Request Includes</h2>
        </div>
        <div className="flex items-start gap-2 text-gray-800 text-sm  pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        <strong className='whitespace-nowrap'>Profile Data</strong> (Name, contact details, business settings)
        </div>
            <div className="flex items-start gap-2 text-gray-800 text-sm  pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        <strong className='whitespace-nowrap'>Sales Transactions</strong>  (Order history, revenue breakdown)
        </div>
        <div className="flex items-start gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
       <strong className='whitespace-nowrap'>Store Preferences</strong>  (Language, saved configurations)
        </div>
      </div>

   

      <button
        onClick={handleDownload}
        className="w-full bg-[#5F04F6] hover:bg-[#4E03D1] mt-20 text-white font-urbanist text-[16px] leading-[150%] tracking-[0px] capitalize py-4 rounded-xl flex justify-center items-center space-x-2"
      >
               
        <span>Request Download</span>
         <Image src="/assets/download.svg" alt="Wallet Icon" width={20} height={20} />
      </button>
      </div>
    </div>
       

        {/* Active Devices & Login History */}
        <div className="flex flex-col  gap-6 md:w-[45%] w-full">
 <div className="max-w-lg mx-auto mt-10 py-6 border border-gray-200 rounded-xl bg-white">
<div className="border-b border-[#1212121A] flex flex-col items-center justify-center text-center py-2 px-6">
  <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-[#000000] mb-2">
    🚫 Deactivate Account
  </h2>
  <p className="font-inter font-normal text-[12px] leading-[160%] text-center text-[#12121299]">
    Temporarily disable your account. Reactivate anytime by logging back in.
  </p>
</div>

  <div className='px-4'>

    <div className="bg-[#FEF6E64D] border border-[#FEF2D9] rounded-lg p-4 mt-6 space-y-4">
  <div className="flex items-center gap-2">
    <p className="text-[#000000] text-md">⚠</p>
    <h2 className="text-md font-semibold text-gray-800">Important Notes</h2>
  </div>

  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>Your store will be hidden from customers</span>
  </div>

  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>New orders won’t be accepted while deactivated.</span>
  </div>

  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>Pending transactions will still be processed.</span>
  </div>
</div>


      <button
        className="w-full mt-6 bg-black text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition"
      >
      
        Deactivate My Account
          <Info size={18} className="text-white" />
      </button>
      </div>
    </div>


        {/* Security Question & Backup Email */}
 <div className="max-w-md mx-auto mt-10 py-6 border border-gray-200 rounded-xl  bg-white">
<div className="border-b border-[#1212121A] flex flex-col items-center justify-center text-center py-2 px-6">
  <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-[#000000] mb-2">
    ❌ Delete Account Permanently
  </h2>
  <p className="font-inter font-normal text-[12px] leading-[160%] text-center text-[#12121299]">
    This action cannot be undone. It will remove all your account data, including
  </p>
</div>

   <div className='px-4'>
<div className="bg-[#FEF6E64D] border border-[#FEF2D9] rounded-lg p-4 mt-6 space-y-4">
  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>Store details &amp; products</span>
  </div>
  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>Order &amp; transaction history</span>
  </div>
  <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
    <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
    <span>Customer interactions</span>
  </div>
</div>

      <button
        className="w-full mt-6 bg-black text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition"
      >
      
        Request Account Deletion
          <Info size={18} className="text-white" />
      </button>
      </div>
    </div>
        </div>
         </div>
      </div>

  );
}

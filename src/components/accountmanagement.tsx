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
         <div className="w-full bg-white  shadow-md">
        {/* Header */}
        <div className="bg-[#2E0234] rounded-t-xl  w-full text-white text-center p-4 mb-6">
      <h1 className="text-2xl font-bold  mb-1">Account Management – Your Data, Your Control</h1>
      <p className=" mb-6 max-w-2xl">
Manage your data, temporarily deactivate your account, or request permanent deletion.
      </p>
</div>
           <div className="flex flex-col md:flex-row gap-6 mb-6 p-4">
 <div className="md:w-[55%] w-full mx-auto mt-10 bg-white border rounded-xl shadow-sm p-6 space-y-6" ref={pdfRef}>
   <div className="border-b border-[#1212121A] flex flex-col items-center justify-center text-center py-2">
  <h2 className="text-lg font-semibold text-gray-800">
    📂 Download Account Data
  </h2>
  <p className="text-sm text-gray-500 ">
    Get a copy of your transaction history, profile info, and store settings.
  </p>
</div>


      <div className="border-2 mb-6 border-dashed border-purple-300 rounded-lg p-8 flex flex-col items-center justify-center space-y-5 bg-purple-50">
        <div className="">
         <Image src="/assets/upload.svg" alt="Wallet Icon" width={40} height={40} />
        </div>
        <div className="text-sm font-medium text-gray-700">
          File Format:
          <select className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none">
            <option value="pdf">PDF</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold text-gray-700">Receive Also Via Email</label>
        <input
          type="email"
          defaultValue="temitopesoremekun2@gmail.com"
          className="mt-1 w-full border text-[#121212CC] border-gray-300 rounded-md px-3 py-2 "
        />
      </div>


           <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-8  mt-10 space-y-6">
             <div className="flex gap-4">
            <p className='text-red-600 text-md mb-2'>📌</p>
        <h2 className="text-md font-semibold text-gray-800"> Your Download Request Includes</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
          <p className='flex'> <strong>Profile Data:</strong> <span>Name, contact details, business settings</span></p>

        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm  pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        <strong>Sales Transactions:</strong> Order history, revenue breakdown
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
       <strong>Store Preferences:</strong> Language, saved configurations
        </div>
      </div>

   

      <button
        onClick={handleDownload}
        className="w-full bg-purple-700 mt-20 hover:bg-purple-800 text-white text-sm font-semibold py-4 rounded-lg flex justify-center items-center space-x-2"
      >
               
        <span>Request Download</span>
         <Image src="/assets/download.svg" alt="Wallet Icon" width={20} height={20} />
      </button>
    </div>
       

        {/* Active Devices & Login History */}
        <div className="flex flex-col  gap-6 md:w-[45%] w-full">
 <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
      <div className="text-center">
        <div className="flex justify-center">
            <p className='text-red-600 text-sm '>🚫</p>
       
        <h2 className="text-xl font-semibold text-gray-800">Deactivate Account</h2>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Temporarily disable your account. Reactivate anytime by logging back in.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-6">
        <p className="font-semibold flex gap-2 text-gray-700 mb-2 flex items-center">
           <AlertTriangle className=" text-sm" />
           <span>Important Notes</span>
            
        </p>
       

           <div className="bg-yellow-50 border border-yellow-100 rounded-lg  mt-6 space-y-2">
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        Your store will be hidden from customers
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm  pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        New orders won’t be accepted while deactivated.
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
        Pending transactions will still be processed.
        </div>
      </div>
      </div>

      <button
        className="w-full mt-6 bg-black text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
      >
      
        Deactivate My Account
          <Info size={18} className="text-white" />
      </button>
    </div>


        {/* Security Question & Backup Email */}
 <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-xl  bg-white">
      <div className="text-center">
        
        <div className="flex gap-4">
            <p className='text-red-600 text-2xl mb-2'>❌</p>
        <h2 className="text-xl font-semibold text-gray-800">Delete Account Permanently</h2>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          This action cannot be undone. It will remove all your account data, including
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-6 space-y-2">
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
          Store details &amp; products
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm  pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
          Order &amp; transaction history
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-sm pb-2 border-b border-[#1212121A] pt-2">
          <span className="text-white px-1 rounded-full text-sm bg-[#F6A704]">✔</span>
          Customer interactions
        </div>
      </div>

      <button
        className="w-full mt-6 bg-black text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
      >
      
        Request Account Deletion
          <Info size={18} className="text-white" />
      </button>
    </div>
        </div>
         </div>
      </div>

  );
}

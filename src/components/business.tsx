'use client';

import React, { useState } from 'react';
import { Pencil, UploadCloud } from 'lucide-react';
import { FiEdit2 } from "react-icons/fi";

interface StoreSettingsFormProps {
  initialBusinessName?: string;
  initialStoreUrl?: string;
  initialOperatingHours?: string;
  initialStoreSeenOnline?: boolean;
  onSave?: (data: {
    businessName: string;
    storeUrl: string;
    operatingHours: string;
    storeSeenOnline: boolean;
    logoFile: File | null;
  }) => void;
}

const StoreSettingsForm: React.FC<StoreSettingsFormProps> = ({
  initialBusinessName = "Ayomide's Fashion Hub",
  initialStoreUrl = "www.mydarads.com/ayomidehub",
  initialOperatingHours = "Monday - Saturday (9 AM - 8 PM)",
  initialStoreSeenOnline = false,
  onSave,
}) => {
  const [businessName, setBusinessName] = useState(initialBusinessName);
  const [storeUrl, setStoreUrl] = useState(initialStoreUrl);
  const [operatingHours, setOperatingHours] = useState(initialOperatingHours);
  const [storeSeenOnline, setStoreSeenOnline] = useState(initialStoreSeenOnline);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave?.({
      businessName,
      storeUrl,
      operatingHours,
      storeSeenOnline,
      logoFile,
    });
  };

  return (
    <div className='w-full flex justify-center'>
    <div className="w-[520px] bg-[#F9F9F9] md:pb-10 rounded-2xl">
      <div className="bg-[#100112] rounded-t-xl w-full text-white text-center p-4 px-8 pb-6">
        <h1 className="font-urbanist font-semibold text-[20px] text-white">
          Take Full Control Of Your Store
        </h1>
        <p className="font-inter text-[16px] text-white max-w-md">
          Manage your store details, business operations, and <br /> visibility settings effortlessly.
        </p>
      </div>
      

      <div className='w-[335px] mx-auto mt-20'>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Logo Upload */}
         <div className="flex flex-col items-center mb-6 relative">
             <div className="w-30 h-30 bg-[#EEE6FE80] rounded-full flex items-center justify-center relative border border-[#CBB1FC]">
               <FiEdit2 className="absolute bottom-1 right-1 text-purple-600 bg-white rounded-full p-1 w-5 h-5 cursor-pointer" />
             </div>
             <p className="font-inter font-medium text-[16px] leading-[160%] capitalize text-[#121212] mt-2">
               Upload Profile Picture
             </p>
           </div>

      
        {/* Business Name */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="businessName" className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">
              Business Name
            </label>
            <button type="button" className="text-[#5F04F6] text-sm font-medium flex items-center hover:underline">
              <Pencil size={16} className="mr-1" /> Edit
            </button>
          </div>
          <input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-[#39265980] font-inter text-sm text-[#121212CC]"
          />
        </div>

        {/* Store URL */}
        <div className="space-y-2">
          <label htmlFor="storeUrl" className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">
            Store URL
          </label>
          <input
            id="storeUrl"
            type="text"
            value={storeUrl}
            readOnly
            className="w-full px-4 py-3 rounded-md border border-[#39265980] bg-[#F4F4F5] font-inter text-sm text-[#121212CC] cursor-not-allowed"
          />
        </div>

        {/* Operating Hours */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="operatingHours" className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">
              Operating Hours
            </label>
            <button type="button" className="text-[#5F04F6] text-sm font-medium flex items-center hover:underline">
              <Pencil size={16} className="mr-1" /> Edit
            </button>
          </div>
          <input
            id="operatingHours"
            type="text"
            placeholder='Monday - Saturday (9 AM - 8 PM)'
            onChange={(e) => setOperatingHours(e.target.value)}
            className="w-full px-4 py-3 rounded-md font-inter text-sm text-[#121212CC]"
          />
        </div>

        {/* Store Seen Online Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">Get Your Store Seen Online</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={storeSeenOnline}
              onChange={() => setStoreSeenOnline(!storeSeenOnline)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#EEE6FE80] rounded-full peer peer-checked:bg-[#5F04F6] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#5F04F6] hover:bg-[#4E03D1] text-white py-4 rounded-xl font-urbanist text-[16px] tracking-wide transition"
        >
          Save Business Settings
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <StoreSettingsForm
      onSave={(data) => console.log('Saving business settings:', data)}
    />
  );
};

export default App;

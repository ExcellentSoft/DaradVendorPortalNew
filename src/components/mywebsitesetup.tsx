'use client';
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';

export default function Onboarding() {
  const [storeName, setStoreName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    storeName: '',
    businessEmail: '',
    businessPhone: '',
    description: ''
  });

  const handleValidation = () => {
    const newErrors = {
      storeName: '',
      businessEmail: '',
      businessPhone: '',
      description: ''
    };

    if (storeName.length < 3) {
      newErrors.storeName = 'Store name must be at least 3 characters.';
    }
    if (description.length > 150) {
      newErrors.description = 'Description is too long.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = () => {
    if (!handleValidation()) return;
    alert('Store information submitted successfully!');
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleLogoRemove = () => {
    setLogo(null);
  };

  return (
    <div className="min-h-[1400px] bg-white rounded-[8px] py-8 px-0 font-inter">
      {/* Header */}
      <div className="w-full px-6 flex justify-between items-start gap-[48px] mb-10">
        <div className="w-full max-w-[546px] flex flex-col gap-[8px]">
          <h1 className="text-[24px] font-urbanist font-bold leading-[100%] tracking-[2%] text-[#121212] capitalize">
            Set Up Your Online Store
          </h1>
          <p className="text-sm font-inter font-normal leading-[160%] text-[#121212CC]">
            Customize your store, add products, in just 5 steps and start selling in minutes.
          </p>
        </div>
        <div className="space-x-4 flex-shrink-0">
          <button className="px-5 py-2 rounded-lg text-[#5604F6] bg-[#F4EEFF] font-medium">Preview Website</button>
          <button className="px-5 py-2 rounded-lg text-white bg-[#5604F6] font-medium">Publish Website</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-[40px] px-6">
        {/* Navigation */}
        <div className="w-[275px] h-[382px] bg-white border border-[#1212121A] rounded-[12px] p-[24px_20px] flex flex-col gap-[20px]">
          <div className="flex justify-between items-center font-inter font-semibold text-[16px] tracking-[2%] text-[#121212] capitalize">
            <span>Steps</span>
            <span className="text-[#5604F6] font-semibold">1 of 5</span>
          </div>
          <ul className="space-y-3">
            {[
              'Store Information Setup',
              'Brand Customization',
              'Product Showcase',
              'Domain Setup',
              ' Publish'
            ].map((step, index) => (
              <li
                key={index}
                className={`w-[235px] h-[43px] flex items-center gap-2 px-3 py-2 font-medium text-sm ${
                  index === 0
                    ? 'bg-[#5604F6] text-white rounded-[8px] border-l-[1px]'
                    : 'text-[#121212] border-b border-[#12121233]'
                }`}
              >
                <span>{index === 0 ? '✔' : '○'}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Input Form */}
        <div className="flex-1 bg-white border border-[#E4E4E7] rounded-[8px] overflow-hidden h-[1056px]">
          {/* Form Header */}
          <div className="bg-[#392659] text-white px-10 py-10 border-b border-gray-200 text-center space-y-2 rounded-t-[8px]">
            <h1 className="font-semibold text-2xl">Kickstart Your Online Store</h1>
            <p>Fill in the essential details to get your store up and running in minutes</p>
          </div>

          {/* Form Body */}
          <div className="px-10 py-8 space-y-8">
            {/* Logo Upload */}
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-lg font-semibold text-[#181D27] mb-1">Store Logo</h2>
              <p className="text-sm text-[#6C606C] mb-4">Upload a clear, high-quality logo (PNG, JPG, or SVG).</p>
              {logo ? (
                <div className="relative w-[300px] h-[200px] bg-[#EEE6FE] border border-[#5604F6] rounded-md overflow-hidden">
                  <Image src={logo} alt="Logo" layout="fill" objectFit="cover" />
                  <div className="absolute top-2 right-2 flex flex-col space-y-1">
                    <button title="Open in new tab" className="bg-white p-1 rounded hover:bg-gray-100">↗</button>
                    <button title="Download" className="bg-white p-1 rounded hover:bg-gray-100">⬇</button>
                    <button title="Remove" onClick={handleLogoRemove} className="bg-white p-1 rounded text-red-600 hover:bg-red-100">🗑</button>
                  </div>
                </div>
              ) : (
                <div className="w-[300px] h-[200px] border-2 border-dashed border-[#5604F6] bg-[#EEE6FE] flex flex-col justify-center items-center rounded-md text-center">
                  <svg className="h-6 w-6 text-purple-700 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="font-medium text-[#181D27]">Drop file or browse</p>
                  <p className="text-xs text-[#6C606C]">Format: .jpeg, .png & Max file size: 25 MB</p>
                  <label className="mt-2 inline-block bg-[#5604F6] text-white px-4 py-1 rounded cursor-pointer">
                    Browse Files
                    <input type="file" onChange={handleLogoUpload} accept="image/*" className="hidden" />
                  </label>
                </div>
              )}
            </div>

            {/* Input Fields */}
            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <label className="font-semibold text-[#101928]">Store Name</label>
                <input
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Enter store name"
                  className={`w-full border px-4 py-2 rounded-[8px] mt-1 ${
                    errors.storeName ? 'border-red-500' : 'border-[#D0D5DD]'
                  }`}
                />
                {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName}</p>}
              </div>
              <div>
                <label className="font-semibold text-[#101928]">Business Email</label>
                <input
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  placeholder="Enter business email"
                  className="w-full border border-[#D0D5DD] px-4 py-2 rounded-[8px] mt-1"
                />
              </div>
              <div>
                <label className="font-semibold text-[#101928]">Business Phone Number</label>
                <input
                  value={businessPhone}
                  onChange={(e) => setBusinessPhone(e.target.value)}
                  placeholder="Enter business phone number"
                  className="w-full border border-[#D0D5DD] px-4 py-2 rounded-[8px] mt-1"
                />
              </div>
              <div>
                <label className="font-semibold text-[#101928]">Store Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Max 150 characters"
                  rows={3}
                  maxLength={150}
                  className="w-full border border-[#D0D5DD] px-4 py-2 rounded-[8px] mt-1 resize-none"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8 max-w-md mx-auto">
              <button className="px-6 py-2 border border-purple-200 text-[#5604F6] rounded-[8px] font-semibold">Cancel</button>
              <button
                onClick={handleSubmit}
                disabled={!storeName || !businessEmail || !businessPhone}
                className={`px-6 py-2 rounded-[8px] font-semibold text-white ${
                  !storeName || !businessEmail || !businessPhone
                    ? 'bg-purple-300 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

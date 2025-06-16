'use client';

import React, { useState } from "react";
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi'; 
import { Upload } from "lucide-react";
import Customerbrand from './customerbrand'; 
import Productshowcase from './productshowcase'; 
import DomainSetup from "./storelink";
import Preview from "./preview";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("Store Information Setup");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const tabs = [
    "Store Information Setup",
    "Brand Customization",
    "Product Showcase",
    "Domain Setup",
    "Preview & Publish"
  ];



  const [storeLogo, setStoreLogo] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [storeName, setStoreName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!storeName) newErrors.storeName = 'Store name is required';
    if (!businessEmail) newErrors.businessEmail = 'Business email is required';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!storeDescription) newErrors.storeDescription = 'Store description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setStoreLogo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    alert('Store info submitted');
  };

  return (
 

       <div className="min-h-screen bg-white w-full  ">
      {/* Header */}
      <header className="border-b rounded-b py-4 px-6  gap-6 flex justify-between items-center">
        <div>
          <h1 className="text-lg text-[#121212] font-bold">Set Up Your Online Store</h1>
          <p className="text-sm text-[#121212CC]">Customize your store, add products, import orders & setup and start selling in minutes.</p>
        </div>
        <div className="flex space-x-4">
          <button className="text-[#5604F6] border border-[#E6D9FE] rounded-md px-3">Preview Website</button>
          <button className="bg-[#5604F6] text-white px-4 py-2 rounded">Publish Website</button>
        </div>
      </header>

      <div className="flex w-full mt-8">
           <aside className="w-[350px] p-4">
        <div className="bg-white rounded-xl shadow p-8 space-y-6">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition
                ${activeTab === tab ? "bg-[#5604F6] text-white border border-white" : "text-[#121212CC]"}`}
            >
              <span
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-3xl
                  ${activeTab === tab ? "border-white text-white" : "bg-gray-100 border-gray-400 text-gray-400"}`}
              >
                ●
              </span>
              <span className="font-medium">{tab}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-[750px] flex-1 ">
        {/* Store Information Setup Tab */}
        {activeTab === "Store Information Setup" && (
         <div className="flex items-center justify-center min-h-screen ">
  <main className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
    <div className="border-b mb-3 w-full pb-3">
      <h2 className="text-xl font-semibold text-center text-[#000000] mb-2">
        Kickstart Your Online Store
      </h2>
      <p className="text-[#121212CC] text-center">
        Fill in the essential details to get your store up and running in minutes
      </p>
    </div>

    <form onSubmit={handleSubmit}>
      {/* Logo Upload */}
      <div className="mb-6 border rounded-md p-4">
        <label className="block text-sm text-[#181D27] font-semibold mb-2">
          Store Logo
        </label>
        <p className="text-[#6C606C] mb-2">Upload a clear, high-quality logo (PNG, JPG, or SVG).</p>
        {preview ? (
       <div className="relative w-full h-48 border border-gray-300 rounded-lg overflow-hidden">
    <img src={preview} alt="Preview" className="object-cover w-full h-full" />

    {/* Right-side action icons */}
    <div className="absolute top-2 right-2 flex flex-col space-y-2">
      <button
        type="button"
        className="bg-white p-1 rounded shadow hover:bg-gray-100"
        title="View"
        onClick={() => window.open(preview, '_blank')}
      >
        <FiEye className="text-gray-600" />
      </button>
      <label className="bg-white p-1 rounded shadow hover:bg-gray-100 cursor-pointer" title="Replace">
        <FiEdit2 className="text-gray-600" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <button
        type="button"
        className="bg-white p-1 rounded shadow hover:bg-red-100"
        title="Delete"
        onClick={() => {
          setStoreLogo(null);
          setPreview('');
        }}
      >
        <FiTrash2 className="text-red-500" />
      </button>
    </div>
  </div>
        ) : (
         <label className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex items-center justify-center relative overflow-hidden">
  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleFileChange}
  />
  <div className="flex flex-col items-center text-center">
    <Upload className="text-[#5604F6] h-6 w-6 mb-2" />
    <p className="text-sm text-gray-600">Drop logo image or browse</p>
    <p className="text-xs text-gray-400 mt-1">Format: .jpg, .jpeg, .png, .svg | Max size: 25 MB</p>
    <div className="mt-3 inline-block px-4 py-1 text-sm font-medium text-white bg-[#5604F6] rounded ">
      Browse Files
    </div>
  </div>
</label>

        )}
      </div>

      {/* Store Name */}
      <div className="mb-4">
        <label className="block text-black text-md font-semibold mb-1" htmlFor="storeName">
          Store Name
        </label>
        <input
          id="storeName"
          type="text"
          placeholder="Store Name"
          className={`w-full p-2 border ${errors.storeName ? 'border-red-500' : 'border-[#1E015680]'} rounded-md`}
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        {errors.storeName && <p className="text-red-500 text-sm mt-1">{errors.storeName}</p>}
      </div>

      {/* Business Email */}
      <div className="mb-4">
        <label className="block text-black text-md font-semibold mb-1" htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          placeholder="Business Email"
          className={`w-full p-2 border ${errors.businessEmail ? 'border-red-500' : 'border-[#1E015680]'} rounded-md`}
          value={businessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
        />
        {errors.businessEmail && <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-black text-md font-semibold mb-1" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Phone Number"
          className={`w-full p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-[#1E015680]'} rounded-md`}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Store Description */}
      <div className="mb-4">
        <label className="block text-black text-md font-semibold mb-1" htmlFor="storeDescription">
          Store Description
        </label>
        <textarea
          placeholder="Store Description"
          className={`w-full p-2 border ${errors.storeDescription ? 'border-red-500' : 'border-[#1E015680]'} rounded-md`}
          value={storeDescription}
          onChange={(e) => setStoreDescription(e.target.value)}
        ></textarea>
        {errors.storeDescription && (
          <p className="text-red-500 text-sm mt-1">{errors.storeDescription}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button type="button" className="px-6 py-2  text-[#5604F6]  border border-[#E6D9FE] rounded-md">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-[#5604F6] text-white rounded-md disabled:opacity-50">
          Save & Continue
        </button>
      </div>
    </form>
  </main>
</div>

        )}

        {/* Brand Customization Tab */}
        {activeTab === "Brand Customization" && (
          <div className="">
            <Customerbrand />
          </div>
        )}

        {/* Product Showcase Tab */}
        {activeTab === "Product Showcase" && (
          <div className="">
            <Productshowcase />
          </div>
        )}

        {/* Domain Setup Tab */}
        {activeTab === "Domain Setup" && (
          <div className="">
            <DomainSetup />
          </div>
        )}

        {/* Preview & Publish Tab */}
        {activeTab === "Preview & Publish" && (
          <div className="">
            <Preview />
          </div>
        )}
      </main>

</div>
    </div>
  );
}

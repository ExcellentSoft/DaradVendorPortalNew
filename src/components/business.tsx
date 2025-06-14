import React, { useState } from "react"; 
import { FiEdit2 } from "react-icons/fi";

const BusinessForm: React.FC = () => {
  const [name, setName] = useState("Temitope Soremekun");
  const [email] = useState("temitopesoremekun2@gmail.com");
  const [phone, setPhone] = useState("09029717250");

  const [isEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  return (
       <div className="w-full max-w-lg  ">
       <div className="w-full max-w-[1000px] bg-white rounded-t-xl   ">
        {/* Header */}
      <div className="w-full max-w-[1000px]    text-black border-b border-[#1212121A] text-center py-4 mb-6">
  <h2 className="text-lg font-semibold mb-2">Take Full Control of Your Store</h2>
  <p className="w-96 mx-auto text-Color/80 text-sm font-normal leading-snug">
    Manage your store details, business operations, and visibility settings effortlessly.
  </p>
</div>


        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-6   relative">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
            <FiEdit2 className="absolute bottom-1 right-1 text-purple-600 bg-white rounded-full p-1 w-5 h-5 cursor-pointer" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Upload Profile Picture</p>
        </div>

        {/* Full Name */}
        <div className="mb-6 p-6">
                <div className="flex justify-between">
          <label className="block text-sm text-gray-600 mb-3">Full Name</label>
        <div className="flex gap-1 bg-white rounded-md">
  
  <FiEdit2
        className=" mt-1 text-purple-600 cursor-pointer"
        onClick={() => setIsEditingPhone(!isEditingPhone)}
        title="Edit phone number"
      />
      <span className="text-[#5F04F6] text-md font-semibold">
      Edit
      </span>

      </div>
        </div>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!isEditingName}
              className={`w-full p-4 border border-[#392659] text-[#121212] rounded-md focus: ${
                isEditingName ? " bg-white  border-gray-400" : " cursor-not-allowed"
              }`}
            />
          
          </div>
        </div>

        {/* Email (Read Only) */}
        <div className="mb-6 p-6">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-4 border rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Phone Number */}
       <div className=" mb-6 p-6">
        <div className="flex justify-between">
  <label className="block text-sm text-gray-600 mb-3">Phone Number</label>
  <div className="flex gap-1 bg-white rounded-md">
  
  <FiEdit2
        className="mt-1 text-purple-600 cursor-pointer"
        onClick={() => setIsEditingPhone(!isEditingPhone)}
        title="Edit phone number"
      />
      <span className="text-[#5F04F6] text-md font-semibold">
      Edit
      </span>

      </div>
      </div>
<div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
      {/* Country code box */}
      <span className="px-3 py-4 bg-gray-100 border-r border-gray-300 text-sm text-gray-700">
        +234
      </span>

      {/* Phone input */}
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        readOnly={!isEditingPhone}
        className={`px-3 py-4 text-sm text-[#121212] outline-none ${
          isEditingPhone
            ? "bg-white text-[#121212]"
            : " cursor-not-allowed"
        }`}
        placeholder="09029717250"
      />

      {/* Edit icon */}
      
    </div>
</div>


        {/* Action Buttons */}
        <div className="flex justify-center mt-12 items-center gap-5 mb-6 p-6">
          <button className="px-4 py-3 border border-[#5F04F6] text-[#5F04F6] rounded-md hover:bg-purple-50 transition">
            Discard Changes
          </button>
          <button className="px-4 py-3 bg-[#5F04F6] text-white rounded-md hover:bg-purple-800 transition">
            Save Changes
          </button>
        </div>
      </div>
      </div>
   
  );
};

export default BusinessForm;

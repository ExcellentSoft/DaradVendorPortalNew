import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const ProfileForm: React.FC = () => {
  const [name, setName] = useState("Temitope Soremekun");
  const [email] = useState("temitopesoremekun2@gmail.com");
  const [phone, setPhone] = useState("09029717250");

  const [isEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}


           <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Update Your Profile – Keep Your Account Up To Date
        </h2>
        <p className="text-gray-800 mb-6">
          Manage your personal details, contact information, and preferences effortlessly.
        </p>
        <div className="flex space-x-2 bg-white p-2 rounded-lg shadow mb-6">
          {[
            "Profile",
            "Account Preference",
            "Account Management",
            "Business",
            "Notification",
            "Payment",
            "Security",
          ].map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md text-sm ${
                tab === "Profile"
                  ? "bg-[#5F04F6] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Info Section */}
      <div className="flex justify-center min-h-screen ">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md">
        {/* Header */}
        <div className="bg-[#2E0234]  w-full max-w-lg text-white text-center py-4 mb-6">
          <h2 className="text-lg font-semibold">Profile Information Section</h2>
          <p className="text-sm">Your profile details help us personalize your experience on My Darads.</p>
        </div>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-6 p-6  relative">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
            <FiEdit2 className="absolute bottom-1 right-1 text-purple-600 bg-white rounded-full p-1 w-5 h-5 cursor-pointer" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Upload Profile Picture</p>
        </div>

        {/* Full Name */}
        <div className="mb-6">
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
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-4 border rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Phone Number */}
       <div className="mb-6">
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
        <div className="flex justify-center mt-12 items-center gap-5">
          <button className="px-4 py-3 border border-[#5F04F6] text-[#5F04F6] rounded-md hover:bg-purple-50 transition">
            Discard Changes
          </button>
          <button className="px-4 py-3 bg-[#5F04F6] text-white rounded-md hover:bg-purple-800 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default ProfileForm;

import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import AccountPreferences from "./accountpreference";
import BusinessForm from "./business";
import NotificationsPage from "./notification";
import SecuritySettingsPage from "./security";
import PaymentSettings from "./payment";
import AccountManagent from "./accountmanagement";

const ProfileForm: React.FC = () => {
  const [name, setName] = useState("Temitope Soremekun");
  const [email] = useState("temitopesoremekun2@gmail.com");
  const [phone, setPhone] = useState("09029717250");
const [activeTab, setActiveTab] = useState("Profile");

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}

        <div className="text-start mb-10">
           <h2 className="font-urbanist font-bold text-[20px] leading-[100%] tracking-[0.02em] capitalize text-black mb-2">
          Update Your Profile – Keep Your Account Up To Date
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[100%] text-[#121212CC] mb-6 ">
          Manage your personal details, contact information, and preferences effortlessly.
        </p>
        </div>
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
    onClick={() => setActiveTab(tab)}
    className={`px-4 py-2 rounded-md text-sm ${
      activeTab === tab
        ? "bg-[#5F04F6] font-inter font-semibold text-[16px] leading-[100%] capitalize text-white"
        : "font-inter font-normal text-[16px] leading-[100%] text-[#121212CC] hover:bg-gray-100"
    }`}
  >
    {tab}
  </button>
))}

        </div>

        {/* Profile Info Section */}
     <div className="flex justify-center">
  {activeTab === "Profile" && (
    <div className="w-full max-w-lg bg-white rounded-xl pb-10">
      {/* Header */}
      <div className="bg-[#100112] rounded-t-xl w-full max-w-lg text-white text-center py-4 pb-6 mb-6">
        <h2 className="font-urbanist font-semibold text-[20px] leading-[100%] tracking-[0.02em] text-center capitalize text-white mb-2">
          Profile Information Section
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[160%] text-center text-white">
          Your profile details help us personalize your experience on My Darads.
        </p>
      </div>
 <div className="px-10 ">
      {/* Profile Image Upload */}
      <div className="flex flex-col items-center mb-6 relative">
        <div className="w-30 h-30 bg-[#EEE6FE80] rounded-full flex items-center justify-center relative border border-[#CBB1FC]">
          <FiEdit2 className="absolute bottom-1 right-1 text-purple-600 bg-white rounded-full p-1 w-5 h-5 cursor-pointer" />
        </div>
        <p className="font-inter font-medium text-[16px] leading-[160%] capitalize text-[#121212] mt-2">
          Upload Profile Picture
        </p>
      </div>

      <div className="space-y-6 px-6"> {/* Wrapper with vertical gap */}
        {/* Full Name */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">
              Full Name
            </label>
            <div className="flex gap-1 bg-white rounded-md">
              <FiEdit2
                className="mt-1 text-purple-600 cursor-pointer"
                onClick={() => setIsEditingName(!isEditingName)}
                title="Edit name"
              />
              <span className="text-[#5F04F6] text-md font-semibold">Edit</span>
            </div>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!isEditingName}
            className={`w-full p-4 border border-[#39265980] text-[#121212] rounded-md ${
              isEditingName ? "bg-white" : "cursor-not-allowed"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-2 block">
            Email
          </label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-4 border border-[#39265980] rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Phone Number */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928]">
              Phone Number
            </label>
            <div className="flex gap-1 bg-white rounded-md">
              <FiEdit2
                className="mt-1 text-purple-600 cursor-pointer"
                onClick={() => setIsEditingPhone(!isEditingPhone)}
                title="Edit phone number"
              />
              <span className="text-[#5F04F6] text-md font-semibold">Edit</span>
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
            <span className="px-3 py-4 bg-gray-100 border-r border-gray-300 text-sm text-gray-700">
              +234
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              readOnly={!isEditingPhone}
              className={`px-3 py-4 text-sm text-[#121212] outline-none w-full ${
                isEditingPhone ? "bg-white" : "cursor-not-allowed"
              }`}
              placeholder="09029717250"
            />
          </div>
        </div>
      </div>


      {/* Action Buttons */}
      <div className="flex justify-between mt-10 items-center gap-5 mb-6 px-6">
        <button className=" w-full px-4 py-3 border border-[#5F04F6] text-[#5F04F6] font-urbanist font-semibold text-[16px] leading-[150%] capitalize rounded-xl hover:bg-purple-50 transition">
          Discard Changes
        </button>
        <button className=" w-full px-4 py-3 bg-[#5F04F6] hover:bg-[#4E03D1] text-white font-urbanist font-semibold text-[16px] leading-[150%] capitalize rounded-xl transition">
          Save Changes
        </button>
      </div>
      </div>


    </div>
  )}

  {activeTab === "Account Preference" && <AccountPreferences />}
  {activeTab === "Business" && <BusinessForm />}
  {activeTab === "Notification" && <NotificationsPage />}
  {activeTab === "Security" && <SecuritySettingsPage />}
  {activeTab === "Payment" && <PaymentSettings />}
  {activeTab === "Account Management" && <AccountManagent />}
</div>

      </div>
    </div>
  );
};

export default ProfileForm;

import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

export default function SecuritySettingsPage() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
const [deviceList] = useState([
  { id: 1, device: '📱 iPhone 13', location: 'Lagos, NG', time: ' Active Now' },
  { id: 2, device: ' 💻 MacBook Pro ', location: 'Lagos, NG', time: ' Active 2 Days Ago' },
  { id: 3, device: '🖥️ Windows PC ', location: 'Abuja, NG', time: ' Active 1 week ago' },
]);


  return (
         <div className="w-full bg-white  shadow-md">
        {/* Header */}
        <div className="bg-[#2E0234] rounded-t-xl  w-full text-white text-center py-4 mb-6">
      <h1 className="text-2xl font-bold  mb-1">Security Settings – Protect Your Account</h1>
      <p className=" mb-6 max-w-2xl">
        For security & your privacy. Manage your login credentials, enable extra protection, and track active devices.
      </p>
</div>
           <div className="flex flex-col md:flex-row gap-6 mb-6 p-6">
      <div className="w-full md:w-[50%] bg-white rounded-2xl border border-[#1212121A]">
  <div className="text-center mb-6 border-b border-[#1212121A] py-4">
    
    <h2 className="text-lg text-[#000000] font-semibold mt-1">🔑 Change Password</h2>
    <p className="text-sm text-gray-500 mt-1">Secure your account by updating your password regularly.</p>
  </div>
  <form className="space-y-4 p-6">
       <div className="relative">
          <input
            type={showCurrent ? "text" : "password"}
            placeholder="Current Password"
            className="w-full p-3 pr-10 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
    <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            placeholder="New Password"
            className="w-full p-3 pr-10 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
  <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm New Password"
            className="w-full p-3 pr-10 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
    <button
      type="submit"
      className="w-full bg-[#5F04F6]  text-white text-sm font-medium py-3 rounded-xl transition-colors"
    >
      Update Password
    </button>
  </form>
</div>


        {/* Two-Factor Authentication */}
 <div className="w-full md:w-[50%] bg-white rounded-2xl border border-[#1212121A] space-y-6">
      {/* Header */}
 <div className="text-center mb-6 border-b border-[#1212121A] p-4">
        <h2 className="text-xl font-semibold text-[#000000] flex items-center space-x-2">
      🔐 Two-Factor Authentication (2FA)
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Add an extra layer of security by enabling 2FA.
        </p>
      </div>

      {/* Toggle Section */}
      <div className=" p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm text-gray-700">Enable 2FA</span>
          <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
              twoFAEnabled ? 'bg-indigo-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 ${
                twoFAEnabled ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Toggle switch to enable or disable 2FA instantly.
        </p>
      </div>

      {/* Verification Section */}
      <div className="border-t p-4 space-y-4">
        <h3 className="font-semibold text-sm text-gray-800">Verify Your Identity</h3>

        {/* Email OTP */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Email OTP</label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              disabled={!twoFAEnabled}
              className={`flex-1 p-2 rounded-md text-sm bg-gray-50 border ${
                twoFAEnabled ? 'border-gray-300' : 'bg-gray-100 text-gray-400'
              }`}
            />
            <button
              disabled={!twoFAEnabled}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                twoFAEnabled
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-purple-100 text-purple-300 cursor-not-allowed'
              }`}
            >
              Request OTP
            </button>
          </div>
        </div>

        {/* Phone OTP */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Phone OTP</label>
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="Enter your phone number"
              disabled={!twoFAEnabled}
              className={`flex-1 p-2 rounded text-sm bg-gray-50 border ${
                twoFAEnabled ? 'border-gray-300' : 'bg-gray-100 text-gray-400'
              }`}
            />
            <button
              disabled={!twoFAEnabled}
              className={`px-4 py-2 rounded text-sm font-medium ${
                twoFAEnabled
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-purple-100 text-purple-300 cursor-not-allowed'
              }`}
            >
              Request OTP
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* Active Devices & Login History */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
       <div className="w-full md:w-[55%] bg-white border border-[#1212121A] rounded-2xl p-6 shadow space-y-6">
  {/* Section Header */}
   <div className="mb-6 border-b border-[#1212121A] p-4">
  <h2 className=" font-semibold flex text-[#000000] gap-2">
🖥️ Active Devices & Login History
  </h2>
  <p className="text-sm text-gray-500 mt-1">Track where your account is logged in and manage your access securely.</p>
  {/* Search Field */}
  </div>
<div className="relative flex bg-[#FBFCFC] ml-40 ">
  
  <input
    type="text"
    placeholder="Enter device name…"
    className="w-full md:w-24 flex-1 max-w-[200px] text-[#6E6B7B] border rounded-lg px-8 py-2 "
  />
  <FiSearch className="text-gray-500 text-lg absolute top-2.5 left-3" />
</div>


  {/* Currently Logged-In Devices Header */}
  <div className="text-sm font-medium text-[#121212]">📌 Currently Logged-In Devices</div>

  {/* Auto Logout + Alert Settings */}
  <div className="space-y-4 text-sm border border-[#1212121A] p-2 bg-[#12121208] ">
    <div className="flex items-center justify-between border-b border-[#1212121A] ">
      <span className='text-[#121212CC]'>Auto logout after inactivity</span>
      <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
              twoFAEnabled ? 'bg-indigo-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 ${
                twoFAEnabled ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
    </div>
    <div>
      <span className="block text-[#121212CC] mb-1 ">Receive new login alerts</span>
      <div className="flex gap-4">
        <label className="flex items-center text-[#12121299] gap-1">
          <input type="radio" name="alert" className="form-radio text-indigo-600" defaultChecked />
          Email
        </label>
        <label className="flex items-center text-[#12121299] gap-1">
          <input type="radio" name="alert" className="form-radio text-indigo-600" />
          SMS
        </label>
      </div>
    </div>
  </div>

  {/* Device List */}
  <ul className="space-y-4">
    {deviceList.map((device) => (
      <li
        key={device.id}
        className="flex justify-between items-start border p-4 rounded-lg"
      >
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 form-checkbox h-4 w-4 text-indigo-600" />
          <div>
            <div className='flex gap-3'>
            <p className="font-medium text-[#121212E5]">{device.device}</p>
             <p className="text-sm text-green-600">{device.time}</p>
           
</div>
            <p className="text-sm text-gray-500">{device.location}</p>
          </div>
        </div>
        <button className="text-sm text-indigo-600 hover:underline mt-1">Logout</button>
      </li>
    ))}
  </ul>

  {/* Logout All Devices Button */}
  <button className="w-full bg-indigo-600 text-white py-2 rounded-xl font-medium hover:bg-indigo-700 transition">
    Log Out From All Devices
  </button>
</div>


        {/* Security Question & Backup Email */}
      <div className="w-full md:w-[55%] bg-white  border border-[#1212121A] rounded-2xl shadow ">
        <div className='p-4'>
  {/* Main Title */}
  <div className=''>
  <h2 className="text-lg font-semibold mb-2 text-[#000000]">🔐 Security Question & Recovery Options</h2>
  <p className="text-sm text-[#12121299] mb-6 border-b border-[#12121299]">
    Enhance your account security with a recovery question and backup email.
  </p>
</div>
  {/* Security Question Section */}
  <div className="mb-6 border border-[#1212121A]  rounded-md p-4">
    <h3 className="font-medium text-sm text-gray-700 mb-2">🔑 Security Question Section</h3>
    <p className="text-xs text-gray-500 mb-3">
      Ensure account recovery by setting a secure question.
    </p>

    <select className="w-full p-3 mb-3 border rounded-t-lg bg-[#1E0156]  text-sm">
      <option>What Is Your Mother's Maiden Name?</option>
      <option>What Is Your First Pet's Name?</option>
      <option>What Was the Name of Your First School?</option>
    </select>

    <div className="relative">
      <input
        type="text"
        placeholder="Enter your answer"
        className="w-full p-2 border rounded pr-10 text-sm"
      />

         <span
            className="absolute right-2 top-2  text-gray-500 cursor-pointer"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
    
    </div>
  </div>
</div>
  {/* Backup Email Section */}
  <div className='border border-[#1212121A] rounded-md m-4'>
    <div className='border-b border-[#1212121A] p-2'>
    <h3 className="font-medium text-sm text-gray-700 mb-2">📩 Backup Email Section</h3>
    <p className="text-xs text-gray-500 mb-3">
      Your backup email helps you regain access to your account.
    </p>
</div>
<div className='p-5'>
             <div className="flex justify-between mt-16">
                <label className="block text-sm text-gray-600 mb-3"> Current Backup Email</label>
              <div className="flex gap-1 bg-white rounded-md">
        
        <FiEdit2
              className=" mb-2 text-purple-600 cursor-pointer"
             
            />
            <span className="text-[#5F04F6] text-sm font-semibold">
            Edit
            </span>
      
            </div>
              </div>
    <div className="relative">

      <input
        type="email"
        value="Temitope Soremekun"
        className="w-full p-2 border border-[#1212121A] rounded text-sm"
        disabled
      />
     
    </div>
    </div>
  </div>
</div>

        </div>
      </div>

  );
}

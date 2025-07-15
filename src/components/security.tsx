import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";




export default function SecuritySettingsPage() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertMethod, setAlertMethod] = useState('Email');
const [deviceList] = useState([
  { id: 1, device: '📱 iPhone 13', location: 'Lagos, NG', time: ' Active Now' },
])

const [deviceList2] = useState([
  { id: 2, device: ' 💻 MacBook Pro ', location: 'Lagos, NG', time: ' Active 2 Days Ago' },
  { id: 3, device: '🖥️ Windows PC ', location: 'Abuja, NG', time: ' Active 1 week ago' },]);




  return (
         <div className="w-full bg-white  shadow-md">
        {/* Header */}
<div className="bg-[#100112] rounded-t-xl w-full text-white text-left p-4 px-8 pb-6">
  <h1 className="font-urbanist font-semibold text-[20px] leading-[100%] tracking-[0.02em] capitalize text-white mb-1">
    🔒 Security Settings – Protect Your Account
  </h1>
  <p className="mt-2 max-w-2xl font-inter font-normal text-[16px] leading-[160%] tracking-[0%] text-white whitespace-nowrap">
    For security & your privacy. Manage your login credentials, enable extra protection, and track active devices.
  </p>
</div>


           <div className="flex flex-col md:flex-row gap-6 mb-6 p-6 mt-8 justify-between">
      <div className="w-full md:w-[48%] bg-white rounded-2xl border border-[#1212121A] pt-4">
  <div className="text-center mb-6 border-b border-[#1212121A] py-4">
    <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-black mt-1">🔑 Change Password</h2>
    <p className="font-inter font-normal text-[14px] leading-[100%] tracking-normal text-center text-[#12121299] mt-3">Secure your account by updating your password regularly.</p>
  </div>
<form className="space-y-6 p-6 font-inter text-[#101928]">
  {/* Current Password */}
  <div className="w-full">
    <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-1">Current Password</label>
    <div className="relative">
      <input
        type={showCurrent ? "text" : "password"}
        placeholder="***********"
        className="w-full p-3 py-2 pr-10 border border-[#D0D5DD] rounded-lg text-[#101928] placeholder-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#5F04F6]"
      />
      <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3] cursor-pointer"
        onClick={() => setShowCurrent(!showCurrent)}
      >
        {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
      </span>
    </div>
  </div>

  {/* New Password */}
  <div className="w-full">
    <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-1">New Password</label>
    <div className="relative">
      <input
        type={showNew ? "text" : "password"}
        placeholder="***********"
        className="w-full p-3 pr-10 border border-[#D0D5DD] rounded-lg text-[#101928] placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#5F04F6]"
      />
      <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3] cursor-pointer"
        onClick={() => setShowNew(!showNew)}
      >
        {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
      </span>
    </div>
  </div>

  {/* Confirm New Password */}
  <div className="w-full">
    <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-1">Confirm New Password</label>
    <div className="relative">
      <input
        type={showConfirm ? "text" : "password"}
        placeholder="***********"
        className="w-full p-3 py-2 pr-10 border border-[#D0D5DD] rounded-lg text-[#101928] placeholder-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#5F04F6]"
      />
      <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3] cursor-pointer"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
      </span>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-[#5F04F6] text-white text-sm font-medium py-3 rounded-xl transition-colors hover:bg-[#4E03D1]"
  >
    Update Password
  </button>
</form>
</div>


        {/* Two-Factor Authentication */}
 <div className="w-full md:w-[48%] bg-white rounded-2xl border border-[#1212121A] space-y-6 pt-4">
      {/* Header */}
 <div className="text-center mb-6 border-b border-[#1212121A] p-4">
        <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-black">
      🔐 Two-Factor Authentication (2FA)
        </h2>
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-normal text-center text-[#12121299] mt-3">
          Add an extra layer of security by enabling 2FA.
        </p>
      </div>

      {/* Toggle Section */}
      <div className=" p-4 border-b border-[#1212121A] pb-4">
        <div className="flex items-center justify-between ">
          <span className="font-medium text-sm text-gray-700">Enable 2FA</span>
          <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
              twoFAEnabled ? 'bg-[#5F04F6]' : 'bg-[#EEE6FE]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 ${
                twoFAEnabled ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        <p className="font-inter font-normal text-[12px] leading-[100%] tracking-normal text-left text-[#121212CC] mt-1">
          Toggle switch to enable or disable 2FA instantly.
        </p>
      </div>

      {/* Verification Section */}
      <div className="border-t-2 border-[#12121299] p-4 space-y-4 mt-14 pt-8">
        <h3 className="font-semibold text-sm text-gray-800">Verify Your Identity</h3>

        {/* Email OTP */}
        <div>
          <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-2">Email OTP</label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              disabled={!twoFAEnabled}
              className={`flex-1 p-2 rounded-lg text-sm bg-gray-50 ${
                twoFAEnabled ? 'border-gray-300 text-gray-400' : 'bg-[#D0D5DD] text-gray-300'
              }`}
            />
            <button
              disabled={!twoFAEnabled}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                twoFAEnabled
                  ? 'bg-[#5F04F6] text-white'
                  : 'bg-[#EEE6FE] text-white cursor-not-allowed'
              }`}
            >
              Request OTP
            </button>
          </div>
        </div>

        {/* Phone OTP */}
        <div>
          <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-2">Phone OTP</label>
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="Enter your phone number"
              disabled={!twoFAEnabled}
              className={`flex-1 p-2 rounded-lg text-sm bg-gray-50 ${
                twoFAEnabled ? 'border-gray-300 text-gray-400' : 'bg-[#D0D5DD] text-gray-300'
              }`}
            />
            <button
              disabled={!twoFAEnabled}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                twoFAEnabled
                  ? 'bg-[#5F04F6] text-white'
                  : 'bg-[#EEE6FE] text-white cursor-not-allowed'
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
     <div className="flex flex-col md:flex-row gap-6 mb-6 p-4 md:p-6">

       <div className="w-full md:w-[45%] bg-white rounded-2xl border border-[#1212121A] space-y-6 pt-4">
  {/* Section Header */}
   <div className=" mb-6 border-b border-[#1212121A] p-4">
  <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-left text-black">
    🖥️ Active Devices & Login History
  </h2>
  <p className="font-inter font-normal text-[14px] leading-[100%] tracking-normal text-left text-[#12121299] mt-3">
    Track where your account is logged in and manage your access securely.
  </p>
</div>


<div className='px-4 space-y-4 pt-4'>

<div className="relative flex bg-[#FBFCFC] ml-0 md:ml-40 justify-between gap 4 items-center ">

  
  <input
    type="text"
    placeholder="Enter device name…"
    className="w-full md:w-24 flex-1 max-w-[200px] font-inter font-normal text-[12px] leading-[100%] tracking-normal text-[#6E6B7B] border border-[#12121233] rounded-lg px-8 py-2 "
  />
  <FiSearch className="text-[#6E6B7B] text-sm absolute top-2.5 left-3" />
</div>


  {/* Currently Logged-In Devices Header */}
  <div className="font-inter font-medium text-[14px] leading-[160%] tracking-normal text-[#121212] mt-8 mb-6">📌 Currently Logged-In Devices</div>

  {/* Auto Logout + Alert Settings */}
  <div className="space-y-2 text-sm border border-[#1212121A] p-4 bg-[#12121208] rounded-xl">
    <div className="flex items-center justify-between border-b border-[#1212121A]  pb-2">
      <span className='font-inter font-normal text-[14px] leading-[160%] tracking-normal text-[#121212CC]'>Auto logout after inactivity</span>
      <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className={`relative w-8 h-4 rounded-full transition-colors duration-300 ${
              twoFAEnabled ? 'bg-indigo-500' : 'bg-[#EEE6FE]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-3 w-3 bg-white rounded-full transition-transform duration-300 ${
                twoFAEnabled ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
    </div>
    <div>
      <span className="block font-inter font-normal text-[14px] leading-[160%] tracking-normal text-[#121212CC] mb-1 ">Receive new login alerts</span>
      <div className="flex flex-wrap gap-4 mt-4">
      {['Email', 'SMS'].map((method) => (
        <label key={method} className="flex items-center space-x-2">
          <input
            type="radio"
            name="alert"
            value={method}
            checked={alertMethod === method}
            onChange={() => setAlertMethod(method)}
            className="accent-[#5604F6]"
          />
          <span
            className={`capitalize text-sm ${
              alertMethod === method
                ? 'text-[#5604F6] font-medium'
                : 'text-[#12121299]'
            }`}
          >
            {method}
          </span>
        </label>
      ))}
    </div>
    </div>
  </div>

  {/* Device List */}
  <ul className="space-y-4 border border-[#1212121A] py-4 px-2 rounded-xl mt-6">
    {deviceList.map((device) => (
      <li
        key={device.id}
        className="flex justify-between items-start border-b p-4"
      >
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 form-checkbox h-4 w-4 text-indigo-600" />
          <div>
            <div className='flex gap-3'>
            <p className="font-inter font-medium text-[12px] leading-[160%] tracking-[0.01em] text-[#121212E5]">{device.device}</p>
             <p className="font-inter font-medium text-[10px] leading-[160%] capitalize text-[#1D9E34]">{device.time}</p>
           
</div>
            <p className="font-inter font-normal text-[12px] leading-[160%] tracking-normal text-[#121212CC]">{device.location}</p>
          </div>
        </div>
        <button className="font-inter font-medium text-[12px] leading-[160%] tracking-[0.02em] capitalize underline decoration-[#5604F6] text-[#5604F6] mt-1">Logout</button>
      </li>
    ))}



       {deviceList2.map((device) => (
      <li
        key={device.id}
        className="flex justify-between items-start border-b p-4"
      >
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 form-checkbox h-4 w-4 text-indigo-600" />
          <div>
            <div className='flex gap-3'>
            <p className="font-inter font-medium text-[12px] leading-[160%] tracking-[0.01em] text-[#121212E5]">{device.device}</p>
             <p className="font-inter font-medium text-[10px] leading-[160%] capitalize text-[#12121266]">{device.time}</p>
           
</div>
            <p className="font-inter font-normal text-[12px] leading-[160%] tracking-normal text-[#121212CC]">{device.location}</p>
          </div>
        </div>
        <button className="font-inter font-medium text-[12px] leading-[160%] tracking-[0.02em] capitalize underline decoration-[#5604F6] text-[#5604F6] mt-1">Logout</button>
      </li>
    ))}
  </ul>

  {/* Logout All Devices Button */}
  <button className="w-full bg-[#5F04F6] text-white text-sm font-medium py-3 rounded-xl transition-colors hover:bg-[#4E03D1] my-5">
    Log Out From All Devices
  </button>
</div>
</div>


        {/* Security Question & Backup Email */}
      <div className="w-full md:w-[55%] bg-white rounded-2xl border border-[#1212121A] space-y-6  pt-4">
       
         {/* Main Title */}
  <div className='mb-6 border-b border-[#1212121A] p-4'>
  <h2 className="font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0.02em] text-center text-black">🔐 Security Question & Recovery Options</h2>
  <p className="font-inter font-normal text-[14px] leading-[100%] tracking-normal text-[#12121299] mt-3 text-center">
    Enhance your account security with a recovery question and backup email.
  </p>
</div>
       
        <div className='p-4'>
  {/* Security Question Section */}
  <div className="mb-6 border border-[#1212121A] rounded-xl pt-4 pb-8">
    <div className=' border-b border-[#1212121A] mb-6 pl-4'>
    <h3 className="font-urbanist font-semibold text-[16px] leading-[145%] tracking-[0.02em] align-middle capitalize text-black mb-2">🔎 Security Question Section</h3>
    <p className="font-inter font-normal text-[12px] leading-[160%] tracking-normal text-[#121212CC] mb-3">
      Ensure account recovery by setting a secure question.
    </p>
    </div>


   <div className='px-4'>
    <select className="w-full p-3 rounded-t-xl border bg-[#1E0156] text-sm">
      <option>What Is Your Mother&apos;s Maiden Name?</option>
      <option>What Is Your First Pet&apos;s Name?</option>
      <option>What Was the Name of Your First School?</option>
    </select>

    <div className="relative">
      <input
        type="text"
        placeholder="Enter your answer"
        className="w-full p-2 py-3 border-x border-b border-[#EEE6FE] rounded-b-lg pr-10 text-sm text-[#98A2B3]"
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
</div>
  {/* Backup Email Section */}
  <div className='border border-[#1212121A] rounded-xl m-4 pt-4 pb-14'>
    <div className='border-b border-[#1212121A] p-2 px-4'>
    <h3 className="font-urbanist font-semibold text-[16px] leading-[145%] tracking-[0.02em] align-middle capitalize text-black mb-2">📩 Backup Email Section</h3>
    <p className="font-inter font-normal text-[12px] leading-[160%] tracking-normal text-[#121212CC] mb-3">
      Your backup email helps you regain access to your account.
    </p>
</div>
<div className='p-5'>
             <div className="flex justify-between mt-16">
                <label className="block font-inter font-normal text-[14px] leading-[100%] tracking-[0] align-middle capitalize text-[#101928] mb-1"> Current Backup Email</label>
              <div className="flex gap-1 bg-white rounded-md">
        
        <FiEdit2
              className=" mb-2 text-[#5F04F6] cursor-pointer"
             
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
        className="w-full p-3 py-4 pr-10 border border-[#D0D5DD] rounded-lg text-[#101928] text-[13px] placeholder-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#5F04F6]"
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

import { useState } from 'react';
import { X } from 'lucide-react';

export default function CreateLogTypeModal() {
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');

  return (
    <div className="relative w-full max-w-md mx-auto top-[70px] rounded-xl bg-white p-6 pb-10 font-sans">
      {/* Close Button */}
      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Header */}
      <div className="px-5 pt-6 pb-3 border-b border-[#1212121A] text-center space-y-2">
        <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
          Add New Phone Number Category
        </h2>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          Define a category and assign a country dial code <br />
          for phone numbers.
        </p>
      </div>

      {/* Info Box */}
 <div className="mt-6 w-full bg-[#F8F8F8] px-3 h-[37px] rounded-lg border border-[#1212121A] flex items-center justify-center text-center">
  <p className="text-xs leading-[145%] font-inter text-[#121212CC] text-center">
    <span className="text-[#5604F6] font-medium">₦500</span> processing fee applies for category created
  </p>
</div>


      {/* Country Dropdown */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Country
        </label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none"
        >
          <option value="" disabled hidden>
            North America
          </option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
      </div>

      {/* Dial Code Dropdown */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Country Dial Code
        </label>
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none"
        >
          <option value="" disabled hidden>
            +1
          </option>
          <option value="+1">+1 (USA/Canada)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+234">+234 (Nigeria)</option>
          <option value="+91">+91 (India)</option>
        </select>
      </div>

  {/* Buttons */}
      <div className="flex justify-between gap-2 mt-10">
        <button
          type="button"
          className="w-[159px] h-[51px] rounded-lg bg-white border border-[#D0D5DD] text-[#101928] text-base font-semibold font-[Urbanist] flex items-center justify-center hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-[167px] h-[51px] rounded-lg bg-[#5604F6] text-white text-base font-semibold font-[Urbanist] flex items-center justify-center hover:bg-[#4702d0]"
        >
          Add category
        </button>
      </div>
    </div>
  );
}

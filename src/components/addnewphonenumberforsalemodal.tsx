import { useState } from 'react';
import { X } from 'lucide-react';

export default function CreateCategoryModal() {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');

  return (
    <div className="relative w-full max-w-md mx-auto mt-[70px] rounded-2xl bg-white p-6 sm:p-8 font-sans">
      {/* Close Button */}
      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Header */}
      <div className=" pt-6 pb-3 border-b border-[#1212121A] text-center space-y-2">
        <h2 className="font-urbanist font-semibold text-[24px] leading-[100%] text-center capitalize text-black">
          Add New Phone Number for Sale
        </h2>
        <p className="font-inter font-normal text-[14px] leading-[160%] text-[#121212CC] text-center mt-2">
          List a phone number product by entering the details below
        </p>
      </div>

      {/* Country Dropdown */}
      <div className="mt-4">
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

      {/* Country Code Dropdown */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Dial Code
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





      {/* Phone Number Field */}
      <div className="mt-4 relative w-full">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="415-555-6789"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none"
        />
        {phone && (
          <button
            type="button"
            onClick={() => setPhone('')}
            className="absolute right-3 top-[50px] text-[#98A2B3] hover:text-[#121212]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

            {/* Price Per Unit */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Price Per Unit
        </label>
        <input
          type="text"
          placeholder="5000"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none"
        />
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Description
        </label>
        <textarea
          rows={3}
          value="High-quality virtual number for marketing campaigns and customer service."
          placeholder="High-quality virtual number for marketing campaigns and customer service."
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none resize-y"
        />
      </div>

      {/* Features / Tags */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Features / Tags
        </label>
        <input
          type="text"
          placeholder="Verified"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-[14px] leading-[145%] font-normal align-middle text-[#121212CC] font-inter focus:outline-none"
        />
      </div>

      {/* Tag List */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-2">
          {['Virtual', 'Toll Free', 'Verified'].map((tag, i) => (
            <div
              key={i}
              className="flex items-center bg-[#EEE6FE4D] border border-[#CBB1FC] text-xs text-[#5604F6] font-inter rounded-md px-3 py-1"
            >
              {tag}
              <X className="w-3 h-3 ml-2 text-[#98A2B3] cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-10">
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
          Save phone number
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

const AccountPreferences: React.FC = () => {
  const [language, setLanguage] = useState('english');
  const [textSize, setTextSize] = useState('medium');
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  return (
<div className="w-full flex justify-center">
  <div className="w-full max-w-lg bg-white flex flex-col items-center pb-6 rounded-xl">
    {/* Header */}
    <div className="bg-[#100112] rounded-t-xl w-full text-white text-center py-4 mb-6 pb-6">
      <h2 className="font-urbanist font-bold text-[20px] leading-[100%] tracking-[0.02em] capitalize mb-2">
        Account Preferences
      </h2>
      <p className="font-inter font-normal text-[16px] leading-[100%]">
        Customize language and accessibility options.
      </p>
    </div>


<div className='w-full flex justify-center'>
    <div className="m-6 space-y-10 border border-[#1212121A] rounded-2xl p-6 w-full">
      {/* Language Selection */}
      <div className='border-b border-[#1212121A] pb-2'>
        <h3 className="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0.02em] text-center text-[#121212E5] text-left mb-4">
          Choose Your Preferred Language
        </h3>
        <div className="flex flex-wrap gap-4">
          {['english', 'yoruba', 'hausa', 'igbo'].map((lang) => {
            const label = {
              english: 'English (Nigeria)',
              yoruba: 'Yoruba',
              hausa: 'Hausa',
              igbo: 'Igbo',
            }[lang];

            return (
              <label
                key={lang}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="language"
                  checked={language === lang}
                  onChange={() => setLanguage(lang)}
                  className="accent-[#5604F6]"
                />
                <span
                  className={`capitalize text-sm ${
                    language === lang
                      ? 'text-[#5604F6] font-medium'
                      : 'text-gray-800'
                  }`}
                >
                  {label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Text Size */}
      <div className='border-b border-[#1212121A] pb-2'>
        <h3 className="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0.02em] text-center text-[#121212E5] text-left mb-4">
          Adjust Text Size
        </h3>
        <div className="flex flex-wrap gap-4">
          {['large', 'medium', 'small'].map((size) => (
            <label key={size} className="flex items-center space-x-2">
              <input
                type="radio"
                name="textSize"
                checked={textSize === size}
                onChange={() => setTextSize(size)}
                className="accent-[#5604F6]"
              />
              <span
                className={`capitalize text-sm ${
                  textSize === size
                    ? 'text-[#5604F6] font-medium'
                    : 'text-gray-800'
                }`}
              >
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Accessibility Toggle */}
      <div className="flex items-center justify-between">
        <span className="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0.02em] text-center text-[#121212E5] text-left mb-4">
          Enable Accessibility Mode
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={accessibilityMode}
            onChange={() => setAccessibilityMode(!accessibilityMode)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#5604F6] rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5604F6]"></div>
        </label>
      </div>
    </div>
</div>
    {/* Apply Button */}
    <button className="mt-4 bg-[#5604F6] hover:bg-[#4E03D1] text-white font-semibold py-2 px-10 rounded-lg transition-colors duration-200 w-[335px]">
      Apply Changes
    </button>
  </div>
</div>

  );
};

export default AccountPreferences;

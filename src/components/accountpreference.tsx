import React, { useState } from 'react';

const AccountPreferences: React.FC = () => {
  const [language, setLanguage] = useState('english');
  const [textSize, setTextSize] = useState('medium');
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  return (
      <div className="w-full max-w-lg bg-white  shadow-md">
        {/* Header */}
        <div className="bg-[#2E0234] rounded-t-xl  w-full max-w-lg text-white text-center py-4 mb-6">
        <h2 className="text-xl font-semibold">Account Preferences</h2>
        <p className="text-sm">Customize language and accessibility options.</p>
      </div>
      <div className="m-6 space-y-6 border border-[#1212121A] rounded-md p-6 ">
        {/* Language Selection */}
       <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Choose Your Preferred Language</h3>
          <div className="flex flex-wrap gap-4">
            {['english', 'yoruba', 'hausa', 'igbo'].map((lang) => {
              const label = {
                english: 'English (Nigeria)',
                yoruba: 'Yoruba',
                hausa: 'Hausa',
                igbo: 'Igbo',
              }[lang];

              return (
                <label key={lang} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="language"
                    checked={language === lang}
                    onChange={() => setLanguage(lang)}
                    className="accent-[#5604F6]"
                  />
                  <span
                    className={`capitalize text-sm ${
                      language === lang ? 'text-[#5604F6] font-medium' : 'text-gray-800'
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
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Adjust Text Size</h3>
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
                    textSize === size ? 'text-[#5604F6] font-medium' : 'text-gray-800'
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
          <span className="text-sm font-medium text-gray-700">Enable Accessibility Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={accessibilityMode}
              onChange={() => setAccessibilityMode(!accessibilityMode)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-600 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>

        {/* Apply Button */}
 <button className="w-full mt-4 bg-[#5604F6]  text-white font-semibold py-2 rounded-lg transition-colors duration-200">
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default AccountPreferences;

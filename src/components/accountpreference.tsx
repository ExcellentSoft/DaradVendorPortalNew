import React, { useState } from 'react';

const AccountPreferences: React.FC = () => {
  const [language, setLanguage] = useState('english');
  const [textSize, setTextSize] = useState('medium');
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Update Your Profile – Keep Your Account Up To Date
        </h2>
        <p className="text-gray-500 mb-6">
          Manage your personal details, contact information, and preferences effortlessly.
        </p>

        <div className="flex gap-2 mb-8">
          {[
            'Profile',
            'Account Preference',
            'Account Management',
            'Business',
            'Notification',
            'Payment',
            'Security',
          ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm ${
                tab === 'Account Preference'
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
          <div className="bg-purple-900 text-white text-center rounded-t-xl py-3 text-lg font-semibold">
            Account Preferences
          </div>

          <div className="p-4 space-y-6">
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Your Preferred Language
              </label>
              <div className="flex flex-wrap gap-4">
                {['English (Nigeria)', 'Yoruba', 'Hausa', 'Igbo'].map((lang) => (
                  <label key={lang} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="language"
                      value={lang}
                      checked={language === lang.toLowerCase()}
                      onChange={() => setLanguage(lang.toLowerCase())}
                      className="text-purple-700"
                    />
                    <span className="text-sm text-gray-800">{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Text Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adjust Text Size
              </label>
              <div className="flex flex-wrap gap-4">
                {['Large', 'Medium', 'Small'].map((size) => (
                  <label key={size} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="textSize"
                      value={size.toLowerCase()}
                      checked={textSize === size.toLowerCase()}
                      onChange={() => setTextSize(size.toLowerCase())}
                      className="text-purple-700"
                    />
                    <span className="text-sm text-gray-800">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Accessibility Mode */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Enable Accessibility Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={accessibilityMode}
                  onChange={() => setAccessibilityMode(!accessibilityMode)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"></div>
              </label>
            </div>

            {/* Button */}
            <div className="text-center">
              <button className="bg-purple-700 text-white w-full py-2 rounded-md hover:bg-purple-800 transition duration-200">
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPreferences;

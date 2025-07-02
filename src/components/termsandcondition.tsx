// TermsAndConditions.tsx
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const sectionsContent = [
  'As a vendor, you are responsible for maintaining the confidentiality of your account information and ensuring all activities under your account comply with our policies.',
  'All products listed must meet legal and ethical standards. Vendors are prohibited from selling counterfeit or prohibited items.',
  'Payouts are processed every 3 days. Any disputes must be raised within 7 days of transaction settlement.',
  'Vendors must fulfill orders within the stipulated timeline and handle customer disputes professionally.',
  'My Darads reserves the right to update these terms at any time. Continued use of our platform means you agree to the revised terms.',
];

const TermsAndConditions: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <main className="w-full md:w-[750px] mx-auto bg-white">
        <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-lg">
          <h2 className="text-2xl font-semibold">📜 Terms & Conditions</h2>
          <p className="text-sm">Read the rules governing your use of My Darads’ services.</p>
        </div>

        <div className="p-8 space-y-6 text-[#121212] text-base">
          {sectionsContent.map((content, index) => (
            <p key={index}>{content}</p>
          ))}

          <div className="mt-10 flex gap-6 justify-center">
            <button className="text-black border border-[#E6E7EA] px-16 py-2 rounded-md">
              ❌ Decline
            </button>
            <button className="bg-[#5604F6] flex items-center gap-4 text-white px-8 py-3 rounded-lg">
              <span className="bg-green-600 text-white rounded p-2">
                <FaCheck size={12} />
              </span>
              Accept & Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;

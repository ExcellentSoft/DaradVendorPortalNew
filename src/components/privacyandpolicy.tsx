// TermsAndConditions.tsx
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const sectionsContent = [
  'We collect personal and business information to enhance your experience.',
  'Your data is used for order processing, payments, and customer support.',
  'We do not sell your data to third parties. However, we may share necessary data with payment processors and logistics providers.',
  'We implement encryption and security protocols to safeguard your information.',
  'You can request data deletion or modification at any time.',
  'We may update this policy. Continued use of My Darads means you accept the new terms.',
];

const Policy: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <main className="w-full md:w-[750px] mx-auto bg-white">
        <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-lg">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-sm">Your data security is our priority.</p>
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

export default Policy;

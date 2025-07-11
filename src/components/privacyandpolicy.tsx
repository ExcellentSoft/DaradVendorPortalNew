// TermsAndConditions.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  {
    title: 'Data Collection',
    content:
      'We collect personal and business information to enhance your experience.',
  },
  {
    title: 'Use of Data',
    content:
      'our data is used for order processing, payments, and customer support.',
  },
  {
    title: 'Third-Party Sharing',
    content:
      'We do not sell your data to third parties. However, we may share necessary data with payment processors and logistics providers.',
  },
  {
    title: 'Security Measures',
    content:
      'We implement encryption and security protocols to safeguard your information.',
  },
  {
    title: 'Your Rights',
    content:
      'You can request data deletion or modification at any time.',
  },
   {
    title: 'Policy Updates',
    content:
      'We may update this policy. Continued use of My Darads means you accept the new terms.',
  },
];

const TermsAndConditions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className=" w-full min-h-screen bg-gray-100">
         {/* Sidebar Card */}
         
   
         {/* Main Content */}
        <main className="w-full md:w-[750px] flex-1 bg-white pb-30">
           {/* Contact Us Tab */}
          
               <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-lg">
                  <h2 className="font-urbanist font-bold text-[24px] leading-[100%] tracking-[0.02em] capitalize text-white flex justify-center gap-4">Privacy Policy</h2>
          <p className="text-sm font-inter font-normal text-[14px] leading-[160%] tracking-normal mt-2">
            Your data security is our priority.
          </p>
               </div>
   <div className='p-8 space-y-6'>
{sections.map((section, index) => (
  <div
    key={index}
    className="border border-gray-300 rounded-lg bg-white"
  >
    <button
      onClick={() => toggle(index)}
      className=" w-full flex  items-center  px-4 py-3 mb-3 text-left text-gray-800 font-medium "
    >
    
     
        <span className=' flex w-full max-w-[250px] gap-2 mb-3 pb-3 border-b border-[#EAE6EB]'>
           {openIndex === index ? (
        <ChevronUp className="w-6 h6 text-gray-800 border border-gray-100" />
      ) : (
        <ChevronDown className="w-6 h-6 text-gray-800 border border-gray-100" />
      )}
      <span className='font-inter font-medium text-[16px] leading-[100%] tracking-normal align-middle capitalize text-[#121212]'>
      {section.title}
      </span>
      </span>
    </button>
    {openIndex === index && (
      <div className="px-10 pb-4 font-inter font-normal text-[14px] leading-[160%] tracking-normal align-middle text-[#121212]">
        {section.content}
      </div>
    )}
  </div>
))}


             
                     <div className="mt-20 flex gap-6 justify-center">
                       <button className="font-urbanist font-semibold text-[16px] leading-[24px] tracking-normal align-middle capitalize text-[#121212CC] border border-[#E6E7EA] px-16 py-2 rounded-md">
                         ❌ Decline
                       </button>
          
  <button className="bg-[#5604F6] flex items-center gap-4 font-urbanist font-semibold text-[16px] leading-[24px] tracking-normal align-middle capitalize text-white px-8 py-2 rounded-lg">
    <span className="bg-green-600 text-white rounded p-2">
      <FaCheck size={8} />
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

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
    title: 'Account Responsibilities',
    content:
      'As a vendor, you are responsible for maintaining the confidentiality of your account information and ensuring all activities under your account comply with our policies.',
  },
  {
    title: 'Product Listings & Sales',
    content:
      'All products listed must meet legal and ethical standards. Vendors are prohibited from selling counterfeit or prohibited items.',
  },
  {
    title: 'Payment & Payouts',
    content:
      'Payouts are processed every 3 days. Any disputes must be raised within 7 days of transaction settlement.',
  },
  {
    title: 'Order Fulfillment & Customer Service',
    content:
      'Vendors must fulfill orders within the stipulated timeline and handle customer disputes professionally.',
  },
  {
    title: 'Policy Updates',
    content:
      'My Darads reserves the right to update these terms at any time. Continued use of our platform means you agree to the revised terms.',
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
                  <h2 className="font-urbanist font-bold text-[24px] leading-[100%] tracking-[0.02em] capitalize text-white flex justify-center gap-4">📜 Terms & Conditions</h2>
          <p className="font-inter font-normal text-[14px] leading-[160%] tracking-normal mt-2">
            Read the rules governing your use of My Darads’ services.
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
                       <button className="  font-urbanist font-semibold text-[16px] leading-[24px] tracking-normal align-middle capitalize text-[#121212CC] border border-[#E6E7EA] px-16 py-2 rounded-md">
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

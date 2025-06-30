import { X } from 'lucide-react';

export default function CreateLogTypeModal() {
  return (
    <div className="relative w-full h-[600px] top-[70px] left-[453px] rounded-[12px] bg-white shadow-lg p-6">
      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      
      <div className="w-[375px] h-[119px] bg-white px-5 pt-6 pb-3 space-y-[10px] border-b border-b-[#1212121A] text-center">
        <h2 className="text-center font-semibold text-[24px] leading-[100%] tracking-normal capitalize font-urbanist text-black">Create tutorial type name</h2>
        <p className="text-center font-normal text-[14px] leading-[160%] tracking-normal text-[#121212CC] font-inter">
        Name your tutorial type to organize and showcase <br /> your content.
        </p>
      </div>

      <div className="w-[375px] h-[54px] bg-[#F8F8F8] p-[10px] rounded-[8px] border border-[#1212121A] space-x-[10px] flex items-center justify-center mt-6">
       <p className="w-[315px] text-[12px] leading-[145%] font-inter text-center text-[#121212CC]">
    <span className="text-[#5604F6] font-medium">₦500</span> processing fee applies for each tutorial type name created
  </p>
      </div>


      <div className="mt-10">
        <div>
          <label className="font-inter font-medium text-[14px] leading-[100%] align-middle capitalize text-[#101928]">tutorial type name</label>
          <input
            type="text"
            placeholder="enter the amount to fund"
            className="w-full border border-[#D0D5DD] bg-[#FFFFFF] rounded-md py-3 px-4 
             text-[14px] leading-[145%] font-inter font-normal text-[#121212] 
             placeholder:text-[#98A2B3] placeholder:font-inter 
             placeholder:font-normal placeholder:text-[14px] 
             placeholder:leading-[145%] focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="font-inter font-medium text-[14px] leading-[100%] align-middle capitalize text-[#101928]">Price Per Unit</label>
          <input
            type="text"
            placeholder="Enter price, e.g., 5000"
            className="w-full border border-[#D0D5DD] bg-[#FFFFFF] rounded-md py-3 px-4 
             text-[14px] leading-[145%] font-inter font-normal text-[#121212] 
             placeholder:text-[#98A2B3] placeholder:font-inter 
             placeholder:font-normal placeholder:text-[14px] 
             placeholder:leading-[145%] focus:outline-none"
          />
        </div>

        
        <button className="mt-10 w-full h-[51px] bg-[#5604F6] hover:bg-[#4702d0] 
             text-white text-[16px] leading-[100%] tracking-[0.02em] 
             font-urbanist font-semibold capitalize rounded-lg 
             flex items-center justify-center">
          Save Tutorialtype Name
        </button>
      </div>
    </div>
  );
}

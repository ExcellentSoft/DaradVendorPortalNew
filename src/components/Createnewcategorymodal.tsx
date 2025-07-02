import { X, Camera } from 'lucide-react';

export default function CreateCategoryModal() {
  return (
    <div className="relative w-full max-w-md mx-auto mt-[70px] rounded-2xl bg-white shadow-xl p-6 sm:p-8 font-sans">
      
      {/* Close button */}
      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Header */}
      <div className="text-center border-b border-[#1212121A] pt-6 pb-4">
        <h2 className="text-[24px] font-semibold leading-tight tracking-normal capitalize text-black font-[Urbanist]">
          Create New Category
        </h2>
        <p className="text-sm text-[#121212CC] font-normal font-inter leading-[160%] mt-2">
          Define a main category and add relevant <br />subcategories to organize your products.
        </p>
      </div>

      {/* Processing Fee Notice */}
      <div className="mt-6 bg-[#F8F8F8] p-3 rounded-lg border border-[#1212121A] text-center">
        <p className="text-xs text-[#121212CC] font-inter">
          <span className="text-[#5604F6] font-medium">₦500</span> processing fee applies for category created
        </p>
      </div>

      {/* Category Name Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Category Name
        </label>
        <input
          type="text"
          value="Electronics"
          placeholder="Electronics"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-sm text-[#121212] placeholder:text-[#98A2B3] font-inter focus:outline-none"
        />
      </div>

      {/* Category Description Textarea */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Category Description
        </label>
        <textarea
          rows={3}
          value="Products related to electronic gadgets and accessories"
          placeholder="Products related to electronic gadgets and accessories"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-sm text-[#121212] placeholder:text-[#98A2B3] font-inter focus:outline-none resize-y"
        />
      </div>

      {/* Upload Category Icon */}
      <div className="bg-[#FFFFFF] p-4 rounded-2xl border shadow-[0px_4px_6px_0px_#2121210A,_0px_4px_50px_0px_#21212114] mt-8">
        <label className="block text-lg font-urbanist font-bold leading-[1.75rem] tracking-[0.02em] text-[#0B0B0B] capitalize
">
          Upload Category Icon
        </label>
        <p className="text-xs text-[#6D6D6D] font-inter mb-3">
          Drag & drop or upload an icon
        </p>
        <div className="border-2 border-dashed border-[#5604F6] rounded-lg p-6 flex flex-col items-center text-center space-y-2">
          <Camera className="w-10 h-10 text-[#5604F6]" />
          <p className="text-sm text-[#0B0B0B] font-inter">
            Drag your file(s) or{' '}
            <span className="text-[#5604F6] font-medium cursor-pointer hover:underline">
              browse
            </span>
          </p>
          <p className="text-xs text-[#12121280] font-inter">
            Max 10 MB files are allowed
          </p>
        </div>
        <p className="text-xs text-[#12121280] font-inter mt-2">
          Recommended size: 100x100px.
        </p>
      </div>

      {/* Add Subcategory Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Add Subcategory
        </label>
        <input
          type="text"
          placeholder="Smartphones"
          className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 text-sm text-[#121212] placeholder:text-[#121212] font-inter focus:outline-none"
        />
      </div>

      {/* Subcategory List */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-[#101928] font-inter mb-2">
          Subcategory List
        </label>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-[#EEE6FE4D] border-1 border-[#CBB1FC] text-xs text-[#5604F6] font-inter rounded-md px-3 py-1">
            Tablets
            <X className="w-3 h-3 ml-2 text-[#98A2B3] cursor-pointer" />
          </div>
          <div className="flex items-center bg-[#EEE6FE4D] border-1 border-[#CBB1FC] text-xs text-[#5604F6] font-inter rounded-md px-3 py-1">
            Accessories
            <X className="w-3 h-3 ml-2 text-[#98A2B3] cursor-pointer" />
          </div>
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
          className="w-[159px] h-[51px] rounded-lg bg-[#5604F6] text-white text-base font-semibold font-[Urbanist] flex items-center justify-center hover:bg-[#4702d0]"
        >
          Create Category
        </button>
      </div>
    </div>
  );
}

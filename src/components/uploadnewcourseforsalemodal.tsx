import React, { useState } from 'react';

export default function App() {
  const [logType, setLogType] = useState('');
  const [logName, setLogName] = useState('');
  const [logPrice, setLogPrice] = useState('');
  const [logProfileLink, setLogProfileLink] = useState('');
  const [logValue, setLogValue] = useState('');
  const [logFile, setLogFile] = useState<File | null>(null);
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      logType,
      logName,
      logPrice,
      logProfileLink,
      logValue,
      logFile,
      mediaFile,
    });
    alert('Form submitted! Check console for data.');
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans w-[500px]">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-2xl w-full">
        <h1 className="text-[24px] leading-[100%] tracking-[0%] font-semibold text-center capitalize text-gray-800 font-[Urbanist] mb-2">
          Upload New course for Sale
        </h1>
        <p className="text-[14px] leading-[160%] tracking-[0%] font-normal text-center text-[#121212CC] font-inter mb-8">
          Add a new course to your store by selecting its category, pricing it, and uploading supporting content.</p>

        <form onSubmit={handleSubmit} className="space-y-4">



           <div>
            <label
              htmlFor="logType"
              className="block font-inter font-medium text-[14px] leading-[100%] align-middle capitalize text-[#101928] mb-2"
            >
              Select Course category
            </label>
            <select
              id="logType"
              name="logType"
              className="block w-full pl-3 pr-10 py-3 border border-[#D0D5DD] bg-white rounded-md text-[14px] leading-[145%] font-inter text-[#121212] placeholder-[#98A2B3] focus:outline-none"
              value={logType}
              onChange={(e) => setLogType(e.target.value)}
            >
              <option value="">enter course category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>


   

        
          <div>
            <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">
              Course name
            </label>
            <input
              type="text"
              placeholder="enter the amount to fund"
              className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 
              text-[14px] leading-[145%] font-inter font-normal text-[#121212] 
              placeholder:text-[#98A2B3] placeholder:font-inter 
              placeholder:font-normal placeholder:text-[14px] 
              placeholder:leading-[145%] focus:outline-none mt-2"
              value={logPrice}
              onChange={(e) => setLogPrice(e.target.value)}
            />
          </div>

        

          <div>
            <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">
              Course description
            </label>
            <input
              type="url"
              placeholder="Give the course a description"
              className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 
              text-[14px] leading-[145%] font-inter font-normal text-[#121212] 
              placeholder:text-[#98A2B3] placeholder:font-inter 
              placeholder:font-normal placeholder:text-[14px] 
              placeholder:leading-[145%] focus:outline-none mt-2"
              value={logProfileLink}
              onChange={(e) => setLogProfileLink(e.target.value)}
            />
          </div>

                 <div>
            <label className="font-inter font-medium text-[14px] leading-[100%] capitalize text-[#101928] mb-1">
              price per unit 
            </label>
            <input
              type="text"
              placeholder="Enter price, e.g., 5000"
              className="w-full border border-[#D0D5DD] bg-white rounded-md py-3 px-4 
              text-[14px] leading-[145%] font-inter font-normal text-[#121212] 
              placeholder:text-[#98A2B3] placeholder:font-inter 
              placeholder:font-normal placeholder:text-[14px] 
              placeholder:leading-[145%] focus:outline-none mt-2"
              value={logName}
              onChange={(e) => setLogName(e.target.value)}
            />
          </div>

        



<div className="bg-[#FFFFFF] p-4 rounded-xl shadow-[0px_4px_6px_0px_#2121210A,_0px_4px_50px_0px_#21212114] mt-8">
  <div className="flex flex-col mb-4 gap-2">
    <h3 className="block text-lg font-urbanist font-bold leading-[1.75rem] tracking-[0.02em] text-[#0B0B0B] capitalize">
      image & video upload
    </h3>
    <p className="font-inter font-normal text-sm leading-[1.5rem] tracking-[0.01em] text-[#6D6D6D]">
      Drag & drop or upload a product video <br />(max: 60 seconds).
    </p>
  </div>

  <div
    className="flex justify-center px-6 pt-5 pb-6 border-[2px] border-dashed border-[#5604F6] rounded-md"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setMediaFile(e.dataTransfer.files[0]);
      }
    }}
  >
    <div className="space-y-2 text-center">
      <svg
        className="mx-auto h-12 w-12 text-[#5604F6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      <div className="flex justify-center text-sm text-gray-600">
        <label
          htmlFor="media-file-upload"
          className="relative cursor-pointer bg-white rounded-md focus-within:outline-none"
        >
          <span className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-[#0B0B0B]">
            Drag your file(s) or{' '}
          </span>
          <span className="font-inter font-semibold text-sm leading-6 tracking-[0.01em] text-[#5604F6]">
            browse
          </span>
          <input
            id="media-file-upload"
            name="media-file-upload"
            type="file"
            className="sr-only"
            onChange={(e) => handleFileChange(e, setMediaFile)}
            accept="image/*,video/*,.svg,.zip"
          />
        </label>
      </div>

      <p className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-center text-[#6D6D6D]">
        Max size: 10MB are allowed
      </p>

      {mediaFile && (
        <p className="text-sm text-gray-700 mt-1">
          Selected file: {mediaFile.name}
        </p>
      )}
    </div>
  </div>

  <p className="font-inter font-normal text-sm leading-6 tracking-[0.01em] text-left text-[#6D6D6D] mt-2">
    Only support .jpg, .png, .svg, .zip,files
  </p>
</div>


          <button
  type="submit"
  className="w-full h-[51px] bg-[#5604F6] hover:bg-[#4702d0] 
             text-white text-[16px] leading-[100%] tracking-[0.02em] 
             font-[Urbanist] font-semibold capitalize 
             rounded-lg flex items-center justify-center mt-4"
>
save digital course product
</button>

        </form>
      </div>
    </div>
  );
}

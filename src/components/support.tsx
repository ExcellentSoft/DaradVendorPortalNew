'use client';

import React, { useState } from "react";
import { FiPhoneCall } from 'react-icons/fi';
import Image from 'next/image';
import TermsandCondition from './termsandcondition'; 
import Policy from './privacyandpolicy'; 

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("Contact Us");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const tabs = ["Contact Us", "Terms & Conditions", "Privacy Policy"];

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      {/* Sidebar Card */}
      <aside className="w-full md:w-[350px] p-4">
        <div className="bg-white rounded-xl shadow p-8 space-y-6">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition
                ${activeTab === tab ? "bg-[#5604F6] text-white border border-white" : " text-[#121212CC] "}`}
            >
              <span
                className={`w-8 h-8 pb-0.5 rounded-full border-2 flex items-center justify-center text-3xl
                  ${activeTab === tab ? "pb-0.5 border-white text-white" : "bg-gray-100 pb-0.5 border-gray-400 text-gray-400"}`}
              >
                ●
              </span>
              <span className="font-medium">{tab}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="">
        {/* Contact Us Tab */}
        {activeTab === "Contact Us" && (
          <main className="w-full md:w-[750px] flex-1 bg-white">
            {/* Header */}
            <div className="bg-[#2E0234] text-white p-6 text-center rounded-t-lg">
              <h1 className="text-[24px] font-semibold flex justify-center gap-4">
                <FiPhoneCall color="#d3d3d3" size={24} />
                Contact Us
              </h1>
              <p className="text-[14px] mt-2">Need help? Get in touch with our support team.</p>
            </div>

            {/* Form */}
            <div className="mt-10 md:mt-20 flex items-center justify-center px-4">
              <form className="p-6 space-y-6 w-full max-w-xl">
                <div>
                  <label className="block mb-1 text-[#101928] text-[16px] font-semibold">Full Name</label>
                  <input
                    type="text"
                    className="w-full text-[#98A2B3] border border-[#D0D5DD] rounded-lg p-4"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#101928] text-[16px] font-semibold">Email Address</label>
                  <input
                    type="email"
                    className="w-full text-[#98A2B3] border border-[#D0D5DD] rounded-lg p-4"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#101928] text-[16px] font-semibold">Message Subject</label>
                  <select className="w-full text-[#101928] border border-[#D0D5DD] rounded-lg p-4">
                    <option>Select a Subject</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-[#101928] text-[16px] font-semibold">Message</label>
                  <textarea
                    className="w-full text-[#98A2B3] border border-[#D0D5DD] rounded-lg p-4"
                    placeholder="Type your message here..."
                    rows={4}
                  ></textarea>
                </div>

                {/* Upload File */}
                <div className="w-full p-4 bg-white rounded-2xl shadow-sm">
                  <h2 className="text-[20px] font-bold text-[#0B0B0B] mb-1">Upload File</h2>
                  <p className="text-[16px] text-[#6D6D6D] mb-4">For screenshots, receipts, etc.</p>

                  <div className="border-2 border-dashed border-[#4103B9] rounded-lg py-10 px-4 flex flex-col items-center justify-center">
                    <Image src="assets/video.svg" alt="video icon" width={40} height={40} />
                    <p className="text-[18px] text-[#0B0B0B] mb-1 mt-4">
                      Drag your file(s) or{" "}
                      <label htmlFor="fileInput" className="text-[#5604F6] font-medium cursor-pointer">
                        browse
                      </label>
                    </p>
                    <p className="text-[16px] text-[#6D6D6D]">Max 10 MB files are allowed</p>

                    <input
                      id="fileInput"
                      type="file"
                      accept=".jpg,.png,.svg,.zip,.mp4,.mov,.avi"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  {selectedFile && (
                    <p className="mt-2 text-sm text-[#5604F6]">
                      Selected file: {selectedFile.name}
                    </p>
                  )}

                  <p className="text-[16px] text-[#6D6D6D] mt-4">
                    Only support .jpg, .png, .svg, .zip, and common video files
                  </p>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#5604F6] w-full md:w-[300px] text-white px-8 py-4 rounded-lg "
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            {/* Support Info */}
            <div className="border-t-2 border-dashed border-purple-500 mb-6 mt-10"></div>
            <div className="pt-4 text-sm px-4">
              <div className="bg-white rounded-lg shadow p-6 space-y-4 max-w-md mx-auto">
                {/* Phone Support */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src="assets/phonecall.svg" alt="phone icon" width={40} height={40} />
                    <span className="text-[#101928] font-medium">Phone Support</span>
                  </div>
                  <span className="text-[#101928] font-semibold">+234 812 345 6789</span>
                </div>

                {/* Email Support */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src="assets/email.svg" alt="envelope icon" width={40} height={40} />
                    <span className="text-[#101928] font-medium">Email Support</span>
                  </div>
                  <span className="text-[#101928] font-semibold">support@mydarads.com</span>
                </div>

                {/* WhatsApp Support */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src="assets/whatsapp.svg" alt="whatsapp icon" width={40} height={40} />
                    <span className="text-[#101928] font-medium">Whatsapp</span>
                  </div>
                  <button className="text-[#5604F6] border border-[#EEE6FE] bg-[#EEE6FE] rounded px-6 py-2 text-md">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* Terms & Conditions Tab */}
        {activeTab === "Terms & Conditions" && (
        <div className="p-4 md:p-8 overflow-auto max-h-screen">
  <TermsandCondition />
</div>

        )}

        {/* Privacy Policy Tab */}
        {activeTab === "Privacy Policy" && (
          <div className="p-4 md:p-8 overflow-auto max-h-screen">
            <Policy />
          </div>
        )}
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isEmailEntered = email.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!isEmailEntered) {
      setError("Please enter a valid email.");
      return;
    }
  
    const requestData = {
      email,
    };
  
    try {
      const response = await fetch(
        "https://daradservice.azurewebsites.net/api/Vendor/Become-Vendor",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
  
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
  
      const data = await response.json();
      // Handle success (e.g., redirect or show success message)
      console.log(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };
  

  return (
    <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden p-6">

    {/* Logo Section at top-left */}
    <div className="absolute top-6 left-6 flex gap-2">
      <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
      <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
    </div>
  
    {/* Centered Form + Image */}
     <div className="container flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-[1600px] mx-60  rounded-lg overflow-hidden">
        
        {/* Form Section */}
        <div className="flex flex-col items-center justify-center w-[760px]">
          <div className="flex flex-col items-center bg-white w-[550px] h-[404px] p-8 m-20">
            <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Verify Your Identity
            </h2>
            <p className="text-center text-[16px] text-[#121212CC] mt-2">
              Enter the 6-digit code sent to phone/email.
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}
  
            <form className="w-full flex flex-col items-center mt-6 max-w-[336px]" onSubmit={handleSubmit}>
              <label className="block text-[#101928] w-full text-[16px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                OTP
              </label>
  
              <input
                type="otp"
                placeholder="Enter your OTP"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-[335px] px-4 py-4 mt-2 mb-4 rounded-lg bg-white z-10 relative focus:outline-none focus:bg-white"
                style={{
                  border: "1px solid #D0D5DD",
                  backgroundColor: "#ffffff",
                  color: "#121212",
                }}
              />
  
              <div className="flex justify-between w-full">
                <p className="mt-4 text-[#121212CC] mb-4 text-[14px] font-medium">
                  Already have an account?
                </p>
                <p className="mt-4 text-[#121212CC] mb-4 text-[14px] font-medium">
                  Resend
                </p>
              </div>
  
              <button
                type="submit"
                className={`w-full max-w-[335px] mt-4 text-white py-4 mb-4 rounded-lg transition-colors duration-300 ${isEmailEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"}`}
                disabled={!isEmailEntered}
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
  
        {/* Right Section Image */}
        <div className="w-[400px] h-[652px] relative">
          <Image
            src="/mans.svg"
            alt="Happy vendor"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </div>
    </div>
  
    {/* Footer */}
    <div className="flex justify-around  ml-36  ">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2025 MyDarads. All rights reserved.
      </p>
      <p className="text-gray-500 text-sm text-center mr-40 sm:text-right">
        Developed by Kaybii Technologies
      </p>
    </div>
  </div>
  
  
   
  );
}

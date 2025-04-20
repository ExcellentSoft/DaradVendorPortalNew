"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const isOtpEntered = otp.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isOtpEntered) {
      setError("Please enter a valid email.");
      return;
    }

    const requestData = { otp };

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
    <div className="relative min-h-screen w-full bg-[#FBFAFF] p-6">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex gap-2">
        <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
        <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
          <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Two-Step Verification
          </h2>
          <p className="text-center text-[16px] text-[#121212CC] mt-2">
            A one-time code has been sent to your registered email/phone. Please enter the code below.
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form
            className="w-full flex flex-col items-center mt-6"
            onSubmit={handleSubmit}
          >
            <label className="block text-[#101928] w-full text-[16px] font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              OTP
            </label>

            <input
              type="text"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 mb-4 rounded-lg border border-[#D0D5DD] bg-white text-[#121212] focus:outline-none"
            />

            <div className="flex justify-between w-full text-sm text-[#121212CC] mb-4">
              <p>00:24</p>
              <p>Resend Code</p>
            </div>

            <button
              type="submit"
              className={`w-full text-white py-3 rounded-lg transition duration-300 ${
                isOtpEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
              }`}
              disabled={!isOtpEntered}
              
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-8 text-gray-500 text-sm px-12">
        <p>© 2025 MyDarads. All rights reserved.</p>
        <p>Developed by Kaybii Technologies</p>
      </div>
    </div>
  );
}

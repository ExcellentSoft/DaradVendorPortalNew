"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isOtpEntered = otp.trim() !== "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  
  const handleVerify = async () => {
    if (!otp) return setError(true);
  
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      setError(true);
      console.error('UserId not found in sessionStorage');
      return;
    }
  
    try {
      setLoading(true);
      const response = await fetch(
        `${baseUrl}/api/Vendor/Verify-two-factor?UserId=${userId}&code=${otp}`,
        {
          method: 'POST',
          headers: {
            Accept: 'text/plain',
          },
        }
      );
  
      const result = await response.text();
  
      if (response.ok) {
        setSuccess(true);
        setError(false);
        console.log('Verification successful:', result);
      } else {
        setError(true);
        setSuccess(false);
        console.error('Verification failed:', result);
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
      console.error('Error verifying:', err);
    } finally {
      setLoading(false);
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
            onSubmit={handleVerify}
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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function LoginPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0); 

  const isOtpEntered = otp.trim() !== "";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
  
    const userId = sessionStorage.getItem("userId");
  
    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${baseUrl}/api/Vendor/Verify-two-factor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId: userId,
          code: otp,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data?.status !== false) {
        console.log("Verification success:", data);
        setMessage("OTP verified successfully!");
        // router.push("/dashboard") or similar
      } else {
        setError(data?.message || "Verification failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while verifying the OTP.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleResendCode = async () => {
    if (resendCooldown > 0) return;
  
    setError("");
    setMessage("");
  
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      setError("User ID not found. Please log in again.");
      return;
    }
  
    try {
      const response = await fetch(`${baseUrl}/api/Vendor/Verify-two-factor?UserId=${userId}&code=${otp}`, {
        method: "GET",
      });
  
      const contentType = response.headers.get("content-type");
      const data = contentType?.includes("application/json")
        ? await response.json()
        : { message: await response.text() };
  
      if (response.ok && data.status !== false) {
        setMessage("Code resent successfully.");
        setResendCooldown(30); // Start a 30-second cooldown
      } else {
        setError(data?.message || "Failed to resend code.");
      }
    } catch (err) {
      setError("An error occurred.");
      console.error(err);
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
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          {message && <p className="text-green-600 text-center mt-2">{message}</p>}

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
  {resendCooldown > 0 ? (
    <p>{`00:${resendCooldown.toString().padStart(2, '0')}`}</p>
  ) : (
    <div />
  )}
  <button
    type="button"
    onClick={handleResendCode}
    disabled={resendCooldown > 0}
    className={`${
      resendCooldown === 0
        ? "text-[#5F04F6] hover:underline cursor-pointer"
        : "text-gray-400 cursor-not-allowed"
    }`}
  >
    Resend Code
  </button>
</div>


            <button
              type="submit"
              className={`w-full text-white py-3 rounded-lg transition duration-300 ${
                isOtpEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
              }`}
              disabled={!isOtpEntered || loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
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

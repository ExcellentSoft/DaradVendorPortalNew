"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function LoginPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const router = useRouter();

  const isOtpEntered = otp.trim() !== "";

  useEffect(() => {
 
    const storedOtp = sessionStorage.getItem("otp");
    if (storedOtp) {
      setOtp(storedOtp);
    }

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

    console.log("OTP entered:", otp); 

    if (otp.length !== 6) {
        setError("OTP must be exactly 6 digits.");
        setLoading(false);
        console.log("Validation Error: OTP must be exactly 6 digits.");
        return;
    }

    const userId = sessionStorage.getItem("userId");
    console.log("User ID from sessionStorage:", userId);

    if (!userId) {
        setError("User ID not found. Please log in again.");
        setLoading(false);
        console.log("Error: User ID not found.");
        return;
    }

    try {
       
        const url = new URL("https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/Verify-two-factor");
        url.searchParams.set("UserId", userId);
        url.searchParams.set("code", otp);

        console.log("Verification URL:", url.toString());

        const response = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Accept": "text/plain",
            },
        });

        const data = await response.json();
        console.log("Response from verification:", data);

        if (response.ok && data?.status) {
            setMessage("OTP verified successfully!");
            console.log("OTP verification successful.");
            router.push("/dashboard");
        } else {
            setError(data?.message || "Verification failed. Please try again.");
            console.log("OTP verification failed:", data?.message);
        }
    } catch (err) {
        console.error("Error during OTP verification:", err);
        setError("An error occurred while verifying the OTP.");
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
      const url = new URL(`${baseUrl}/api/Vendor/Resend-Code`);
      url.searchParams.set("UserId", userId);

      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Accept": "text/plain", 
        },
      });

      const data = response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (response.ok && data.status) {
        setMessage("Code resent successfully.");
        setResendCooldown(30);
      } else {
        setError(data?.message || "Failed to resend code.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred.");
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // allow digits only
    setOtp(value);
    sessionStorage.setItem("otp", value);
  };
  

  return (
    <div className="relative min-h-screen w-full bg-[#FBFAFF] p-6">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex gap-2">
        <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
        <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
      </div>

      {/* Centered Form */}
<div className="container flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
          <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Two-Step Verification
          </h2>
          <p className="text-center text-[16px] text-[#121212CC] mt-2">
            A one-time code has been sent to your registered email/phone. Please enter the code below.
          </p>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          {message && <p className="text-green-600 text-center mt-2">{message}</p>}

          <form className="w-full flex flex-col items-center mt-6" onSubmit={handleSubmit}>
          <label className="block text-[#101928] w-full text-[16px] font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              OTP
            </label>

            <input
              type="text"
              placeholder="Enter your OTP"
              value={otp}
              onChange={handleOtpChange}
              required
              inputMode="numeric"
              pattern="\d*"
              maxLength={6}
              className={`w-full px-4 py-3 mb-1 rounded-lg border bg-white text-[#121212] focus:outline-none ${
                error ? "border-red-500 focus:ring-red-500" : "border-[#D0D5DD] focus:ring-[#5F04F6]"
              }`}
            />

            {error && <p className="text-red-500 text-sm w-full mb-3">{error}</p>}


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

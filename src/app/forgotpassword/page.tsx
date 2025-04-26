"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const router = useRouter();
  const isEmailEntered = email.trim() !== "";

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!isEmailEntered || !validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Vendor/forgot-password?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
          headers: {
            accept: "text/plain",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to send reset link. Please try again.");
      }
  
      setSuccess("OTP has been sent to your email. Please check your inbox.");
  
      // Delay the navigation by 2 seconds (or adjust as needed)
      setTimeout(() => {
        router.push("/reset-password");
      }, 2000); // 2000 ms = 2 seconds
  
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-[1280px] bg-[#FBFAFF] shadow-lg rounded-lg overflow-hidden pb-6">
        <div className="flex w-full h-[832px]">
          {/* Left Section */}
          <div className="flex flex-col w-[760px]">
            {/* Logo */}
            <div className="flex p-8 w-[1280px]">
              <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
              <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
            </div>

            {/* Form */}
            <div className="flex flex-col items-center bg-white w-[470px] h-[428px] p-8 m-20">
              <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: "Urbanist, sans-serif" }}>
                Forgot Your Password?
              </h2>
              <p className="text-center text-[16px] text-[#121212CC] mt-2">
                No worries. Enter your registered phone number or email to reset your password.
              </p>

              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
              {success && <p className="text-green-500 text-center mt-2">{success}</p>}

              <form className="w-full flex flex-col items-center mt-6 max-w-[336px]" onSubmit={handleSubmit}>
                <label className="block text-[#101928] w-full text-[16px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-[335px] px-4 py-4 mt-2 mb-4 rounded-lg bg-white z-10 relative focus:outline-none text-black focus:bg-white"
                  style={{
                    border: "1px solid #D0D5DD",
                    backgroundColor: "#ffffff",
                    color: "#121212",
                  }}
                />

<button
  type="submit"
  className={`w-full max-w-[335px] mt-4 text-white py-4 mb-4 rounded-lg transition-colors duration-300 ${isEmailEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"}`}
  disabled={!isEmailEntered || loading}
>
  {loading ? (
    <div className="flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  ) : (
    "Send OTP"
  )}
</button>

              </form>

              <p className="mt-4 text-center text-[#121212CC] mb-4 text-[14px] font-medium">
                Already have an account?
                <Link href="/login" className="text-[#5604F6] ml-2">
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[520px] relative">
            <Image
              src="/intersect.svg"
              alt="Happy vendor"
              fill
              className="object-cover rounded-r-lg"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-around items-center px-6 mt-4 gap-2">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 MyDarads. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center sm:text-right">
            Developed by Kaybii Technologies
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-[1280px] bg-[#FBFAFF] shadow-lg rounded-lg overflow-hidden pb-6">
        <div className="flex w-full h-[832px]">
          <div className="flex flex-col w-[760px]">
            {/* Logo */}
            <div className="flex p-8 w-[1280px]">
              <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
              <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
            </div>

            {/* Form */}
            <div className="flex flex-col items-center bg-white w-[470px] h-[428px] p-8 m-20">
              <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Forgot Your Password? 
              </h2>
              <p className="text-center text-[16px] text-[#121212CC] mt-2">
              No worries. Enter your registered phone number or email to reset your password.
              </p>
              {error && <p className="text-red-500 text-center">{error}</p>}

              <form className="w-full flex flex-col items-center mt-6 max-w-[336px]" onSubmit={handleSubmit}>
                <label className="block text-[#101928] w-full text-[16px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-[335px] px-4 py-4 mt-2 mb-4 rounded-lg bg-white z-10 relative focus:outline-none focus:bg-white"
                  style={{
                    border: "1px solid #D0D5DD",
                    backgroundColor: "#ffffff",
                    color: "#121212",
                  }}
                />

                <button
                  type="submit"
                  className={`w-full max-w-[335px] mt-4 text-white py-4 mb-4 rounded-lg transition-colors duration-300 ${isEmailEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"}`}
                  disabled={!isEmailEntered}
                >
                  Send OTP
                </button>
              </form>

              <p className="mt-4 text-center text-[#121212CC] mb-4 text-[14px] font-medium">
  Already have an account? 
  <Link href="/login" className="text-[#5604F6] ml-8">
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
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
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

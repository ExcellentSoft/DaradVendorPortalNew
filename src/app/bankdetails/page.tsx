"use client";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AddBankDetails() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

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
            <div className="flex flex-col items-center bg-white w-[470px] h-[auto] p-8 m-20">
              <h2 className="text-[24px] font-bold text-center text-gray-800 mb-1">Add Your Bank Details</h2>
              <p className="text-[14px] text-center text-[#121212CC] mb-6">
                Securely connect your bank to receive payments.
              </p>

              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                {/* Email Field */}
             

                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option>Select your bank</option>
                    <option>Bank A</option>
                    <option>Bank B</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Select your bank to proceed.</p>
                </div>

                {/* Account Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your account number"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter your account number.</p>
                </div>

                {/* Withdrawal Pins */}
                <div className="flex gap-4">
                  <div className="w-1/2 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Set Withdrawal Pin</label>
                    <input
                      type={showPin ? "text" : "password"}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="****"
                    />
                    <span
                      className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
                      onClick={() => setShowPin(!showPin)}
                    >
                      {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Enter your 4-digit withdrawal PIN.</p>
                  </div>

                  <div className="w-1/2 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Withdrawal Pin</label>
                    <input
                      type={showConfirmPin ? "text" : "password"}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="****"
                    />
                    <span
                      className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
                      onClick={() => setShowConfirmPin(!showConfirmPin)}
                    >
                      {showConfirmPin ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Confirm your 4-digit PIN.</p>
                  </div>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#5F04F6] text-white font-medium rounded-lg hover:bg-[#4b03c4] transition duration-300"
                  >
                    Save & Continue
                  </button>
                </div>
              </form>
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

"use client";

import Image from "next/image";
import { Eye, EyeOff,Loader2 } from "lucide-react"; 
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isEmailEntered = email.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      setErrors({
        password: !formData.password ? "Password is required" : "",
        confirmPassword: !formData.confirmPassword ? "Confirm password is required" : "",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    try {
      const response = await fetch(
        "https://daradservice.azurewebsites.net/api/Vendor/Become-Vendor",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
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
    <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden p-6">

    {/* Logo Section at top-left */}
    <div className="absolute top-6 left-6 flex gap-2">
      <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
      <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
    </div>
  
    {/* Centered Form + Image */}
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex w-full max-w-[1600px] mx-60  rounded-lg overflow-hidden">
        
        {/* Form Section */}
        <div className="flex flex-col items-center justify-center w-[760px]">
       
            <div className="flex flex-col items-center bg-white w-[550px] h-[650px] m-20">
            <div className="w-full max-w-[800px] border-b border-gray-200 mb-8 px-8 pt-8 mt-20">

            <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Create a new password
            </h2>
            <p className="text-center text-[16px] text-[#121212CC] mt-2 mb-4">
            Your new password must be strong and secure.
            </p>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
  
            <form
              className="w-full flex flex-col items-center p-8 mt-6 max-w-[550px]"
              onSubmit={handleSubmit}
            >
              <label
                className="block text-[#101928] w-full text-[16px] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                New Password
              </label>

              <div className="mb-4 relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="vendor@gmail.com"
                  className={`w-[470px] px-4 py-3 rounded-md border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={handleChange}
                  value={formData.password}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-8 top-3.5 cursor-pointer text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>

              <label
                className="block text-[#101928] w-full text-[16px] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Confirm New Password
              </label>

              <div className="mb-2 relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="vendor@gmail.com"
                  className={`w-[470px] px-4 py-3 rounded-md border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-8 top-3.5 cursor-pointer text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full max-w-[470px] mt-4 text-white py-3 mb-4 rounded-lg transition-colors duration-300 ${
                  isEmailEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
                }`}
                disabled={!isEmailEntered}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
  
        {/* Right Section Image */}
        <div className="w-[400px] h-[652px] mt-20 relative">
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
    <div className="flex justify-around  ml-40  ">
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


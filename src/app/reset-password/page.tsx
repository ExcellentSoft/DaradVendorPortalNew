"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (!otp || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    const requestBody = {
      email,
      code: otp,
      newPassword: password,
      confirmPassword,
    };

    try {
      const response = await fetch(
        "https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/reset-password",
        {
          method: "POST",
          headers: {
            Accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Password reset successful.");
      } else {
        setError(data.message || "Failed to reset password.");
      }
    }catch (error) {
      console.error(error); 
      setError("An error occurred. Please try again later.");
    }
     finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden p-6">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex gap-2">
        <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
        <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
      </div>

      <div className="flex items-center justify-center min-h-screen">
<div className="container flex rounded-lg overflow-hidden">

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

              {error && <p className="text-red-500 text-lg font-semibold text-center">{error}</p>}
              {successMessage && <p className="text-green-500 text-lg font-semibold text-center">{successMessage}</p>}

              <form className="w-full flex flex-col items-center p-8 mt-2 max-w-[550px]" onSubmit={handleSubmit}>
                <label className="block text-[#101928] w-full text-[16px] font-medium">OTP</label>
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="w-[470px] px-4 py-3 text-black text-[16px] rounded-md border border-gray-300"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                  />
                </div>

                <label className="block text-[#101928] w-full text-[16px] font-medium">New Password</label>
                <div className="mb-4 relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New Password"
                    className={`w-[470px] px-4 py-3 text-black text-[16px] rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"}`}
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <div onClick={() => setShowPassword(!showPassword)} className="absolute right-8 top-3.5 cursor-pointer text-gray-600">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>

                <label className="block text-[#101928] w-full text-[16px] font-medium">Confirm Password</label>
                <div className="mb-2 relative w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`w-[470px] px-4 py-3 text-black text-[16px] rounded-md border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                    onChange={handleChange}
                    value={formData.confirmPassword}
                  />
                  <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-8 top-3.5 cursor-pointer text-gray-600">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <button
                  type="submit"
                  className={`w-full max-w-[470px] mt-4 text-white py-3 mb-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${formData.password && formData.confirmPassword && formData.password === formData.confirmPassword ? "bg-[#5F04F6]" : "bg-[#5F04F680]"}`}
                  disabled={isLoading || !otp || !email || !formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword}
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Reset Password"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[400px] h-[652px] mt-20 relative">
            <Image
              src="/mans.svg"
              alt="Happy vendor"
              fill
              className="rounded-r-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-around ml-40">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 MyDarads. All rights reserved.</p>
        <p className="text-gray-500 text-sm text-center mr-40 sm:text-right">Developed by Kaybii Technologies</p>
      </div>
    </div>
  );
}

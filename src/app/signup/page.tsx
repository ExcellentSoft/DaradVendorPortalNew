"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Eye, EyeOff,Loader2 } from "lucide-react";


export default function Signup() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const [passwordChecks, setPasswordChecks] = useState({
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false,
    hasLength: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (name === "password" && typeof val === "string") {
      validatePassword(val);
    }
  };

  const validatePassword = (password: string) => {
    setPasswordChecks({
      hasLower: /[a-z]/.test(password),
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[^A-Za-z0-9]/.test(password),
      hasLength: password.length >= 8,
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.businessName) errs.businessName = "Business name is required";
    if (!formData.phone || formData.phone.length < 10) errs.phone = "Enter a valid phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords don’t match";

    const passwordValid = Object.values(passwordChecks).every(Boolean);
    if (!passwordValid) errs.password = "Password is not strong enough";

    if (!formData.agreed) errs.agreed = "You must agree to the terms";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/Vendor/Signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          businessName: formData.businessName,
          email: formData.email,
          phoneNumber: formData.phone,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.status === true) {
        // Try to extract the real message
        const innerMatch = data.data?.match(/Message\s=\s(.+?)\s*}/i);
        const message = innerMatch ? innerMatch[1] : "Unknown error";

        if (data.data.includes("Status = False")) {
          setApiMessage(message); 
        } else {
          setApiMessage("Account Created Successfully!");
          router.push('/verify-signup'); 
        }
      } else {
        setApiMessage(data.message || "Unexpected error. Please try again.");
      }
    } catch (error){
      console.error("Signup error:", error);
      setApiMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  
  

  const isEmailEntered = formData.email.trim() !== "";

  return (
    <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden">
      {/* Header */}
      <div className="bg-white top-0 p-6 w-full">
        <div className="ml-16 flex">
          <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
          <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
        </div>
      </div>
      {apiMessage && (
  <div className={`mt-4 text-center text-lg font-bold ${apiMessage.includes("Successfully") ? "text-green-500" : "text-red-500"}`}>
    {apiMessage}
  </div>
)}
      {/* Main Content */}
<div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center md:gap-24 justify-center">

        {/* Signup Form */}

        {/* Display the API response message */}


        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md w-full h-[600px] max-w-[550px] border">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Create Your <span className="text-purple-600">Vendors</span> Account
          </h2>
          <p className="text-sm text-center text-gray-600 mt-1">
            Sell different products, manage your store, and get a custom domain to grow your business online.
          </p>

          <form className="space-y-8 mt-6" onSubmit={handleSubmit}>
            {/* Business Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Business Name</label>
              <input
  name="businessName"
  value={formData.businessName}
  onChange={handleChange}
  type="text"
  placeholder="Business Name"
  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:outline-none text-black"
/>

              {errors.businessName && (
                <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>
              )}
            </div>

            {/* Phone and Email */}
            <div className="flex gap-2">
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-sm text-gray-700">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-[#5F04F6] text-white text-sm rounded-l-md border border-r-0 border-gray-300">
                    +234
                  </span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09029717250"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:outline-none text-black"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-sm text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:outline-none text-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Passwords */}
            <div className="flex gap-2">
              {/* Password */}
              <div className="flex flex-col w-1/2 gap-1 relative">
                <label className="text-sm text-gray-700">Password</label>
                <input
  type={showPassword ? "text" : "password"}
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="••••••••"
  autoComplete="new-password"
  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:outline-none text-black"
/>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
                <span
                  className="absolute right-3 top-9 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col w-1/2 gap-1 relative">
                <label className="text-sm text-gray-700">Confirm Password</label>
                <input
  type={showConfirmPassword ? "text" : "password"}
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="••••••••"
  autoComplete="new-password"
  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:outline-none text-black"
/>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
                <span
                  className="absolute right-3 top-9 cursor-pointer text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 focus:ring-purple-500"
              />
              <p className="text-black">
                I agree to the{" "}
                <span className="text-purple-600 underline cursor-pointer">
                  MyDarads Terms & Conditions
                </span>
              </p>
            </div>
            {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}

            {/* Submit Button */}
            <button
  type="submit"
  disabled={!isEmailEntered || loading}
  className={`w-full mt-4 text-white py-4 mb-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${
    isEmailEntered && !loading ? "bg-[#5F04F6]" : "bg-[#5F04F680] cursor-not-allowed"
  }`}
>
  {loading ? (
    <Loader2 className="h-5 w-5 animate-spin text-white" />
  ) : (
    "Start Selling For Free"
  )}
</button>


          </form>
        </div>

        {/* Right Graphic Section */}
        <div className="hidden md:block min-h-[600px] relative scale-[0.8]">
          <div className="relative w-full flex justify-center mt-10">
            <div className="absolute top-[-20px] left-[3px] w-36 h-24">
              <Image src="/Subtract.svg" alt="Top graphic" fill className="object-contain" />
            </div>
            <div className="w-[400px] h-[651px] relative">
              <Image src="/mann.svg" alt="Happy vendor" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-60px] right-[-60px] w-[100px] h-[100px]">
            <Image src="/Ellipse.svg" alt="Bottom graphic" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-around items-center p-6 gap-2">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2025 MyDarads. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm text-center sm:text-right">
          Developed by Kaybii Technologies
        </p>
      </div>
    </div>
  );
}


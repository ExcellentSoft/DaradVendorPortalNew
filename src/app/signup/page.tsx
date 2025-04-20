"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";



export default function Signup() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [email, setEmail] = useState("");
  const [passwordChecks, setPasswordChecks] = useState({
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false,
    hasLength: false,
  });
  const isEmailEntered = email.trim() !== "";
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
  

  function validatePassword(password: string) {
    setPasswordChecks({
      hasLower: /[a-z]/.test(password),
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[^A-Za-z0-9]/.test(password),
      hasLength: password.length >= 8,
    });
  }

  const validate = () => {
    let errs: any = {};

    if (!formData.businessName) errs.businessName = "Business name is required";
    if (!formData.phone || formData.phone.length < 10) errs.phone = "Enter a valid phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = "Passwords don’t match";

    const passwordValid = Object.values(passwordChecks).every(Boolean);
    if (!passwordValid) errs.password = "Password is not strong enough";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Account Created Successfully!");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden ">
   

      <div className=" bg-white top-0 p-6 w-full">
            <div className="ml-16 flex"> <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
            <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} /></div>
                 
                </div>

          <div className=" w-full  min-h-screen ">
    

         
               
                <div className="flex flex-col min-h-screen md:flex-row items-center md:gap-24 justify-center ">
        
                <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md w-full h-[600px] max-w-[550px] border">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Create Your <span className="text-purple-600">Vendors</span> Account
        </h2>
        <p className="text-sm text-center text-gray-600 mt-1">
          Sell different products, manage your store, and get a custom domain to grow your business online.
        </p>

        <form className="space-y-8 mt-6">
  {/* Business Name */}
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-700">Business Name</label>
    <input
      type="text"
      placeholder="Business Name"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      style={{
        border: "1px solid #D0D5DD",
        backgroundColor: "#ffffff",
        color: "#121212CC",
      }}
  />
  </div>

  {/* Phone and Email */}
  <div className="flex gap-2">
    <div className="flex flex-col w-1/2 gap-1">
      <label className="text-sm text-gray-700">Phone Number</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-[#5F04F6]  rounded-l-md text-white text-sm">
          +234
        </span>
        <input
          type="text"
          placeholder="09029717250"
          className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          style={{
            border: "1px solid #D0D5DD",
            backgroundColor: "#ffffff",
            color: "#121212CC",
          }}
       />
      </div>
    </div>
    <div className="flex flex-col w-1/2 gap-1">
      <label className="text-sm text-gray-700">Email Address</label>
      <input
        type="email"
        placeholder="dhemmexroxy@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border  border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none  focus:ring-2 focus:ring-purple-500"
        style={{
          border: "1px solid #D0D5DD",
          backgroundColor: "#ffffff",
          color: "#121212CC",
        }}
        />
    </div>
  </div>

  {/* Password */}
  <div className="flex gap-2">
  {/* Password */}
  <div className="flex flex-col w-1/2 gap-1 relative">
    <label className="text-sm text-gray-700">Password</label>
    <input
      type={showPassword ? "text" : "password"}
      placeholder="1234qwert@#$"
      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
      style={{
        border: "1px solid #D0D5DD",
        backgroundColor: "#ffffff",
        color: "#121212CC",
      }}
    />
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
      placeholder="1234qwert@#$"
      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
      style={{
        border: "1px solid #D0D5DD",
        backgroundColor: "#ffffff",
        color: "#121212CC",
      }}
  />
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
    <input type="checkbox" className="mt-1 text-purple-600 focus:ring-purple-500" />
    <p>
      I agree to the{" "}
      <span className="text-purple-600 underline cursor-pointer">
        Mydarads Terms & Conditions
      </span>
    </p>
  </div>

  {/* Button */}
  <button
    type="submit"
    className={`w-full max-w-[500px] mt-4 text-white py-4 mb-4 rounded-lg transition-colors duration-300 ${
      isEmailEntered ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
    }`}
  >
    Start Selling For Free
  </button>
</form>

      </div>


      {/* Right Section */}
      <div className="hidden md:block min-h-[600px]  relative scale-[0.8]">
 
    <div className="relative w-full flex justify-center mt-10">

  <div className="absolute  top-[-20px] left-[3px] w-36 h-24">
    <Image src="/Subtract.svg" alt="Top graphic" fill className="object-contain" />
  </div>


  <div className="w-[400px] h-[651px]     relative">
    <Image src="/mann.svg" alt="Happy vendor" fill className="object-cover" />
  </div>
</div>

 

  {/* Decorative Shape - Bottom Right */}
  <div className="absolute bottom-[-60px] right-[-60px] w-[100px] h-[100px] ">
    <Image src="/Ellipse.svg" alt="Bottom graphic" fill className="object-contain " />
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
    </div>
   
    
  );
}

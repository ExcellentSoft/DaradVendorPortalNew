"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import axios from "axios";

import { Eye, EyeOff, Loader2 } from "lucide-react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccessMessage(""); 
    setEmailError("");
    setPasswordError("");
    setLoading(true);
  
    let isValid = true;
  
    if (!email) {
      setEmailError("Hmm… that email doesn’t match our records.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    }
  
    if (!password) {
      setPasswordError("Hmm… that password doesn’t look right. Please try again.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Your password is too short. It must be at least 6 characters.");
      isValid = false;
    }
  
    if (!isValid) {
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        `https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/Vendor-Log`,
        {
          email,
          passWord: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
  
      console.log("Full API response:", response.data);
  
      const resData = response.data?.data;
      const isAuthCodeSent = resData?.isAuthCodeSent;
      const token = resData?.authToken;
      const userId = resData?.aspNetUser?.id;
  
      console.log("Extracted userId:", userId);
  
      sessionStorage.setItem("userId", userId);
  
      const userEmail = resData?.aspNetUser?.email || email;
  
      if (isAuthCodeSent) {
        setSuccessMessage("Login successful");
        localStorage.setItem("token", token);
        sessionStorage.setItem("userEmail", userEmail);
        sessionStorage.setItem("userId", userId);
  
        console.log("User email saved:", userEmail);
        console.log("Token saved:", token);
  
        setTimeout(() => {
          router.push("/twostep");
        }, 1500);
      } else {
        setError("Authentication failed or code not sent.");
        console.log("Auth code not sent.");
      }
  
    } catch (error: unknown) {
      console.error("Login error:", error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            setError("Invalid email or password. Please try again.");
          } else if (error.response.data?.message) {
            setError(error.response.data.message);
          } else {
            setError("An error occurred, please try again later.");
          }
        } else {
          setError("Network error. Please check your connection.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="container flex flex-col w-full max-w-[1280px] bg-[#FBFAFF] shadow-lg rounded-lg overflow-hidden pb-6">
        <div className="flex w-full h-[900px]">
          <div className="flex flex-col w-full md:w-[760px]">
            <div className="flex bg-white p-8 w-full">
           <img src="/logo.svg" alt="Darads Logo" width="40" height="40" />
<img src="/logo-name.svg" alt="Darads Logo" width="152" height="40" />

            </div>

            {error && <div className="text-red-600 text-center">{error}</div>}
            {successMessage && <div className="text-green-600 text-lg text-center">{successMessage}</div>}

            <div className="flex flex-col items-center bg-white w-full max-w-[500px] p-8 m-4 md:m-20 rounded-lg shadow-md">
              <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: "Urbanist, sans-serif" }}>
                Welcome Back, <span className="text-[#5604F6]">Vendor.</span>
              </h2>
              <p className="text-center text-sm text-[#121212CC] mt-2">
                Log in to manage your store, track orders, and <br />
                grow your business online.
              </p>

              <form className="w-full flex flex-col items-center mt-6 max-w-[336px]" onSubmit={handleSubmit}>
                <label className="block text-[#101928] w-full text-[16px] font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-4 mt-1 mb-1 rounded-lg bg-white text-black focus:outline-none ${
                    emailError ? "border border-red-500" : "border border-[#1E015680]"
                  }`}
                />
                <p className={`text-sm w-full ${emailError ? "text-red-500" : "text-[#121212B3]"} mb-4`}>
                  {emailError || "We need your email to proceed"}
                </p>

                <label className="block text-[#101928] w-full text-[16px] font-medium mb-1">Password</label>
                <div className="mb-1 relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`z-10 block text-black w-full rounded-lg p-4 focus:outline-none text-[16px] ${
                      passwordError ? "border border-red-500" : "border border-[#E3E5E5]"
                    }`}
                  />
                  {mounted && (
  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-gray-500">
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
)}

                </div>
                <p className={`text-sm w-full ${passwordError ? "text-red-500" : "text-[#121212B3]"} mb-4`}>
                  {passwordError || "Password can’t be empty—enter yours."}
                </p>

                <Link href="/forgotpassword" className="text-sm text-right w-full text-[#5604F6] mb-4">
                  Forgot password?
                </Link>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full max-w-[336px] text-white py-4 rounded-lg transition-colors duration-300 ${
                    email && password ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
                  } flex items-center justify-center`}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
                </button>
              </form>

              <p className="mt-4 text-center text-[#121212CC] mb-4 text-[14px] font-medium">
  Don’t have an account?{" "}
  <Link href="/" className="text-[#5604F6]">
    Sign Up
  </Link>
</p>


              <div className="m-4 flex items-center justify-center w-full max-w-[350px]">
                <div className="h-px w-1/2 bg-[#121212CC]"></div>
                <span className="px-2 text-[#121212CC] font-medium">OR</span>
                <div className="h-px w-1/2 bg-[#121212CC]"></div>
              </div>

              <button className="w-full max-w-[350px] flex items-center justify-start gap-3 pl-6 mt-4 text-[16px] text-[#121212CC] border py-4 rounded-lg font-medium">
                <img src="/google.svg" alt="Google" width={20} height={20} />
                Continue With Google
              </button>
            </div>
          </div>

          <div className="w-[520px] relative hidden md:block">
            <img src="/female.svg" alt="Happy vendor"  className="rounded-r-lg" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center px-6 mt-4 gap-2">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 MyDarads. All rights reserved.</p>
          <p className="text-gray-500 text-sm text-center sm:text-right">Developed by Kaybii Technologies</p>
        </div>
      </div>
    </div>
  );
}




































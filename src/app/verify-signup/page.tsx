"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
const [success, setSuccess] = useState("");


  const isFormValid = email.trim() !== "" && code.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(
        `${baseUrl}/api/Vendor/Verify-Signup-OTP?email=${encodeURIComponent(email)}&code=${code}`,
        {
          method: "POST",
          headers: {
            Accept: "text/plain",
          },
        }
      );
  
      const result = await response.json();
      
      if (result.status) {
        const apiMessage = result.data?.Message || "Account verified successfully!";
        setSuccess(apiMessage);
        setTimeout(() => {
          router.push("/login");
        }, 1000); 
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-[1280px] bg-[#FBFAFF] shadow-lg rounded-lg overflow-hidden pb-6">
        <div className="flex flex-col md:flex-row w-full h-full md:h-[832px]">
          <div className="flex flex-col w-full md:w-[760px]">
            {/* Logo */}
            <div className="flex bg-white p-8 w-[1280px]">
              <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
              <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
            </div>

            {/* Form */}
            <div className="flex flex-col items-center justify-center bg-white w-full md:w-[500px] h-full md:h-[600px] p-8 m-4 md:m-20 mx-auto">
              <h2 className="text-[24px] font-bold text-gray-700 text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                Join Thousands of Successful  <br /><span className="text-[#5604F6]">Vendors</span> in Nigeria
              </h2>

              {success && <p className="text-green-600 font-bold text-center mt-2">{success}</p>}
{error && <p className="text-red-500 text-center mt-2">{error}</p>}

              <form className="w-full flex flex-col items-center mt-6 max-w-[336px]" onSubmit={handleSubmit}>
                <label className="block text-[#101928] w-full text-[16px] font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 mt-2 mb-4 rounded-lg bg-white border focus:outline-none"
                  style={{
                    border: "1px solid #1E015680",
                    backgroundColor: "#ffffff",
                    color: "#121212",
                  }}
                />

                <label className="block text-[#101928] w-full text-[16px] font-medium">OTP Code</label>
                <input
                  type="text"
                  placeholder="Enter the OTP code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-4 mt-2 mb-4 rounded-lg bg-white border focus:outline-none"
                  style={{
                    border: "1px solid #1E015680",
                    backgroundColor: "#ffffff",
                    color: "#121212",
                  }}
                />

                <button
                  type="submit"
                  className={`w-full mt-4 text-white py-4 mb-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 ${
                    isFormValid ? "bg-[#5F04F6]" : "bg-[#5F04F680]"
                  }`}
                  disabled={!isFormValid || loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" /> Verifying...
                    </>
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-[#121212CC] mb-4 text-[14px] font-medium">
                Already have an account?{" "}
                <Link href="/login" className="text-[#5604F6]">
                  Log In
                </Link>
              </p>

              <div className="m-4 flex items-center justify-center w-full max-w-[350px]">
                <div className="h-px w-1/2 bg-[#121212CC] font-medium"></div>
                <span className="px-2 text-[#121212CC] font-medium">OR</span>
                <div className="h-px w-1/2 bg-[#121212CC] font-medium"></div>
              </div>

              <button className="w-full max-w-[350px] flex pl-6 mt-4 text-[16px] gap-2 text-[#121212CC] border py-4 rounded-lg font-medium">
                <Image src="/google.svg" alt="Google" width={20} height={20} />
                Continue With Google
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block w-[520px] relative">
            <Image
              src="/intersect.svg"
              alt="Happy vendor"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
            <div
              className="absolute bottom-4 left-4 p-4 rounded-lg shadow-md text-white"
              style={{ backdropFilter: "blur(4px)", backgroundColor: "#00000040" }}
            >
              <p className="border-b text-[16px]">✅ Create & Manage Your Online Store</p>
              <p className="border-b">✅ Get a Free Custom Domain</p>
              <p className="border-b">✅ Earn More as You Sell Products</p>
            </div>
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

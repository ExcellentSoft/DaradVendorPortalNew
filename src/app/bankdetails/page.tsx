"use client";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function AddBankDetails() {
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError("No email found in session.");
    }

    const fetchCustomerName = async () => {
      try {
        const response = await fetch(
          "https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/VendorProfile",
          {
            method: "GET",
            headers: {
              accept: "text/plain",
            },
          }
        );
        const result = await response.json();
        if (response.ok && result.data?.customerName) {
          setCustomerName(result.data.customerName);
        } else {
          setError("Failed to fetch customer name.");
        }
      } catch {
        setError("We couldn’t load your profile. Please try again shortly.");

      }
    };

    fetchCustomerName();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setConfirmationMessage("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    const body = {
      userEmail: email,
      accountNumber,
      accountName,
      bankName,
      pin,
      confirmPin,
    };

    try {
      const response = await fetch(
        "https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/save-vendor-bank-details",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.status) {
        const errorMessage = result.message || "An error occurred.";
        setError(errorMessage);
        return;
      }

      setMessage(result.message);
      await makePayment();
    } catch {
      setError("Failed to submit bank details.");
    }
  };

  const makePayment = async () => {
    if (!customerName) {
      setError("Customer name is required.");
      return;
    }

    const paymentBody = {
      amount: 5000,
      customerName,
      customerEmail: email,
    };

    try {
      const response = await fetch(
        "https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/PayRegFee",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentBody),
        }
      );

      const paymentResult = await response.json();

      if (paymentResult.status) {
        setConfirmationMessage("✅ Payment confirmed successfully!");
        setTimeout(() => {
          const checkoutUrl = paymentResult.data?.responseBody?.checkoutUrl;
          if (checkoutUrl) {
            setRedirecting(true);
            window.location.href = checkoutUrl;
          }
        }, 3000); // Show confirmation for 3 seconds before redirect
      } else {
        setConfirmationMessage("❌ Payment confirmation failed.");
      }
    } catch {
      setConfirmationMessage("❌ Failed to make payment request.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-[1280px] bg-[#FBFAFF] shadow-lg rounded-lg overflow-hidden pb-6">
        <div className="flex w-full h-[832px]">
          <div className="flex flex-col w-[760px]">
            <div className="flex p-8 w-[1280px]">
              <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
              <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
            </div>

            {confirmationMessage && (
              <div className="text-center text-lg font-semibold mt-2 text-green-600">
                {confirmationMessage}
              </div>
            )}
            {redirecting && (
              <div className="flex justify-center items-center mt-4">
                <p className="text-blue-600">Redirecting... Please wait.</p>
              </div>
            )}
            {message && <p className="text-blue-600 text-lg text-center">{message}</p>}
            {error && <p className="text-red-500 text-lg text-center">{error}</p>}

            <div className="flex flex-col items-center bg-white w-[470px] h-[auto] p-8 m-20">
              <h2 className="text-[24px] font-bold text-center text-gray-800 mb-1">
                Add Your Bank Details
              </h2>
              <p className="text-[14px] text-center text-[#121212CC] mb-6">
                Securely connect your bank to receive payments.
              </p>

              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Bank Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Account Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Account Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2 relative">
                    <label className="block text-sm font-medium text-black mb-1">
                      Set Withdrawal Pin
                    </label>
                    <input
                      type={showPin ? "text" : "password"}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-black"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      required
                    />
                    <span
                      className="absolute right-3 top-[38px] cursor-pointer"
                      onClick={() => setShowPin(!showPin)}
                    >
                      {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>

                  <div className="w-1/2 relative">
                    <label className="block text-sm font-medium text-black mb-1">
                      Confirm Withdrawal Pin
                    </label>
                    <input
                      type={showConfirmPin ? "text" : "password"}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-black"
                      value={confirmPin}
                      onChange={(e) => setConfirmPin(e.target.value)}
                      required
                    />
                    <span
                      className="absolute right-3 top-[38px] cursor-pointer"
                      onClick={() => setShowConfirmPin(!showConfirmPin)}
                    >
                      {showConfirmPin ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>
                </div>

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

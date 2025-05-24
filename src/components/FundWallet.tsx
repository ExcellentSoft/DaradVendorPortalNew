"use client";

import { useState } from "react";

export default function FundWalletForm() {
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleProceed = () => {
    if (paymentMethod === "online" && amount) {
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Fund Your Wallet</h2>
        <p className="text-sm text-center text-gray-500">
          Enter the amount you wish to add and select your preferred payment method.
        </p>

        <div className="space-y-2">
          <label className="block font-medium">Payment Method</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="online"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              Online Banking
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="manual"
                checked={paymentMethod === "manual"}
                onChange={() => setPaymentMethod("manual")}
              />
              Manual Deposit
            </label>
          </div>
        </div>

        {paymentMethod === "online" && (
          <p className="text-sm text-gray-500">
            Securely complete your transaction via your bank&apos;s online service.
          </p>
        )}

        <div className="space-y-2">
          <label htmlFor="amount" className="block font-medium">Deposit Amount (₦)</label>
          <input
            id="amount"
            type="number"
            placeholder="enter the amount to fund"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="bank" className="block font-medium">Select Your Bank</label>
          <select
            id="bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="" disabled>
              Choose a bank
            </option>
            <option value="gtbank">GTBank</option>
            <option value="access">Access Bank</option>
            <option value="zenith">Zenith Bank</option>
          </select>
        </div>

        <button
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          onClick={handleProceed}
        >
          Proceed To Payment
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Confirm Online Payment</h3>
            <p className="text-sm text-gray-600 mb-4">
              You are about to be redirected to your bank&apos;s secure online portal to complete your payment of ₦{amount}. Please ensure you have your bank login credentials ready.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="border border-gray-300 rounded px-4 py-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700"
                onClick={() => {
                  // Replace with redirection logic
                  alert("Redirecting to bank portal...");
                  setShowModal(false);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

interface LogProductProps {
  onGoBack: () => void;
}

const LogType: React.FC = () => {
    
  return (
    <>
      {/* LOG TYPE NAME UI -- REPLICA OF IMAGE CONTENT */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search logs by name, date, or type..."
            className="border px-4 py-2 rounded-md text-sm w-72"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-sm text-gray-700">Date Created ▼</div>
          <div className="text-sm text-gray-700">Product Unit ▼</div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "",
                "Log Type Name",
                "Date Created",
                "Price Per Unit",
                "Fee Deducted",
                "Products Stock",
                "Action",
              ].map((header, idx, arr) => (
                <th
                  key={header}
                  className={`px-4 py-4 whitespace-nowrap bg-[#C2C3C5] text-[#121212] ${
                    idx === 0 ? "rounded-tl-lg" : ""
                  } ${idx === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#121212]">
            {[...Array(10)].map((_, idx) => (
              <tr key={idx} className="border-b bg-white hover:bg-gray-50">
                <td className="px-4 py-2">
            <div className="inline-block px-2 py-1 border border-[#D2D1D6] text-[#000000] rounded-md font-semibold">
              {idx + 1}
            </div>
          </td>
                <td className="px-4 py-3">
                  {idx < 3
                    ? ["Social Media", "Email Marketing", "Messaging"][idx]
                    : "Facebook Ad Leads"}
                </td>
                <td className="px-4 py-3">31/04/2024</td>
                <td className="px-4 py-3">₦10,000.00</td>
                <td className="px-4 py-3 text-red-500">-₦500</td>
                <td className="px-4 py-3">12</td>
                <td className="px-4 py-3">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const LogProductComponent: React.FC<LogProductProps> = ({ onGoBack }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeView, setActiveView] = useState<"product" | "logType">("product");

  const handleLogTypeClick = () => {
    setActiveView("logType");
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm relative">
          <div className="flex justify-between items-center mt-2 mb-2">
            <div
              className="flex gap-6 items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <h2 className="text-lg font-semibold text-[#000000]">
                {activeView === "product" ? "Log Product" : "Log Type Name"}
              </h2>
              <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-14 text-[#000000] left-4 w-48 bg-white border rounded-md shadow-md z-10">
                <button
                  onClick={() => {
                    setActiveView("product");
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Product
                </button>
                <button
                  onClick={handleLogTypeClick}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Log Type Name
                </button>
              </div>
            )}

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronLeft className="w-6 h-6 text-gray-500" />
              </button>
              <span>Page 1 Of 5</span>
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronRight className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            View, manage, and track all your logs in one place.
          </p>
        </div>

        {/* Render LogType only if selected */}
        {activeView === "logType" && <LogType />}
      </div>
    </div>
  );
};

export default LogProductComponent;

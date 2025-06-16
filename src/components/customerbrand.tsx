import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Banner from "./bannerupload";

export default function StoreCustomization() {
  const [brandColor, setBrandColor] = useState("#9251f5");
  const [activeTab, setActiveTab] = useState<"brand" | "banner">("brand");

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white shadow rounded-md w-full">
          {/* Header */}
          <div className="rounded-t-2xl p-5 gap-2 w-full bg-[#2E0234] text-white text-center">
            <h2 className="text-lg font-semibold mb-1">Customize Your Store Look</h2>
            <p className="text-sm mb-4">Personalize your store with colors, logos, and banners to reflect your brand.</p>
          </div>

          {/* Tabs */}
          <div className="m-4 flex justify-between border-b-1">
            <button
              onClick={() => setActiveTab("brand")}
              className={`px-3 py-1 text-lg font-semibold ${activeTab === "brand" ? "text-purple-600 border-b mb-2" : "text-black"}`}
            >
              Brand Colour
            </button>
            <button
              onClick={() => setActiveTab("banner")}
              className={`px-3 py-1 text-lg font-semibold ${activeTab === "banner" ? "text-purple-600 border-b mb-2" : "text-black"}`}
            >
              Banner Image
            </button>
          </div>

          {/* Brand Colour Tab */}
      {activeTab === "brand" && (
  <>
    <div className="mb-6 flex flex-col items-center justify-center">
      <label htmlFor="color-picker" className="mb-2 block text-sm text-black font-medium text-center">
        Pick a palette that best represents your brand
      </label>
      <SketchPicker
        color={brandColor}
        onChangeComplete={(color) => setBrandColor(color.hex)}
      />
      <input
        type="text"
        id="color-picker"
        className="mt-2 w-full max-w-xs border text-black border-gray-300 rounded px-3 py-2"
        value={brandColor}
        onChange={(e) => setBrandColor(e.target.value)}
      />
    </div>

    {/* Buttons shown ONLY for Brand tab */}
   <div className="flex justify-center m-8">

              <button className="px-4 py-2 bg-purple-600 text-white rounded-md">Save & Continue</button>
            </div>
  </>
)}


          {/* Banner Tab */}
          {activeTab === "banner" && (
            <div className="mb-6">
              <Banner />
            </div>
          )}

       
        </div>
      </div>
    </div>
  );
}

// components/BrandCustomization.tsx
'use client';

import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'; // For Banner Image tab
import { PaintBrushIcon } from '@heroicons/react/24/outline'; // For Brand Colour tab (e.g., as a dropper icon)

// Define the type for the active tab
type CustomizationTab = 'Brand Colour' | 'Banner Image';

// Product type and ProductCard component are no longer needed for Brand Colour tab
// If they are used elsewhere or might be reused for other tabs, keep them.
// Keeping them for now in case other parts of the application depend on them.
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  isActive: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        {/* Placeholder for Product Image */}
        Product Image
        <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border border-gray-300 flex items-center justify-center">
          {/* Dot indicator for active status - The outer circle is already white */}
          {product.isActive && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
        </div>
        <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          Active
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-md truncate">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1 truncate">{product.description}</p>
        <p className="text-gray-900 font-bold text-md mt-2">₦{product.price}</p>
      </div>
    </div>
  );
};

const BrandCustomization: React.FC = () => {
  // Set 'Banner Image' as the default active tab
  const [activeTab, setActiveTab] = useState<CustomizationTab>('Banner Image');

  // Dummy product data (for 'Brand Colour' tab if we decide to keep product list for it)
  const products: Product[] = [
    { id: 1, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 2, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 3, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 4, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 5, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 6, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
  ];

  // Dummy saved colors for the color picker
  const savedColors = [
    '#EF4444', // Red
    '#F97316', // Orange
    '#F59E0B', // Amber
    '#EAB308', // Yellow
    '#84CC16', // Lime
    '#22C55E', // Green
    '#10B981', // Emerald
    '#06B6D4', // Cyan
    '#3B82F6', // Blue
    '#6366F1', // Indigo
    '#8B5CF6', // Violet
    '#D946EF', // Fuchsia
    '#EC4899', // Pink
    '#F43F5E', // Rose
    '#78350F', // Dark Brown
    '#1E293B', // Dark Blue-Gray (like the image)
  ];


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header Section - Darker Purple with top rounded corners and sharp bottom */}
      <div className="bg-purple-950 text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex flex-col justify-start items-start mb-4">
          <h1 className="text-2xl font-bold mb-2">Brand Customization</h1>
          <h2 className="text-purple-200 text-sm">
            Personalize your store with colors, logos, and banners to reflect your brand.
          </h2>
        </div>
      </div>

      {/* NEW: Combined Content Container (for Tabs, Description, and main content) */}
      {/* This container now holds the white background and shadow for the entire section */}
      <div className="bg-white mx-4 mt-4 rounded-lg shadow-md">

        {/* Tabs Menu Section - Now without its own background/shadow, padding handled by parent/self */}
        <div className="px-4 pt-4">
          <div className="flex justify-between overflow-x-auto pb-2 scrollbar-hide">
            {['Brand Colour', 'Banner Image'].map((tab) => (
              <button
                key={tab}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-700 hover:text-purple-700 hover:bg-gray-100 rounded-lg'
                }`}
                onClick={() => setActiveTab(tab as CustomizationTab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area - Conditionally rendered based on activeTab */}
        {activeTab === 'Banner Image' && (
          <>
            {/* Descriptive Text - Now directly within the main white wrapper content */}
            <div className="px-4 pb-4 text-gray-700 text-sm">
              Upload and adjust your banner image to create a stunning first impression.
            </div>

            {/* Upload Banner Container - Now also directly within the main white wrapper content */}
            <div className="px-4 pb-4">
              <div className="p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Banner Image</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Upload a clear, high quality logo (PNG, JPG, or SVG)
                </p>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
                  <div className="flex flex-col items-center justify-center">
                    <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600 mb-1">
                      Drop banner image here or <span className="font-medium text-purple-700">browse</span>
                    </p>
                    <p className="text-xs text-gray-400">.jpeg, .png & Max file size: 20 MB</p>
                    <input type="file" className="hidden" id="banner-upload" />
                    <label
                      htmlFor="banner-upload"
                      className="mt-4 px-6 py-2 bg-purple-700 text-white text-sm font-medium rounded-lg hover:bg-purple-800 transition-colors duration-200 cursor-pointer"
                    >
                      Browse Files
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Save & Continue Button */}
            <div className="px-4 pb-4">
              <div className="max-w-md mx-auto">
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  Save & Continue
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Brand Colour' && (
          <>
            {/* Descriptive text for Brand Colour tab */}
            <div className="px-4 pb-4 text-gray-700 text-sm">
              Pick a palette that best represents your brand vibe.
            </div>

            {/* Color Picker Interface (simulated based on Pallete.png) */}
            <div className="px-4 pb-4"> {/* Container for the color picker card */}
              <div className="border border-gray-200 rounded-lg shadow-sm p-6 max-w-md mx-auto">
                {/* Main Color Selection Area */}
                <div className="relative w-full h-64 bg-gradient-to-r from-white to-blue-700 via-purple-700 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  {/* Circle indicator for selected color - placeholder */}
                  <div className="absolute top-1/4 right-1/4 w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
                  </div>
                </div>

                {/* Color Slider with Dropper */}
                <div className="flex items-center mt-6 space-x-3">
                  <PaintBrushIcon className="h-5 w-5 text-gray-500 transform rotate-90" /> {/* Dropper icon */}
                  <div className="relative flex-grow h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
                    {/* Slider thumb - placeholder */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow border border-gray-300"></div>
                  </div>
                </div>

                {/* Hex Code Input */}
                <div className="flex items-center mt-6 space-x-3">
                  <div className="relative inline-flex items-center border border-gray-300 rounded-md shadow-sm">
                    <select className="appearance-none bg-transparent py-2 pl-3 pr-8 text-sm font-medium text-gray-700 rounded-l-md focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                      <option>Hex</option>
                      <option>RGB</option>
                      <option>HSL</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    value="#2622A5" // Example hex value
                    readOnly
                    className="flex-grow py-2 px-3 border border-gray-300 rounded-md shadow-sm text-gray-900 text-sm font-medium focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Saved Colors */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Saved Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {savedColors.map((color, index) => (
                      <div
                        key={index}
                        className="w-7 h-7 rounded-full border border-gray-200 cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Save & Continue Button - Re-added for Brand Colour tab */}
            <div className="px-4 pb-4">
              <div className="max-w-md mx-auto">
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  Save & Continue
                </button>
              </div>
            </div>
          </>
        )}

      </div> {/* End of NEW Combined Content Container */}
    </div>
  );
};

export default BrandCustomization;
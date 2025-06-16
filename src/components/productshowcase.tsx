'use client';


import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';


type ProductTab = 'Logo' | 'Gift Items' | 'Tutorials' | 'Phone Number' | 'Digital Courses';



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
      
        Product Image
        <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border border-gray-300 flex items-center justify-center">

          {product.isActive &&    <FiMoreVertical size={18} />}
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


const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductTab>('Digital Courses');


  // Dummy product data
  const products: Product[] = [
    { id: 1, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 2, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 3, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 4, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 5, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
    { id: 6, name: 'Naija Sneakers', description: 'Limited edition release', price: '7,500', isActive: true },
  ];


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header Section - Darker Purple with top rounded corners and sharp bottom */}
      <div className="bg-[#2E0234] text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Showcase Your Best Products</h1>
        </div>
        <p className="text-purple-200 text-sm">
          Select and add featured products to highlight on your homepage.
        </p>
      </div>


      
      <div className="bg-white px-4 py-3 shadow-md mt-4">
        <div className="flex space-x-4  justify-between pb-2 scrollbar-hide">
          {['Logo', 'Gift Items', 'Tutorials', 'Phone Number', 'Digital Courses'].map((tab) => (
            <button
              key={tab}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-purple-700 border-b-2 border-purple-700' 
                  : 'text-gray-700 hover:text-purple-700 hover:bg-gray-100 rounded-lg' 
              }`}
              onClick={() => setActiveTab(tab as ProductTab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      {/* Main Content Area */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-700 text-sm">
            Total Products
          </div>
          <div className="text-gray-700 text-sm font-bold">
            16
          </div>
        </div>


        {/* Product Grid - Two items per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>


       
        <div className="max-w-md mx-auto p-4 ">
          <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium ">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductShowcase;
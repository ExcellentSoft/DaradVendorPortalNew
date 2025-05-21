"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/assets/doodle.png";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: string;
  stock: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    category: 'Fashion & Apparel',
    subCategory: 'Footwear',
    price: '₦5,000.00',
    stock: 10,
    image: '/products/nike-air-max.jpg',
  },
  {
    id: 2,
    name: 'Apple iPhone 13 Pro',
    category: 'Electronics',
    subCategory: 'Smartphones',
    price: '₦7,000.00',
    stock: 11,
    image: '/products/iphone-13-pro.jpg',
  },
  {
    id: 3,
    name: 'Samsung 55" Smart TV',
    category: 'Electronics',
    subCategory: 'Televisions',
    price: '₦8,000.00',
    stock: 12,
    image: '/products/samsung-tv.jpg',
  },
  {
    id: 4,
    name: 'Organic Almonds',
    category: 'Fresh Produce',
    subCategory: 'Nuts & Seeds',
    price: '₦9,000.00',
    stock: 15,
    image: '/products/almonds.jpg',
  },
  {
    id: 5,
    name: 'Modern Wooden Chair',
    category: 'Home & Kitchen',
    subCategory: 'Furniture',
    price: '₦3,000.00',
    stock: 20,
    image: '/products/wooden-chair.jpg',
  },
  {
    id: 6,
    name: 'Bluetooth Noise-Cancelling Headphones',
    category: 'Electronics',
    subCategory: 'Audio',
    price: '₦4,000.00',
    stock: 25,
    image: '/products/headphones.jpg',
  },
  {
    id: 7,
    name: 'Luxury Perfume Gift Set',
    category: 'Beauty & Personal Care',
    subCategory: 'Fragrances',
    price: '₦2,000.00',
    stock: 30,
    image: '/products/perfume.jpg',
  },
  {
    id: 8,
    name: 'Wireless Smartwatch',
    category: 'Electronics',
    subCategory: 'Wearables',
    price: '₦6,000.00',
    stock: 35,
    image: '/products/smartwatch.jpg',
  },
  {
    id: 9,
    name: 'Vintage Denim Jacket',
    category: 'Fashion & Apparel',
    subCategory: 'Outerwear',
    price: '₦1,000.00',
    stock: 40,
    image: '/products/denim-jacket.jpg',
  },
  {
    id: 10,
    name: 'Organic Herbal Tea',
    category: 'Beverages',
    subCategory: 'Beverages',
    price: '₦1,500.00',
    stock: 45,
    image: '/products/herbal-tea.jpg',
  },
];

type Category = {
  id: number;
  name: string;
  subCategories: string;
  monthlySales: string;
  totalProducts: number;
  dateCreated: string;
  lastModified: number;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    subCategories: "Smartphones, Laptops, Headphones, Smartwatches",
    monthlySales: "₦5,000.00",
    totalProducts: 10,
    dateCreated: "21/04/2025",
    lastModified: 31,
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    subCategories: "Men’s Wear, Women’s Wear, Footwear, Accessories",
    monthlySales: "₦7,000.00",
    totalProducts: 11,
    dateCreated: "19/04/2025",
    lastModified: 30,
  },
  {
    id: 3,
    name: "Home & Kitchen",
    subCategories: "Furniture, Home Decor, Appliances, Cookware",
    monthlySales: "₦8,000.00",
    totalProducts: 12,
    dateCreated: "18/04/2025",
    lastModified: 28,
  },
  {
    id: 4,
    name: "Sport & Outdoor",
    subCategories: "Gym Equipment, Activewear, Outdoor Gear",
    monthlySales: "₦9,000.00",
    totalProducts: 15,
    dateCreated: "17/04/2025",
    lastModified: 28,
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    subCategories: "Skincare, Makeup, Fragrances, Hair Care",
    monthlySales: "₦3,000.00",
    totalProducts: 20,
    dateCreated: "16/04/2025",
    lastModified: 27,
  },
  {
    id: 6,
    name: "Books & Media",
    subCategories: "Fiction, Non-Fiction, E-books, Magazines",
    monthlySales: "₦4,000.00",
    totalProducts: 25,
    dateCreated: "15/04/2025",
    lastModified: 26,
  },
  {
    id: 7,
    name: "Fresh Produce",
    subCategories: "Fruits, Vegetables, Herbs",
    monthlySales: "₦2,000.00",
    totalProducts: 30,
    dateCreated: "14/04/2025",
    lastModified: 25,
  },
  {
    id: 8,
    name: "Diary And Eggs",
    subCategories: "Milk, Cheese, Butter, Eggs",
    monthlySales: "₦6,000.00",
    totalProducts: 35,
    dateCreated: "13/04/2025",
    lastModified: 24,
  },
  {
    id: 9,
    name: "Meat & Sea Foods",
    subCategories: "Chicken, Beef, Fish, Shrimp",
    monthlySales: "₦1,000.00",
    totalProducts: 40,
    dateCreated: "12/04/2025",
    lastModified: 23,
  },
  {
    id: 10,
    name: "Beverages",
    subCategories: "Juice, Soft Drinks, Coffee",
    monthlySales: "₦1,500.00",
    totalProducts: 45,
    dateCreated: "11/04/2025",
    lastModified: 22,
  },
];

const LogProductComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewLogType, setViewLogType] = useState(false);

  const onGoBack = () => {
    setViewLogType(false);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div>
          <h1 className="text-xl font-bold text-gray-800">E-Commerce</h1>
          <p className="text-sm text-gray-500">
            Sell E-commerce products efficiently with seamless uploads and easy management.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">
            Create New Category
          </button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Upload E-Commerce Products
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-4 bg-[#1E0156] text-white p-6 rounded-md mb-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {[
          ["Total E-Commerce Product Uploaded", 25],
          ["Available E-Commerce For Sale", 10],
          ["Total E-Commerce Categories", 20],
          ["Pending Customer Requests", 5],
        ].map(([label, value], index, arr) => (
          <div
            key={index}
            className={`flex flex-col items-center px-2 ${index !== arr.length - 1 ? "border-r-2 border-white" : ""}`}
          >
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-sm text-center">{label}</span>
          </div>
        ))}
      </div>

      {/* Log Product Section */}
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm relative">
          <div className="flex justify-between items-center mt-2 mb-2">
            <div
              className="flex gap-6 items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <h2 className="text-lg font-semibold text-[#000000]">
                {viewLogType ? "E-Commerce Category" : "E-Commerce Products"}
              </h2>
              <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-14 left-4 w-48 bg-white border rounded-md shadow-md z-10 text-[#000000]">
                <button
                  onClick={() => setViewLogType(false)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  E-Commerce Products
                </button>
                <button
                  onClick={() => setViewLogType(true)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  E-Commerce Category
                </button>
                <button
                  onClick={onGoBack}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Product
                </button>
              </div>
            )}

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span>Page 1 Of 5</span>
              <button className="w-6 h-6 flex items-center justify-center border rounded-full bg-white text-gray-500">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            View, manage, and track all your e-commerce products in one place.
          </p>
        </div>

        {/* Tabs and Filters */}
        {viewLogType ? (
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search logs by name, date, or type..."
              className="border px-4 py-2 rounded-md text-sm w-72"
            />
            <div className="flex gap-4">
              <div className="text-sm text-gray-700">Date Created ▼</div>
              <div className="text-sm text-gray-700">Product Unit ▼</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button className="bg-[#5604F6] text-white px-4 py-1.5 rounded-md text-sm">Most Sold</button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">
                Recently Added
              </button>
              <button className="border border-[#12121266] text-[#121212CC] px-4 py-1.5 rounded-md text-sm">
                Low Product Unit
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="logType" className="text-sm text-[#121212CC]">Country</label>
              <select id="logType" className="border-gray-300 text-[#121212CC] rounded-md text-sm">
                <option className="text-[#121212CC]">All Status</option>
              </select>
            </div>
          </div>
        )}

        {/* Logs Table */}
        {viewLogType ? (
            // Log Type Name Table
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto text-sm text-left">
              <thead>
          <tr className="bg-gray-100 text-left text-gray-700 text-sm">
            <th className="py-3 px-4">Categories Name</th>
            <th className="py-3 px-4">Sub Categories</th>
            <th className="py-3 px-4">Monthly Sales</th>
            <th className="py-3 px-4">Total Products</th>
            <th className="py-3 px-4">Date Created</th>
            <th className="py-3 px-4">Last Modified</th>
          </tr>
        </thead>
              <tbody>
          {categories.map((cat) => (
            <tr
              key={cat.id}
              className="border-t hover:bg-gray-50 text-sm text-gray-900"
            >
              <td className="py-3 px-4 flex items-center gap-2 font-medium">
                <div className="w-6 h-6 bg-yellow-500 text-white text-xs flex items-center justify-center rounded-full font-bold">
                  {cat.id}
                </div>
                {cat.name}
              </td>
              <td className="py-3 px-4">{cat.subCategories}</td>
              <td className="py-3 px-4">{cat.monthlySales}</td>
              <td className="py-3 px-4">{cat.totalProducts}</td>
              <td className="py-3 px-4">{cat.dateCreated}</td>
              <td className="py-3 px-4">{cat.lastModified}</td>
            </tr>
          ))}
        </tbody>
            </table>
          </div>
        ) : (
            // Default Logs Table
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Categories</th>
                  <th className="px-4 py-3">Sub Categories</th>
                  <th className="px-4 py-3">Price Per Unit</th>
                  <th className="px-4 py-3">Stock</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products.map((product) => (
                  <tr key={product.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">{product.id}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={30}
                        height={30}
                        className="rounded"
                      />
                      {product.name}
                    </td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">{product.subCategory}</td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3">{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogProductComponent;

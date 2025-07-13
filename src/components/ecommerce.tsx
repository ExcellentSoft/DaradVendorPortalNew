"use client";
import React, { useState, useEffect } from "react";
import bgImage from "../../public/assets/doodle.png";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { IoArrowBack } from "react-icons/io5";
import CreateModal from "./addnewproduct";

// Define product interface
interface ApiProduct {
  productId: number;
  name: string;
  categoryName?: string;
  price: string | number;
  stock: number;
  images?: { imageUrl: string }[];
  vendorName?: string;
  description?: string;
  dateCreated?: string;
}


interface LogProductProps {
  onGoBack: () => void;
}

const LogProductComponent: React.FC<LogProductProps> = ({ onGoBack }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewLogType, setViewLogType] = useState(false); 
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const [stats, setStats] = useState({
  totalProducts: 0,
  totalOrders: 0,
  totalCategories: 0,
  customerRequests: 0,
});

  // Fetch both product lists and merge results
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [res1, res2] = await Promise.all([
          fetch(
            "https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/get-all-products"
          ),
          fetch(
            "https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/get-all-products-details"
          ),
        ]);

        if (!res1.ok || !res2.ok) {
          throw new Error("One or both API calls failed.");
        }

        const data1 = await res1.json();
        const data2 = await res2.json();

        const products1 = data1?.data?.records ?? [];
        const products2 = data2?.data?.records ?? [];


         // ✅ Store vendorId from the first product if available
      if (products2.length > 0 && products2[0].vendorId) {
        localStorage.setItem("vendorId", String(products2[0].vendorId));
      }
        // Merge and deduplicate by productId
        const mergedMap = new Map<number, ApiProduct>();
        products1.forEach((p: ApiProduct) => mergedMap.set(p.productId, p));
        products2.forEach((p: ApiProduct) => mergedMap.set(p.productId, { ...mergedMap.get(p.productId), ...p }));

        setApiProducts(Array.from(mergedMap.values()));
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

useEffect(() => {
  const fetchStats = async () => {
    try {
      const storedVendorId = localStorage.getItem("vendorId");
      if (!storedVendorId) {
        console.warn("Vendor ID not found in localStorage.");
        return;
      }

      const res = await fetch(
        `https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/StatisticCount/${storedVendorId}`
      );

      if (!res.ok) throw new Error("Failed to fetch stats");

      const result = await res.json();
      if (result?.status) {
        setStats(result.data);
      }
    } catch (err: any) {
      console.error("Failed to fetch product stats:", err.message);
    }
  };

  fetchStats();
}, []);


  useEffect(() => {
  const delayDebounce = setTimeout(() => {
    if (searchText.trim() !== "") {
      const fetchSearchResults = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            `https://daradsapi-dedghra9bga3bscr.eastus-01.azurewebsites.net/api/Vendor/Products/search-product?SearchText=${encodeURIComponent(searchText)}&PageSize=20&PageNumber=1&VendorId=0`
          );

          const result = await res.json();
          setApiProducts(result?.data?.records || []);
        } catch (err: any) {
          console.error("Search error:", err);
          setError("Failed to fetch search results.");
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }
  }, 500); // debounce delay

  return () => clearTimeout(delayDebounce);
}, [searchText]);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <button
        onClick={onGoBack}
        className="w-full text-left px-4 py-3 text-sm font-semibold text-[#000000] hover:bg-gray-100 flex items-center gap-2"
      >
        <IoArrowBack size={18} />
        Back
      </button>

      {/* Top section */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-md">
        <div>
          <h1 className="text-xl font-bold text-gray-800">E-Commerce</h1>
          <p className="text-sm text-gray-500">
            Sell E-commerce products efficiently with seamless uploads and easy management.
          </p>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Create Products
          </button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
            Upload  Products
          </button>
        </div>
      </div>

      {/* Stats */}
   <div
  className="grid grid-cols-4 bg-[#1E0156] text-white p-16 rounded-md mb-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
  {[
    ["Total Product Uploaded", stats.totalProducts],
    ["Total Orders", stats.totalOrders],
    ["Total Categories", stats.totalCategories],
    ["Pending Customer Requests", stats.customerRequests],
  ].map(([label, value], index, arr) => (
    <div
      key={index}
      className={`flex flex-col items-center px-2 ${
        index !== arr.length - 1 ? "border-r-2 border-white" : ""
      }`}
    >
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm text-center">{label}</span>
    </div>
  ))}
</div>


      {/* Product / Category Toggle */}
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
                  onClick={() => {
                    setViewLogType(false);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  E-Commerce Products
                </button>
                <button
                  onClick={() => {
                    setViewLogType(true);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  E-Commerce Category
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
         <div className="flex items-center justify-between flex-wrap gap-4 mt-2">
 
  <p className="text-sm text-gray-600">
    View, manage, and track all your e-commerce products in one place.
  </p>
<input
  type="text"
  placeholder="Search logs"
  className="border border-[#6E6B7B] focus:border-gray-500 px-4 py-2 rounded-md text-sm text-[#6E6B7B] w-72 outline-none"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>


</div>

        </div>

       
        {viewLogType ? (
          // Category table
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-[#C2C3C5] text-[#121212] text-sm font-semibold rounded-tl-3xl">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">Category</th>
                 
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Date Created</th>
                </tr>
              </thead>
              <tbody className="text-[#121212]">
{apiProducts.map((product, index) => (
  <tr key={product.productId ?? `category-${index}`} className="border-b border-[#D2D1D6]">

                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">{product.categoryName || "N/A"}</td>
                   
                    <td className="px-4 py-3">{product.description || "N/A"}</td>
                    <td className="px-4 py-3">
                      {product.dateCreated
                        ? new Date(product.dateCreated).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Product table
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            {loading ? (
              <p className="p-4 text-center text-gray-500">Loading products...</p>
            ) : error ? (
              <p className="p-4 text-center text-red-500">Error: {error}</p>
            ) : (
              <table className="min-w-full table-auto text-sm text-left">
                <thead className="bg-[#C2C3C5] text-[#121212] text-sm font-semibold rounded-tl-3xl">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Product Name</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Stock</th>
                  </tr>
                </thead>
                <tbody className="text-[#121212]">
{apiProducts.map((product, index) => (
  <tr key={product.productId ?? `product-${index}`} className="border-b border-[#D2D1D6]">

                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 flex items-center gap-3">
                        {product.images?.[0]?.imageUrl && (
                          <img
                            src={product.images[0].imageUrl}
                            alt={product.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                        )}
                        <span>{product.name}</span>
                      </td>
                      <td className="px-4 py-3">{product.categoryName || "N/A"}</td>
                      <td className="px-4 py-3">₦{parseFloat(String(product.price)).toFixed(2)}</td>
                      <td className="px-4 py-3">{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <CreateModal onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogProductComponent;

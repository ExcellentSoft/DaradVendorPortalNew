import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface ProductOrderItem {
  totalCount: number;
  amount: number;
}

interface ProductOrdersCounts {
  totalProductsSold: number;
  totalAmount: number;
  giftItems: ProductOrderItem;
  logs: ProductOrderItem;
  tutorials: ProductOrderItem;
  digitalCourses: ProductOrderItem;
  verificationNumbers: ProductOrderItem;
}

const ProductsOrders = () => {
  const [productOrdersCounts, setProductOrdersCounts] = useState<ProductOrdersCounts | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
 

  const fetchVendorOverview = async () => {
    try {
      const token = localStorage.getItem('authToken');
      console.log("Token:", token);
      if (!token) throw new Error('No auth token found');

      const response = await fetch(
        'https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/GetVendorOverview',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      console.log("Raw response object:", response);
      const data = await response.json();
      console.log('Full API response:', data);

      if (response.ok && data?.status) {
        console.log('productOrdersCounts:', data.data.productOrdersCounts);
        setProductOrdersCounts(data.data.productOrdersCounts);
      } else {
        console.error('API responded with error:', data?.message);
      }
    } catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Fetch error:', error.message);
  } else {
    console.error('Fetch error:', error);
  }
}
 finally {
    setLoading(false); 
  }
  };

  fetchVendorOverview();
}, []);



  if (loading || !productOrdersCounts) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading product stats...
      </div>
    );
  }

const products = [
  {
    title: "Gift Items",
    sold: productOrdersCounts.giftItems?.totalCount ?? 0,
    revenue: `₦${productOrdersCounts.giftItems?.amount?.toLocaleString() ?? "0"}`,
    icon: <Image src="/gift.svg" alt="Gift" width={40} height={40} />
  },
  {
    title: "Logs",
    sold: productOrdersCounts.logs?.totalCount ?? 0,
    revenue: `₦${productOrdersCounts.logs?.amount?.toLocaleString() ?? "0"}`,
    icon: <Image src="/logs.svg" alt="Logs" width={40} height={40} />
  },
  {
    title: "Tutorials",
    sold: productOrdersCounts.tutorials?.totalCount ?? 0,
    revenue: `₦${productOrdersCounts.tutorials?.amount?.toLocaleString() ?? "0"}`,
    icon: <Image src="/tutorial.svg" alt="Tutorials" width={40} height={40} />
  },
  {
    title: "Digital Courses",
    sold: productOrdersCounts.digitalCourses?.totalCount ?? 0,
    revenue: `₦${productOrdersCounts.digitalCourses?.amount?.toLocaleString() ?? "0"}`,
    icon: <Image src="/digital.svg" alt="Digital Courses" width={40} height={40} />
  },
  {
    title: "Verification Numbers",
    sold: productOrdersCounts.verificationNumbers?.totalCount ?? 0,
    revenue: `₦${productOrdersCounts.verificationNumbers?.amount?.toLocaleString() ?? "0"}`,
    icon: <Image src="/phone.svg" alt="Verification" width={40} height={40} />
  },
];


  return (
    <div className="w-full flex items-center justify-center p-8 bg-[#f4f4f5]">
      <div className="container bg-white rounded-xl shadow p-8">
        <h2 className="text-xl font-semibold text-black mt-14 mb-2">Products Orders</h2>
        <p className="text-sm text-[#121212cc] mb-4 border-b border-[#12121266] pb-4">
          Monitor sales, track orders, and manage your top products at a glance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
          <div className="bg-[#2E0234] text-white p-4 rounded-xl flex flex-col justify-between shadow-md w-full h-auto min-h-[160px]">
            <div className="flex items-center gap-3">
              <Image src="/product.svg" alt="Total Sold" width={40} height={40} />
              <p className="text-sm">Total Products Sold</p>
            </div>
            <h3 className="text-3xl font-bold">{productOrdersCounts.totalProductsSold}</h3>
            <p className="text-sm">₦{productOrdersCounts.totalAmount.toLocaleString()} Revenue Generated</p>
          </div>

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white text-black border border-[#D2D5DA] p-4 rounded-xl flex flex-col justify-between shadow-sm w-full h-auto min-h-[160px]"
            >
              <div className="flex items-center gap-3">
                {product.icon}
                <p className="text-sm font-semibold">{product.title}</p>
              </div>
              <h3 className="text-2xl font-bold text-center">{product.sold} Sold</h3>
              <p className="text-sm">{product.revenue} Revenue Generated</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOrders;

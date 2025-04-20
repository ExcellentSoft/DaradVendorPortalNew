import React from "react";
import Image from 'next/image';

const ProductsOrders = () => {
  const products = [
    {
      title: "Gift Items",
      sold: 85,
      revenue: "₦300,000",
      icon: <Image src="/gift.svg" alt="Darads Logo" width={40} height={40} />
                 
    },
    {
      title: "Logs",
      sold: 150,
      revenue: "₦450,000",
      icon:  <Image src="/logs.svg" alt="Darads Logo" width={40} height={40} />
                 
    },
    {
      title: "Tutorials",
      sold: 30,
      revenue: "₦120,000",
      icon: <Image src="/tutorial.svg" alt="Darads Logo" width={40} height={40} />
                 
    },
    {
      title: "Digital Courses",
      sold: 50,
      revenue: "₦250,000",
      icon:  <Image src="/digital.svg" alt="Darads Logo" width={40} height={40} />
                 
    },
    {
      title: "Phone Numbers",
      sold: 150,
      revenue: "₦450,000",
      icon:  <Image src="/phone.svg" alt="Darads Logo" width={40} height={40} />
                 
    },
  ];

  return (
    <div className="w-full  flex items-center justify-center p-8 bg-[#f4f4f5]">
      <div className="w-full max-w-[1300px] h-[600px]  bg-white rounded-xl shadow p-8">
        <h2 className="text-xl font-semibold text-black mt-14 mb-2">Products Orders</h2>
        <p className="text-sm text-[#121212cc] mb-4 border-b border-[#12121266] pb-4">
          Monitor sales, track orders, and manage your top products at a glance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8">
          {/* Total Products Card */}
          <div className="bg-[#2E0234] text-white p-6 rounded-xl h-[160px] w-[360px] flex flex-col justify-between shadow-md">
            <div className="flex items-center gap-3">
               <Image src="/product.svg" alt="Darads Logo" width={40} height={40} />
                         
              <p className="text-sm">Total Products Sold</p>
            </div>
            <h3 className="text-3xl font-bold">5000</h3>
            <p className="text-sm">₦5,300,000 Revenue Generated</p>
          </div>

          {/* Dynamic Product Cards */}
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white text-black border border-[#D2D5DA] p-4 rounded-xl w-[360px] h-[160px] flex flex-col justify-between shadow-sm"
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

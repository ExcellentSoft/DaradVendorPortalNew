import React from "react";
import Image from "next/image";
import OrdersOverTimeChart from "./promotionovertime";
import CustomerConversion from "./conversion";
import RevenuePromotion from "./revenuepromotion";











const ordersChartData = [
  { name: 'Jan', orders: 100 },
  { name: 'Feb', orders: 250 },
  { name: 'Mar', orders: 500 },
  { name: 'Apr', orders: 700 },
  { name: 'May', orders: 300 },
  { name: 'Jun', orders: 350 },
  { name: 'Jul', orders: 300 },
  { name: 'Aug', orders: 400 },
  { name: 'Sep', orders: 650 },
  { name: 'Oct', orders: 950 }, 
  { name: 'Nov', orders: 400 },
  { name: 'Dec', orders: 500 },
];








const promotionDashboard = () => {
 

  return (
    <div className="p-6 space-y-6  min-h-screen">
      {/* Header */}
      <div className="p-6 bg-white rounded-lg shadow-md max-w-[1200px] mx-auto">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-[24px] font-bold text-[#121212]">Promotion Analytics</h2>
      <p className="text-[14px] text-[#121212CC]">Monitor engagement and revenue from your promotional campaigns.</p>
    </div>
    <button className="px-4 py-2 bg-[#5604F6]  text-white text-sm font-medium rounded-md">
      Create Promotions
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
     <div className="border border-[#12121233] p-4 rounded-lg text-center">
          <div className="flex gap-4 mb-1">
            <Image src="/view.png" alt="Wallet Icon" width={40} height={40} />
            <p className="text-sm text-gray-500 mt-2">Total Promotion Views</p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800">25,000</h3>
          <p className="text-xs text-gray-500">Views</p>
        </div>

         <div className="border border-[#12121233] p-4 rounded-lg text-center">
          <div className="flex gap-4 mb-1">
            <Image src="/convert.png" alt="Wallet Icon" width={40} height={40} />
            <p className="text-sm text-gray-500 mt-2">Conversion Rate</p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800">5%</h3>
          <p className="text-xs text-gray-500">Conversion</p>
        </div>

   

    <div className="border border-[#12121233] p-4 rounded-lg text-center">
          <div className="flex gap-4 mb-1">
            <Image src="/count.png" alt="Wallet Icon" width={40} height={40} />
            <p className="text-sm text-gray-500 mt-2">Active Promotions Count</p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800">3</h3>
          <p className="text-xs text-gray-500">Active Promotions</p>
        </div>

   
<div className="border border-[#12121233] p-4 rounded-lg text-center">
          <div className="flex gap-4 mb-1">
            <Image src="/dollar.png" alt="Wallet Icon" width={40} height={40} />
            <p className="text-sm text-gray-500 mt-2"> Revenue</p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800">₦12,000</h3>
          <p className="text-xs text-gray-500">Total Revenue</p>
        </div>



   
  </div>
</div>


      {/* Breakdown Section */}
   <div className="grid grid-cols-3 gap-6 max-h-[600px] overflow-y-auto">
  {/* Left Side - 2/3 width */}
  <div className="col-span-2 ">
  <RevenuePromotion/>
</div>
<div className="col-span-1">
  {/* Right Side - 1/3 width */}
  <CustomerConversion/>
  
</div>
</div>

      {/* Orders Over Time */}
    <OrdersOverTimeChart ordersData={ordersChartData} />


    
    </div>
  );
};

export default promotionDashboard;

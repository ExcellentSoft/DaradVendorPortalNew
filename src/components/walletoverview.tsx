'use client';

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const EcommerceStats = () => {
  const [ecommerceStat, setEcommerceStat] = useState<{
    totalProductsListed: number;
    totalRevenue: number;
    customerCount: number;
    totalOrders: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendorOverview = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No auth token found");

        const response = await fetch(
          "https://daradsvendorapi-h9cpe0fzhrb4cqa7.eastus-01.azurewebsites.net/api/Vendor/GetVendorOverview",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (response.ok && data?.status) {
          console.log("ecommerceStat:", data.data.ecommerceStat);
          setEcommerceStat(data.data.ecommerceStat);
        } else {
          console.error("API error:", data?.message);
        }
      }catch (error: unknown) {
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

  const formatCurrency = (amount: number) =>
    `₦${amount?.toLocaleString()}`;

  const stats = ecommerceStat
    ? [
        {
          title: "Total Products Listed",
          value: ecommerceStat.totalProductsListed.toString(),
          label: "Products",
          note: "View All Products",
          icon: (
            <Image
              src="/productt.svg"
              alt="Product Icon"
              width={40}
              height={40}
            />
          ),
        },
        {
          title: "Total Revenue",
          value: formatCurrency(ecommerceStat.totalRevenue),
          label: "",
          note: "8% This Month",
          growth: true,
          icon: (
            <Image
              src="/revenue.svg"
              alt="Revenue Icon"
              width={40}
              height={40}
            />
          ),
        },
        {
          title: "Customer Count",
          value: ecommerceStat.customerCount.toString(),
          label: "Customers",
          note: "10% This Month",
          growth: true,
          icon: (
            <Image
              src="/customer.svg"
              alt="Customer Icon"
              width={40}
              height={40}
            />
          ),
        },
        {
          title: "Total Orders Placed",
          value: ecommerceStat.totalOrders.toString(),
          label: "Orders",
          note: "10% This Month",
          growth: true,
          icon: (
            <Image
              src="/orderr.svg"
              alt="Order Icon"
              width={40}
              height={40}
            />
          ),
        },
      ]
    : [];

  if (loading) return <p className="p-4 text-gray-500">Loading stats...</p>;

  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#f4f4f5]">
      <div className="w-full max-w-[1300px] rounded-xl p-4 sm:p-6 md:p-8">
        <h2 className="text-[18px] sm:text-[20px] text-[#000000] font-semibold mb-2">
          E-commerce Stats
        </h2>
        <p className="text-[#121212CC] text-[14px] mb-6 border-b pb-2 border-[#12121299]">
          Your store performance in a glance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm text-gray-500">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-black">
                    {stat.value}
                  </p>
                  {stat.label && (
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  )}
                </div>
                <div>{stat.icon}</div>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-2 text-sm">
                {stat.title !== "Total Products Listed" ? (
                  <>
                    <p className="text-[#12121299]">This Month</p>
                    {stat.growth ? (
                      <span className="flex items-center text-green-600">
                        <ArrowUpRight className="w-4 h-4 mr-1" /> {stat.note}
                      </span>
                    ) : (
                      <span className="text-[#1D9E34]">{stat.note}</span>
                    )}
                  </>
                ) : (
                  <div className="ml-auto text-[#12121299]">{stat.note}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceStats;

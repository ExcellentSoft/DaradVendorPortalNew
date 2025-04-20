import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const EcommerceStats = () => {
  const stats: {
    title: string;
    value: string;
    label: string;
    note: string;
    icon: React.ReactNode;
    growth?: boolean;
  }[] = [
    {
      title: "Total Products Listed",
      value: "250",
      label: "Products",
      note: "View All Products",
      icon: <Image src="/productt.svg" alt="Product Icon" width={40} height={40} />,
    },
    {
      title: "Total Revenue",
      value: "\u20a65,000,000",
      label: "",
      note: "8% This Month",
      growth: true,
      icon: <Image src="/revenue.svg" alt="Revenue Icon" width={40} height={40} />,
    },
    {
      title: "Customer Count",
      value: "1,200",
      label: "Customers",
      note: "10% This Month",
      growth: true,
      icon: <Image src="/customer.svg" alt="Customer Icon" width={40} height={40} />,
    },
    {
      title: "Total Orders Places",
      value: "1,500",
      label: "Customers",
      note: "10% This Month",
      growth: true,
      icon: <Image src="/orderr.svg" alt="Order Icon" width={40} height={40} />,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center p-8 bg-[#f4f4f5]">
      <div className="w-full max-w-[1300px] h-[300px]  rounded-xl p-8">
        <h2 className="text-[20px] text-[#000000] font-semibold mb-2">E-commerce Stats</h2>
        <p className="text-[#121212CC] text-[14px] mb-6 border-b pb-2 border-[#12121299]">
          Your store performance in a glance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border rounded-lg p-4  flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-black">{stat.value}</p>
                  {stat.label && <p className="text-sm text-gray-400">{stat.label}</p>}
                </div>
                <div>{stat.icon}</div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
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

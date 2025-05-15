// components/Dashboard.tsx
import { useState } from "react";
import { FC } from "react";
import Image from 'next/image';
import LogProduct from "@/components/logproduct";



const stats = [
 {
    title: "Total Uploaded Products",
    value: "8500",
    subtitle: "Uploaded",
    icon: "/arrow.svg",
  },
  {
    title: "Total Sold Product",
    value: "85,000",
    subtitle: "Unit Sold",
    icon: "/cart.svg",
  },
  {
    title: "Total Withdrawals",
    value: "85,000",
    subtitle: "This Week",
    icon: "/withdraww.svg",
  },
];

const products = [
  {
    name: "Logs Management",
    description: "Manage logs efficiently with seamless uploads and tracking.",
    available: "65/100",
   icon: "assets/logs.svg",
    tag: "Available Logs",
    tagColor: "border-[#5604F6] text-[#121212]",
  },
  {
    name: "Tutorials",
    description: "Upload and sell educational tutorials.",
    available: "24/100",
  icon: "assets/tutorial.svg",
    tag: "Available Tutorials",
    tagColor: "border-[#4E59C080] text-[#121212]",
  },
  {
    name: "Gift Items",
    description: "Manage gift products for sale.",
    available: "32/100",
    icon: "assets/gift.svg",
    tag: "Available Gift Items",
    tagColor: "border-[#F6A704] text-[#121212]",
  },
  {
    name: "Digital Courses",
    description: "Manage online courses and track enrollments.",
    subtext: "(E-Learning Content Management)",
    available: "70/100",
 icon: "assets/digital.svg",
    tag: "Available Digital Courses",
    tagColor: "border-[#6976EB80] text-[#121212]",
  },
  {
    name: "Phone numbers",
    description: "Manage online courses and track enrollments.",
    subtext: "(E-Learning Content Management)",
    available: "65/100",
    icon: "assets/phone.svg",
    tag: "Available Phone Numbers",
    tagColor: "border-[#0496FF80] text-[#121212]",
  },
  {
    name: "E-Commerce",
    description: "Manage online courses and track enrollments.",
    subtext: "(E-Learning Content Management)",
    available: "65/100",
  icon: "/assets/commerce.svg",
    tag: "Available E-Commerce Products",
    tagColor: "border-[#0496FF80] text-[#121212]",
  },
];

interface DashboardProps {
  onOpenLogProduct: () => void;
}

const Dashboard: FC<DashboardProps> = ({ onOpenLogProduct }) => {
  const [activeSubProduct, setActiveSubProduct] = useState<string | null>(null);

  if (activeSubProduct === "Logs Management") {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
           <LogProduct onGoBack={() => setActiveSubProduct(null)} />

      </div>
    );
  }

  return (
    <div className=" bg-gray-100 min-h-screen space-y-8 flex flex-col items-center">
      {/* Overview Section */}
      <div className="  bg-white w-full max-w-7xl px-4 sm:px-6 md:p-6 rounded-lg">
        <h2 className="text-lg text-[#121212] font-semibold mb-1">
          Manage Your Digital Products With Ease
        </h2>
        <p className="text-sm text-[#121212CC] mb-6">
          Add, edit, and track logs, phone numbers, tutorials, gift items, and digital courses—all in one place.
        </p>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full bg-white border rounded-lg p-5 md:p-8 shadow-sm flex flex-col justify-between h-48"
            >
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 mb-1">
                  <img
                    src={stat.icon}
                    alt={stat.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[14px] text-[#121212CC] text-center">{stat.title}</p>
              </div>

              <div className="flex justify-center">
                <h3 className="text-[40px] text-[#121212] font-bold">{stat.value}</h3>
              </div>

              <div className="flex justify-end">
                <p className="text-[14px] text-[#121212CC]">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products List Section */}
      <div className="bg-white w-full max-w-7xl rounded-lg p-4 sm:p-6 shadow space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#000000]">All MyDarads products</h2>
        {products.map((product, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b last:border-b-0 py-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0">
                <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-medium text-[#000000] text-base sm:text-lg">
                  {product.name}{" "}
                  {product.subtext && (
                    <span className="text-sm text-[#12121266]">{product.subtext}</span>
                  )}
                </p>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>

            <div className="flex justify-between sm:justify-end items-center sm:gap-8 gap-4">
              <div className={`text-xs px-3 py-2 border rounded-md font-medium ${product.tagColor}`}>
                {product.tag}
                <span className="font-bold ml-1 text-sm text-[#121212]">{product.available}</span>
              </div>
              <div
                className="sm:mt-0 mt-1 cursor-pointer"
                onClick={() => {
                  if (product.name === "Logs Management") {
                    onOpenLogProduct();
                    setActiveSubProduct(product.name);
                  } else {
                    setActiveSubProduct(product.name);
                  }
                }}
              >
                <Image src="/assets/right.svg" alt="Arrow Icon" width={20} height={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Dashboard;

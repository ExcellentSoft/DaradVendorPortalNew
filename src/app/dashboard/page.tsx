"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi"; 
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Overview from "../../components/overview";
import Product from "@/components/product";
import ApiUtility from "@/components/utility";
import Order from "@/components/Order";
import Transactions from "@/components/salesaccount";
import AccountTransactions from "@/components/acounttransaction";
import Promotion from "@/components/promotion";
import CreatePromotion from "@/components/createpromotion";
import Support from "@/components/support";
// import Settings from "@/components/settings";


export default function Dashboard() {
  const [activePage, setActivePage] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);


    const onOpenLogProduct = () => {
    console.log("Log Product opened");
  };

const renderPage = () => {
  switch (activePage) {
    case "Overview":
      return <Overview />;
    case "Products":
      return <Product onOpenLogProduct={onOpenLogProduct} />;
    case "API & Utilities":
      return <ApiUtility />;
    case "Orders":
      return <Order />;

       case "Sales Transactions":
      return <Transactions />;
    case "Account Transactions":
      return <AccountTransactions />;
    case "Current Promotion":
      return <Promotion />;
    case "Promotion":
      return <Promotion />;
    case "Create Promotion":
      return <CreatePromotion />;
    case "Current Promotion":
      return <Promotion />;
      case "Support":
      return <Support/>;
  
    default:
      return <Overview />;
  }
};



  return (
    <div className="flex min-h-screen bg-gray-100">
  {/* Sidebar and overlay stay full-screen */}
  <div
    className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity ${
      sidebarOpen ? "block" : "hidden"
    }`}
    onClick={() => setSidebarOpen(false)}
  />

  {/* Sidebar */}
  <aside
    className={`
      fixed top-0 left-0 z-50 h-full bg-white shadow transform transition-transform
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      w-64 md:w-[20%] md:translate-x-0
    `}
  >
    <div className="flex justify-end md:hidden p-4">
      <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
        <FiX className="w-6 h-6 text-gray-700" />
      </button>
    </div>
    <Sidebar setActivePage={setActivePage} />
  </aside>

  {/* Main Content */}
  <div className="flex flex-col flex-1 md:ml-[20%]">
    <div className="fixed top-0 left-0 md:left-[20%] w-full md:w-[80%] z-40 bg-white shadow">
      <div className="container">
        <Header activePage={activePage} onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
    </div>

    {/* Page Content */}
  <main className="mt-20 px-4 py-8 max-w-7xl mx-auto space-y-8">

      <div className="container">{renderPage()}</div>
    </main>

    {/* Footer */}
    <div className="container">
      <div className="flex flex-col sm:flex-row justify-around items-center px-6 mt-4 gap-2">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2025 MyDarads. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm text-center sm:text-right">
          Developed by Kaybii Technologies
        </p>
      </div>
    </div>
  </div>
</div>

  );
}

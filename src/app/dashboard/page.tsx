"use client";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi"; 
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Overview from "../../components/overview";
import Product from "@/components/product";
import Welcome from "@/components/welcomewallet";
import ApiUtility from "@/components/utility";
import Order from "@/components/Order";
import Transactions from "@/components/salesaccount";
import AccountTransactions from "@/components/acounttransaction";
import Promotion from "@/components/promotion";
import CreatePromotion from "@/components/createpromotion";
import Support from "@/components/support";
import Settings from "@/components/profile";
import Wallet from "../../components/wallet";
import AccountWallet from "../../components/walletmodule";
import FundWallet from "../../components/FundWallet";
import WebsiteStatistics from "@/components/websitestatistic";
import VendorStatistics from "@/components/vendorwebsite";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

 const [showWalletModal, setShowWalletModal] = useState(false);
  const [pendingWalletPage, setPendingWalletPage] = useState<string | null>(null);
    const onOpenLogProduct = () => {
    console.log("Log Product opened");
  };


  const [isMounted, setIsMounted] = useState(false);
useEffect(() => setIsMounted(true), []);

const renderPage = () => {
  if (activePage === "Sales Wallet") {
      return <Wallet />;
    }

  switch (activePage) {
    case "Overview":
      return <Overview />;
    case "Products":
      return <Product onOpenLogProduct={onOpenLogProduct} />;
    case "API & Utilities":
      return <ApiUtility />;
    case "Orders":
      return <Order />;
       case "Website Statistics":
      return <WebsiteStatistics />;
case "Vendor Website Setup":
  return <VendorStatistics  />;

       case "Sales Transactions":
      return <Transactions />;
    case "Account Transactions":
      return <AccountTransactions />;
    case "Promotion Analytics":
      return <Promotion />;
    case "Promotion":
      return <Promotion />;
    case "Create Promotion":
      return <CreatePromotion />;
  
      case "Support":
      return <Support/>;
   case "Settings":
      return <Settings/>;
        case "Fund Customer Wallet":
      return <FundWallet/>;
       case "Account Wallet":
      return <AccountWallet/>;
       case "Wallet":
      return <Wallet/>;
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
    fixed top-0 left-0 z-50 h-full bg-white shadow w-64 md:w-[20%]
    ${sidebarOpen ? "block" : "hidden"}
    md:block
  `}


>
<div className="flex justify-end md:hidden p-4">
      <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
      {isMounted && <FiX className="w-6 h-6 text-gray-700" />}
    </button>
  </div>

  <Sidebar
    setActivePage={(page) => {
      if (page === "Sales Wallet") {
        setPendingWalletPage(page);
        setShowWalletModal(true);
      } else {
        setActivePage(page);
      }
    }}
  />
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


     <Welcome
        isOpen={showWalletModal}
        onClose={() => {
          setShowWalletModal(false);
          if (pendingWalletPage) {
            setActivePage(pendingWalletPage);
            setPendingWalletPage(null);
          }
        }}
      />

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

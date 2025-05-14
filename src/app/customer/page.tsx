"use client";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import CustomerDetails from "@/components/customerdetails";

export default function CustomerPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[20%] fixed h-full bg-white shadow z-50 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="ml-[20%] w-[80%] flex flex-col">
        {/* Header */}
        <div className="fixed top-0 left-[20%] w-[80%] z-40 bg-white shadow">
          <Header />
        </div>

        {/* Scrollable Content */}
        <main className="mt-20 p-4 overflow-y-auto">
          <CustomerDetails />
        </main>
      </div>
    </div>
  );
}

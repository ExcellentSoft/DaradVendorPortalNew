"use client";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import WalletOverview from "@/components/walletoverview";
import ProductStats from "@/components/productstats";
import WalletGraph from "@/components/walletgraph";
import Metrics from "@/components/metrics";
import RecentWithdrawals from "@/components/recentwithdrawals";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - 10% */}
      <aside className="w-[20%] fixed h-full bg-white shadow z-50 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main Content - 90% */}
      <div className="ml-[20%] w-[80%] flex flex-col">
        {/* Header */}
        <div className="fixed top-0 left-[20%] w-[80%] z-40 bg-white shadow">
          <Header />
        </div>

        {/* Scrollable Content */}
        <main className="mt-20 p-4   overflow-y-auto">
          <Metrics/>
        <ProductStats />
        <WalletGraph />
          <WalletOverview />
         
         
          <RecentWithdrawals />
        </main>
      </div>
    </div>
  );
}

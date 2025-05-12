"use client";

import WalletOverview from "@/components/walletoverview";
import ProductStats from "@/components/productstats";
import WalletGraph from "@/components/walletgraph";
import Metrics from "@/components/metrics";
import RecentWithdrawals from "@/components/recentwithdrawals";

export default function Dashboard() {
  return (
    <>
      {/* Scrollable Content */}
      <main className=" p-4 overflow-y-auto">
        <Metrics />
        <ProductStats />
        <WalletGraph />
        <WalletOverview />
        <RecentWithdrawals />
      </main>
    </>
  );
}

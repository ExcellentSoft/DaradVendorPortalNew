import React from 'react';
import WalletInsights from './walletinsights';
import BestSellingProducts from './walletchart';

const Dashboard: React.FC = () => {
  return (
    <div className="flex w-full p-6 gap-6">
      {/* Fixed width for left (20% of typical screen) */}
      <div className="w-[20%] min-w-[250px]">
        <WalletInsights />
      </div>

      {/* Right: grows to fill remaining space */}
      <div className="flex-1">
        <BestSellingProducts />
      </div>
    </div>
  );
};

export default Dashboard;

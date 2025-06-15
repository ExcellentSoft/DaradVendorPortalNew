import React from 'react';

const WalletInsights: React.FC = () => {
const total = 750000;


const segments = [
  { percent: 40, color: '#6976EB' },  // Bank Transfer
  { percent: 30, color: '#ADB4F3' },  // Card Payments
  { percent: 15, color: '#2B3695' },  // USSD & Others
];

const radius = 16;
const circumference = 2 * Math.PI * radius;

// Compute cumulative offsets ahead of render
const getSegmentProps = () => {
  let offset = 0;
  return segments.map((segment) => {
    const dash = (segment.percent / 100) * circumference;
    const segmentProps = {
      ...segment,
      dash,
      offset,
    };
    offset += dash;
    return segmentProps;
  });
};

const segmentProps = getSegmentProps();

  return (
    <div className="h-[500px] bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-sm font-semibold text-center text-gray-700 mb-4">
        Account Wallet Insights
      </h2>

      {/* Circular Progress */}
   <div className="relative w-32 h-32 mx-auto mb-6">
  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
    {/* Background Circle */}
    <circle
      cx="18"
      cy="18"
      r={radius}
      stroke="#E5E7EB"
      strokeWidth="4"
      fill="none"
    />

    {/* Exactly 3 Segments */}
    {segmentProps.map((segment, index) => (
      <circle
        key={index}
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke={segment.color}
        strokeWidth="4"
        strokeDasharray={`${segment.dash} ${circumference - segment.dash}`}
        strokeDashoffset={-segment.offset}
        strokeLinecap="round"
      />
    ))}
  </svg>

  {/* Center Total Label */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <p className="text-xs text-gray-400">TOTAL</p>
      <p className="text-lg font-bold text-gray-800">₦{total.toLocaleString()}</p>
    </div>
  </div>
</div>

      {/* Percentages */}
      <div className="space-y-6 mt-20">
        <div className="flex items-center bg-[#6976EB] text-white px-4 py-2 rounded-lg justify-between">
          <span className="font-semibold">40%</span>
          <span className="text-sm">Bank Transfer</span>
        </div>

        <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg justify-between shadow-sm">
          <span className="font-semibold text-gray-700">30%</span>
          <span className="text-sm text-gray-600">Card Payments</span>
        </div>

        <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg justify-between shadow-sm">
          <span className="font-semibold text-gray-700">15%</span>
          <span className="text-sm text-gray-600">USSD & Others</span>
        </div>
      </div>
    </div>
  );
};

export default WalletInsights;

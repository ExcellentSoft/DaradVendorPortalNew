'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Image from "next/image";


const data = [
  { date: '6th May', Logs: 3000000, Tutorials: 3500000, 'Digital Course': 1000000, 'Gift Items': 1000000 },
  { date: '6th Jun', Logs: 2000000, Tutorials: 2200000, 'Digital Course': 1500000, 'Gift Items': 800000 },
  { date: '6th Jul', Logs: 2500000, Tutorials: 2500000, 'Digital Course': 2200000, 'Gift Items': 500000 },
  { date: '6th Aug', Logs: 2800000, Tutorials: 2700000, 'Digital Course': 3500000, 'Gift Items': 400000 },
  { date: '6th Sep', Logs: 2900000, Tutorials: 2800000, 'Digital Course': 4000000, 'Gift Items': 200000 },
  { date: '6th Oct', Logs: 3000000, Tutorials: 3000000, 'Digital Course': 3900000, 'Gift Items': 1000000 },
  { date: '6th Nov', Logs: 3200000, Tutorials: 2900000, 'Digital Course': 2500000, 'Gift Items': 2000000 },
  { date: '6th Dec', Logs: 2000000, Tutorials: 2600000, 'Digital Course': 1000000, 'Gift Items': 3000000 },
  { date: '6th Jan', Logs: 1500000, Tutorials: 2200000, 'Digital Course': 1100000, 'Gift Items': 3500000 },
  { date: '6th Feb', Logs: 1300000, Tutorials: 2000000, 'Digital Course': 900000, 'Gift Items': 4000000 },
  { date: '6th Mar', Logs: 1400000, Tutorials: 2100000, 'Digital Course': 1000000, 'Gift Items': 3000000 },
  { date: '6th Apr', Logs: 2200000, Tutorials: 2500000, 'Digital Course': 1200000, 'Gift Items': 2500000 },
];


export default function SalesWalletChart() {
  return (
    <div className="w-full flex items-center justify-center p-8 bg-[#f4f4f5]">
<div className="container min-h-[400px] md:h-[600px] bg-white rounded-xl shadow p-4 md:p-8">


        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600 text-sm">Sales Wallet</p>
            <p className="text-[24px] font-bold text-[#000000]">NGN 450,000</p>
          </div>
          <div className="flex flex-wrap gap-2">

            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5604F6] border border-[#5604F6] rounded-lg hover:bg-purple-50">
              Withdraw
              <Image src="/withdraw.svg" alt="Withdraw" width={10} height={10} />
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-white bg-[#5604F6] rounded-lg hover:bg-purple-800">
              Transfer
              <Image src="/transfer.svg" alt="Transfer" width={10} height={10} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          {['1D', '1W', '1M', '1Y'].map((label) => (
            <button
              key={label}
              className={`px-3 py-1 text-sm rounded-md ${
                label === '1M'
                  ? 'bg-gray-200 text-gray-800 font-medium'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

      <ResponsiveContainer width="100%" height={300}>

  <LineChart data={data}>
    <XAxis dataKey="date" />
    <YAxis
      tickFormatter={(value) => `₦${(value / 1000000).toFixed(0)}M`}
    />
    <Tooltip
      formatter={(value) => `₦${value.toLocaleString()}`}
      labelStyle={{ fontWeight: 500 }}
    />
    {/* <Legend /> <-- Remove this line */}
    <Line
      type="monotone"
      dataKey="Logs"
      stroke="#8b5cf6"
      strokeWidth={2}
    />
    <Line
      type="monotone"
      dataKey="Digital Course"
      stroke="#f97316"
      strokeWidth={2}
    />
    <Line
      type="monotone"
      dataKey="Tutorials"
      stroke="#3b82f6"
      strokeWidth={2}
    />
    <Line
      type="monotone"
      dataKey="Gift Items"
      stroke="#22c55e"
      strokeWidth={2}
    />
  </LineChart>
</ResponsiveContainer>



        {/* Custom Legend */}
<div className="m-4 flex flex-col md:flex-row justify-between gap-4 flex-wrap">
  <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-20">

    {/* Left group: Logs and Digital Course (stacked) */}
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-purple-500"></span>
        <span className="text-sm text-gray-700">Logs</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
        <span className="text-sm text-gray-700">Digital Course</span>
      </div>
    </div>

    {/* Right group: Tutorials and Gift Items */}
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
        <span className="text-sm text-gray-700">Tutorials</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-sm text-gray-700">Gift Items</span>
      </div>
    </div>
  </div>
  <div className="mt-4 flex justify-end items-center gap-1 text-sm text-[#121212CC] hover:underline cursor-pointer">
  <span>View Sales Transaction</span>
  <span className="text-lg">{'>'}</span>
        </div>
</div>



        
      </div>
    </div>
  );
}


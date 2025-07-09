// BestSellingProducts.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  TooltipProps
} from 'recharts';

import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';


const data = [
  { month: 'Jan', sneakers: 200, hoodie: 100, wallet: 150 },
  { month: 'Feb', sneakers: 400, hoodie: 250, wallet: 200 },
  { month: 'Mar', sneakers: 250, hoodie: 80, wallet: 180 },
  { month: 'Apr', sneakers: 300, hoodie: 200, wallet: 270 },
  { month: 'May', sneakers: 400, hoodie: 230, wallet: 150 },
  { month: 'Jun', sneakers: 220, hoodie: 60, wallet: 180 },
  { month: 'Jul', sneakers: 280, hoodie: 170, wallet: 210 },
  { month: 'Aug', sneakers: 350, hoodie: 250, wallet: 300 },
  { month: 'Sep', sneakers: 150, hoodie: 100, wallet: 180 },
  { month: 'Oct', sneakers: 170, hoodie: 70, wallet: 240 },
  { month: 'Nov', sneakers: 250, hoodie: 180, wallet: 200 },
  { month: 'Dec', sneakers: 400, hoodie: 50, wallet: 320 },
];

const CustomTooltip = ({
  active,
  payload,


 
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-md text-xs text-gray-700">
        <p className="text-indigo-600 font-semibold">₦350,000 Revenue</p>
        <p>(250 units sold)</p>
      </div>
    );
  }
  return null;
};

const BestSellingProducts: React.FC = () => {
  const [filter, setFilter] = React.useState('This week');
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full  mx-auto h-[500px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Best Selling Products</h2>
          <p className="text-sm text-gray-500">Boost your best-sellers with targeted ads and discounts!</p>
        </div>
       <div className="relative inline-block text-left">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-[#ffffff] text-[#000000B3] text-sm border border-gray-200 px-3 py-1 rounded-md inline-flex items-center gap-1"
              >
                <option>This week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
</div>

      </div>

      {/* Legend */}
      <div className="flex flex-col md:flex-row gap-4 text-[#121212CC]">
        <div className="flex items-center space-x-2 bg-[#EEE6FE80] rounded-md px-2 py-2">
          <span className="w-8 h-1 bg-[#6976EB] rounded-sm inline-block"></span>
          <span className='whitespace-nowrap'>Lagos sneakers</span>
        </div>
        <div className="flex items-center space-x-2 rounded-md px-2 py-2">
          <span className="w-8 h-1 bg-[#ADB4F3] rounded-sm inline-block"></span>
          <span className='whitespace-nowrap'>Ankara print hoodie</span>
        </div>
        <div className="flex items-center space-x-2 rounded-md px-2 py-2">
          <span className="w-8 h-1 bg-[#2B3695] rounded-sm inline-bloc"></span>
          <span className='whitespace-nowrap'>Custom leather wallet</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300} className="mt-8">
        <LineChart data={data}>
          <CartesianGrid stroke="#f3f4f6" strokeDasharray="3 3" />
          <XAxis
  dataKey="month"
  tick={({ x, y, payload }) => {
    const isAug = payload.value === "Aug";
    return (
      <g transform={`translate(${x},${y + 10})`}>
        {isAug && (
          <rect
            x={-18}
            y={-15}
            width={40}
            height={30}
            rx={8} // pill shape
            fill="#5604F6"
          />
        )}
        <text
          x={0}
          y={0}
          textAnchor="middle"
          fontSize={12}
          fill={isAug ? "#FFFFFF" : "#000000"}
          alignmentBaseline="middle"
        >
          {payload.value}
        </text>
      </g>
    );
  }}
/>

          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sneakers"
            stroke="#6366F1"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="hoodie"
            stroke="#7C3AED"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="wallet"
            stroke="#9CA3AF"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>


    </div>
  );
};

export default BestSellingProducts;

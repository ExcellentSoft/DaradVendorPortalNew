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
} from 'recharts';

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

const CustomTooltip = ({ active, payload }: any) => {
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
  return (
    <div className="bg-white rounded-2xl shadow p-8 w-full  mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Best Selling Products</h2>
          <p className="text-sm text-gray-500">Boost your best-sellers with targeted ads and discounts!</p>
        </div>
        <button className="text-sm bg-gray-100 border border-gray-200 px-3 py-1 rounded-md text-gray-600">
          This week
        </button>
      </div>

      {/* Legend */}
      <div className="flex space-x-6 mb-4 text-sm font-medium text-gray-700">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-indigo-400 rounded-full inline-block"></span>
          <span>Lagos sneakers</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-purple-700 rounded-full inline-block"></span>
          <span>Ankara print hoodie</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full inline-block"></span>
          <span>Custom leather wallet</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f3f4f6" strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
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

      {/* Highlight month */}
      <div className="mt-4 flex justify-center">
        <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Aug</span>
      </div>
    </div>
  );
};

export default BestSellingProducts;

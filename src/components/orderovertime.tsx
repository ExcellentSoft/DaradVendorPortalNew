import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  TooltipProps,
} from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const orders = payload[0].value;
    return (
      <div className="bg-violet-600 text-white text-sm px-3 py-2 rounded shadow">
        {`${orders} orders were placed in ${label}.`}
      </div>
    );
  }
  return null;
};

interface OrdersDataPoint {
  name: string;
  orders: number;
}

interface OrdersOverTimeChartProps {
  ordersData: OrdersDataPoint[];
}

export default function OrdersOverTimeChart({ ordersData }: OrdersOverTimeChartProps) {
  const [selectedYear, setSelectedYear] = useState('2025');
  const years = Array.from({ length: 8 }, (_, i) => (2025 - i).toString());

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[24px] font-semibold text-black font-bold">Orders Over Time</h4>

        {/* Year selection dropdown only */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

 <ResponsiveContainer width="100%" height={400}>
  <LineChart data={ordersData}>
    <XAxis dataKey="name" />
    <YAxis domain={[0, 1000]} />
    <Tooltip content={<CustomTooltip />} />
    <Line
      type="monotone"
      dataKey="orders"
      stroke="#8b5cf6"
      strokeWidth={2}
      dot={{ r: 3 }}
      activeDot={{ r: 6 }}
    />
    <ReferenceDot
      x="Oct"
      y={950}
      r={10}
      fill="#6976EB4A"
      strokeWidth={2}
      isFront={true}
    />
  </LineChart>
</ResponsiveContainer>

    </div>
  );
}

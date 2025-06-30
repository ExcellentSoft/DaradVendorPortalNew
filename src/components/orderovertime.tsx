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
  const [timeRange, setTimeRange] = useState('1M');

  return (
    <div className="bg-white rounded-xl shadow p-4">
        <div className='flex justify-between'>
      <h4 className="text-[24px] font-semibold mb-4 text-black font-bold">Orders Over Time</h4>

      {/* Time range selection buttons */}
      <div className="flex space-x-2 mb-4">
        {[ '1M', '1Y'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-3 py-1 rounded ${
              timeRange === range
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
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
          {/* Highlight October’s peak */}
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

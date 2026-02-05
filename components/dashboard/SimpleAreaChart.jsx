"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 300 },
  { day: "Wed", value: 500 },
  { day: "Thu", value: 200 },
  { day: "Fri", value: 150 },
  { day: "Sat", value: 220 },
  { day: "Sun", value: 180 },
];

export default function WeeklyAreaChart() {
  return (
    <div className="mt-5 bg-white rounded-lg border p-4">
      <h2 className="text-lg font-semibold mb-4">
        Weekly Bookings
      </h2>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
           
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            <Tooltip
              cursor={false}
              wrapperStyle={{
                outline: "none",
              }}
              contentStyle={{
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                fontSize: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fill="#6366f1"
              fillOpacity={0.15}
              activeDot={{
                r: 4,
                stroke: "none", 
                fill: "#6366f1",
              }}
              isAnimationActive
              animationDuration={2000}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

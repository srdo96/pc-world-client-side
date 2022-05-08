import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useGetAllItems from "../../../../hooks/useGetAllItems";

const Chart = () => {
  const [item] = useGetAllItems([]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 items-center mt-14 ">
      <div className="w-full h-96 ">
        <ResponsiveContainer width="98%" height={200}>
          <BarChart
            width={400}
            height={200}
            data={item}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8" />
            <Bar dataKey="sold" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-96 h-96">
        <ResponsiveContainer width="98%" height={200}>
          <PieChart width={400} height={200}>
            <Pie
              data={item}
              dataKey="quantity"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {" "}
              {item.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center">Quantity PieChart</p>
      </div>
    </div>
  );
};

export default Chart;

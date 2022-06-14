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
import Loading from "../../../Shared/Loading/Loading";

const Chart = () => {
  const [items, loading] = useGetAllItems([]);
  if (loading) {
    return <Loading />;
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 items-center mt-14 ">
      <div className="w-full h-96 ">
        <ResponsiveContainer width="98%" height={200}>
          <BarChart
            width={400}
            height={200}
            data={items}
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
              data={items}
              dataKey="quantity"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              labelLine={false}
            >
              {items.map((entry, index) => (
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

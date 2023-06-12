import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { Pie, ResponsiveContainer, Tooltip } from "recharts";
import { setDataPie } from "@/redux/charts/charts";
import { useEffect } from "react";

const PieChart = dynamic(
  () => import("recharts").then((recharts) => recharts.PieChart),
  { ssr: false }
);

const ChartTotalCategories = () => {
  const piedata = useSelector((state: RootState) => state.charts.pieData);
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const dispatch = useDispatch<AppDispatch>();

  const renderLabel = (entry: any) => {
    return entry.name;
  };

  useEffect(() => {
    dispatch(setDataPie(expenses));
    console.log("PIE DATA=> ", piedata);
  }, [expenses]);
  return (
    <div className="mt-4 p-2 border border-[#26b3c4] rounded">
      <ResponsiveContainer width={350} height={350}>
        <PieChart>
          <Pie
            data={piedata}
            dataKey="total"
            nameKey="category"
            outerRadius={100}
            fill="#2e2b2e"
            label={renderLabel}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTotalCategories;

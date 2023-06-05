import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/redux/store";
import { Pie } from "recharts";
import { setDataPie } from "@/app/redux/charts/charts";
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
    return entry.name + " = " + entry.total;
  };

  useEffect(() => {
    dispatch(setDataPie(expenses));
    console.log("PIE DATA=> ", piedata);
  }, [expenses]);
  return (
    <div className="mt-4 p-2 border border-black rounded">
      <PieChart width={750} height={400}>
        <Pie
          data={piedata}
          dataKey="total"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={renderLabel}
          fill="green"
        />
      </PieChart>
    </div>
  );
};

export default ChartTotalCategories;

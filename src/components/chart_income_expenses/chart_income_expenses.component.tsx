import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setStackedBar } from "@/redux/charts/charts";
import { CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from "recharts";

const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);

const ChartIncomeExpenses = () => {
  const barData = useSelector(
    (state: RootState) => state.charts.stackedBarData
  );
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const userIncome = useSelector(
    (state: RootState) => state.userIncomes.userIncomes
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setStackedBar({ income: userIncome, expenses }));
  }, [expenses, userIncome]);

  return (
    <div className="mt-4 p-2 border border-black rounded">
      <BarChart width={500} height={300} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis label={{ fill: "white" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="incomes" stackId="a" fill="black" />
        <Bar dataKey="expenses" stackId="a" fill="red" />
      </BarChart>
    </div>
  );
};

export default ChartIncomeExpenses;

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setStackedBar } from "@/redux/charts/charts";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
      <ResponsiveContainer width={600} height={400}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="red" />
          <YAxis stroke="#red" />
          <Tooltip />
          <Legend />
          <Bar dataKey="expenses" fill="#26b3c4" />
          <Bar dataKey="incomes" fill="#2e2b2e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartIncomeExpenses;

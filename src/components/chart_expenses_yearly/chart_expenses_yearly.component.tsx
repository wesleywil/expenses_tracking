"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setDataBar } from "@/redux/charts/charts";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);

const ChartExpensesYearly = () => {
  const bardata = useSelector((state: RootState) => state.charts.barData);
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const year = useSelector((state: RootState) => state.charts.year);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setDataBar(expenses));
    console.log("ss", bardata);
  }, [expenses, year]);
  return (
    <div className="mt-4 p-2 border border-[#26b3c4] rounded">
      <ResponsiveContainer width={600} height={400}>
        <BarChart data={bardata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="red" />
          <YAxis label={{ fill: "#26b3c4" }} stroke="red" />
          <Bar
            dataKey="expenses"
            fill="#2e2b2e"
            label={{ position: "top", fontWeight: "bold", fill: "#26b3c4" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartExpensesYearly;

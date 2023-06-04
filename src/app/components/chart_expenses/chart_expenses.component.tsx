"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/redux/store";
import { setData } from "@/app/redux/charts/charts";
import { Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);

const ChartExpenses = () => {
  const bardata = useSelector((state: RootState) => state.charts.barData);
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const year = useSelector((state: RootState) => state.charts.year);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setData(expenses));
    console.log("ss", bardata);
  }, [expenses, year]);
  return (
    <div className="mt-4 p-2 border border-black rounded">
      <BarChart width={750} height={400} data={bardata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="expenses" fill="red" />
      </BarChart>
    </div>
  );
};

export default ChartExpenses;

"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { setYear } from "../redux/charts/charts";

import ChartExpensesYearly from "../components/chart_expenses_yearly/chart_expenses_yearly.component";
import { ChangeEvent, useEffect, useState } from "react";
import ChartTotalCategories from "../components/chart_total_categories/chart_total_categories.component";
import ChartIncomeExpenses from "@/components/chart_income_expenses/chart_income_expenses.component";

export default function Home() {
  const year = useSelector((state: RootState) => state.charts.year);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<string>(year);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log("year", year);
  }, [year]);

  return (
    <main className="grow p-2 flex min-h-screen flex-col items-center ">
      <h1 className="mt-8 text-5xl text-[#fcfcfc] font-bold">DASHBOARD</h1>
      <div className="mt-24 flex flex-wrap gap-4 justify-center">
        {/* Expenses by Year Chart */}
        <div className=" p-2 bg-[#fcfcfc] rounded">
          <div className="flex justify-between">
            <h1>Expenses by Year</h1>
            <div className="flex gap-4">
              <h1>{year}</h1>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Year"
                  className="w-24 px-2 bg-[#2e2b2e] text-[#26b3c4] rounded"
                  onChange={handleInputChange}
                />
                <button
                  onClick={() => dispatch(setYear(inputValue))}
                  className="px-2 bg-[#26b3c4] text-[#fcfcfc] rounded"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          {/* Graph */}
          <div className="w-full">
            <ChartExpensesYearly />
          </div>
        </div>
        {/* Total Expenses Items - Category */}
        <div className="p-2 bg-[#fcfcfc] rounded">
          <div className="flex">
            <h1>Expenses by Category</h1>
          </div>
          <ChartTotalCategories />
        </div>
        {/* Income x Expenses */}
        <div className="p-2 bg-[#fcfcfc] rounded">
          <div className="flex">
            <h1>Income x Expenses</h1>
          </div>
          <ChartIncomeExpenses />
        </div>
      </div>
    </main>
  );
}

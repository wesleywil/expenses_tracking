"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { setYear } from "../redux/charts/charts";

import ChartExpensesYearly from "../components/chart_expenses_yearly/chart_expenses_yearly.component";
import { ChangeEvent, useEffect, useState } from "react";
import ChartTotalCategories from "../components/chart_total_categories/chart_total_categories.component";

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
    <main className="grow flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4 justify-center">
        {/* Expenses by Year Chart */}
        <div className=" p-2 bg-slate-300 rounded">
          <div className="flex justify-between">
            <h1>Expenses by Year</h1>
            <div className="flex gap-4">
              <h1>{year}</h1>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Year"
                  className="w-24 px-2 rounded"
                  defaultValue={year}
                  onChange={handleInputChange}
                />
                <button
                  onClick={() => dispatch(setYear(inputValue))}
                  className="px-2 bg-black text-white rounded"
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
        <div className="p-2 bg-slate-300 rounded">
          <div className="flex">
            <h1>Expenses by Category</h1>
          </div>
          <ChartTotalCategories />
        </div>
      </div>
    </main>
  );
}

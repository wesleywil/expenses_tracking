"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import type { RootState, AppDispatch } from "../redux/store";
import { handleHideForm } from "../redux/utils/utils";

import ExpensesList from "../components/expenses_list/expenses_list.component";
import FormExpenses from "../components/form_expenses/form_expenses.component";
import ExpensesItemList from "../components/expenses_item_list/expenses_item_list.component";

export default function Expenses() {
  const hide_form = useSelector((state: RootState) => state.utils.hide_form);
  const count_expenses = useSelector(
    (state: RootState) => state.expenses.expenses.length
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <main className="grow p-4 px-24 min-h-screen text-xl">
      {hide_form ? "" : <FormExpenses />}

      <div className="mt-12 pb-4 flex justify-between text-4xl border-b-2">
        <h1>Expenses</h1>
        <button
          onClick={() => dispatch(handleHideForm())}
          className="px-3 py-4 bg-black text-2xl text-white rounded-xl"
        >
          New Expense
        </button>
      </div>
      {/* Recently Updated */}
      <div className="pt-4">
        <h2>Recently Updated</h2>
        <ExpensesItemList />
      </div>
      {/* List of Expenses */}
      <div className="mt-8 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="self-center">
            All Expenses
            <span className="ml-2 p-1 bg-slate-300  rounded-full">
              {count_expenses}
            </span>
          </h2>
          <div className="flex text-2xl">
            <input
              type="text"
              className="w-96 px-2 py-1 border rounded-y rounded-l outline-0"
            />
            <button className="px-2 py-1 bg-black text-white rounded-r">
              <FaSearch />
            </button>
          </div>
        </div>
        <ExpensesList />
      </div>
    </main>
  );
}

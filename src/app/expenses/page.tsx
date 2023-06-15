"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import type { RootState, AppDispatch } from "../../redux/store";
import { handleHideForm } from "../../redux/utils/utils";
import { resetExpense } from "@/redux/expenses/expenses";

import ExpensesList from "../../components/expenses_list/expenses_list.component";
import FormExpenses from "../../components/form_expenses/form_expenses.component";
import ExpensesItemList from "../../components/expenses_item_list/expenses_item_list.component";
import DeletePanel from "@/components/delete_panel/delete_panel.component";
import SearchExpenses from "@/components/search_expenses/search_expenses.component";

export default function Expenses() {
  const hide_form = useSelector((state: RootState) => state.utils.hide_form);
  const hide_delete = useSelector(
    (state: RootState) => state.utils.hide_delete_msg
  );
  const count_expenses = useSelector(
    (state: RootState) => state.expenses.allExpenses.length
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <main className="grow p-4 px-24 min-h-screen text-xl text-[#fcfcfc]">
      {hide_form ? "" : <FormExpenses />}

      <div className="mt-12 pb-4 flex justify-between text-4xl border-b-2">
        <h1>Expenses</h1>
        <button
          onClick={() => {
            dispatch(handleHideForm());
            dispatch(resetExpense());
          }}
          className="px-3 py-4 bg-[#26b3c4] hover:bg-[#26b3c4]/70 text-2xl text-[#fcfcfc] rounded-xl"
        >
          New Expense
        </button>
      </div>
      {/* Delete Panel */}
      {hide_delete ? "" : <DeletePanel />}

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
            <span className="ml-2 p-1 bg-[#26b3c4]  rounded-full">
              {count_expenses}
            </span>
          </h2>
          <SearchExpenses />
        </div>
        <ExpensesList />
      </div>
    </main>
  );
}

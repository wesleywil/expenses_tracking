"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { selectCategory, fetchCategories } from "@/redux/categories/categories";
import {
  createExpense,
  updateExpense,
  resetExpense,
} from "@/redux/expenses/expenses";
import { handleHideForm } from "@/redux/utils/utils";

const FormExpenses = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const category = useSelector((state: RootState) => state.categories.category);
  const expense = useSelector((state: RootState) => state.expenses.expense);
  const status = useSelector((state: RootState) => state.categories.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Expense Data", expense);
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(selectCategory(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      vendor: { value: string };
      amount: { value: number };
      description: { value: string };
      status: { value: string };
      created_at: { value: string };
    };

    const data = {
      vendor: target.vendor.value,
      amount: target.amount.value,
      description: target.description.value,
      status: target.status.value,
      categories: category,
      created_at: new Date(target.created_at.value),
    };

    console.log("DATA=> ", data);
    if (Object.keys(expense).length === 0) {
      console.log("IT'S A CREATE");
      dispatch(createExpense(data));
    } else {
      console.log("IT'S A UPDATE");
      const updateData = {
        ...data,
        id: expense.id!,
        categories: undefined,
        categoryId: category.id,
      };

      dispatch(updateExpense({ id: expense.id!, data: updateData }));
    }
    //dispatch(createExpense(data));
    dispatch(handleHideForm());
  };
  return (
    <div className="absolute w-4/5 h-4/5 flex flex-col items-center justify-center text-[#2e2b2e]">
      <h1 className="text-">New Expense</h1>
      <div className="w-1/2 p-4 flex flex-col bg-black/50 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="vendor"
            defaultValue={
              Object.keys(expense).length !== 0 ? expense.vendor : ""
            }
            placeholder="Vendor's name"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <input
            type="text"
            name="amount"
            defaultValue={
              Object.keys(expense).length !== 0 ? expense.amount : ""
            }
            placeholder="Amount of the expense"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <input
            type="datetime-local"
            name="created_at"
            defaultValue={
              Object.keys(expense).length !== 0
                ? new Date(expense.created_at).toISOString().substring(0, 16)
                : ""
            }
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <textarea
            name="description"
            rows={10}
            defaultValue={
              Object.keys(expense).length !== 0 ? expense.description : ""
            }
            placeholder="Category's description"
            className="w-full px-2 py-4 outline-0 border rounded"
          ></textarea>
          <select
            name="status"
            defaultValue={
              Object.keys(expense).length !== 0 ? expense.status : ""
            }
            className="w-full px-2 py-4 outline-0 border rounded"
          >
            <option value="Open">Open</option>
            <option value="Paid">Paid</option>
          </select>
          <select
            name="categories"
            defaultValue={
              Object.keys(expense).length !== 0
                ? String(expense.categories![0].id)
                : ""
            }
            className="w-full px-2 py-4 outline-0 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((item, index) => (
              <option key={index} value={String(item.id)}>
                {item.name}
              </option>
            ))}
          </select>

          <div className="w-full flex gap-4 justify-center">
            <button className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded">
              {Object.keys(expense).length !== 0 ? "Update" : "Create"}
            </button>
            <button
              onClick={() => {
                dispatch(handleHideForm());
                dispatch(resetExpense());
              }}
              type="button"
              className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormExpenses;

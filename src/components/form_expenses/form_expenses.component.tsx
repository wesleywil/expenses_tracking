"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { selectCategory, fetchCategories } from "@/redux/categories/categories";
import { createExpense } from "@/redux/expenses/expenses";
import { handleHideForm } from "@/redux/utils/utils";

const FormExpenses = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const category = useSelector((state: RootState) => state.categories.category);
  const status = useSelector((state: RootState) => state.categories.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
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
    dispatch(createExpense(data));
    dispatch(handleHideForm());
  };
  return (
    <div className="absolute w-4/5 h-4/5 flex flex-col items-center justify-center ">
      <h1 className="text-">New Expense</h1>
      <div className="w-1/2 p-4 flex flex-col bg-black/50 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="vendor"
            placeholder="Vendor's name"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount of the expense"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <input
            type="datetime-local"
            name="created_at"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <textarea
            name="description"
            rows={10}
            placeholder="Category's description"
            className="w-full px-2 py-4 outline-0 border rounded"
          ></textarea>
          <select
            name="status"
            className="w-full px-2 py-4 outline-0 border rounded"
          >
            <option value="Open">Open</option>
            <option value="Paid">Paid</option>
          </select>
          <select
            name="categories"
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
            <button className="px-2 bg-black text-4xl text-white rounded">
              Create
            </button>
            <button
              onClick={() => dispatch(handleHideForm())}
              type="button"
              className="px-2 bg-black text-4xl text-white rounded"
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

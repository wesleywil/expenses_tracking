"use client";

import React, { useEffect, useState } from "react";
import { Category } from "@/utils/types";

const FormExpenses = () => {
  const [category, setCategory] = useState<Category | null>({} as Category);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const req = await fetch("http://localhost:3000/api/categories");
      const categories: Category[] = await req.json();
      return setCategories(categories);
    };
    getCategories();
  }, [category]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const selected = categories.find((item) => item.id === value);
    setCategory(selected || null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      vendor: { value: string };
      amount: { value: number };
      description: { value: string };
      status: { value: string };
    };

    const data = {
      vendor: target.vendor.value,
      amount: target.amount.value,
      description: target.description.value,
      status: target.status.value,
      categories: category,
    };

    console.log("DATA=> ", data);
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

          <div className="w-full flex gap-4 justify-end">
            <button className="px-2 bg-black text-4xl text-white rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormExpenses;

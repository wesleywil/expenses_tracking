"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Category } from "@/utils/types";
import { useEffect, useState } from "react";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const [rcount, setRcount] = useState<number>(0);

  useEffect(() => {
    console.log("effect");
    const categoryCount = expenses.reduce((count, expense) => {
      const categoryNames = expense.categories!.map((cat) => cat.name);
      const nameCount = categoryNames.filter(
        (name) => name === category.name
      ).length;
      return count + nameCount;
    }, 0);
    setRcount(categoryCount);
  }, [rcount]);

  return (
    <div className="flex w-48 h-24 border rounded-xl overflow-hidden">
      <div
        style={{ backgroundColor: category.color, color: category.textColor }}
        className="w-6 h-full flex items-center justify-center"
      >
        <h1 className="-rotate-90">{category.name}</h1>
      </div>
      <div className="grow flex flex-col items-center justify-center">
        <div className="self-center p-2 bg-black text-white text-4xl rounded-full">
          <h1>{rcount}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

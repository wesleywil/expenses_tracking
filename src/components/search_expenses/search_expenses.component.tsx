import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { FaSearch } from "react-icons/fa";
import { filterExpense } from "@/redux/expenses/expenses";
import React, { useState } from "react";

const SearchExpenses = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex text-2xl">
      <input
        type="text"
        onChange={handleSearch}
        className="w-96 px-2 py-1 text-[#2e2b2e] border rounded-y rounded-l outline-0"
      />
      <button
        onClick={() => dispatch(filterExpense(search))}
        className="px-2 py-1 bg-[#26b3c4] text-[#fcfcfc] rounded-r"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchExpenses;

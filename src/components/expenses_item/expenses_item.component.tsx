import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { selectExpense } from "@/redux/expenses/expenses";
import { handleHideDeleteMsg, handleHideForm } from "@/redux/utils/utils";

type ExpenseItemProps = {
  id: string;
  category_name: string;
  category_color: string;
  vendor: string;
  date: string;
  amount: number;
};

const ExpensesItem = ({
  id,
  category_name,
  category_color,
  vendor,
  date,
  amount,
}: ExpenseItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectExpenseUpdate = () => {
    dispatch(handleHideForm());
    dispatch(selectExpense(id));
  };

  const selectExpenseDelete = () => {
    dispatch(handleHideDeleteMsg());
    dispatch(selectExpense(id));
  };
  return (
    <div className="w-40 bg-[#fcfcfc]  border-x-2 border-b-2 overflow-hidden rounded-xl">
      <div
        style={{ backgroundColor: category_color }}
        className="w-full h-2"
      ></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <div className="w-full mt-2 px-2 flex justify-between">
          <button
            onClick={selectExpenseUpdate}
            className="text-[#26b3c4] hover:text-[#117480]"
          >
            <FaEdit />
          </button>
          <span className="text-slate-600 text-base"> {category_name}</span>
          <button
            onClick={selectExpenseDelete}
            className="text-[#26b3c4] hover:text-[#117480]"
          >
            <FaTrashAlt />
          </button>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="bg-[#2e2b2e] px-2 ">{vendor}</h1>
          <h3 className="text-slate-600 text-base"> {date} </h3>
        </div>
        <div className="w-2/3 text-slate-600 text-2xl text-center border-t-2 pt-4">
          <h1>${amount}</h1>
        </div>
      </div>
    </div>
  );
};

export default ExpensesItem;

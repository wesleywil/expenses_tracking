import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { selectExpense } from "@/redux/expenses/expenses";
import { handleHideDeleteMsg, handleHideForm } from "@/redux/utils/utils";

const ExpensesList = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mt-4 px-2 py-1 border h-96  overflow-y-auto">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="text-slate-300 text-base border">
            <th className="px-2">vendor/category</th>
            <th className="px-2">date/description</th>
            <th className="px-2">client/status</th>
            <th className="px-2">amount</th>
            <th className="px-2">Options</th>
          </tr>
        </thead>
        <tbody className="">
          {expenses.length
            ? expenses.map((item, index) => (
                <tr className="border text-center" key={index}>
                  <td>
                    <div className="flex flex-col gap-1">
                      {item.vendor}
                      <span className="text-base text-slate-300">
                        {String(item.categories?.map((item) => item.name))}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col gap-1">
                      {String(item.created_at).slice(0, 10)}
                      <span className="text-base text-slate-300">
                        {item.description!.length > 18
                          ? item.description?.slice(0, 18) + "..."
                          : item.description}
                      </span>
                    </div>
                  </td>
                  <td>{item.status}</td>
                  <td>
                    ${item.amount}{" "}
                    <span className="text-sm text-slate-400">usd</span>{" "}
                  </td>
                  <td>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        onClick={() => {
                          dispatch(handleHideForm());
                          dispatch(selectExpense(item.id!));
                        }}
                        className="hover:text-green-500"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => {
                          dispatch(handleHideDeleteMsg());
                          dispatch(selectExpense(item.id!));
                        }}
                        className="hover:text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;

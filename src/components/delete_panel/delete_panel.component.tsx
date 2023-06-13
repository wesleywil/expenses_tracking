import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { resetExpense, deleteExpense } from "@/redux/expenses/expenses";
import { handleHideDeleteMsg } from "@/redux/utils/utils";

const DeletePanel = () => {
  const expense = useSelector((state: RootState) => state.expenses.expense);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteExpense({ id: expense.id! }));
    dispatch(handleHideDeleteMsg());
  };
  const handleClose = () => {
    dispatch(resetExpense());
    dispatch(handleHideDeleteMsg());
  };
  return (
    <div className="w-2/3 mx-auto mt-4 py-2  flex flex-col items-center justify-center border rounded-xl">
      <h1>
        Are you sure you want to delete this - {expense.vendor}- $
        {expense.amount}?
      </h1>
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-500 hover:bg-red-700 text-white rounded"
        >
          Yes
        </button>
        /{" "}
        <button
          onClick={handleClose}
          className="px-2 py-1 bg-[#26b3c4] hover:bg-[#26b3c4]/70 text-white rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeletePanel;

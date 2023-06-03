import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/redux/store";
import { fetchExpenses } from "@/app/redux/expenses/expenses";

import ExpensesItem from "../expenses_item/expenses_item.component";

const ExpensesItemList = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const status = useSelector((state: RootState) => state.expenses.status);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExpenses());
    }
  }, [status]);
  return (
    <div className="mt-12 flex gap-4">
      {expenses.length
        ? expenses.map((item, index) => (
            <ExpensesItem
              key={index}
              category_name={String(
                item.categories?.map((category) => category.name)
              )}
              vendor={String(item.vendor)}
              date={String(item.created_at).slice(0, 10)}
              amount={item.amount!}
            />
          ))
        : ""}
    </div>
  );
};

export default ExpensesItemList;

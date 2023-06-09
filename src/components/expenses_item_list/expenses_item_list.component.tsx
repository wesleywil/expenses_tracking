import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { fetchExpenses } from "@/redux/expenses/expenses";

import ExpensesItem from "../expenses_item/expenses_item.component";

const ExpensesItemList = () => {
  const expenses = useSelector(
    (state: RootState) => state.expenses.allExpenses
  );
  const status = useSelector((state: RootState) => state.expenses.status);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (status === "idle" || status === "updated" || status === "deleted") {
      dispatch(fetchExpenses());
    }
  }, [status]);
  return (
    <div className="mt-12 flex flex-wrap justify-center xl:justify-normal gap-4">
      {expenses.length
        ? expenses
            .slice(0, 6)
            .map((item, index) => (
              <ExpensesItem
                key={index}
                id={item.id!}
                category_name={String(
                  item.categories?.map((category) => category.name)
                )}
                category_color={String(
                  item.categories?.map((category) => category.color)
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

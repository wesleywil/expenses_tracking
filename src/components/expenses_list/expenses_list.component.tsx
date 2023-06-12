import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const ExpensesList = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  return (
    <div className="mt-4 border">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="text-slate-300 text-base border">
            <th className="px-2">
              <input type="checkbox" />
            </th>
            <th className="px-2">vendor/category</th>
            <th className="px-2">date/description</th>
            <th className="px-2">client/status</th>
            <th className="px-2">amount</th>
          </tr>
        </thead>
        <tbody className="">
          {expenses.length
            ? expenses.map((item, index) => (
                <tr className="border text-center" key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
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
                        {item.description}
                      </span>
                    </div>
                  </td>
                  <td>{item.status}</td>
                  <td>
                    ${item.amount}{" "}
                    <span className="text-sm text-slate-400">usd</span>{" "}
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

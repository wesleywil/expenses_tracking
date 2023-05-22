const ExpensesList = () => {
  return (
    <div className="mt-4 border">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="text-slate-400 text-base border">
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
          <tr className="border text-center">
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="flex flex-col gap-1">
                Vendor here here here
                <span className="text-base text-slate-500">category here</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col gap-1">
                09/09/23
                <span className="text-base text-slate-500">
                  description, goes, here
                </span>
              </div>
            </td>
            <td>cell4_1</td>
            <td>
              $3000.00 <span className="text-sm text-slate-600">usd</span>{" "}
            </td>
          </tr>
          <tr className="border text-center">
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="flex flex-col gap-1">
                Vendor here here here
                <span className="text-base text-slate-500">category here</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col gap-1">
                09/09/23
                <span className="text-base text-slate-500">
                  description, goes, here
                </span>
              </div>
            </td>
            <td>cell4_2</td>
            <td>
              $3000.00 <span className="text-sm text-slate-600">usd</span>{" "}
            </td>
          </tr>
          <tr className="border text-center">
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="flex flex-col gap-1">
                Vendor here here here
                <span className="text-base text-slate-500">category here</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col gap-1">
                09/09/23
                <span className="text-base text-slate-500">
                  description, goes, here
                </span>
              </div>
            </td>
            <td>cell4_3</td>
            <td>
              $3000.00 <span className="text-sm text-slate-600">usd</span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;

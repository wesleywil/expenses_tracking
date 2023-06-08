type ExpenseItemProps = {
  category_name: string;
  vendor: string;
  date: string;
  amount: number;
};

const ExpensesItem = ({
  category_name,
  vendor,
  date,
  amount,
}: ExpenseItemProps) => {
  return (
    <div className="w-40 rounded-xl border-x-2 border-b-2 overflow-hidden">
      <div className="w-full h-2 bg-red-300"></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <span className="text-slate-400 text-base"> {category_name}</span>
        <div className="flex flex-col">
          <h1 className="text-center">{vendor}</h1>
          <h3 className="text-slate-500 text-base"> {date} </h3>
        </div>
        <div className="w-2/3 text-slate-600 text-2xl text-center border-t-2 pt-4">
          <h1>${amount}</h1>
        </div>
      </div>
    </div>
  );
};

export default ExpensesItem;

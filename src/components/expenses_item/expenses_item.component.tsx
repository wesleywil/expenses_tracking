type ExpenseItemProps = {
  category_name: string;
  category_color: string;
  vendor: string;
  date: string;
  amount: number;
};

const ExpensesItem = ({
  category_name,
  category_color,
  vendor,
  date,
  amount,
}: ExpenseItemProps) => {
  return (
    <div className="w-40 bg-[#fcfcfc]  border-x-2 border-b-2 overflow-hidden rounded-xl">
      <div
        style={{ backgroundColor: category_color }}
        className="w-full h-2"
      ></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <span className="text-slate-600 text-base"> {category_name}</span>
        <div className="flex flex-col">
          <h1 className="bg-[#2e2b2e] px-2 text-center">{vendor}</h1>
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

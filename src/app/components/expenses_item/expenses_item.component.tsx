const ExpensesItem = () => {
  return (
    <div className="w-40 rounded-xl border-x-2 border-b-2 overflow-hidden">
      <div className="w-full h-2 bg-red-300"></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <span className="text-slate-400 text-base"> category here</span>
        <div className="flex flex-col">
          <h1>vendor here</h1>
          <h3 className="text-slate-500 text-base">10/10/10</h3>
        </div>
        <div className="w-2/3 text-slate-600 text-2xl text-center border-t-2 pt-4">
          <h1>$00.00</h1>
        </div>
      </div>
    </div>
  );
};

export default ExpensesItem;

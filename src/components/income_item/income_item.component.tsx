import { User } from "@/utils/types";

type IncomeItemProps = {
  id?: string;
  title: string;
  at_date: Date;
  description?: string;
  amount: number;
  user?: User;
};

const IncomeItem = ({
  id,
  title,
  at_date,
  amount,
  description,
}: IncomeItemProps) => {
  return (
    <div className="w-40 rounded-xl border-x-2 border-b-2 overflow-hidden">
      <div className="w-full h-2 bg-red-300"></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <span className="text-slate-400 text-xl"> {title}</span>
        <div className="w-11/12 py-2 flex flex-col text-center border-y-2">
          <h1>${amount}</h1>
          <h3 className="text-slate-500 text-base">
            {String(at_date).slice(0, 10)}
          </h3>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default IncomeItem;

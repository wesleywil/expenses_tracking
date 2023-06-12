import { User } from "@/utils/types";

type IncomeItemProps = {
  id?: string;
  title: string;
  at_date: Date;
  description?: string;
  amount: number;
  fixed: boolean;
  user?: User;
};

const IncomeItem = ({
  id,
  title,
  at_date,
  amount,
  fixed,
  description,
}: IncomeItemProps) => {
  return (
    <div className="w-40 bg-[#fcfcfc]  border-x-2 border-b-2 overflow-hidden rounded-xl">
      <div className="w-full h-2 bg-[#26b3c4]"></div>
      <div className="h-56 pb-4 flex flex-col items-center justify-between  ">
        <span className="text-slate-600 text-xl"> {title}</span>
        <div className="w-11/12 py-2 flex flex-col text-center">
          <h1 className="bg-[#2e2b2e]">${amount}</h1>
          <h3 className="text-slate-600 text-base">
            {String(at_date).slice(0, 10)}
          </h3>
        </div>
        <div className="w-2/3 text-slate-600 text-2xl text-center border-t-2 pt-4">
          <h1>{fixed ? "Fixed" : "Not Fixed"}</h1>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;

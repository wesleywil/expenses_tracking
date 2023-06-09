import IncomeItem from "@/components/income_item/income_item.component";
import { User } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
  const req = await fetch("http://localhost:3000/api/user", {
    next: { revalidate: 10 },
  });
  const user: User = await req.json();

  return (
    <main className="grow p-4 px-24 min-h-screen text-xl">
      <div className="mt-12 pb-4 flex justify-between text-4xl border-b-2">
        <h1>Profile</h1>
        <Link
          href="/new_income"
          className="px-3 py-4 bg-black text-2xl text-white rounded-xl"
        >
          New Income
        </Link>
      </div>
      {/* User Info */}
      <div className="">
        <div className="mt-4 pb-4 flex flex-col items-center justify-center border-b-2">
          <Image
            src={user.image!}
            width={75}
            height={75}
            alt="Profile"
            className="rounded-full"
          />
          <h1>{user.name}</h1>
          <h2 className="text-sm">{user.email}</h2>
        </div>
      </div>
      {/* Income List */}
      <div className="pt-4">
        <h2>Income</h2>
        <div className="mt-12 flex gap-4">
          {user.userIncome.length
            ? user.userIncome.map((item, index) => (
                <IncomeItem
                  key={index}
                  title={item.title}
                  at_date={item.at_date}
                  description={item.description}
                  amount={item.amount}
                />
              ))
            : "NO INCOMES ADDED YET"}
        </div>
      </div>
    </main>
  );
}

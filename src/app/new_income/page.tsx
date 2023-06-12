import { redirect } from "next/navigation";
import Link from "next/link";
import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function createIncome(data: any) {
  "use server";
  const session = await getServerSession(authOptions);
  let { title, at_date, description, amount, fixed } = Object.fromEntries(data);

  await prisma.userIncome.create({
    data: {
      title,
      at_date: new Date(at_date),
      description,
      amount,
      fixed: fixed === "on" ? true : false,
      userId: session?.user.id,
    },
  });
  redirect("/profile");
}

export default function NewCategory() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center text-3xl">
      <h1 className="text-4xl text-[#fcfcfc]">New Category</h1>
      <div className="w-1/2 p-4 flex flex-col">
        <form
          action={createIncome}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Income's title"
            className="w-full px-2 py-4 outline-0 border rounded"
          />

          <input
            type="date"
            name="at_date"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <input
            type="text"
            name="amount"
            placeholder="Income's amount"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <div className="w-full px-2 py-4 flex gap-4 bg-[#fcfcfc] text-slate-500 border rounded">
            <input
              type="checkbox"
              name="fixed"
              placeholder="Income's is fixed"
              className="grow p-4 text-4xl outline-0 border rounded"
            />
            <span className="w-full grow">
              Check if it's a fixed income (ex:salary)
            </span>
          </div>

          <textarea
            name="description"
            rows={10}
            placeholder="Income's description"
            className="w-full px-2 py-4 outline-0 border rounded"
          ></textarea>
          <div className="w-full flex gap-4 justify-start">
            <button className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded">
              Create
            </button>
            <Link
              type="button"
              href="/profile"
              className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "../../../../prisma/client";
import React from "react";
import { redirect } from "next/navigation";

export default async function Incomes({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const income = await prisma.userIncome.findUnique({
    where: {
      id: params.id,
    },
  });
  console.log(
    "USER INCOME => ",
    new Date(income!.at_date).toISOString().substring(0, 10)
  );

  const handleSubmit = async (data: any) => {
    "use server";
    let { title, at_date, amount, fixed, description } =
      Object.fromEntries(data);

    await prisma.userIncome.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        amount,
        fixed: fixed === "on" ? true : false,
        description,
        at_date: new Date(at_date),
      },
    });

    redirect("/profile");
  };

  if (session) {
    return (
      <div className="w-full p-4 flex flex-col justify-center items-center text-3xl">
        <h1 className="text-4xl text-[#fcfcfc]">Update Income</h1>
        <div className="xl:w-1/2 p-4 flex flex-col">
          <form
            action={handleSubmit}
            className="w-full flex flex-col items-center gap-4"
          >
            <input
              type="text"
              name="title"
              defaultValue={income ? income.title : ""}
              placeholder="Income's title"
              className="w-full px-2 py-4 outline-0 border rounded"
            />
            <input
              type="datetime-local"
              name="at_date"
              defaultValue={
                income
                  ? new Date(income.at_date).toISOString().substring(0, 16)
                  : ""
              }
              className="w-full px-2 py-4 outline-0 border rounded"
            />
            <input
              type="text"
              name="amount"
              defaultValue={income ? Number(income.amount) : ""}
              placeholder="Income's amount"
              className="w-full px-2 py-4 outline-0 border rounded"
            />
            <div className="w-full px-2 py-4 flex gap-4 bg-[#fcfcfc] text-slate-500 border rounded">
              <input
                type="checkbox"
                name="fixed"
                defaultChecked={income ? income.fixed : false}
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
              defaultValue={income ? income.description! : ""}
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
  } else {
    return (
      <div>
        <h1>YOU ARE NOT AUTHORIZED TO DO THAT</h1>
      </div>
    );
  }
}

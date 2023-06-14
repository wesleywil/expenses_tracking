"use server";

import IncomeItem from "@/components/income_item/income_item.component";
import { User } from "@/utils/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../../prisma/client";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function getData() {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        userIncome: true,
      },
    });
    return user;
  } else {
    return {} as User;
  }
}

export default async function Profile() {
  const user = await getData();
  return (
    <main className="grow p-4 px-24 min-h-screen text-xl text-[#fcfcfc]">
      <div className="mt-12 pb-4 flex justify-between text-4xl border-b-2">
        <h1>Profile</h1>
        <Link
          href="/new_income"
          className="px-3 py-4 bg-[#26b3c4] hover:bg-[#26b3c4]/70 text-2xl text-[#fcfcfc] rounded-xl"
        >
          New Income
        </Link>
      </div>
      {/* User Info */}
      <div className="">
        <div className="mt-4 pb-4 flex flex-col items-center justify-center border-b-2">
          <Image
            src={user!.image!}
            width={75}
            height={75}
            alt="Profile"
            className="rounded-full"
          />
          <h1>{user!.name}</h1>
          <h2 className="text-sm">{user!.email}</h2>
        </div>
      </div>
      {/* Income List */}
      <div className="pt-4">
        <h2>Income</h2>
        <div className="mt-12 flex gap-4">
          {user!.userIncome.length
            ? user!.userIncome.map((item, index) => (
                <IncomeItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  at_date={item.at_date}
                  description={item.description!}
                  amount={Number(item.amount!)}
                  fixed={item.fixed}
                />
              ))
            : "NO INCOMES ADDED YET"}
        </div>
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";
import Link from "next/link";
import prisma from "../../../../../prisma/client";

export default function DeleteIncome({ params }: { params: { id: string } }) {
  const handleDelete = async () => {
    "use server";
    await prisma.userIncome.delete({
      where: {
        id: params.id,
      },
    });
    redirect("/profile");
  };
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center text-3xl">
      <h1 className="text-4xl text-[#fcfcfc]">
        Are you sure you want to delete this income?
      </h1>
      <form action={handleDelete} className="flex justify-center ">
        <button className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded">
          YES
        </button>
        /
        <Link
          href="/profile"
          type="button"
          className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded"
        >
          NO
        </Link>
      </form>
    </div>
  );
}

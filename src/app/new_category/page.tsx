import { redirect } from "next/navigation";
import Link from "next/link";
import prisma from "../../../prisma/client";

async function createCategory(data: any) {
  "use server";
  let { name, description, color, textColor } = Object.fromEntries(data);

  await prisma.category.create({
    data: {
      name,
      description,
      color,
      textColor,
    },
  });

  redirect("/categories");
}

export default function NewCategory() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center text-3xl text-[#fcfcfc]">
      <h1 className="text-">New Category</h1>
      <div className="w-1/2 p-4 flex flex-col">
        <form
          action={createCategory}
          className="w-full flex flex-col items-center gap-4 text-[#2e2b2e]"
        >
          <input
            type="text"
            name="name"
            placeholder="Category's name"
            className="w-full px-2 py-4 bg-[#fcfcfc] outline-0 border rounded"
          />

          <div className="w-full p-2 bg-[#fcfcfc] flex gap-4 border rounded">
            <div className="flex flex-col">
              <h2 className="text-xl text-[#2e2b2e]">Tag color</h2>
              <input type="color" name="color" />
            </div>
            <div className="flex flex-col text-[#2e2b2e]">
              <h2 className="text-xl text-[#2e2b2e]">Tag Text Color</h2>
              <input type="color" name="textColor" />
            </div>
          </div>

          <textarea
            name="description"
            rows={10}
            placeholder="Category's description"
            className="w-full px-2 py-4 bg-[#fcfcfc] outline-0 border rounded"
          ></textarea>
          <div className="w-full flex gap-4 justify-start">
            <button className="px-2 bg-[#26b3c4] text-4xl text-[#fcfcfc] rounded">
              Create
            </button>
            <Link
              type="button"
              href="/categories"
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

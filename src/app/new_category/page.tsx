import { redirect } from "next/navigation";
import prisma from "../../../prisma/client";

async function createCategory(data: any) {
  "use server";
  let { name, description } = Object.fromEntries(data);

  await prisma.category.create({
    data: {
      name,
      description,
    },
  });

  redirect("/categories");
}

export default function NewCategory() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center text-3xl">
      <h1 className="text-">New Category</h1>
      <div className="w-1/2 p-4 flex flex-col">
        <form
          action={createCategory}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Category's name"
            className="w-full px-2 py-4 outline-0 border rounded"
          />
          <textarea
            name="description"
            rows={10}
            placeholder="Category's description"
            className="w-full px-2 py-4 outline-0 border rounded"
          ></textarea>
          <div className="w-full flex gap-4 justify-end">
            <button className="px-2 bg-black text-4xl text-white rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

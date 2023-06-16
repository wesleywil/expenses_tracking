import { Category } from "@/utils/types";
import Link from "next/link";
import CategoryItem from "../../components/category_item/category_item.component";

export default async function Categories() {
  const req = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });
  const categories: Category[] = await req.json();
  return (
    <main className="grow p-4 px-24 min-h-screen text-xl text-[#fcfcfc]">
      <div className="mt-12 pb-4 flex justify-between text-4xl border-b-2">
        <h1>Categories</h1>
      </div>
      {/* Category list */}
      <div className="pt-4">
        <h2>Categories(expenses count)</h2>
        <div className="mt-12 flex gap-4">
          {categories.map((item, index) => (
            <CategoryItem key={index} category={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

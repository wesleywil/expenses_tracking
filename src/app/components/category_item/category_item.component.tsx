import { Category } from "@/utils/types";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex w-48 h-24 border rounded-xl overflow-hidden">
      <div className="w-6 h-full flex items-center justify-center bg-yellow-500 ">
        <h1 className=" -rotate-90">{category.name}</h1>
      </div>
      <div className="grow flex flex-col items-center justify-center">
        <div className="self-center p-2 bg-black text-white text-4xl rounded-full">
          <h1>99</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

import Link from "next/link";

export default async function Profile() {
  const req = await fetch("http://localhost:3000/api/user", {
    next: { revalidate: 10 },
  });
  const user: any = await req.json();

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
      {/* Income List */}
      <div className="pt-4">
        <h2>Income</h2>
        <div className="mt-12 flex gap-4">
          {user.userIncome.length
            ? user.userIncome.map((item: any, index: any) => (
                <li key={index}>
                  {item.title} - ${item.amount}
                </li>
              ))
            : "NO INCOMES ADDED YET"}
        </div>
      </div>
    </main>
  );
}

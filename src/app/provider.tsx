"use client";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "./redux/store";
import { fetchCategories } from "./redux/categories/categories";
import { fetchExpenses } from "./redux/expenses/expenses";

store.dispatch(fetchCategories());
store.dispatch(fetchExpenses());

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

import { configureStore } from "@reduxjs/toolkit/";
import categoryReducer from "./categories/categories";
import expenseReducer from "./expenses/expenses";
import utilsReducer from "./utils/utils";


export const store = configureStore({
    reducer:{
        categories:categoryReducer,
        expenses:expenseReducer,
        utils: utilsReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
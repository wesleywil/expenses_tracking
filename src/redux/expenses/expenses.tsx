import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Expense } from "@/utils/types";

export interface ExpenseState {
  expenses: Expense[];
  expense: Expense;
  status: string;
  error: string;
}

const initialState: ExpenseState = {
  expenses: [],
  expense: {} as Expense,
  status: "idle",
  error: "",
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const res = await axios.get("http://localhost:3000/api/expenses");
    return res.data;
  }
);

export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (data: any) => {
    const res = await axios.post("http://localhost:3000/api/expenses", data);
    return res.data;
  }
);

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(fetchExpenses.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.expenses = payload;
      })
      .addCase(fetchExpenses.rejected, (state, { payload }) => {
        state.error = String(payload);
      })
      .addCase(createExpense.pending, (state) => {
        state.status = "creating";
      })
      .addCase(createExpense.fulfilled, (state) => {
        state.status = "created";
      })
      .addCase(createExpense.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const {} = expenseSlice.actions;

export default expenseSlice.reducer;

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

export const updateExpense = createAsyncThunk(
  "expenses/updateExpense",
  async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(
      `http://localhost:3000/api/expenses/${id}`,
      data
    );
    return res.data;
  }
);

export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async ({ id }: { id: string }) => {
    const res = await axios.delete(`http://localhost:3000/api/expenses/${id}`);
    return res.data;
  }
);

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    selectExpense: (state, action: PayloadAction<string>) => {
      const selectExpense = state.expenses.find(
        (item) => item.id === action.payload
      );
      state.expense =
        selectExpense !== undefined ? selectExpense : ({} as Expense);
    },
    resetExpense: (state) => {
      state.expense = {} as Expense;
    },
  },
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
      })
      .addCase(updateExpense.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateExpense.fulfilled, (state) => {
        state.status = "updated";
      })
      .addCase(updateExpense.rejected, (state, { payload }) => {
        state.error = String(payload);
      })
      .addCase(deleteExpense.pending, (state) => {
        state.status = "deleting";
      })
      .addCase(deleteExpense.fulfilled, (state) => {
        state.status = "deleted";
      })
      .addCase(deleteExpense.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const { selectExpense, resetExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

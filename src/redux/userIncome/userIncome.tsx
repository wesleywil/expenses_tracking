import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserIncome } from "@/utils/types";

export interface UserIncomeState {
  userIncomes: UserIncome[];
  userIncome: UserIncome;
  status: string;
  error: string;
}

const initialState: UserIncomeState = {
  userIncomes: [],
  userIncome: {} as UserIncome,
  status: "idle",
  error: "",
};

export const fetchUserIncomes = createAsyncThunk(
  "userIncomes/fetchUserIncomes",
  async () => {
    const res = await axios.get("http://localhost:3000/api/income");
    return res.data;
  }
);

export const userIncomeSlice = createSlice({
  name: "userIncome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserIncomes.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(
        fetchUserIncomes.fulfilled,
        (state, action: PayloadAction<UserIncome[]>) => {
          state.userIncomes = action.payload;
        }
      )
      .addCase(fetchUserIncomes.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const {} = userIncomeSlice.actions;

export default userIncomeSlice.reducer;

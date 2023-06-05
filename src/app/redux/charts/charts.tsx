import { Expense } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface barData {
  month: string;
  expenses: number;
}

interface pieData {
  category: string;
  total: number;
}

export interface ChartState {
  year: string;
  barData: barData[];
  pieData: pieData[];
}

const initialState: ChartState = {
  year: String(new Date().getFullYear()),
  barData: [
    { month: "Jan", expenses: 0 },
    { month: "Feb", expenses: 0 },
    { month: "Mar", expenses: 0 },
    { month: "Apr", expenses: 0 },
    { month: "May", expenses: 0 },
    { month: "Jun", expenses: 0 },
    { month: "Jul", expenses: 0 },
    { month: "Aug", expenses: 0 },
    { month: "Sep", expenses: 0 },
    { month: "Oct", expenses: 0 },
    { month: "Nov", expenses: 0 },
    { month: "Dec", expenses: 0 },
  ],
  pieData: [],
};

export const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setDataBar: (state, action: PayloadAction<Expense[]>) => {
      const setdata = [
        {
          month: "Jan",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "01" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Feb",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "02" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Mar",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "03" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Apr",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "04" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "May",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "05" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Jun",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "06" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Jul",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "07" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Aug",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "08" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Sep",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "09" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Oct",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "10" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Nov",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "11" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
        {
          month: "Dec",
          expenses: action.payload.filter(
            (i) =>
              String(i.created_at).slice(5, 7) === "12" &&
              String(i.created_at).slice(0, 4) === state.year
          ).length,
        },
      ];
      state.barData = setdata;
    },
    setDataPie: (state, action: PayloadAction<Expense[]>) => {
      const expenses = action.payload;
      const pieData: pieData[] = [];

      //Calculate the total amount for each category
      expenses.forEach((expense) => {
        if (expense.categories && expense.categories.length > 0) {
          expense.categories.forEach((category) => {
            const existingCategory = pieData.find(
              (data) => data.category === category.name
            );
            if (existingCategory) {
              existingCategory.total += Number(expense.amount || "0");
            } else {
              pieData.push({
                category: category.name,
                total: Number(expense.amount || "0"),
              });
            }
          });
        }
      });
      console.log("PIEDATA REDUX", pieData);
      state.pieData = pieData;
    },
  },
});

export const { setYear, setDataBar, setDataPie } = chartSlice.actions;

export default chartSlice.reducer;

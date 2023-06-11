import { Expense, UserIncome } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface barData {
  month: string;
  expenses: number;
}

interface pieData {
  category: string;
  total: number;
}

interface stackedBarData {
  month: string;
  incomes: number;
  expenses: number;
}

export interface ChartState {
  year: string;
  barData: barData[];
  pieData: pieData[];
  stackedBarData: stackedBarData[];
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
  stackedBarData: [],
};

export const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setStackedBar: (
      state,
      action: PayloadAction<{ income: UserIncome[]; expenses: Expense[] }>
    ) => {
      const setData = [
        {
          month: "Jan",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "01" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "01")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Feb",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "02" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "02")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Mar",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "03" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "03")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Apr",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "04" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "04")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "May",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "05" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "05")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Jun",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "06" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "06")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Jul",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "07" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "07")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Aug",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "08" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "08")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Sep",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "09" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "09")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Oct",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "10" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "10")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Nov",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "11" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "11")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Dec",
          incomes: action.payload.income
            .filter(
              (i) => String(i.at_date).slice(5, 7) === "12" || i.fixed === true
            )
            .reduce((total, income) => total + Number(income.amount!), 0),
          expenses: action.payload.expenses
            .filter((i) => String(i.created_at).slice(5, 7) === "12")
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
      ];
      state.stackedBarData = setData;
    },
    setDataBar: (state, action: PayloadAction<Expense[]>) => {
      const setdata = [
        {
          month: "Jan",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "01" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Feb",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "02" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Mar",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "03" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Apr",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "04" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "May",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "05" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Jun",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "06" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Jul",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "07" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Aug",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "08" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Sep",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "09" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Oct",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "10" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Nov",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "11" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
        },
        {
          month: "Dec",
          expenses: action.payload
            .filter(
              (i) =>
                String(i.created_at).slice(5, 7) === "12" &&
                String(i.created_at).slice(0, 4) === state.year
            )
            .reduce((total, expense) => total + Number(expense.amount!), 0),
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

export const { setYear, setDataBar, setDataPie, setStackedBar } =
  chartSlice.actions;

export default chartSlice.reducer;

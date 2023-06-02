import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "@/utils/types";

export interface CategoryState {
  categories: Category[];
  category: Category;
  status: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  category: {} as Category,
  status: "idle",
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await axios.get("http://localhost:3000/api/categories");
    return res.data;
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (data: Category) => {
    const res = await axios.post("http://localhost:3000/api/categories", data);
    return res.data;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      const selectedCategory = state.categories.find(
        (item) => item.id === action.payload
      );
      state.category =
        selectedCategory !== undefined ? selectedCategory : ({} as Category);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.categories = payload;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.error = String(payload);
      })
      .addCase(createCategory.pending, (state) => {
        state.status = "creating";
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.status = "created";
      })
      .addCase(createCategory.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;

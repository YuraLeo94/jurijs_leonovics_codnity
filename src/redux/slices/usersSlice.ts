import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User, UsersState } from "../../types/global";
import { fetchByIds } from "../../api";

export const fetchUsers = createAsyncThunk(
  "users/fetchByIds",
  async (ids: number[]) => {
    return fetchByIds<User>("users", ids);
  }
);

const initialState: UsersState = {
  items: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(...action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post, PostsState } from "../../types/global";
import { fetchPaginatedData } from "../../api";

export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (page: number) => {
    return fetchPaginatedData<Post>("posts", page, 30);
  }
);

const initialState: PostsState = {
  items: [],
  loading: false,
  page: 1,
  hasMore: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.length === 0) {
        state.hasMore = false;
        return;
      }
      state.items.push(...action.payload);
      state.page += 1;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default postsSlice.reducer;

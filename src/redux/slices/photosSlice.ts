import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Photo, PhotosState } from "../../types/global";
import { fetchPaginatedData } from "../../api";

export const fetchPhotos = createAsyncThunk(
  "photos/fetch",
  async (page: number) => {
    return fetchPaginatedData<Photo>("photos", page);
  }
);

const initialState: PhotosState = {
  items: [],
  loading: false,
  page: 1,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(...action.payload);
      state.page += 1;
    });
    builder.addCase(fetchPhotos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default photosSlice.reducer;

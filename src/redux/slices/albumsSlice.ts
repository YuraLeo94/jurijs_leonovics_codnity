import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Album, AlbumsState } from "../../types/global";
import { fetchByIds } from "../../api";

export const fetchAlbums = createAsyncThunk(
  "albums/fetchByIds",
  async (ids: number[]) => {
    return fetchByIds<Album>("albums", ids);
  }
);

const initialState: AlbumsState = {
  items: [],
  loading: false,
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(...action.payload);
    });
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default albumsSlice.reducer;

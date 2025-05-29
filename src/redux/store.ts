import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import photosReducer from "./slices/photosSlice";
import usersReducer from "./slices/usersSlice";
import albumsReducer from "./slices/albumsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    photos: photosReducer,
    users: usersReducer,
    albums: albumsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

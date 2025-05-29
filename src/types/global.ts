interface ILink {
  label: string;
  path: string;
}

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotosState {
  items: Photo[];
  loading: boolean;
  page: number;
  hasMore: boolean;
}

interface Album {
  id: number;
  userId: number;
  title: string;
}

interface AlbumsState {
  items: Album[];
  loading: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  items: User[];
  loading: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  items: Post[];
  loading: boolean;
  page: number;
  hasMore: boolean;
}

export type {
  ILink,
  Photo,
  PhotosState,
  Album,
  AlbumsState,
  User,
  UsersState,
  Post,
  PostsState,
};

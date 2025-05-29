import { UNKNOWN_ALBUM_TEXT, UNKNOWN_USER_TEXT } from "../constants";
import { Album, User } from "../types/global";

const getUserName = (userId: number, users: User[]) => {
  const user = users.find((u) => u.id === userId);
  return user ? user.name : UNKNOWN_USER_TEXT;
};

const getAlbumTitle = (albumId: number, albums: Album[]) => {
  const album = albums.find((a) => a.id === albumId);
  return album ? album.title : UNKNOWN_ALBUM_TEXT;
};

export { getUserName, getAlbumTitle };

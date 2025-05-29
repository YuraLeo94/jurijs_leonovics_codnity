import React, { JSX } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import {
  NO_IMAGE_AVAILABLE_PATH,
  postCardModalLabels,
  UNKNOWN_ALBUM_TEXT,
  UNKNOWN_USER_TEXT,
} from "../../../constants";
import {
  Album,
  AlbumsState,
  Photo,
  PhotosState,
  User,
  UsersState,
} from "../../../types/global";

interface PhotoCardModalProps {
  open: boolean;
  onClose: () => void;
  photoID: number | null;
}

const PhotoCardModal = ({
  open,
  onClose,
  photoID,
}: PhotoCardModalProps): JSX.Element | null => {
  const { items: photos }: PhotosState = useSelector(
    (state: RootState) => state.photos
  );
  const { items: albums }: AlbumsState = useSelector(
    (state: RootState) => state.albums
  );
  const { items: users }: UsersState = useSelector(
    (state: RootState) => state.users
  );

  if (!photoID) return null;

  const photo = photos.find((p: Photo) => p.id === photoID);
  if (!photo) return null;

  const album = albums.find((a: Album) => a.id === photo.albumId);
  const user = album
    ? users.find((u: User) => u.id === album.userId)
    : undefined;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 10, top: 5 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <img
          src={photo.url}
          alt={photo.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = NO_IMAGE_AVAILABLE_PATH;
          }}
        />
        <Typography variant="subtitle1" gutterBottom>
          <strong>{postCardModalLabels.albumLabel}</strong>{" "}
          {album?.title ?? UNKNOWN_ALBUM_TEXT}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>{postCardModalLabels.userLabel}</strong>{" "}
          {user?.name ?? UNKNOWN_USER_TEXT}
        </Typography>
        {user?.email && (
          <Typography variant="body2">
            <strong>{postCardModalLabels.emailLabel}</strong> {user.email}
          </Typography>
        )}
        <Typography variant="subtitle1" gutterBottom>
          <strong>{postCardModalLabels.descriptionLabel}</strong> {photo.title}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoCardModal;

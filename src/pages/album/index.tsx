import { JSX, useEffect, useRef, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchPhotos } from "../../redux/slices/photosSlice";
import { fetchUsers } from "../../redux/slices/usersSlice";
import { fetchAlbums } from "../../redux/slices/albumsSlice";
import styles from "./album.module.scss";
import PhotoCardModal from "../../components/organisms/PhotoCardModal/PhotoCardModal";
import { albumCardLabels, BUTTON_LOAD_MORE_TEXT } from "../../constants";
import { getAlbumTitle, getUserName } from "../../utils/utils";
import {
  AlbumsState,
  Photo,
  PhotosState,
  UsersState,
  Album as AlbumType,
  User,
} from "../../types/global";

const Album = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: photos,
    loading: loadingPhotos,
    page,
  }: PhotosState = useSelector((state: RootState) => state.photos);
  const { items: users, loading: loadingUsers }: UsersState = useSelector(
    (state: RootState) => state.users
  );
  const { items: albums, loading: loadingAlbums }: AlbumsState = useSelector(
    (state: RootState) => state.albums
  );

  const [selectedPhotoID, setSelectedPhotoID] = useState<number | null>(null);
  const didFetchRef = useRef<boolean>(false);

  useEffect(() => {
    if (!didFetchRef.current && photos.length === 0) {
      dispatch(fetchPhotos(1));
      didFetchRef.current = true;
    }
  }, [dispatch, photos.length]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (photos.length === 0 || loadingPhotos || loadingAlbums) return;

    const albumIdsFromPhotos = Array.from(
      new Set(photos.map((p: Photo) => p.albumId))
    );

    const missingAlbumIds = albumIdsFromPhotos.filter(
      (id) => !albums.some((album: AlbumType) => album.id === id)
    );

    if (missingAlbumIds.length > 0) {
      dispatch(fetchAlbums(missingAlbumIds));
    }
  }, [dispatch, photos, albums]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (albums.length === 0 || loadingAlbums || loadingUsers) return;

    const userIdsFromAlbums = Array.from(
      new Set(albums.map((a: AlbumType) => a.userId))
    );

    const missingUserIds = userIdsFromAlbums.filter(
      (id) => !users.some((user: User) => user.id === id)
    );

    if (missingUserIds.length > 0) {
      dispatch(fetchUsers(missingUserIds));
    }
  }, [dispatch, albums, users]);

  const handleLoadMore = (): void => {
    if (!loadingPhotos) {
      dispatch(fetchPhotos(page));
    }
  };

  return (
    <>
      <div>
        <Grid container spacing={2}>
          {photos.map((photo) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={photo.id}>
              <Card
                onClick={() => setSelectedPhotoID(photo.id)}
                className={styles["album__card"]}
              >
                <img
                  className={styles["album__img"]}
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/placeholder_400x200.svg";
                  }}
                />
                <CardContent>
                  <Typography variant="h6" className={styles["album__label"]}>
                    {photo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles["album__label"]}
                  >
                    <strong>{albumCardLabels.albumLabel}</strong>{" "}
                    {getAlbumTitle(photo.albumId, albums)}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles["album__label"]}
                  >
                    <strong>{albumCardLabels.userLabel} </strong>
                    {getUserName(
                      albums.find((a: AlbumType) => a.id === photo.albumId)
                        ?.userId || 0,
                      users
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="cdnt-flex">
          <Button
            variant="contained"
            className="btn-load-more"
            onClick={handleLoadMore}
            disabled={loadingPhotos || loadingAlbums || loadingUsers}
          >
            {BUTTON_LOAD_MORE_TEXT}
          </Button>
        </div>
      </div>
      <PhotoCardModal
        open={selectedPhotoID != null}
        onClose={() => {
          setSelectedPhotoID(null);
        }}
        photoID={selectedPhotoID}
      />
    </>
  );
};

export default Album;

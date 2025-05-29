import { JSX, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchPosts } from "../../redux/slices/postsSlice";
import PostCard from "../molecules/PostCard";
import SkeletonCard from "../atoms/SkeletonCard";
import { Button, Typography } from "@mui/material";
import { fetchUsers } from "../../redux/slices/usersSlice";
import {
  BUTTON_LOAD_MORE_TEXT,
  LOAD_MORE_END_TEXT,
  SKELTON_COUNT,
} from "../../constants";
import { getUserName } from "../../utils/utils";
import { Album, PostsState, User, UsersState } from "../../types/global";

const PostList = (): JSX.Element => {
  const {
    items: posts,
    loading,
    page,
    hasMore,
  }: PostsState = useSelector((state: RootState) => state.posts);
  const { items: users, loading: loadingUsers }: UsersState = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  const didFetchRef = useRef(false);

  useEffect(() => {
    if (!didFetchRef.current && posts.length === 0 && !loading) {
      dispatch(fetchPosts(1));
      didFetchRef.current = true;
    }
  }, [dispatch, posts.length, loading]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (posts.length === 0 || loading || loadingUsers) return;

    const userIdsFromPosts: number[] = Array.from(
      new Set(posts.map((a: Album) => a.userId))
    );

    const missingUserIds: number[] = userIdsFromPosts.filter(
      (id) => !users.some((user: User) => user.id === id)
    );

    if (missingUserIds.length > 0) {
      dispatch(fetchUsers(missingUserIds));
    }
  }, [dispatch, posts, users]);

  const handleLoadMore = (): void => {
    if (!loading) {
      dispatch(fetchPosts(page));
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          authorName={getUserName(post.userId, users)}
        />
      ))}
      <div className="cdnt-flex">
        {hasMore ? (
          <Button
            variant="contained"
            className="btn-load-more"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {BUTTON_LOAD_MORE_TEXT}
          </Button>
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ margin: "32px auto" }}
          >
            {LOAD_MORE_END_TEXT}
          </Typography>
        )}
      </div>
      {loading &&
        Array.from({ length: SKELTON_COUNT }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
    </div>
  );
};

export default PostList;

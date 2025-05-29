import { JSX } from "react";
import PostList from "../components/organisms/PostList";
import { POST_PAGE_TITLE } from "../constants";

const Home = (): JSX.Element => (
  <div>
    <h2>{POST_PAGE_TITLE}</h2>
    <PostList />
  </div>
);

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post";
import { fetchAuthors } from "../../redux/modules/authors";
import { fetchPosts, setFilter, setOrder } from "../../redux/modules/posts";
import {
  getAuthors,
  getPostsFilteredOrdered,
} from "../../redux/modules/selects";
import Filter from "./Filter";

function Home() {
  const dispatch = useDispatch();
  const authors = useSelector(getAuthors);
  const posts = useSelector(getPostsFilteredOrdered);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchAuthors());
      dispatch(fetchPosts());
    }

    fetchData();
  }, []);

  const handleChangeFilter = (event) => {
    dispatch(setFilter({ author: event.target.value }));
  };

  const handleChangeOrder = (event) => {
    dispatch(setOrder({ date: event.target.value }));
  };

  return (
    <div data-testid="home-screen" className="home">
      <Filter
        data={authors}
        onChangeFilter={handleChangeFilter}
        onChangeOrder={handleChangeOrder}
      />
      {posts.map(({ author, title, publishedAt, body }) => (
        <Post
          author={author?.name}
          body={body}
          key={title}
          publishedAt={publishedAt}
          title={title}
        />
      ))}
    </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post";
import { fetchAuthors } from "../../redux/modules/authors";
import { fetchPosts } from "../../redux/modules/posts";
import { getPostsWithAuthors } from "../../redux/modules/selects";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsWithAuthors);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchAuthors());
      dispatch(fetchPosts());
    }

    fetchData();
  }, []);

  return (
    <div data-testid="home-screen" className="home">
      {posts.map(({ author, title, publishedAt, body }) => (
        <Post
          key={title}
          title={title}
          publishedAt={publishedAt}
          body={body}
          author={author?.name}
        />
      ))}
    </div>
  );
}

export default Home;

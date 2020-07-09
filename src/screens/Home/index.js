import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Select from "../../components/Select";
import Typography from "../../components/Typography";
import { getAuthors, getPosts } from "../../redux/modules/selects";
import { fetchAuthors } from "../../redux/modules/authors";
import { fetchPosts } from "../../redux/modules/posts";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const authors = useSelector(getAuthors);

  console.log(posts);
  console.log(authors);

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchPosts());
  }, []);

  return <div data-testid="home-screen" className="home"></div>;
}

export default Home;

import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "./redux/modules/selects";
import Sidebar from "./Layout/Sidebar";

function Layout({ children }) {
  const { posts } = useSelector(getPosts);

  return (
    <div>
      <header>cabeçalho</header>
      <main>{children}</main>
      <Sidebar posts={posts} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

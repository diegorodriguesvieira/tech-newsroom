import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { getNewestPosts } from "../redux/modules/selects";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.scss";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const posts = useSelector(getNewestPosts);

  return (
    <>
      <Container>
        <Header />
        <div className={clsx(styles.content, "mb-2")}>
          <main>{children}</main>
          <Sidebar posts={posts} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

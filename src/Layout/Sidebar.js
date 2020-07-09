import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import Divider from "../components/Divider";
import Time from "../components/Time";
import Typography from "../components/Typography";
import styles from "./Sidebar.scss";

function Sidebar({ posts }) {
  const renderItem = (item, index) => {
    const { title, publishedAt } = item;
    const isLast = posts.length - 1 === index;

    return (
      <li key={title}>
        <Typography variant="h6">{title}</Typography>
        <Time>{publishedAt}</Time>
        {!isLast && <Divider className={clsx("mt-2", "mb-2")} />}
      </li>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <Typography
        className="mb-3"
        color="gray"
        fontWeight="medium"
        variant="h5"
      >
        Últimas notícias
      </Typography>
      <ul className="list-unstyled">{posts.map(renderItem)}</ul>
    </aside>
  );
}

Sidebar.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      publishedAt: PropTypes.string,
    })
  ).isRequired,
};

export default Sidebar;

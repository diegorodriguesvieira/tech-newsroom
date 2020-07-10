import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import Author from "../Author";
import Divider from "../Divider";
import Time from "../Time";
import Typography from "../Typography";
import styles from "./Post.scss";
import SocialSharel from "./SocialShare";

function Post({ author, body, publishedAt, title }) {
  return (
    <section className="mb-4">
      <Divider className="mb-4" />
      <div className={clsx("mb-4", styles.header)}>
        <div>
          <Author className="mb-1">{author}</Author>
          <Time>{publishedAt}</Time>
        </div>
        <SocialSharel />
      </div>
      <Typography className="mb-4" variant="h1">
        {title}
      </Typography>
      <Typography>{body}</Typography>
    </section>
  );
}

Post.defaultProps = {
  author: "",
  body: "",
  publishedAt: "",
  title: "",
};

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
};

export default Post;

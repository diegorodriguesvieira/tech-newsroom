import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import Author from "../Author";
import Divider from "../Divider";
import Icon from "../Icon";
import Time from "../Time";
import Typography from "../Typography";
import styles from "./Post.scss";

function Post({ author, body, publishedAt, title }) {
  const url = window.location.href;
  const whatsApp = `https://wa.me/?text=${url}`;
  const twitter = `https://twitter.com/intent/tweet?text=${url}`;
  const facebok = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

  return (
    <section className="mb-4">
      <Divider className="mb-4" />
      <div className={clsx("mb-4", styles.header)}>
        <div>
          <Author className="mb-1">{author}</Author>
          <Time>{publishedAt}</Time>
        </div>
        <div>
          <a
            className={styles.socialShare}
            href={facebok}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="facebook" />
          </a>
          <a className={styles.socialShare} href={twitter} rel="noreferrer">
            <Icon name="twitter" />
          </a>
          <a className={styles.socialShare} href={whatsApp} rel="noreferrer">
            <Icon name="whatsapp" />
          </a>
        </div>
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

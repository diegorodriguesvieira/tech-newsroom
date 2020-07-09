import PropTypes from "prop-types";
import React from "react";
import Author from "../Author";
import Time from "../Time";
import Typography from "../Typography";
import Icon from "../Icon";
import Divider from "../Divider";

function Post({ author, body, publishedAt, title }) {
  return (
    <section className="mb-4">
      <Divider className="mb-4" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="mb-4"
      >
        <div>
          <Author className="mb-1">{author}</Author>
          <Time>{publishedAt}</Time>
        </div>
        <div>
          <Icon name="facebook" />
          <Icon name="twitter" />
          <Icon name="whatsapp" />
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

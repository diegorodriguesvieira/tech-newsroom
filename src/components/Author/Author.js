import PropTypes from "prop-types";
import React from "react";
import Typography from "../Typography";

function Author({ children, className }) {
  return (
    <Typography
      block
      color="primary"
      variant="caption"
      fontWeight="bold"
      className={className}
    >
      {typeof children === "string" ? children.toUpperCase() : null}
    </Typography>
  );
}

Author.defaultProps = {
  children: "",
  className: "",
};

Author.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Author;

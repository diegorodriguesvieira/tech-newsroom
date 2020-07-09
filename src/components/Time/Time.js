import PropTypes from "prop-types";
import React from "react";
import Typography from "../Typography";

function Time({ children, className }) {
  return (
    <Typography
      block
      className={className}
      component="time"
      fontWeight="bold"
      variant="caption"
    >
      {children}
    </Typography>
  );
}

Time.defaultProps = {
  children: "",
  className: "",
};

Time.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Time;

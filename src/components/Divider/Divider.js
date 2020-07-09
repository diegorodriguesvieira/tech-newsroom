import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Divider.scss";

function Divider({ className }) {
  return <div className={clsx(styles.divider, className)} />;
}

Divider.defaultProps = {
  className: "",
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;

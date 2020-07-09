import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Container.scss";

function Container({ children, className }) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}

Container.defaultProps = {
  children: null,
  className: "",
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;

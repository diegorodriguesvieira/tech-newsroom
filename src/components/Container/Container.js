import PropTypes from "prop-types";
import React from "react";
import styles from "./Container.scss";

function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

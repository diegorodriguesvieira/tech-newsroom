import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Icon.scss";

const iconNames = ["facebook", "twitter", "whatsapp"];

function Icon({ name }) {
  return <i className={clsx(styles.icon, styles[name])} />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
};

export default Icon;

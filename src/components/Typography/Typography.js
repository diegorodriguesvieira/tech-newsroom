import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Typography.scss";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  caption: "span",
};

function Typography({ children, color, variant }) {
  const Component = variantMapping[variant] || "span";

  return (
    <Component className={clsx(styles[variant], styles[color])}>
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  children: "",
  variant: "body1",
  color: null,
};

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "caption",
  ]),
  color: PropTypes.oneOf([
    "gray-dark",
    "gray-light",
    "gray",
    "primary",
    "white",
    null,
  ]),
};

export default Typography;

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

function Typography({ children, color, variant, className, fontWeight }) {
  const Component = variantMapping[variant] || "span";

  return (
    <Component
      className={clsx(
        styles[variant],
        styles[color],
        fontWeight && styles[fontWeight],
        className
      )}
    >
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  children: "",
  color: null,
  variant: "body1",
  className: "",
  fontWeight: null,
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
  fontWeight: PropTypes.oneOf(["regular", "medium", "bold", null]),
};

export default Typography;

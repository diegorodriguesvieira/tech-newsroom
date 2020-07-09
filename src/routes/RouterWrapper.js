import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

function RouteWrapper({ children, layout: Layout }) {
  return (
    <Route>
      <Layout>{children}</Layout>
    </Route>
  );
}

RouteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
};

export default RouteWrapper;

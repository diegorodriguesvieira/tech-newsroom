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
  children: PropTypes.element.isRequired,
  layout: PropTypes.func.isRequired,
};

export default RouteWrapper;

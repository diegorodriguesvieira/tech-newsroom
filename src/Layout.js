import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header>cabeçalho</header>
      <main>{children}</main>
      <aside>menu</aside>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

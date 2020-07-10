import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import Routes from "./index";
import { renderWithRedux } from "../../tests";

describe("Routes", () => {
  test("full app rendering/navigating", () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>
    );

    expect(getByTestId("home-screen")).toHaveClass("home");
  });

  test("landing on a bad page shows 404 page", () => {
    const history = createMemoryHistory();
    history.push("/bad/route");
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>
    );
    expect(getByTestId("not-found-screen")).toHaveClass("not-found");
  });
});

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import Routes from "./index";

describe("Routes", () => {
  test("full app rendering/navigating", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Routes />
      </Router>
    );

    expect(getByTestId("home-screen")).toHaveClass("home");
  });

  test("landing on a bad page shows 404 page", () => {
    const history = createMemoryHistory();
    history.push("/bad/route");
    const { getByTestId } = render(
      <Router history={history}>
        <Routes />
      </Router>
    );
    expect(getByTestId("not-found-screen")).toHaveClass("not-found");
  });
});

import { render } from "@testing-library/react";
import React from "react";

import Typography from "./Typography";

describe("Typography", () => {
  test("Should render text", () => {
    const text = "Hello World!";
    const { getByText } = render(<Typography>{text}</Typography>);
    expect(getByText(text)).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Select from "./Select";

describe("Select", () => {
  const options = [
    { value: 1, label: "Red" },
    { value: 2, label: "Green" },
  ];

  test("Simulates selection", () => {
    const { getAllByTestId, getByTestId } = render(
      <Select name="test" options={options} />
    );
    fireEvent.change(getByTestId("select"), { target: { value: 2 } });
    const allOptions = getAllByTestId("select-option");
    expect(allOptions[0].selected).toBeFalsy();
    expect(allOptions[1].selected).toBeTruthy();
  });

  test("Select should be disabled", () => {
    const { getByTestId } = render(
      <Select name="test" options={options} disabled />
    );
    expect(getByTestId("select")).toHaveAttribute("disabled");
  });

  test("Select renders if options is invalid", () => {
    const { getByTestId } = render(<Select name="test" options={undefined} />);
    expect(getByTestId("select").value).toBe("");
  });
});

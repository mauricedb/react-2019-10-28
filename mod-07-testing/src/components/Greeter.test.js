import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";

import Greeter from "./Greeter";

test("Render the greeter", () => {
  const { getAllByText } = render(<Greeter person={{ firstName: "Jack" }} />);

  expect(getAllByText("Hello Jack")).toHaveLength(2);
});

test.skip("Render the greeter without reuired data", () => {
  const { getByText } = render(<Greeter />);

  expect(
    getByText(/cannot read property 'firstName' of undefined/i)
  ).toBeVisible();
});

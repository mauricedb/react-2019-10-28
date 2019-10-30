import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PersonEditorPresentation from "./PersonEditorPresentation";

test("Rendering a person", () => {
  const { getByLabelText } = render(
    <PersonEditorPresentation firstName="Jack" lastName="Who" />
  );

  expect(getByLabelText("Firstname:")).toHaveValue("Jack");
});

test("Rendering a person", () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <PersonEditorPresentation
      firstName="Jack"
      lastName="Who"
      onChange={onChange}
    />
  );

  expect(getByLabelText("Firstname:")).toHaveValue("Jack");

  fireEvent.change(getByLabelText("Firstname:"), {
    target: { value: "Mike" }
  });

  expect(onChange).toHaveBeenCalled();
});

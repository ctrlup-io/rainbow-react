import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Stain from ".";

describe(Stain.name, () => {
  it("renders the second stain with index `1`", () => {
    render(<Stain index={1} />);
    expect(screen.getByTestId("stain-1")).toBeInTheDocument();
  });
});

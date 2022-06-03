import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Title from ".";

describe(Title.name, () => {
  it("renders nothing without label", () => {
    const { container } = render(<Title />);
    expect(container).toBeEmptyDOMElement();
  });
  it("renders a label with stain", () => {
    render(<Title label="Bienvenue" />);
    expect(screen.getByTestId("stain")).toHaveTextContent("Bienvenue");
  });
  it("renders a label with stain", () => {
    render(<Title label="La bienvenue" />);
    expect(screen.getByText("La")).toBeInTheDocument();
    expect(screen.getByTestId("stain")).toHaveTextContent("bienvenue");
  });
});

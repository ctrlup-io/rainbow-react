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
    render(<Title>Soyez les bienvenues</Title>);
    expect(screen.getByText("Soyez les")).toBeInTheDocument();
    expect(screen.getByTestId("stain")).toHaveTextContent("bienvenues");
  });
});

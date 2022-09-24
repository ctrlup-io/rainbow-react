import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Card from ".";

describe(Card.name, () => {
  it("renders `Job#1` as title and `Amazing job` as content", () => {
    render(<Card title="Job#1">Amazing job</Card>);
    expect(screen.getByText("Amazing job")).toBeInTheDocument();
    expect(screen.getByText("Job#1")).toBeInTheDocument();
  });
  it("renders an icon", () => {
    const icon = <span data-testid="icon" />;
    render(
      <Card title="Job#1" icon={icon}>
        Amazing job
      </Card>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});

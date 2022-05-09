import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import CollapseCard from ".";

describe(CollapseCard.name, () => {
    it("renders `Job#1` as title", () => {
        render(<CollapseCard title="Job#1">Amazing job</CollapseCard>);
        expect(screen.getByText("Job#1")).toBeInTheDocument();
    });
    it("renders `show more` button", () => {
        render(<CollapseCard title="Job#1">Amazing job</CollapseCard>);
        expect(screen.getByTestId("ExpandMoreIcon")).toBeInTheDocument();
        expect(screen.getByLabelText("show more")).toBeInTheDocument();

    });
    it("renders `Amazing job` as content when user click on button", () => {
        render(<CollapseCard title="Job#1">Amazing job</CollapseCard>);
        const button = screen.getByTestId("ExpandMoreIcon");
        fireEvent.click(button);
        expect(screen.getByText("Amazing job")).toBeInTheDocument();

    });
    it("renders `show less` button when user click on button", () => {
        render(<CollapseCard title="Job#1">Amazing job</CollapseCard>);
        const button = screen.getByTestId("ExpandMoreIcon");
        fireEvent.click(button);
        expect(screen.getByLabelText("show less")).toBeInTheDocument();
    });
});

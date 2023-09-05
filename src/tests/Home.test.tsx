import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Home test", () => {
    render(<Home />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

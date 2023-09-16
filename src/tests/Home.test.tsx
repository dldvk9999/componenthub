import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

it("Home test", () => {
    render(<Home />);
    const linkElement = screen.getByText(/COMPONENTHUB/i);
    expect(linkElement).toBeInTheDocument();
});

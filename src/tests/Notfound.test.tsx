import React from "react";
import { render, screen } from "@testing-library/react";
import Notfound from "../pages/Notfound";

it("Home test", () => {
    render(<Notfound />);
    const linkElement = screen.getByText(/This Page 404 Not Found./i);
    expect(linkElement).toBeInTheDocument();
});

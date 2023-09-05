import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("Login test", () => {
    render(<Login />);
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
});

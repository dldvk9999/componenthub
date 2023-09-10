import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("Login test", () => {
    render(<Login />);
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
});

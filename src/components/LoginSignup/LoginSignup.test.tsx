import { render, screen } from "@testing-library/react";
import Login from "./LoginSignup";

describe("LoginSignup 컴포넌트 테스트", () => {
    it("Login test", () => {
        render(<Login />);
        const linkElement = screen.getByText(/login/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("Signup test", () => {
        render(<Login />);
        const linkElement = screen.getByText(/signup/i);
        expect(linkElement).toBeInTheDocument();
    });
});

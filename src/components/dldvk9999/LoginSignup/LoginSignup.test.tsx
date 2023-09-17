import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./LoginSignup";

describe("LoginSignup 컴포넌트 테스트", () => {
    render(<Login />);

    it("Login <-> Signup change test", () => {
        // to Signup
        const signup = screen.getByRole("button", { name: "회원가입하기" });
        expect(signup).toBeEnabled();
        fireEvent.click(signup);
        const signupElement = screen.getByText(/signup/i);
        expect(signupElement).toBeInTheDocument();

        // to Login
        const login = screen.getByRole("button", { name: "로그인하기" });
        expect(login).toBeEnabled();
        fireEvent.click(login);
        const loginElement = screen.getByText(/signin/i);
        expect(loginElement).toBeInTheDocument();
    });
});

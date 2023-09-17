import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header 컴포넌트 테스트", () => {
    it("Header test - Home", () => {
        render(<Header />);
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("Header test - Login", () => {
        render(<Header />);
        const linkElement = screen.getByText(/Login/i);
        expect(linkElement).toBeInTheDocument();
    });
});

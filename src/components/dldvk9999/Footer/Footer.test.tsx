import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer 컴포넌트 테스트", () => {
    it("Footer test", () => {
        render(<Footer />);
        const linkElement = screen.getByText(/powered by/i);
        expect(linkElement).toBeInTheDocument();
    });
});

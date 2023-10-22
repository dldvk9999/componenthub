import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation 컴포넌트 테스트", () => {
    render(<Navigation />);

    it("Navigation test", () => {
        const title1 = screen.getAllByText(/회사소개/i);
        expect(title1[0]).toBeInTheDocument();
        const title2 = screen.getAllByText(/인재영입/i);
        expect(title2[0]).toBeInTheDocument();
        const title3 = screen.getAllByText(/게시판/i);
        expect(title3[0]).toBeInTheDocument();
        const title4 = screen.getAllByText(/마이페이지/i);
        expect(title4[0]).toBeInTheDocument();
    });
});

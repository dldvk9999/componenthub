import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

// 가짜 IntersectionObserver 생성
global.IntersectionObserver = class IntersectionObserver {
    root!: null;
    rootMargin!: string;
    thresholds!: number[];
    takeRecords!: any;
    constructor() {}

    observe() {
        return null;
    }

    disconnect() {
        return null;
    }

    unobserve() {
        return null;
    }
};

it("Home test", () => {
    render(<Home />);
    const linkElement = screen.getByText(/COMPONENTHUB/i);
    expect(linkElement).toBeInTheDocument();
});

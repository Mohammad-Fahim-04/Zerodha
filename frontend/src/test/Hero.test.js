import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: /signup now/i,
    });
    expect(signupButton).toBeInTheDocument();
  });

  test("renders hero heading", () => {
    render(<Hero />);
    const heading = screen.getByText(/invest in everything/i);
    expect(heading).toBeInTheDocument();
  });
});
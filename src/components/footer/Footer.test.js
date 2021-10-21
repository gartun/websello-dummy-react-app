import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Footer from "./Footer";

describe("All tests on Footer component", () => {
  test("Links take the user to the target when clicked", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");

    for (let link of links) {
      fireEvent.click(link);
      expect(window.location.href).toBe(`${link.href}`);
    }
  });

  test("Footer brand section displays the correct year", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByText(/Websello/i).textContent).toContain(
      new Date().getFullYear()
    );
  });
});

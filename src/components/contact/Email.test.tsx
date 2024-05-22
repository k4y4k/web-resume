import * as React from "react";
import { render, screen } from "@testing-library/react";
import Email from "./Email";

describe("<Email/>", () => {
  test("Handles no data case properly", () => {
    render(<Email email="" />);

    const email = screen.queryByTestId("contactEmail");

    expect(email).not.toBeInTheDocument();
    expect(email).toMatchSnapshot();
  });

  test("displays email, properly formatted", () => {
    render(<Email email="kayak@example.com" />);

    const email = screen.getByTestId("contactEmail");

    expect(email).toHaveTextContent("kayak@example.com");
    expect(email).toMatchSnapshot();
  });

  test("mailto: link", () => {
    render(<Email email="kayak@example.com" />);

    const email = screen.getByTestId("contactEmail");

    expect(email).toHaveAttribute("href", "mailto:kayak@example.com");
    expect(email).toMatchSnapshot();
  });
});

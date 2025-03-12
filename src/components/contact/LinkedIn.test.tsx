import { render, screen } from "@testing-library/react";
import React from "react";
import LinkedIn from "./LinkedIn";

describe("<LinkedIn />", () => {
  test("handles no data", () => {
    render(<LinkedIn username="" url="" />);

    const linkedin = screen.queryByTestId("contactLinkedin");
    expect(linkedin).not.toBeInTheDocument();
    expect(linkedin).toMatchSnapshot();
  });

  test("handles null data", () => {
    render(<LinkedIn username={null} url={null} />);

    const linkedin = screen.queryByTestId("contactLinkedin");
    expect(linkedin).not.toBeInTheDocument();
    expect(linkedin).toMatchSnapshot();
  });

  test("links to profile in new tab", () => {
    render(<LinkedIn username="exampledin" url="https://example.com" />);

    const linkedin = screen.getByTestId("contactLinkedin");

    expect(linkedin).toHaveTextContent("exampledin");
    expect(linkedin).toHaveAttribute("href", "https://example.com");

    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import Title from "./Title";

describe("<Title />", () => {
  test("no data?", () => {
    render(<Title category="" />);

    const title = screen.queryByTestId("skillsTitle");
    expect(title).not.toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("displays title 👌", () => {
    render(<Title category="Monster Hunting" />);

    const title = screen.queryByTestId("skillsTitle");

    expect(title).toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });
});

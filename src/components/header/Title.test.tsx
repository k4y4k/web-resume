import { render, screen } from "@testing-library/react";
import React from "react";
import Title from "./Title";

describe("<Title />", () => {
  test("Handles not having any data properly", () => {
    render(<Title title="" />);

    const title = screen.queryByTestId("headerTitle");
    expect(title).not.toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("displays title", () => {
    render(<Title title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("lightmode", () => {
    render(<Title title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("compact", () => {
    render(<Title title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("lightmode and compact", () => {
    render(<Title title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });
});

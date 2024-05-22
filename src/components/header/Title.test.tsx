import * as React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("<Title />", () => {
  test("Handles not having any data properly", () => {
    render(<Title lightmode={false} compact={false} title="" />);

    const title = screen.queryByTestId("headerTitle");
    expect(title).not.toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("displays title", () => {
    render(<Title lightmode={false} compact={false} title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("lightmode", () => {
    render(<Title lightmode={true} compact={false} title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("compact", () => {
    render(<Title lightmode={false} compact={true} title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });

  test("lightmode and compact", () => {
    render(<Title lightmode={true} compact={true} title="kayak kayak" />);

    const title = screen.getByTestId("headerTitle");
    expect(title).toHaveTextContent("kayak kayak");
    expect(title).toMatchSnapshot();
  });
});

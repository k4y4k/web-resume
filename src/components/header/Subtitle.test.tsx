import { render, screen } from "@testing-library/react";
import React from "react";
import Subtitle from "./Subtitle";

describe("<Subtitle />", () => {
  test("Handles not having data", () => {
    render(<Subtitle subtitle="" />);
    const subtitle = screen.queryByTestId("headerSubtitle");

    expect(subtitle).not.toBeInTheDocument();
    expect(subtitle).toMatchSnapshot();
  });

  test("Displays subtitle", () => {
    render(<Subtitle subtitle="lead singer of kayak and the kayaks" />);
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("lightmode", () => {
    render(<Subtitle subtitle="lead singer of kayak and the kayaks" />);
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("compact", () => {
    render(<Subtitle subtitle="lead singer of kayak and the kayaks" />);
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("lightmode and compact", () => {
    render(<Subtitle subtitle="lead singer of kayak and the kayaks" />);
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });
});

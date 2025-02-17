import { render, screen } from "@testing-library/react";
import * as React from "react";
import Subtitle from "./Subtitle";

describe("<Subtitle />", () => {
  test("Handles not having data", () => {
    render(<Subtitle lightmode={false} compact={false} subtitle="" />);
    const subtitle = screen.queryByTestId("headerSubtitle");

    expect(subtitle).not.toBeInTheDocument();
    expect(subtitle).toMatchSnapshot();
  });

  test("Displays subtitle", () => {
    render(
      <Subtitle
        lightmode={false}
        compact={false}
        subtitle="lead singer of kayak and the kayaks"
      />,
    );
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("lightmode", () => {
    render(
      <Subtitle
        lightmode={true}
        compact={false}
        subtitle="lead singer of kayak and the kayaks"
      />,
    );
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("compact", () => {
    render(
      <Subtitle
        lightmode={false}
        compact={true}
        subtitle="lead singer of kayak and the kayaks"
      />,
    );
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });

  test("lightmode and compact", () => {
    render(
      <Subtitle
        lightmode={true}
        compact={true}
        subtitle="lead singer of kayak and the kayaks"
      />,
    );
    const subtitle = screen.getByTestId("headerSubtitle");

    expect(subtitle).toHaveTextContent("lead singer of kayak and the kayaks");
    expect(subtitle).toMatchSnapshot();
  });
});

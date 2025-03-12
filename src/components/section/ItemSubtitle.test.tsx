import { render, screen } from "@testing-library/react";
import React from "react";
import ItemSubtitle from "./ItemSubtitle";

describe("<ItemSubtitle />", () => {
  test("handles no data", () => {
    render(<ItemSubtitle link="" subtitle="" />);

    const subtitle = screen.queryByTestId("itemSubtitle");
    expect(subtitle).not.toBeInTheDocument();
    expect(subtitle).toMatchSnapshot();
  });

  test("displays subtitle", () => {
    render(<ItemSubtitle link="" subtitle="Yes, really! Really really!" />);

    const subtitle = screen.getByTestId("itemSubtitle");
    expect(subtitle).toHaveTextContent("Yes, really! Really really!");
    expect(subtitle).toMatchSnapshot();
  });

  test("displays subtitle with link", () => {
    render(
      <ItemSubtitle link="https://duckduckgo.com" subtitle="Quack quack" />,
    );

    const subtitle = screen.getByTestId("itemSubtitle");
    expect(subtitle).toHaveTextContent("Quack quack");
    expect(subtitle).toMatchSnapshot();
  });
});

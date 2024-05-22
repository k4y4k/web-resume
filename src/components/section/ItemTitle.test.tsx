import * as React from "react";
import { render, screen } from "@testing-library/react";
import ItemTitle from "./ItemTitle";

describe("<ItemTitle />", () => {
  test("handles no data", () => {
    render(<ItemTitle title="" />);

    const title = screen.queryByTestId("itemTitle");
    expect(title).not.toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("displays title", () => {
    render(<ItemTitle title="My Frankly Astounding Thing" />);

    const title = screen.getByTestId("itemTitle");
    expect(title).toHaveTextContent(/my frankly astounding thing/i);
    expect(title).toMatchSnapshot();
  });
});

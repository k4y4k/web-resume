import { render, screen } from "@testing-library/react";
import * as React from "react";
import Bucket from "./Bucket";

describe("<Bucket />", () => {
  test("displays nothing for no data", () => {
    render(<Bucket skills={[""]} />);

    const skills = screen.queryByTestId("skillsBucket");

    expect(skills).not.toBeInTheDocument();
    expect(skills).toMatchSnapshot();
  });
});

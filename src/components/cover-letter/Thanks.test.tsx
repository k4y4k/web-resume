import * as React from "react";
import { render, screen } from "@testing-library/react";
import ThanksForComingToMyTEDTalk from "./Thanks";

describe("<Thanks/> uwu", () => {
  test("renders OK", () => {
    render(<ThanksForComingToMyTEDTalk name="kayak" />);

    expect(screen.getByText("kayak")).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});

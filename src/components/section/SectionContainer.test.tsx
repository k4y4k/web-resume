import { render, screen } from "@testing-library/react";
import React from "react";
import ItemContainer from "./ItemContainer";
import SectionContainer from "./SectionContainer";

describe("<SectionContainer />", () => {
  test("composes title and >1  items", () => {
    const data = (
      <ItemContainer title="" subtitle="" fromDate="" toDate="" summary="" />
    );

    render(
      <SectionContainer title="Reason #8: Regret">{data}</SectionContainer>,
    );

    const title = screen.getByText("Reason #8: Regret");
    expect(title).toBeInTheDocument();

    const item = screen.getAllByTestId("sectionItemContainer");
    expect(item.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByTestId("sectionContainer")).toMatchSnapshot();
  });
});

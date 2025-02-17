import { render, screen } from "@testing-library/react";
import * as React from "react";
import SectionTitle from "./SectionTitle";

describe("<SectionTitle />", () => {
  test("no data? no wakkas", () => {
    render(<SectionTitle onCoverLetter={false} title="" />);

    const title = screen.queryByTestId("sectionTitle");
    expect(title).not.toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("displays title", () => {
    render(<SectionTitle onCoverLetter={false} title="Check this" />);

    const title = screen.getByTestId("sectionTitle");
    expect(title).toHaveTextContent(/check this/i);
    expect(title).toMatchSnapshot();
  });

  test("does not display title on the cover page", () => {
    const { container } = render(
      <SectionTitle onCoverLetter={true} title="Check this" />,
    );

    expect(container).not.toHaveTextContent(/check this/i);
    expect(container).toMatchSnapshot();
  });
});

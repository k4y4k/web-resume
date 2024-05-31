import * as React from "react";
import { render, screen } from "@testing-library/react";
import Phone from "./Phone";
import { useStaticQuery } from "gatsby";

describe("<Phone />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      num: {
        childDataJson: {
          basics: {
            phone: "0123456789",
          },
        },
      },
    }),
  );

  test("handles no phone data", () => {
    render(<Phone />);

    const phone = screen.queryByTestId("contactPhone");
    expect(phone).not.toBeInTheDocument();
    expect(phone).toMatchSnapshot();
  });

  test("hides phone number by default", () => {
    render(<Phone />);

    const phone = screen.queryByTestId("contactPhone");
    expect(phone).not.toBeInTheDocument();
    expect(phone).toMatchSnapshot();
  });

  test("displays phone number", () => {
    render(<Phone restrictDisplay={false} />);

    const phone = screen.getByTestId("contactPhone");
    expect(phone).toHaveTextContent("012 345 6789");
    expect(phone).toMatchSnapshot();
  });
});

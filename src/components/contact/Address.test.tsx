import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import Address from "./Address";

describe("<Address />", () => {
  test("Handles no data", () => {
    render(<Address city="" countryCode="" region="" />);

    const address = screen.queryByTestId("contactAddress");

    expect(address).not.toBeInTheDocument();
  });

  describe("Is formatted correctly", () => {
    test("street name + number on one line", () => {
      render(
        <Address
          city="Example City"
          countryCode="EX"
          region="Example State"
          restrictDisplay={false}
        />
      );

      const address = screen.getByTestId("contactAddress");

      expect(address).toHaveTextContent("Example State");
      expect(address).toMatchSnapshot();
    });

    test("city, state on one line", () => {
      render(
        <Address
          city="Example City"
          countryCode="ZZ"
          restrictDisplay={false}
          region="Example State"
        />
      );

      const addressContainer = document.getElementById(
        "address"
      ) as HTMLElement;
      const address = within(addressContainer).getByText(
        "Example City, Example State",
        { exact: false }
      );

      expect(address).not.toBeFalsy();
      expect(address).toMatchSnapshot();
    });
  });

  describe("Is not about to dox me", () => {
    test("only displays City / State when RESTRICT_ADDRESS env var is passed in", () => {
      process.env.RESTRICT_ADDRESS = "true";

      render(
        <Address city="Example City" countryCode="ZZ" region="Example State" />
      );

      const address = screen.getByTestId("contactAddress");

      expect(address).not.toBeFalsy();
      expect(address).not.toHaveTextContent("Example Rd");
      expect(address).toHaveTextContent("Example City, Example State");
      expect(address).toMatchSnapshot();
    });
  });
});

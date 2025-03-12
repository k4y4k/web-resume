import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import { Contact, PureContact } from "./Contact";

describe("<Contact />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      num: {
        childDataJson: {
          basics: {
            phone: "1234567890",
          },
        },
      },

      file: {
        childDataJson: {
          basics: {
            email: "john@gmail.com",
            website: "http://johndoe.com",
            location: {
              city: "San Francisco",
              region: "California",
              countryCode: "US",
            },
            profiles: [
              {
                network: "Twitter",
                username: "example",
              },
            ],
          },
        },
      },
    }),
  );

  test("Hides things appropriately by default", () => {
    render(
      <PureContact
        email="kayak@example.com"
        twitter="exam"
        github="octocat"
        website="example.com"
        linkedinUser="exampledin"
        linkedinUrl="example.com"
        city="Example City"
        countryCode="US"
        region="California"
        phone="1234567890"
        technical={false}
      />,
    );

    const address = screen.getByTestId("contactAddress");
    expect(address).toHaveTextContent("Example City, California");
    expect(address).not.toHaveTextContent("2712");
  });

  test("Shows things when told", () => {
    render(
      <PureContact
        email="kayak@example.com"
        twitter="exam"
        github="octocat"
        website="example.com"
        linkedinUser="exampledin"
        linkedinUrl="example.com"
        city="Example City"
        countryCode="US"
        region="California"
        restrictDisplay={false}
        phone="1234567890"
        technical={false}
      />,
    );

    const address = screen.getByTestId("contactAddress");
    expect(address).toHaveTextContent(/example city/i);
    expect(address).toHaveTextContent(/California/i);
  });

  test("renders OK", () => {
    render(<Contact />);

    expect(screen.getByTestId("contact")).toMatchSnapshot();
  });
});

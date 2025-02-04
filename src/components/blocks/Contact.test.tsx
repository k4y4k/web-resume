import * as React from "react";
import { Contact, PureContact } from "./Contact";
import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

describe("<Contact />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      num: {
        childDataJson: {
          basics: {
            phone: "5918298681",
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
                username: "john",
              },
            ],
          },
        },
      },
    }),
  );

  test("handles no data", () => {
    render(
      <PureContact
        email=""
        website=""
        twitter=""
        github=""
        linkedinUrl=""
        linkedinUser=""
        city=""
        countryCode=""
        region=""
      />,
    );

    const contact = screen.getByTestId("contact");

    // everything returns null in the absurd case that absolutely nothing is passed in
    expect(contact.children).toHaveLength(0);
  });

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
      />,
    );

    const address = screen.getByTestId("contactAddress");
    expect(address).toHaveTextContent(/example city/i);
    expect(address).toHaveTextContent(/us/i);
    expect(address).toHaveTextContent(/California/i);
  });

  test("renders OK", () => {
    render(<Contact />);

    expect(screen.getByTestId("contact")).toMatchSnapshot();
  });

  test("renders OK (compact mode)", () => {
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
        compact={true}
      />,
    );

    expect(screen.getByTestId("contact")).toMatchSnapshot();
  });
});

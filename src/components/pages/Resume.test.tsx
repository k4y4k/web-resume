import * as React from "react";
import { render, screen } from "@testing-library/react";
import Resume from "./Resume";
import { useStaticQuery } from "gatsby";

describe("Resume", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      data: {
        placeholderImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              sizes: `100 200 300`,
              src: `pretend-i-am-a-base64-encoded-image`,
              srcSet: `asdfasdf`,
            },
          },
        },
      },
    }),
  );

  test("Renders OK", () => {
    render(<Resume />);

    expect(screen).toMatchSnapshot();
  });
});

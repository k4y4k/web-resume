import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import type { DataOpenSourceItem } from "../../types/ResumeData";
import OpenSource, { PureOpenSource } from "./OpenSource";

describe("<PureOpenSource />", () => {
  const fixture: DataOpenSourceItem[] = [
    {
      forge: "github",
      description: "- did stuff\n- next dot point",
      userRepo: "username/repository",
    },
  ];

  beforeAll(() => {
    return (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          openSource: [...fixture],
        },
      },
    });
  });

  test("bails out on no data", () => {
    render(<PureOpenSource openSource={[]} />);

    // still want the title
    expect(screen.getByTestId("open-source")).toBeInTheDocument();

    // if there's no data, we shouldn't see <ItemContainer /> render
    expect(
      screen.queryByTestId("sectionItemContainer"),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("open-source")).toMatchSnapshot();
  });

  test("renders array of >=1 OpenSource items", () => {
    const { container } = render(<PureOpenSource openSource={[...fixture]} />);

    const openSource = screen.getByTestId("open-source");

    expect(openSource).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders OK", () => {
    render(<OpenSource />);

    expect(screen.getByTestId("open-source")).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import type { DataBasics } from "../../types/ResumeData";
import Header from "./Header";

describe("<Header>", () => {
  beforeAll(() => {
    return (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          basics: {
            name: "First Name",
            label: "Job Title",
          } as Partial<DataBasics>,
        },
      },
    });
  });

  test("smoke test", () => {
    render(<Header />);

    const resume = screen.queryByTestId("header");
    expect(resume).not.toBeFalsy();

    // [TODO] seeded random so the tests are consistent
    // expect(resume).toMatchSnapshot()
  });
});

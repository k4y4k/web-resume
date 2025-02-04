import * as React from "react";
import { WorkExperience, PureWorkExperience } from "./WorkExperience";
import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

describe("<Experience />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          work: [
            {
              startDate: "2013-01-01",
              endDate: "2014-01-01",
              company: "Company",
              position: "President",
              summary: "Description...",
            },
          ],
          volunteer: [
            {
              startDate: "2012-01-01",
              endDate: "2013-01-01",
              organization: "Organization",
              position: "Volunteer",
              summary: "Description...",
            },
            {
              startDate: "2016-03-07",
              endDate: "2017-02-06",
              organization: "Organization",
              position: "Volunteer",
              summary: "Description...",
            },
          ],
        },
      },
    }),
  );

  test("bails out on no data", () => {
    render(<PureWorkExperience history={[]} />);

    // still want the title
    expect(screen.getByTestId("experience")).toBeInTheDocument();

    expect(
      screen.queryByTestId("sectionItemContainer"),
    ).not.toBeInTheDocument();
  });

  test("renders array of >=1 experience items", () => {
    const data = [
      {
        company: "Company",
        position: "President",
        website: "http://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description...",
        highlights: ["Started the company"],
        link: "",
      },
    ];

    render(<PureWorkExperience history={data} />);

    const experienceList = screen.getAllByTestId("experience");

    expect(experienceList.length).toBe(1);
  });

  test("renders OK", () => {
    render(<WorkExperience />);

    expect(screen.getByTestId("experience")).toMatchSnapshot();
  });
});

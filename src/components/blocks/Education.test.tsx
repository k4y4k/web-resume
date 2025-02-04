import * as React from "react";
import { Education, PureEducation } from "./Education";
import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

describe("<PureEducation />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          education: [
            {
              institution: "University",
              area: "Software Development",
              studyType: "Bachelor",
              startDate: "2011-01-01",
              endDate: "2013-01-01",
              courses: ["DB1101 - Basic SQL"],
            },
          ],
        },
      },
    })
  );

  test("bails out on no data", () => {
    render(<PureEducation history={[]} />);

    // still want the title
    expect(screen.getByTestId("education")).toBeInTheDocument();

    // if there's no data, we shouldn't see <ItemContainer /> render
    expect(
      screen.queryByTestId("sectionItemContainer")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("education")).toMatchSnapshot();
  });

  test("renders array of >=1 PureEducation items", () => {
    const data = [
      {
        institution: "University",
        area: "Software Development",
        studyType: "Bachelor",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        gpa: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
    ];
    const { container } = render(<PureEducation history={data} />);

    const education = screen.getByTestId("education");

    expect(education).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("handles times where you don't have a 'type' (e.g. online courses)", () => {
    const data = [
      {
        institution: "University",
        area: "Software Development",
        studyType: "",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        gpa: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
    ];

    const { container } = render(<PureEducation history={data} />);

    const education = screen.getByTestId("education");

    expect(education).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("no course details?", () => {
    const data = [
      {
        institution: "University",
        area: "Software Development",
        studyType: "",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        courses: [
          "Awesome Class",
          "Boring Unit",
          "Interesting Extracurricular",
        ],
      },
    ];

    const { container } = render(<PureEducation history={data} />);

    const education = screen.getByTestId("education");

    expect(education).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders OK", () => {
    render(<Education />);

    expect(screen.getByTestId("education")).toMatchSnapshot();
  });
});

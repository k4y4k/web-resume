import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Skills, { PureSkills, type SkillsItem } from "./Skills";

describe("<Skills />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          skills: [
            {
              name: "Web Development",
              keywords: ["HTML", "CSS", "Javascript"],
            },
          ] as SkillsItem[],
        },
      },
    }),
  );

  test("bails out on no data", () => {
    render(<PureSkills skills={[]} />);

    // still want the title
    expect(screen.getByTestId("skills")).toBeInTheDocument();

    expect(
      screen.queryByTestId("sectionItemContainer"),
    ).not.toBeInTheDocument();
  });

  test("renders array of >=1 skills items", () => {
    const data = [
      {
        name: "Web Development",
        keywords: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "Diplomacy",
        keywords: [
          "Saying nice things",
          "Picking the right moments",
          "Keeping Lady Luck in a good mood",
        ],
      },
    ] as SkillsItem[];

    render(<PureSkills skills={data} />);

    const skillsList = screen.getAllByTestId("skills");

    expect(skillsList.length).toBe(1);
  });

  test("Deduplicates skills", () => {
    const data = [
      {
        name: "Web Development",
        keywords: ["HTML", "CSS", "HTML", "JavaScript"],
      },
    ] as SkillsItem[];

    render(<PureSkills skills={data} />);

    const renderedHtmls = screen.getAllByText("HTML");

    expect(renderedHtmls.length).toBe(1);
    expect(screen.getByTestId("skills")).toMatchSnapshot();
  });

  test("Skills renders OK", () => {
    render(<Skills />);

    expect(screen.queryByTestId("skills")).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import CoverLetter from "../components/pages/CoverLetter";
import Resume from "../components/pages/Resume";
import {
  createFakeCoverLetter,
  createFakeData,
} from "../helpers/createFakeData";
import type { ResumeData } from "../types/ResumeData";

describe("index route", () => {
  beforeAll(() => {
    const rFixture: ResumeData = JSON.parse(createFakeData());

    // The frontmatter begins with a --- (start of file), and ends with
    // another --- a couple lines down, and we want everything after the
    // end of the frontmatter
    // In this case we know that there are no <hr>s (also `---`) in the data,
    // but this would have to be handled otherwise
    const [frontmatter, content] = createFakeCoverLetter()
      .split("---")
      // The first element is empty (nothing precedes the `---` at the start
      // of the file), so we can drop that
      .slice(1);

    const recruiterName = frontmatter
      .split("\n")
      .filter((line) => line.includes("recruiter"))[0]
      .split(":")[1];

    return (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          ...rFixture,
        },
      },

      /** Icky manual re-de-construction of MD+YAML frontmatter
       * @see <CoverLetterContents> */
      letterContents: {
        childMarkdownRemark: {
          excerpt: content,

          frontmatter: {
            recruiter: recruiterName,
          },
        },
      },

      imageStrip: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/jpeg;base64,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",
            },
            images: {
              fallback: {
                src: "/static/55019b471591030c02c094b138609888/93ac1/unsplash.webp",
                srcSet:
                  "/static/55019b471591030c02c094b138609888/571ed/unsplash.webp 50w,\n/static/55019b471591030c02c094b138609888/a793a/unsplash.webp 100w,\n/static/55019b471591030c02c094b138609888/93ac1/unsplash.webp 200w,\n/static/55019b471591030c02c094b138609888/09776/unsplash.webp 400w",
                sizes: "(min-width: 200px) 200px, 100vw",
              },
              sources: [],
            },
            width: 200,
            height: 1333,
          },
        },
      },
    });
  });

  test("smoke test", () => {
    render(
      <>
        <Resume />
        <CoverLetter />
      </>,
    );

    const resume = screen.queryByTestId("resume-root");
    expect(resume).not.toBeFalsy();

    // [TODO] seeded random so the tests are consistent
    // expect(resume).toMatchSnapshot()
  });
});
